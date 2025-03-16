import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";
import { useLocale } from "../contexts/LocaleContext";
import { Button } from "../components";
import { QuizStackScreenProps } from "../navigation/types";
import { loadCountryQuizzes } from "../utils/quizLoader";
import { Quiz, QuizQuestion } from "../types/quiz";

type Props = QuizStackScreenProps<"QuizPlay">;

const QuizPlayScreen: React.FC<Props> = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const { quizId, quizName } = route.params;

  const [loading, setLoading] = useState(true);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        // 예: "country-kr" -> "KR"
        const countryId = quizId.split("-")[1].toUpperCase();
        const quizzes = loadCountryQuizzes(countryId);

        // 임시로 하드코딩된 퀴즈 질문들 (실제로는 API나 파일에서 로드)
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
          },
          {
            id: "2",
            question: t("countryQuiz.koreaQuestion2"),
            options: [
              t("countryQuiz.koreaOption2A"),
              t("countryQuiz.koreaOption2B"),
              t("countryQuiz.koreaOption2C"),
              t("countryQuiz.koreaOption2D"),
            ],
            correctAnswer: 2,
            explanation: t("countryQuiz.koreaExplanation2"),
          },
          {
            id: "3",
            question: t("countryQuiz.koreaQuestion3"),
            options: [
              t("countryQuiz.koreaOption3A"),
              t("countryQuiz.koreaOption3B"),
              t("countryQuiz.koreaOption3C"),
              t("countryQuiz.koreaOption3D"),
            ],
            correctAnswer: 1,
            explanation: t("countryQuiz.koreaExplanation3"),
          },
        ];

        setQuizQuestions(questions);
      } catch (error) {
        console.error("퀴즈 로드 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    loadQuiz();
  }, [quizId, t]);

  const handleSelectAnswer = (index: number) => {
    if (showAnswer) return;

    setSelectedAnswer(index.toString());
    setShowAnswer(true);

    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);

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

  if (loading) {
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

        <View style={styles.optionsContainer}>
          {currentQuizQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                {
                  backgroundColor: theme.colors.backgroundSecondary,
                  borderColor:
                    showAnswer && index === currentQuizQuestion.correctAnswer
                      ? theme.colors.success
                      : showAnswer && selectedAnswer === index.toString()
                      ? theme.colors.error
                      : selectedAnswer === index.toString()
                      ? theme.colors.brandMain
                      : theme.colors.backgroundSecondary,
                  borderWidth:
                    selectedAnswer === index.toString() || (showAnswer && index === currentQuizQuestion.correctAnswer)
                      ? 2
                      : 1,
                },
              ]}
              onPress={() => handleSelectAnswer(index)}
              disabled={showAnswer}
            >
              <View style={styles.optionContent}>
                <View
                  style={[
                    styles.optionIndex,
                    {
                      backgroundColor:
                        selectedAnswer === index.toString() ? theme.colors.brandMain : theme.colors.backgroundSecondary,
                      borderColor: theme.colors.textSecondary,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.optionIndexText,
                      {
                        color: selectedAnswer === index.toString() ? theme.colors.background : theme.colors.text,
                      },
                    ]}
                  >
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>
                <Text style={[styles.optionText, { color: theme.colors.text }]}>{option}</Text>
              </View>

              {showAnswer && index === currentQuizQuestion.correctAnswer && (
                <Ionicons name="checkmark-circle" size={24} color={theme.colors.success} style={styles.resultIcon} />
              )}
              {showAnswer && selectedAnswer === index.toString() && index !== currentQuizQuestion.correctAnswer && (
                <Ionicons name="close-circle" size={24} color={theme.colors.error} style={styles.resultIcon} />
              )}
            </TouchableOpacity>
          ))}
        </View>

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
});

export default QuizPlayScreen;
