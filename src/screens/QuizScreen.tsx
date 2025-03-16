import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { QuizStackScreenProps } from "../navigation/types";
import QuizRenderer from "../components/quiz/QuizRenderer";
import { Quiz } from "../types/quiz";
import { loadCountryQuizzes, getRandomQuizzes } from "../utils/quizLoader";
import { useTranslation } from "react-i18next";

type Props = QuizStackScreenProps<"QuizPlay">;

const QuizScreen: React.FC<Props> = ({ route, navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { countryId = "KR", quizCount = 5 } = route.params || {};

  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // 퀴즈 데이터 로드
  useEffect(() => {
    const loadQuizzes = async () => {
      try {
        const countryQuizzes = loadCountryQuizzes(countryId);
        // 무작위로 퀴즈 선택
        const selectedQuizzes = getRandomQuizzes(countryId, quizCount);
        setQuizzes(selectedQuizzes);
      } catch (error) {
        console.error("퀴즈 로드 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    loadQuizzes();
  }, [countryId, quizCount]);

  // 답변 처리
  const handleAnswer = (isCorrect: boolean) => {
    const newAnswers = [...answers];
    newAnswers[currentQuizIndex] = isCorrect;
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    // 다음 문제 또는 결과 화면으로 자동 이동 (실제 UX에서는 사용자 컨트롤이 더 좋을 수 있음)
    setTimeout(() => {
      if (currentQuizIndex < quizzes.length - 1) {
        setCurrentQuizIndex(currentQuizIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1500); // 1.5초 후 다음 문제로 이동
  };

  // 다음 문제로 이동
  const goToNextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  // 이전 문제로 이동
  const goToPrevQuiz = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1);
    }
  };

  // 결과 화면으로 이동
  const navigateToResults = () => {
    navigation.navigate("QuizResult", {
      score,
      total: quizzes.length,
      quizId: route.params.quizId,
    });
  };

  // 결과 화면 렌더링
  const renderResults = () => (
    <View style={styles.resultsContainer}>
      <Text style={[styles.resultTitle, { color: theme.colors.text }]}>{t("quiz.completed")}</Text>

      <View style={[styles.scoreCard, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.scoreText, { color: theme.colors.text }]}>{t("quiz.yourScore")}:</Text>
        <Text style={[styles.score, { color: theme.colors.primary }]}>
          {score} / {quizzes.length}
        </Text>
        <Text style={[styles.percentage, { color: theme.colors.text }]}>
          ({Math.round((score / quizzes.length) * 100)}%)
        </Text>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={navigateToResults}>
        <Text style={[styles.buttonText, { color: theme.colors.background }]}>{t("quiz.viewDetails")}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.outlineButton, { borderColor: theme.colors.border }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.outlineButtonText, { color: theme.colors.text }]}>{t("common.backToQuizzes")}</Text>
      </TouchableOpacity>
    </View>
  );

  // 로딩 화면
  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={[styles.loadingText, { color: theme.colors.text }]}>{t("common.loading")}</Text>
      </SafeAreaView>
    );
  }

  // 퀴즈가 없는 경우
  if (quizzes.length === 0) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.errorText, { color: theme.colors.text }]}>{t("quiz.noQuizzesAvailable")}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.buttonText, { color: theme.colors.background }]}>{t("common.backToQuizzes")}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // 퀴즈 완료 후 결과 화면
  if (quizCompleted) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{t("quiz.results")}</Text>
          <View style={{ width: 24 }} />
        </View>
        {renderResults()}
      </SafeAreaView>
    );
  }

  // 현재 퀴즈
  const currentQuiz = quizzes[currentQuizIndex];
  const hasAnswered = answers[currentQuizIndex] !== undefined;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{route.params.quizName}</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressBar,
            {
              backgroundColor: theme.colors.border,
              width: "100%",
            },
          ]}
        >
          <View
            style={[
              styles.progress,
              {
                backgroundColor: theme.colors.primary,
                width: `${((currentQuizIndex + 1) / quizzes.length) * 100}%`,
              },
            ]}
          />
        </View>
        <Text style={[styles.progressText, { color: theme.colors.text }]}>
          {currentQuizIndex + 1} / {quizzes.length}
        </Text>
      </View>

      <View style={styles.quizContainer}>
        <QuizRenderer quiz={currentQuiz} onAnswer={handleAnswer} />
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, { opacity: currentQuizIndex === 0 ? 0.5 : 1 }]}
          onPress={goToPrevQuiz}
          disabled={currentQuizIndex === 0}
        >
          <Ionicons name="chevron-back" size={24} color={theme.colors.text} />
          <Text style={[styles.navButtonText, { color: theme.colors.text }]}>{t("quiz.previous")}</Text>
        </TouchableOpacity>

        {hasAnswered && (
          <TouchableOpacity
            style={[styles.navButton, { opacity: currentQuizIndex === quizzes.length - 1 ? 0.5 : 1 }]}
            onPress={goToNextQuiz}
            disabled={currentQuizIndex === quizzes.length - 1}
          >
            <Text style={[styles.navButtonText, { color: theme.colors.text }]}>{t("quiz.next")}</Text>
            <Ionicons name="chevron-forward" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  progressContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
  },
  progressText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "right",
  },
  quizContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  navButtonText: {
    fontSize: 16,
    marginHorizontal: 4,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  scoreCard: {
    width: "100%",
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 32,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 8,
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 8,
  },
  percentage: {
    fontSize: 18,
    opacity: 0.7,
  },
  button: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  outlineButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
  },
  outlineButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 24,
  },
});

export default QuizScreen;
