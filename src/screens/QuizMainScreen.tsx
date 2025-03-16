import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";
import { useLocale } from "../contexts/LocaleContext";
import { QuizStackScreenProps } from "../navigation/types";

type Props = QuizStackScreenProps<"QuizMain">;

interface QuizCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
  color: string;
}

const QuizMainScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const [categories, setCategories] = useState<QuizCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        // 여기서는 더미 데이터를 사용하지만, 실제로는 API에서 카테고리를 가져와야 합니다
        const dummyCategories: QuizCategory[] = [
          {
            id: "country",
            name: t("quiz.categories.country"),
            icon: "globe-outline",
            description: t("quiz.categories.countryDescription"),
            count: 10,
            color: "#4CAF50",
          },
          {
            id: "culture",
            name: t("quiz.categories.culture"),
            icon: "theater-outline",
            description: t("quiz.categories.cultureDescription"),
            count: 8,
            color: "#9C27B0",
          },
          {
            id: "language",
            name: t("quiz.categories.language"),
            icon: "chatbubbles-outline",
            description: t("quiz.categories.languageDescription"),
            count: 6,
            color: "#2196F3",
          },
          {
            id: "history",
            name: t("quiz.categories.history"),
            icon: "time-outline",
            description: t("quiz.categories.historyDescription"),
            count: 12,
            color: "#FF9800",
          },
          {
            id: "food",
            name: t("quiz.categories.food"),
            icon: "restaurant-outline",
            description: t("quiz.categories.foodDescription"),
            count: 7,
            color: "#E91E63",
          },
        ];
        setCategories(dummyCategories);
      } catch (error) {
        console.error("카테고리 로딩 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, [t]);

  // 새로운 퀴즈 시작하기 (국가 리스트로 이동)
  const startNewQuiz = (categoryId: string) => {
    if (categoryId === "country") {
      // 국가 선택 화면으로 이동 (탐색 탭의 화면으로 이동)
      navigation.navigate("Explore" as any);
    } else {
      // 향후 다른 카테고리 퀴즈 구현
      // 임시로 샘플 퀴즈 시작
      navigation.navigate("QuizPlay", {
        quizId: `${categoryId}-sample`,
        quizName: t(`quiz.categories.${categoryId}`),
      });
    }
  };

  const renderCategoryItem = ({ item }: { item: QuizCategory }) => (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: theme.colors.backgroundSecondary, borderLeftColor: item.color }]}
      onPress={() => startNewQuiz(item.id)}
    >
      <View style={styles.cardHeader}>
        <Ionicons name={item.icon as any} size={32} color={item.color} />
        <View style={styles.cardHeaderTexts}>
          <Text style={[styles.categoryName, { color: theme.colors.text }]}>{item.name}</Text>
          <Text style={[styles.quizCount, { color: theme.colors.textSecondary }]}>
            {t("quiz.quizCount", { count: item.count })}
          </Text>
        </View>
      </View>
      <Text style={[styles.categoryDescription, { color: theme.colors.textSecondary }]}>{item.description}</Text>
      <View style={[styles.startButton, { backgroundColor: item.color }]}>
        <Text style={styles.startButtonText}>{t("quiz.start")}</Text>
        <Ionicons name="arrow-forward" size={16} color="#fff" />
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={[styles.title, { color: theme.colors.text }]}>{t("quiz.welcomeTitle")}</Text>
      <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>{t("quiz.welcomeSubtitle")}</Text>

      <View style={[styles.statsCard, { backgroundColor: theme.colors.brandMain }]}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>{t("quiz.completedQuizzes")}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>350</Text>
          <Text style={styles.statLabel}>{t("quiz.totalPoints")}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>75%</Text>
          <Text style={styles.statLabel}>{t("quiz.averageScore")}</Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("quiz.exploreCategories")}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.brandMain} />
        <Text style={[styles.loadingText, { color: theme.colors.textSecondary }]}>{t("common.loading")}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    lineHeight: 22,
  },
  statsCard: {
    flexDirection: "row",
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.8)",
  },
  divider: {
    width: 1,
    height: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  categoryCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardHeaderTexts: {
    marginLeft: 12,
    flex: 1,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  quizCount: {
    fontSize: 14,
  },
  categoryDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  startButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  startButtonText: {
    color: "#fff",
    fontWeight: "600",
    marginRight: 8,
  },
});

export default QuizMainScreen;
