import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocale } from "../../contexts/LocaleContext";
import { Card, Badge, Button } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { HomeStackScreenProps, ExploreStackScreenProps } from "../../navigation/types";
import { countries } from "../../data/countries";
import { loadCountryQuizzes } from "../../utils/quizLoader";
import { Quiz } from "../../types/quiz";
import { useNavigation, CommonActions } from "@react-navigation/native";

// 타입 정의
type Props = HomeStackScreenProps<"CountryDetail"> | ExploreStackScreenProps<"CountryDetail">;

const CountryDetail: React.FC<Props> = ({ route, navigation }) => {
  const { theme, isDarkMode } = useTheme();
  const { t } = useLocale();
  const { id, name } = route.params;

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  // 국가 데이터 찾기
  const country = countries.find((c) => c.id === id);

  // 국가 관련 퀴즈 로드
  useEffect(() => {
    const loadQuizzes = async () => {
      try {
        const countryQuizzes = loadCountryQuizzes(id);
        setQuizzes(countryQuizzes);
      } catch (error) {
        console.error("퀴즈 로드 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    loadQuizzes();
  }, [id]);

  // 퀴즈 시작
  const startQuiz = () => {
    if (country) {
      // 국가 ID를 소문자로 변환 (예: KR -> kr)
      const countryCode = country.id.toLowerCase();

      // Quiz 탭으로 이동하고 해당 국가의 퀴즈 시작
      navigation.dispatch(
        CommonActions.navigate({
          name: "Quiz",
          params: {
            screen: "QuizPlay",
            params: {
              quizId: `country-${countryCode}`,
              quizName: t(`countries.${country.id}`), // 번역 키를 사용하여 국가 이름 표시
            },
          },
        })
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{name}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {/* 국가 기본 정보 */}
        <Card variant="filled" style={[styles.countryCard, { backgroundColor: theme.colors.backgroundSecondary }]}>
          <View style={styles.countryHeader}>
            <View
              style={[
                styles.countryIconContainer,
                { backgroundColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)" },
              ]}
            >
              <Text style={styles.countryEmoji}>{getCountryEmoji(id)}</Text>
            </View>
            <View style={styles.countryInfo}>
              <Text style={[styles.countryName, { color: theme.colors.text }]}>{name}</Text>
              <Badge
                title={t(`explore.continent.${country?.continent.toLowerCase() || "asia"}`)}
                type="default"
                size="small"
                leftIcon={<Ionicons name="location-outline" size={10} color={theme.colors.brandMain} />}
              />
            </View>
          </View>
        </Card>

        {/* 국가 소개 */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("country.about")}</Text>
          <Text style={[styles.sectionText, { color: theme.colors.textSecondary }]}>
            {t(`countryDescriptions.${id}`, "국가 설명이 준비 중입니다.")}
          </Text>
        </View>

        {/* 퀴즈 섹션 */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("country.quizzes")}</Text>

          {loading ? (
            <Card
              variant="outlined"
              style={[styles.loadingCard, { backgroundColor: theme.colors.backgroundSecondary }]}
            >
              <Text style={{ color: theme.colors.textSecondary }}>{t("common.loading")}</Text>
            </Card>
          ) : quizzes.length > 0 ? (
            <Card variant="outlined" style={[styles.quizCard, { backgroundColor: theme.colors.backgroundSecondary }]}>
              <View style={styles.quizCardContent}>
                <View>
                  <Text style={[styles.quizTitle, { color: theme.colors.text }]}>
                    {t("country.learnAbout", { country: name })}
                  </Text>
                  <Text style={[styles.quizCount, { color: theme.colors.textSecondary }]}>
                    {t("quiz.questionsCount", { count: quizzes.length })}
                  </Text>
                </View>
                <Button onPress={startQuiz}>{t("quiz.start")}</Button>
              </View>
            </Card>
          ) : (
            <Card variant="outlined" style={[styles.emptyCard, { backgroundColor: theme.colors.backgroundSecondary }]}>
              <Text style={{ color: theme.colors.textSecondary }}>{t("country.noQuizzes")}</Text>
            </Card>
          )}
        </View>

        {/* 관련 국가 */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("country.related")}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.relatedContainer}>
            {countries
              .filter((c) => c.continent === country?.continent && c.id !== id)
              .slice(0, 5)
              .map((relatedCountry, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    // 같은 스택 내에서 다른 국가 상세 화면으로 이동
                    navigation.setParams({
                      id: relatedCountry.id,
                      name: t(`countries.${relatedCountry.id}`),
                    });
                  }}
                >
                  <Card
                    variant="outlined"
                    style={[styles.relatedCard, { backgroundColor: theme.colors.backgroundSecondary }]}
                  >
                    <Text style={styles.relatedEmoji}>{getCountryEmoji(relatedCountry.id)}</Text>
                    <Text style={[styles.relatedName, { color: theme.colors.text }]}>
                      {t(`countries.${relatedCountry.id}`)}
                    </Text>
                  </Card>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// 국가 코드로부터 이모지 반환
function getCountryEmoji(countryCode: string): string {
  const offset = 127397; // 국가 코드 문자를 국가 이모지로 변환하는 오프셋

  // 특수 케이스 처리
  if (countryCode === "KR") return "🇰🇷";
  if (countryCode === "USA") return "🇺🇸";
  if (countryCode === "JP") return "🇯🇵";
  if (countryCode === "FR") return "🇫🇷";
  if (countryCode === "IT") return "🇮🇹";
  if (countryCode === "AU") return "🇦🇺";
  if (countryCode === "BR") return "🇧🇷";

  // 기본 변환 로직 (2글자 국가 코드만 지원)
  if (countryCode.length === 2) {
    return String.fromCodePoint(countryCode.charCodeAt(0) + offset, countryCode.charCodeAt(1) + offset);
  }

  return "🌍"; // 기본 값
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 24,
  },
  countryCard: {
    padding: 16,
    marginBottom: 16,
  },
  countryHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryIconContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  countryEmoji: {
    fontSize: 32,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
  },
  quizCard: {
    padding: 16,
  },
  quizCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quizTitle: {
    fontWeight: "600",
    marginBottom: 4,
  },
  quizCount: {
    fontSize: 12,
  },
  loadingCard: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
  emptyCard: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
  relatedContainer: {
    flexDirection: "row",
  },
  relatedCard: {
    width: 100,
    height: 120,
    marginRight: 12,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  relatedEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  relatedName: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default CountryDetail;
