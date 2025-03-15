import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocale } from "../../contexts/LocaleContext";
import { Card, Button, Badge } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLocale();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        {/* 헤더 영역 */}
        <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
          <View>
            <Text style={[styles.welcomeText, { color: theme.colors.textSecondary }]}>{t("home.welcome")}</Text>
            <Text style={[styles.nameText, { color: theme.colors.text }]}>사용자님</Text>
          </View>
          <View style={styles.headerRightContainer}>
            <Badge
              title={t("profile.level", { level: 5 })}
              type="success"
              size="small"
              style={{ marginRight: 10 }}
              leftIcon={<Ionicons name="star" size={12} color={theme.colors.success} />}
            />
            <TouchableOpacity style={styles.profileButton}>
              <View style={[styles.profileIcon, { backgroundColor: theme.colors.brandMain }]}>
                <Ionicons name="person" size={16} color={theme.colors.backgroundLight} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* 콘텐츠 영역 */}
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          {/* 오늘의 챌린지 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("home.dailyChallenge")}</Text>
              <TouchableOpacity>
                <Text style={[styles.seeAllText, { color: theme.colors.brandMain }]}>{t("common.seeAll")}</Text>
              </TouchableOpacity>
            </View>

            <Card variant="elevated" style={styles.challengeCard}>
              <View style={styles.cardHeader}>
                <View style={styles.cardTitleContainer}>
                  <View style={[styles.cardIconContainer, { backgroundColor: `${theme.colors.brandSecondary}30` }]}>
                    <Ionicons name="time-outline" size={16} color={theme.colors.brandSecondary} />
                  </View>
                  <Text style={[styles.cardTitle, { color: theme.colors.text }]}>{t("home.todayQuiz")}</Text>
                </View>
                <Badge
                  title="300XP"
                  type="info"
                  size="small"
                  leftIcon={<Ionicons name="flash-outline" size={12} color={theme.colors.info} />}
                />
              </View>

              <Text style={[styles.cardDescription, { color: theme.colors.textSecondary }]}>
                {t("home.completeChallenge")}
              </Text>

              <Button variant="primary" size="medium">
                {t("quiz.start")}
              </Button>
            </Card>
          </View>

          {/* 내 진행 상황 */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("profile.statistics")}</Text>

            <View style={styles.statsContainer}>
              <Card variant="outlined" style={styles.statCard}>
                <View style={[styles.statIconContainer, { backgroundColor: `${theme.colors.success}30` }]}>
                  <Ionicons name="checkmark-circle-outline" size={20} color={theme.colors.success} />
                </View>
                <Text style={[styles.statValue, { color: theme.colors.text }]}>24</Text>
                <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>
                  {t("profile.quizzesCompleted")}
                </Text>
              </Card>

              <Card variant="outlined" style={styles.statCard}>
                <View style={[styles.statIconContainer, { backgroundColor: `${theme.colors.warning}30` }]}>
                  <Ionicons name="flag-outline" size={20} color={theme.colors.warning} />
                </View>
                <Text style={[styles.statValue, { color: theme.colors.text }]}>12</Text>
                <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>
                  {t("explore.visitedCountries")}
                </Text>
              </Card>

              <Card variant="outlined" style={styles.statCard}>
                <View style={[styles.statIconContainer, { backgroundColor: `${theme.colors.error}30` }]}>
                  <Ionicons name="trophy-outline" size={20} color={theme.colors.error} />
                </View>
                <Text style={[styles.statValue, { color: theme.colors.text }]}>5</Text>
                <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>
                  {t("profile.badgesEarned")}
                </Text>
              </Card>
            </View>
          </View>

          {/* 최근 학습한 국가 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("home.recentlyViewed")}</Text>
              <TouchableOpacity>
                <Text style={[styles.seeAllText, { color: theme.colors.brandMain }]}>{t("home.moreCountries")}</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.countriesContainer}>
              {[
                { name: t("countries.japan"), region: t("explore.continent.asia"), icon: "globe-outline" as const },
                {
                  name: t("countries.usa"),
                  region: t("explore.continent.northAmerica"),
                  icon: "globe-outline" as const,
                },
                { name: t("countries.france"), region: t("explore.continent.europe"), icon: "globe-outline" as const },
                {
                  name: t("countries.brazil"),
                  region: t("explore.continent.southAmerica"),
                  icon: "globe-outline" as const,
                },
              ].map((country, index) => (
                <Card key={index} variant="outlined" style={styles.countryCard}>
                  <View style={[styles.countryIconContainer, { backgroundColor: `${theme.colors.brandMain}20` }]}>
                    <Ionicons name={country.icon} size={24} color={theme.colors.brandMain} />
                  </View>
                  <Text style={[styles.countryName, { color: theme.colors.text }]}>{country.name}</Text>
                  <Badge
                    title={country.region}
                    type="default"
                    size="small"
                    leftIcon={<Ionicons name="location-outline" size={10} color={theme.colors.brandMain} />}
                  />
                </Card>
              ))}
            </ScrollView>
          </View>

          {/* 추천 학습 */}
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("home.recommendedQuizzes")}</Text>

            <Card variant="filled" style={styles.recommendedCard}>
              <View style={styles.recommendedContent}>
                <View>
                  <View style={styles.recommendedHeader}>
                    <View style={[styles.recommendedIconContainer, { backgroundColor: `${theme.colors.info}30` }]}>
                      <Ionicons name="bulb-outline" size={16} color={theme.colors.info} />
                    </View>
                    <Text style={[styles.recommendedTitle, { color: theme.colors.text }]}>
                      {t("explore.continent.europe")} {t("quiz.title")} {t("home.dailyChallenge")}
                    </Text>
                  </View>
                  <Text style={[styles.recommendedDescription, { color: theme.colors.textSecondary }]}>
                    {t("home.exploreEuropeanCountries", { count: 15 })}
                  </Text>
                </View>
                <Button variant="outline" size="small">
                  {t("quiz.start")}
                </Button>
              </View>
            </Card>
          </View>
        </ScrollView>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  welcomeText: {
    fontSize: 14,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "700",
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "500",
  },
  challengeCard: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    padding: 16,
    alignItems: "center",
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    textAlign: "center",
  },
  countriesContainer: {
    flexDirection: "row",
    marginHorizontal: -4,
  },
  countryCard: {
    width: 120,
    marginHorizontal: 4,
    padding: 12,
    alignItems: "center",
  },
  countryIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  countryName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  recommendedCard: {
    padding: 16,
  },
  recommendedContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recommendedHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  recommendedIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  recommendedTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  recommendedDescription: {
    fontSize: 14,
    marginBottom: 4,
    maxWidth: "80%",
  },
});

export default HomeScreen;
