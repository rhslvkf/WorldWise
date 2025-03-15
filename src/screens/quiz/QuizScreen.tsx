import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { Card, Button, Badge, QuizOption } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../../styles/theme";

// 퀴즈 카테고리 타입
type QuizCategory = "daily" | "all";

const QuizScreen: React.FC = () => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState<QuizCategory>("daily");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        {/* 탭 선택 */}
        <View style={[styles.tabContainer, { backgroundColor: theme.colors.backgroundSecondary }]}>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "daily" && {
                backgroundColor: theme.colors.brandMain + "30",
                borderBottomColor: theme.colors.brandMain,
                borderBottomWidth: 2,
              },
            ]}
            onPress={() => setSelectedTab("daily")}
          >
            <Ionicons
              name="calendar-outline"
              size={18}
              color={selectedTab === "daily" ? theme.colors.brandMain : theme.colors.textSecondary}
              style={styles.tabIcon}
            />
            <Text
              style={[
                styles.tabText,
                { color: selectedTab === "daily" ? theme.colors.brandMain : theme.colors.textSecondary },
              ]}
            >
              오늘의 퀴즈
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "all" && {
                backgroundColor: theme.colors.brandMain + "30",
                borderBottomColor: theme.colors.brandMain,
                borderBottomWidth: 2,
              },
            ]}
            onPress={() => setSelectedTab("all")}
          >
            <Ionicons
              name="grid-outline"
              size={18}
              color={selectedTab === "all" ? theme.colors.brandMain : theme.colors.textSecondary}
              style={styles.tabIcon}
            />
            <Text
              style={[
                styles.tabText,
                { color: selectedTab === "all" ? theme.colors.brandMain : theme.colors.textSecondary },
              ]}
            >
              모든 퀴즈
            </Text>
          </TouchableOpacity>
        </View>

        {/* 콘텐츠 영역 */}
        {selectedTab === "daily" ? <DailyQuizContent theme={theme} /> : <AllQuizContent theme={theme} />}
      </View>
    </SafeAreaView>
  );
};

// 오늘의 퀴즈 콘텐츠
interface QuizContentProps {
  theme: Theme;
}

const DailyQuizContent: React.FC<QuizContentProps> = ({ theme }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>오늘의 퀴즈 챌린지</Text>
      <Text style={[styles.sectionDescription, { color: theme.colors.textSecondary }]}>
        매일 새로운 퀴즈에 도전하고 보상을 획득하세요!
      </Text>

      <Card variant="elevated" style={styles.dailyQuizCard}>
        <View style={styles.dailyQuizHeader}>
          <View style={styles.dailyQuizTitleContainer}>
            <View style={[styles.iconContainer, { backgroundColor: `${theme.colors.brandSecondary}30` }]}>
              <Ionicons name="flash-outline" size={16} color={theme.colors.brandSecondary} />
            </View>
            <Text style={[styles.dailyQuizTitle, { color: theme.colors.text }]}>세계 수도 퀴즈</Text>
          </View>
          <Badge
            title="300 XP"
            type="success"
            size="small"
            leftIcon={<Ionicons name="trophy-outline" size={10} color={theme.colors.success} />}
          />
        </View>

        <Text style={[styles.dailyQuizDescription, { color: theme.colors.textSecondary }]}>
          오늘의 퀴즈를 완료하면 추가 보상으로 300 XP를 획득할 수 있습니다.
        </Text>

        <View style={styles.quizInfoContainer}>
          <View style={styles.quizInfoItem}>
            <Ionicons name="help-circle-outline" size={14} color={theme.colors.textSecondary} style={styles.infoIcon} />
            <Text style={[styles.quizInfoText, { color: theme.colors.textSecondary }]}>10개 문제</Text>
          </View>
          <View style={styles.quizInfoItem}>
            <Ionicons name="time-outline" size={14} color={theme.colors.textSecondary} style={styles.infoIcon} />
            <Text style={[styles.quizInfoText, { color: theme.colors.textSecondary }]}>약 5분 소요</Text>
          </View>
          <View style={styles.quizInfoItem}>
            <Ionicons name="ribbon-outline" size={14} color={theme.colors.textSecondary} style={styles.infoIcon} />
            <Text style={[styles.quizInfoText, { color: theme.colors.textSecondary }]}>중간 난이도</Text>
          </View>
        </View>

        <Button variant="primary" size="medium" style={styles.dailyQuizButton}>
          지금 도전하기
        </Button>
      </Card>

      {/* 퀴즈 예제 추가 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>퀴즈 예제</Text>
      <Card variant="elevated" style={styles.quizExampleCard}>
        <Text style={[styles.quizQuestion, { color: theme.colors.text }]}>대한민국의 수도는 어디인가요?</Text>

        <View style={styles.quizOptionsContainer}>
          <QuizOption
            text="서울"
            optionKey="A"
            selected={selectedOption === "A"}
            correct={selectedOption !== null && selectedOption === "A"}
            incorrect={selectedOption !== null && selectedOption === "B"}
            onPress={() => setSelectedOption("A")}
          />
          <QuizOption
            text="부산"
            optionKey="B"
            selected={selectedOption === "B"}
            correct={false}
            incorrect={selectedOption !== null && selectedOption === "B"}
            onPress={() => setSelectedOption("B")}
          />
          <QuizOption
            text="인천"
            optionKey="C"
            selected={selectedOption === "C"}
            correct={false}
            incorrect={selectedOption !== null && selectedOption === "C"}
            onPress={() => setSelectedOption("C")}
          />
          <QuizOption
            text="대전"
            optionKey="D"
            selected={selectedOption === "D"}
            correct={false}
            incorrect={selectedOption !== null && selectedOption === "D"}
            onPress={() => setSelectedOption("D")}
          />
        </View>

        {selectedOption && (
          <View style={styles.quizFeedback}>
            <Text
              style={[
                styles.feedbackText,
                { color: selectedOption === "A" ? theme.colors.success : theme.colors.error },
              ]}
            >
              {selectedOption === "A"
                ? "정답입니다! 서울은 대한민국의 수도입니다."
                : "오답입니다. 정답은 '서울'입니다."}
            </Text>
            <Button variant="primary" size="small" style={styles.nextButton} onPress={() => setSelectedOption(null)}>
              다음 문제
            </Button>
          </View>
        )}
      </Card>

      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>이전 도전 기록</Text>

      <Card variant="outlined" style={styles.previousQuizCard}>
        <View style={styles.previousQuizHeader}>
          <View style={styles.previousQuizTitleContainer}>
            <View style={[styles.iconContainer, { backgroundColor: `${theme.colors.brandMain}30` }]}>
              <Ionicons name="globe-outline" size={16} color={theme.colors.brandMain} />
            </View>
            <View>
              <Text style={[styles.previousQuizTitle, { color: theme.colors.text }]}>유럽 국가 퀴즈</Text>
              <Text style={[styles.previousQuizDate, { color: theme.colors.textSecondary }]}>어제</Text>
            </View>
          </View>
          <Badge
            title="7/10 정답"
            type="info"
            size="small"
            leftIcon={<Ionicons name="checkmark-outline" size={10} color={theme.colors.info} />}
          />
        </View>
      </Card>

      <Card variant="outlined" style={styles.previousQuizCard}>
        <View style={styles.previousQuizHeader}>
          <View style={styles.previousQuizTitleContainer}>
            <View style={[styles.iconContainer, { backgroundColor: `${theme.colors.warning}30` }]}>
              <Ionicons name="flag-outline" size={16} color={theme.colors.warning} />
            </View>
            <View>
              <Text style={[styles.previousQuizTitle, { color: theme.colors.text }]}>세계 수도 퀴즈</Text>
              <Text style={[styles.previousQuizDate, { color: theme.colors.textSecondary }]}>3일 전</Text>
            </View>
          </View>
          <Badge
            title="9/10 정답"
            type="success"
            size="small"
            leftIcon={<Ionicons name="checkmark-outline" size={10} color={theme.colors.success} />}
          />
        </View>
      </Card>
    </ScrollView>
  );
};

// 모든 퀴즈 콘텐츠
const AllQuizContent: React.FC<QuizContentProps> = ({ theme }) => {
  // 퀴즈 카테고리 데이터
  const categories = [
    { id: "geography", name: "지리", icon: "globe-outline" as const },
    { id: "history", name: "역사", icon: "time-outline" as const },
    { id: "culture", name: "문화", icon: "color-palette-outline" as const },
    { id: "food", name: "음식", icon: "restaurant-outline" as const },
    { id: "language", name: "언어", icon: "chatbubble-outline" as const },
    { id: "landmarks", name: "랜드마크", icon: "location-outline" as const },
  ];

  // 퀴즈 데이터
  const quizzes = [
    {
      id: "1",
      title: "세계 수도 퀴즈",
      category: "지리",
      questions: 10,
      time: 5,
      icon: "globe-outline" as const,
      difficulty: "중급",
      xp: 200,
    },
    {
      id: "2",
      title: "유럽 국가 퀴즈",
      category: "지리",
      questions: 10,
      time: 5,
      icon: "globe-outline" as const,
      difficulty: "초급",
      xp: 150,
    },
    {
      id: "3",
      title: "아시아 역사 퀴즈",
      category: "역사",
      questions: 15,
      time: 7,
      icon: "time-outline" as const,
      difficulty: "상급",
      xp: 300,
    },
    {
      id: "4",
      title: "세계 음식 퀴즈",
      category: "음식",
      questions: 10,
      time: 5,
      icon: "restaurant-outline" as const,
      difficulty: "중급",
      xp: 200,
    },
  ];

  return (
    <FlatList
      style={styles.content}
      contentContainerStyle={styles.allQuizContentContainer}
      ListHeaderComponent={
        <>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>모든 퀴즈</Text>
          <Text style={[styles.sectionDescription, { color: theme.colors.textSecondary }]}>
            다양한 카테고리의 퀴즈를 탐험하고 지식을 쌓아보세요!
          </Text>

          <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>카테고리</Text>
          <View style={styles.categoriesContainer}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryButton}>
                <View style={[styles.categoryIcon, { backgroundColor: `${theme.colors.brandMain}30` }]}>
                  <Ionicons name={category.icon} size={18} color={theme.colors.brandMain} />
                </View>
                <Text style={[styles.categoryName, { color: theme.colors.text }]}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>추천 퀴즈</Text>
        </>
      }
      data={quizzes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card variant="outlined" style={styles.quizCard}>
          <View style={styles.quizCardHeader}>
            <View style={styles.quizCardTitleContainer}>
              <View style={[styles.iconContainer, { backgroundColor: `${theme.colors.brandMain}30` }]}>
                <Ionicons name={item.icon} size={16} color={theme.colors.brandMain} />
              </View>
              <View>
                <Text style={[styles.quizCardTitle, { color: theme.colors.text }]}>{item.title}</Text>
                <View style={styles.quizCardSubtitle}>
                  <Badge
                    title={item.category}
                    type="default"
                    size="small"
                    style={{ marginRight: 8 }}
                    leftIcon={<Ionicons name="pricetag-outline" size={10} color={theme.colors.brandMain} />}
                  />
                  <Badge
                    title={item.difficulty}
                    type="info"
                    size="small"
                    leftIcon={<Ionicons name="ribbon-outline" size={10} color={theme.colors.info} />}
                  />
                </View>
              </View>
            </View>
            <Badge
              title={`${item.xp} XP`}
              type="success"
              size="small"
              leftIcon={<Ionicons name="trophy-outline" size={10} color={theme.colors.success} />}
            />
          </View>

          <View style={styles.quizInfoContainer}>
            <View style={styles.quizInfoItem}>
              <Ionicons
                name="help-circle-outline"
                size={14}
                color={theme.colors.textSecondary}
                style={styles.infoIcon}
              />
              <Text style={[styles.quizInfoText, { color: theme.colors.textSecondary }]}>{item.questions}개 문제</Text>
            </View>
            <View style={styles.quizInfoItem}>
              <Ionicons name="time-outline" size={14} color={theme.colors.textSecondary} style={styles.infoIcon} />
              <Text style={[styles.quizInfoText, { color: theme.colors.textSecondary }]}>약 {item.time}분 소요</Text>
            </View>
          </View>

          <Button variant="outline" size="small" style={styles.quizCardButton}>
            퀴즈 풀기
          </Button>
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    height: 48,
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabIcon: {
    marginRight: 6,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  allQuizContentContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    marginBottom: 24,
  },
  subSectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 24,
    marginBottom: 12,
  },
  dailyQuizCard: {
    padding: 16,
    marginBottom: 16,
  },
  dailyQuizHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  dailyQuizTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  dailyQuizTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  dailyQuizDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  dailyQuizButton: {
    marginTop: 8,
  },
  quizInfoContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  quizInfoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  infoIcon: {
    marginRight: 6,
  },
  quizInfoText: {
    fontSize: 13,
  },
  previousQuizCard: {
    padding: 12,
    marginBottom: 12,
  },
  previousQuizHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  previousQuizTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  previousQuizTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  previousQuizDate: {
    fontSize: 12,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  categoryButton: {
    width: "30%",
    marginRight: "5%",
    marginBottom: 16,
    alignItems: "center",
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "500",
  },
  quizCard: {
    padding: 16,
    marginBottom: 16,
  },
  quizCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  quizCardTitleContainer: {
    flexDirection: "row",
  },
  quizCardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  quizCardSubtitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  quizCardButton: {
    marginTop: 8,
  },
  quizExampleCard: {
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  quizQuestion: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  quizOptionsContainer: {
    gap: 12,
    marginBottom: 16,
  },
  quizFeedback: {
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "rgba(240, 240, 240, 0.5)",
    alignItems: "center",
  },
  feedbackText: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 12,
    textAlign: "center",
  },
  nextButton: {
    alignSelf: "center",
    minWidth: 120,
  },
});

export default QuizScreen;
