import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Circle } from "react-native-svg";
import { useTheme } from "../contexts/ThemeContext";
import { useLocale } from "../contexts/LocaleContext";
import { Button } from "../components";
import { QuizStackScreenProps } from "../navigation/types";
import { CommonActions } from "@react-navigation/native";

type Props = QuizStackScreenProps<"QuizResult">;

const QuizResultScreen: React.FC<Props> = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const { score, total, quizId } = route.params;

  // 점수 비율 계산
  const percentage = Math.round((score / total) * 100);

  // 결과 메시지 (점수 비율에 따라 다른 메시지)
  const getResultMessage = () => {
    if (percentage >= 90) return t("quiz.result.excellent");
    if (percentage >= 70) return t("quiz.result.good");
    return t("quiz.result.needsPractice");
  };

  // 다시 퀴즈 풀기
  const retryQuiz = () => {
    // quizId에서 국가 정보 추출 (예: "country-kr" -> "KR")
    const countryId = quizId.split("-")[1].toUpperCase();

    // 같은 퀴즈로 다시 이동
    navigation.replace("QuizPlay", {
      quizId,
      quizName: t(`countries.${countryId}`),
    });
  };

  // 홈으로 이동
  const goHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Home" }],
      })
    );
  };

  // 다른 퀴즈 선택 화면으로 이동
  const chooseAnotherQuiz = () => {
    navigation.navigate("QuizMain");
  };

  // 원형 프로그레스 바 계산
  const circumference = 2 * Math.PI * 72; // 반지름 72의 원 둘레
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={chooseAnotherQuiz} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{t("quiz.result.title")}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.resultContainer}>
          <View style={[styles.scoreCircleContainer]}>
            <View style={styles.scoreCircleBackground}>
              <View style={styles.scoreCircleInner}>
                <Text style={[styles.scoreText, { color: theme.colors.text }]}>
                  {score}/{total}
                </Text>
                <Text style={[styles.percentageText, { color: theme.colors.brandMain }]}>{percentage}%</Text>
              </View>
            </View>
            <Svg width="150" height="150" style={styles.progressRing}>
              <Circle cx="75" cy="75" r="72" fill="none" stroke={theme.colors.backgroundSecondary} strokeWidth="6" />
              <Circle
                cx="75"
                cy="75"
                r="72"
                fill="none"
                stroke={theme.colors.brandMain}
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                origin="75, 75"
                rotation="-90"
              />
            </Svg>
          </View>

          <Text style={[styles.resultMessage, { color: theme.colors.text }]}>{getResultMessage()}</Text>

          <View style={styles.statsContainer}>
            <View style={[styles.statItem, { backgroundColor: theme.colors.backgroundSecondary }]}>
              <Ionicons name="checkmark-circle" size={24} color={theme.colors.success} style={styles.statIcon} />
              <Text style={[styles.statCount, { color: theme.colors.success }]}>{score}</Text>
              <Text style={[styles.statLabel, { color: theme.colors.text }]}>{t("quiz.result.correct")}</Text>
            </View>

            <View style={[styles.statItem, { backgroundColor: theme.colors.backgroundSecondary }]}>
              <Ionicons name="close-circle" size={24} color={theme.colors.error} style={styles.statIcon} />
              <Text style={[styles.statCount, { color: theme.colors.error }]}>{total - score}</Text>
              <Text style={[styles.statLabel, { color: theme.colors.text }]}>{t("quiz.result.incorrect")}</Text>
            </View>
          </View>

          <View style={styles.rewardContainer}>
            <Ionicons name="trophy" size={32} color={theme.colors.warning} style={styles.trophyIcon} />
            <Text style={[styles.rewardText, { color: theme.colors.text }]}>
              {t("quiz.result.earnedXp", { xp: score * 10 })}
            </Text>
          </View>

          <View style={styles.messageContainer}>
            <Text style={[styles.messageTitle, { color: theme.colors.text }]}>{t("quiz.result.keepLearning")}</Text>
            <Text style={[styles.messageText, { color: theme.colors.textSecondary }]}>
              {t("quiz.result.practiceMore")}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button variant="primary" style={styles.button} onPress={retryQuiz}>
            {t("quiz.result.tryAgain")}
          </Button>
          <Button variant="outline" style={styles.button} onPress={chooseAnotherQuiz}>
            {t("quiz.result.anotherQuiz")}
          </Button>
          <Button variant="ghost" style={styles.button} onPress={goHome}>
            {t("common.backToHome")}
          </Button>
        </View>
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
    flexGrow: 1,
    paddingBottom: 24,
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
  resultContainer: {
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  scoreCircleContainer: {
    position: "relative",
    width: 150,
    height: 150,
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreCircleBackground: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreCircleInner: {
    justifyContent: "center",
    alignItems: "center",
  },
  progressRing: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  scoreText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  percentageText: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
  },
  resultMessage: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 32,
  },
  statItem: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 8,
  },
  statIcon: {
    marginBottom: 8,
  },
  statCount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
  },
  rewardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  trophyIcon: {
    marginRight: 12,
  },
  rewardText: {
    fontSize: 18,
    fontWeight: "600",
  },
  messageContainer: {
    width: "100%",
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },
  messageText: {
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  buttonContainer: {
    padding: 16,
  },
  button: {
    marginBottom: 12,
  },
});

export default QuizResultScreen;
