import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";
import { useLocale } from "../contexts/LocaleContext";
import { Button } from "../components";
import { QuizStackScreenProps } from "../navigation/types";
import { loadCountryQuizzes, loadQuizTranslation } from "../utils/quizLoader";
import { Quiz, QuizQuestion, QuizType, MultipleChoiceQuiz, TrueFalseQuiz, ImageQuiz } from "../types/quiz";

// 배열을 랜덤하게 섞는 함수 추가
const shuffleArray = <T extends unknown>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

type Props = QuizStackScreenProps<"QuizPlay">;

const QuizPlayScreen: React.FC<Props> = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const { quizId, quizName } = route.params;

  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        // 예: "country-kr" -> "KR"
        const countryId = quizId.split("-")[1].toUpperCase();
        const quizzes = loadCountryQuizzes(countryId);

        // 테스트용: 이미지 퀴즈만 필터링
        const imageQuizzes = quizzes.filter((quiz) => quiz.type === QuizType.IMAGE_QUIZ);

        // 필터링된 이미지 퀴즈가 있는지 확인
        if (imageQuizzes.length > 0) {
          // 이미지 퀴즈를 섞어서 5개 선택 (또는 가능한 만큼)
          const shuffledQuizzes = shuffleArray([...imageQuizzes]);
          const selectedQuizzes = shuffledQuizzes.slice(0, Math.min(5, shuffledQuizzes.length));

          // 퀴즈 문항을 QuizQuestion 형식으로 변환
          const questions: QuizQuestion[] = selectedQuizzes.map((quiz) => {
            // 다국어 리소스에서 번역된 문제를 가져옵니다
            const translation = loadQuizTranslation(quiz);

            // 이미지 퀴즈 처리
            const imgQuiz = quiz as ImageQuiz;
            const originalCorrectIndex = imgQuiz.correctOptionIndex;
            let correctAnswer = originalCorrectIndex;
            let options: string[] = translation.options || [];

            // 이미지 퀴즈의 옵션도 랜덤하게 섞기
            if (options.length > 0) {
              const originalOptions = [...options];
              const indexMapping = Array.from({ length: options.length }, (_, i) => i);
              const shuffledIndices = shuffleArray(indexMapping);

              options = shuffledIndices.map((i) => originalOptions[i]);
              correctAnswer = shuffledIndices.findIndex((i) => i === originalCorrectIndex);
            }

            // 퀴즈 타입 정보 추가
            return {
              id: quiz.id,
              question: translation.question,
              options: options,
              correctAnswer: correctAnswer,
              explanation: translation.explanation,
              quizType: quiz.type, // 퀴즈 타입 정보 추가
              image: imgQuiz.image,
            };
          });

          setQuizQuestions(questions);
        } else {
          // 이미지 퀴즈가 없는 경우 임시 데이터 사용 (이전 코드)
          const questions: QuizQuestion[] = [
            {
              id: "1",
              question: t("countryQuiz.koreaQuestion1"),
              options: [
                t("countryQuiz.koreaOption1A"),
                t("countryQuiz.koreaOption1B"),
                t("countryQuiz.koreaOption1C"),
                t("countryQuiz.koreaOption1D"),
              ],
              correctAnswer: 0,
              explanation: t("countryQuiz.koreaExplanation1"),
              quizType: QuizType.IMAGE_QUIZ,
              image: "https://images.unsplash.com/photo-1548256459-a5d5267d6468?q=80&w=600&h=400&auto=format&fit=crop",
            },
            // 다른 임시 문항들...
          ];
          setQuizQuestions(questions);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error loading quiz:", err);
        setError("퀴즈를 불러오는 도중 오류가 발생했습니다.");
        setIsLoading(false);
      }
    };

    loadQuiz();
  }, [quizId, t]);

  useEffect(() => {
    if (quizQuestions.length > 0) {
      setSelectedAnswer(null);
      setShowAnswer(false);
      setIsCorrect(false);
      setImageLoading(true);
      setImageError(false);
      setIsLoading(false);
    }
  }, [quizQuestions]);

  // 다음 문제로 넘어갈 때 상태 초기화
  useEffect(() => {
    // 문제가 변경될 때마다 상태 초기화
    setSelectedAnswer(null);
    setShowAnswer(false);
    setIsCorrect(false);
    setImageLoading(true);
    setImageError(false);

    // 스크롤 위치 초기화
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
    }
  }, [currentQuestion]);

  // 이미지 로딩 확인용 useEffect 추가
  useEffect(() => {
    // 이미지가 있고 로딩 중인 경우에만 타이머 설정
    const currentQuizQuestion = quizQuestions[currentQuestion];
    if (currentQuizQuestion?.image && imageLoading) {
      // 5초 후에도 이미지가 로드되지 않으면 로딩 상태 종료
      const timer = setTimeout(() => {
        setImageLoading(false);
        console.log("이미지 로딩 타임아웃");
      }, 5000);

      // 컴포넌트 언마운트 또는 의존성 변경 시 타이머 정리
      return () => clearTimeout(timer);
    }
  }, [quizQuestions, currentQuestion, imageLoading]);

  const handleSelectAnswer = (index: number) => {
    if (showAnswer) return;

    setSelectedAnswer(index.toString());
    setShowAnswer(true);

    const currentQuiz = quizQuestions[currentQuestion];
    let isCorrect = false;

    // 퀴즈 유형에 따라 정답 체크 방식 다르게 처리
    if (currentQuiz.quizType === QuizType.TRUE_FALSE) {
      // OX 퀴즈의 경우 correctAnswer는 boolean이므로 변환 필요
      const correctBool = Boolean(currentQuiz.correctAnswer);
      isCorrect = (index === 0 && correctBool === true) || (index === 1 && correctBool === false);
    } else if (currentQuiz.quizType === QuizType.MULTIPLE_CHOICE || currentQuiz.quizType === QuizType.IMAGE_QUIZ) {
      // 다른 퀴즈 유형은 인덱스로 비교하되, 정답 값을 정확히 확인
      isCorrect = index === Number(currentQuiz.correctAnswer);
    }

    // 정답 여부 상태 업데이트
    setIsCorrect(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
      setIsCorrect(false);
      setImageLoading(true);
      setImageError(false);

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    } else {
      navigation.replace("QuizResult", {
        score,
        total: quizQuestions.length,
        quizId,
      });
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.brandMain} />
          <Text style={[styles.loadingText, { color: theme.colors.text }]}>{t("common.loading")}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (quizQuestions.length === 0) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{quizName}</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.emptyContainer}>
          <Ionicons name="alert-circle-outline" size={64} color={theme.colors.textSecondary} />
          <Text style={[styles.emptyText, { color: theme.colors.text }]}>{t("quiz.noQuestions")}</Text>
          <Button variant="primary" onPress={() => navigation.goBack()}>
            {t("common.goBack")}
          </Button>
        </View>
      </SafeAreaView>
    );
  }

  const currentQuizQuestion = quizQuestions[currentQuestion];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{quizName}</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { backgroundColor: theme.colors.backgroundSecondary }]}>
          <View
            style={[
              styles.progressFill,
              {
                backgroundColor: theme.colors.brandMain,
                width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
              },
            ]}
          />
        </View>
        <Text style={[styles.progressText, { color: theme.colors.textSecondary }]}>
          {currentQuestion + 1} / {quizQuestions.length}
        </Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.questionContainer}>
          <Text style={[styles.questionText, { color: theme.colors.text }]}>{currentQuizQuestion.question}</Text>
        </View>

        {currentQuizQuestion.quizType === QuizType.TRUE_FALSE ? (
          // OX 문제 렌더링
          <View style={styles.oxOptionsContainer}>
            {currentQuizQuestion.options.map((option, index) => {
              // OX 버튼 선택 여부 확인
              const isSelected = selectedAnswer === index.toString();
              const isCorrectAnswer =
                showAnswer &&
                ((index === 0 && currentQuizQuestion.correctAnswer === true) ||
                  (index === 1 && currentQuizQuestion.correctAnswer === false));
              const isWrongAnswer = showAnswer && isSelected && !isCorrectAnswer;

              // 배경색 및 테두리 색상 결정
              let backgroundColor = theme.colors.backgroundSecondary;
              let borderColor = theme.colors.backgroundSecondary;
              let textColor = "#000000";

              if (isSelected) {
                backgroundColor = theme.colors.brandMain + "20";
                borderColor = theme.colors.brandMain;
                textColor = "#1E88E5";
              }

              if (isCorrectAnswer) {
                backgroundColor = theme.colors.success + "20";
                borderColor = theme.colors.success;
                textColor = "#4CAF50";
              }

              if (isWrongAnswer) {
                backgroundColor = theme.colors.error + "20";
                borderColor = theme.colors.error;
                textColor = "#F44336";
              }

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.oxOptionButton,
                    {
                      backgroundColor,
                      borderColor,
                    },
                  ]}
                  onPress={() => handleSelectAnswer(index)}
                  disabled={showAnswer}
                >
                  <Text style={[styles.oxOptionText, { color: textColor }]}>{option}</Text>

                  {isCorrectAnswer && (
                    <View style={styles.resultIconContainer}>
                      <Ionicons name="checkmark-circle" size={24} color={theme.colors.success} />
                    </View>
                  )}
                  {isWrongAnswer && (
                    <View style={styles.resultIconContainer}>
                      <Ionicons name="close-circle" size={24} color={theme.colors.error} />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        ) : currentQuizQuestion.quizType === QuizType.IMAGE_QUIZ ? (
          // 이미지 퀴즈 렌더링
          <View style={styles.imageQuizContainer}>
            {currentQuizQuestion.image ? (
              <>
                <View style={styles.imageWrapper}>
                  <Image
                    source={{ uri: currentQuizQuestion.image }}
                    style={styles.imageQuizImage}
                    resizeMode="contain"
                    onLoadStart={() => setImageLoading(true)}
                    onLoad={() => setImageLoading(false)}
                    onLoadEnd={() => setImageLoading(false)}
                    onError={(e) => {
                      console.error("이미지 로딩 오류:", e.nativeEvent.error);
                      setImageLoading(false);
                      setImageError(true);
                    }}
                  />
                  {imageLoading && (
                    <View style={styles.imageLoaderContainer}>
                      <ActivityIndicator size="large" color={theme.colors.brandMain} />
                      <Text style={[styles.imageLoaderText, { color: theme.colors.textSecondary }]}>
                        {t("quiz.imageLoading")}
                      </Text>
                    </View>
                  )}
                </View>
                {!imageLoading && !imageError && (
                  <Text style={[styles.imagePromptText, { color: theme.colors.text }]}>
                    {t("quiz.selectBasedOnImage")}
                  </Text>
                )}
              </>
            ) : (
              <View style={styles.imageErrorContainer}>
                <Ionicons name="image-outline" size={60} color={theme.colors.textSecondary} />
                <Text style={[styles.imageErrorText, { color: theme.colors.textSecondary }]}>
                  {t("quiz.imageError")}
                </Text>
              </View>
            )}
            <View style={styles.optionsContainer}>
              {currentQuizQuestion.options.map((option, index) => {
                // 선택 상태, 정답, 오답 확인
                const isSelected = selectedAnswer === index.toString();
                const isCorrectAnswer = showAnswer && currentQuizQuestion.correctAnswer === index;
                const isWrongAnswer = showAnswer && isSelected && !isCorrectAnswer;

                // 버튼 스타일 계산
                let buttonStyle = [styles.optionButton, { backgroundColor: theme.colors.backgroundSecondary }];

                if (isSelected) buttonStyle.push(styles.selectedOptionButton);
                if (isCorrectAnswer) buttonStyle.push(styles.correctOptionButton);
                if (isWrongAnswer) buttonStyle.push(styles.wrongOptionButton);

                // 텍스트 스타일 계산
                let textStyle = [styles.optionText, { color: "#000000" }];

                if (isSelected && !showAnswer) textStyle.push({ color: "#1E88E5" });
                if (isCorrectAnswer) textStyle.push({ color: "#4CAF50" });
                if (isWrongAnswer) textStyle.push({ color: "#F44336" });

                return (
                  <TouchableOpacity
                    key={index}
                    style={buttonStyle}
                    onPress={() => handleSelectAnswer(index)}
                    disabled={showAnswer}
                  >
                    <View style={styles.optionContent}>
                      <View
                        style={[
                          styles.optionIndex,
                          {
                            backgroundColor: isSelected ? theme.colors.brandMain : theme.colors.backgroundSecondary,
                            borderColor: theme.colors.textSecondary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.optionIndexText,
                            { color: isSelected ? theme.colors.background : theme.colors.text },
                          ]}
                        >
                          {String.fromCharCode(65 + index)}
                        </Text>
                      </View>
                      <Text style={textStyle}>{option}</Text>
                    </View>

                    {isCorrectAnswer && (
                      <Ionicons
                        name="checkmark-circle"
                        size={24}
                        color={theme.colors.success}
                        style={styles.resultIcon}
                      />
                    )}
                    {isWrongAnswer && (
                      <Ionicons name="close-circle" size={24} color={theme.colors.error} style={styles.resultIcon} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ) : (
          // 기존 객관식 문제 렌더링
          <View style={styles.optionsContainer}>
            {currentQuizQuestion.options.map((option, index) => {
              // 선택 상태, 정답, 오답 확인
              const isSelected = selectedAnswer === index.toString();
              const isCorrectAnswer = showAnswer && currentQuizQuestion.correctAnswer === index;
              const isWrongAnswer = showAnswer && isSelected && !isCorrectAnswer;

              // 버튼 스타일 계산
              let buttonStyle = [styles.optionButton, { backgroundColor: theme.colors.backgroundSecondary }];

              if (isSelected) buttonStyle.push(styles.selectedOptionButton);
              if (isCorrectAnswer) buttonStyle.push(styles.correctOptionButton);
              if (isWrongAnswer) buttonStyle.push(styles.wrongOptionButton);

              // 텍스트 스타일 계산
              let textStyle = [styles.optionText, { color: "#000000" }];

              if (isSelected && !showAnswer) textStyle.push({ color: "#1E88E5" });
              if (isCorrectAnswer) textStyle.push({ color: "#4CAF50" });
              if (isWrongAnswer) textStyle.push({ color: "#F44336" });

              return (
                <TouchableOpacity
                  key={index}
                  style={buttonStyle}
                  onPress={() => handleSelectAnswer(index)}
                  disabled={showAnswer}
                >
                  <View style={styles.optionContent}>
                    <View
                      style={[
                        styles.optionIndex,
                        {
                          backgroundColor: isSelected ? theme.colors.brandMain : theme.colors.backgroundSecondary,
                          borderColor: theme.colors.textSecondary,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.optionIndexText,
                          { color: isSelected ? theme.colors.background : theme.colors.text },
                        ]}
                      >
                        {String.fromCharCode(65 + index)}
                      </Text>
                    </View>
                    <Text style={textStyle}>{option}</Text>
                  </View>

                  {isCorrectAnswer && (
                    <Ionicons
                      name="checkmark-circle"
                      size={24}
                      color={theme.colors.success}
                      style={styles.resultIcon}
                    />
                  )}
                  {isWrongAnswer && (
                    <Ionicons name="close-circle" size={24} color={theme.colors.error} style={styles.resultIcon} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {showAnswer && (
          <View style={[styles.explanationContainer, { backgroundColor: theme.colors.backgroundSecondary }]}>
            <Text style={[styles.explanationTitle, { color: theme.colors.text }]}>{t("quiz.explanation")}</Text>
            <Text style={[styles.explanationText, { color: theme.colors.textSecondary }]}>
              {currentQuizQuestion.explanation}
            </Text>
          </View>
        )}

        {showAnswer && (
          <View style={styles.nextButtonContainer}>
            <Button variant="primary" onPress={handleNextQuestion}>
              {currentQuestion < quizQuestions.length - 1 ? t("quiz.nextQuestion") : t("quiz.seeResults")}
            </Button>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  progressContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginBottom: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    textAlign: "right",
  },
  questionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
  },
  optionsContainer: {
    paddingHorizontal: 16,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingVertical: 4,
    minHeight: 40,
  },
  optionIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  optionIndexText: {
    fontSize: 14,
    fontWeight: "600",
  },
  optionText: {
    fontSize: 16,
    flex: 1,
    fontWeight: "500",
    lineHeight: 22,
  },
  resultIcon: {
    marginLeft: 8,
  },
  explanationContainer: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 14,
    lineHeight: 20,
  },
  nextButtonContainer: {
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  oxOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 24,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  oxOptionButton: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  oxOptionText: {
    fontSize: 36,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  resultIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    zIndex: 1,
  },
  imageQuizContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  imageWrapper: {
    width: "100%",
    height: 200,
    position: "relative",
    marginBottom: 15,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageQuizImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imageLoaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  imageLoaderText: {
    marginTop: 10,
    fontSize: 14,
  },
  imagePromptText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
    textAlign: "center",
  },
  imageErrorContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 8,
    marginBottom: 15,
  },
  imageErrorText: {
    marginTop: 10,
    fontSize: 14,
  },
  selectedOptionButton: {
    backgroundColor: "rgba(30, 136, 229, 0.2)", // 브랜드 컬러 20% 투명도
  },
  correctOptionButton: {
    backgroundColor: "rgba(76, 175, 80, 0.2)", // 성공 컬러 20% 투명도
  },
  wrongOptionButton: {
    backgroundColor: "rgba(244, 67, 54, 0.2)", // 에러 컬러 20% 투명도
  },
  selectedOptionText: {
    color: "#1E88E5", // 브랜드 컬러
  },
  correctOptionText: {
    color: "#4CAF50", // 성공 컬러
  },
  wrongOptionText: {
    color: "#F44336", // 에러 컬러
  },
});

export default QuizPlayScreen;
