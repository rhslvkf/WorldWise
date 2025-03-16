import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocale } from "../../contexts/LocaleContext";
import { Card, Button, Badge } from "../../components";
import { Theme } from "../../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { ExploreStackScreenProps } from "../../navigation/types";

// 탐험 모드 유형
type ExploreMode = "story" | "map";

const ExploreScreen: React.FC<ExploreStackScreenProps<"ExploreMain">> = ({ navigation }) => {
  const { theme } = useTheme();
  const { t } = useLocale();
  const [activeMode, setActiveMode] = useState<ExploreMode>("story");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        {/* 모드 선택 탭 */}
        <View style={[styles.tabContainer, { backgroundColor: theme.colors.backgroundSecondary }]}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeMode === "story" && {
                backgroundColor: theme.colors.brandMain + "30",
                borderBottomColor: theme.colors.brandMain,
                borderBottomWidth: 2,
              },
            ]}
            onPress={() => setActiveMode("story")}
          >
            <Text
              style={[
                styles.tabText,
                { color: activeMode === "story" ? theme.colors.brandMain : theme.colors.textSecondary },
              ]}
            >
              {t("explore.storyMode")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              activeMode === "map" && {
                backgroundColor: theme.colors.brandMain + "30",
                borderBottomColor: theme.colors.brandMain,
                borderBottomWidth: 2,
              },
            ]}
            onPress={() => setActiveMode("map")}
          >
            <Text
              style={[
                styles.tabText,
                { color: activeMode === "map" ? theme.colors.brandMain : theme.colors.textSecondary },
              ]}
            >
              {t("explore.worldMap")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* 콘텐츠 영역 */}
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          {activeMode === "story" ? (
            <StoryModeContent theme={theme} />
          ) : (
            <MapModeContent theme={theme} navigation={navigation} />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// 스토리 모드 콘텐츠
const StoryModeContent: React.FC<{ theme: Theme }> = ({ theme }) => {
  const { t } = useLocale();

  // 대륙 데이터 (임시)
  const continents = [
    {
      id: "asia",
      name: t("explore.continent.asia"),
      progress: 0.3,
      unlocked: true,
      color: theme.colors.asia,
      icon: "globe-outline" as const,
    },
    {
      id: "europe",
      name: t("explore.continent.europe"),
      progress: 0.1,
      unlocked: true,
      color: theme.colors.europe,
      icon: "globe-outline" as const,
    },
    {
      id: "north-america",
      name: t("explore.continent.northAmerica"),
      progress: 0,
      unlocked: false,
      color: theme.colors.northAmerica,
      icon: "globe-outline" as const,
    },
    {
      id: "south-america",
      name: t("explore.continent.southAmerica"),
      progress: 0,
      unlocked: false,
      color: theme.colors.southAmerica,
      icon: "globe-outline" as const,
    },
    {
      id: "africa",
      name: t("explore.continent.africa"),
      progress: 0,
      unlocked: false,
      color: theme.colors.africa,
      icon: "globe-outline" as const,
    },
    {
      id: "oceania",
      name: t("explore.continent.oceania"),
      progress: 0,
      unlocked: false,
      color: theme.colors.oceania,
      icon: "globe-outline" as const,
    },
  ];

  return (
    <View style={styles.storyContainer}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("explore.title")}</Text>

      <Text style={[styles.sectionDescription, { color: theme.colors.textSecondary }]}>
        {t("onboarding.slide1Description")}
      </Text>

      {/* 현재 탐험 중인 대륙 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>{t("explore.visitedCountries")}</Text>

      {continents
        .filter((c) => c.unlocked && c.progress > 0)
        .map((continent) => (
          <ContinentCard key={continent.id} continent={continent} theme={theme} isActive={true} />
        ))}

      {/* 탐험 가능한 대륙 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>{t("explore.completedCountries")}</Text>

      {continents
        .filter((c) => c.unlocked && c.progress === 0)
        .map((continent) => (
          <ContinentCard key={continent.id} continent={continent} theme={theme} isActive={false} />
        ))}

      {/* 잠긴 대륙 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>{t("explore.lockedCountries")}</Text>

      {continents
        .filter((c) => !c.unlocked)
        .map((continent) => (
          <ContinentCard key={continent.id} continent={continent} theme={theme} isActive={false} isLocked={true} />
        ))}
    </View>
  );
};

// 대륙 카드 컴포넌트
interface ContinentCardProps {
  continent: {
    id: string;
    name: string;
    progress: number;
    unlocked: boolean;
    color: string;
    icon: React.ComponentProps<typeof Ionicons>["name"];
  };
  theme: Theme;
  isActive: boolean;
  isLocked?: boolean;
}

const ContinentCard: React.FC<ContinentCardProps> = ({ continent, theme, isActive, isLocked }) => {
  const { t } = useLocale();

  // 진행률을 퍼센트로 표시
  const progressPercent = Math.round(continent.progress * 100);

  return (
    <Card variant={isActive ? "elevated" : "outlined"} style={[styles.continentCard, isLocked && { opacity: 0.7 }]}>
      <View style={styles.continentCardContent}>
        <View>
          <View style={styles.continentHeader}>
            <View style={[styles.continentIcon, { backgroundColor: `${continent.color}30` }]}>
              <Ionicons name={isLocked ? "lock-closed-outline" : continent.icon} size={16} color={continent.color} />
            </View>
            <Text style={[styles.continentName, { color: theme.colors.text }]}>{continent.name}</Text>
            <Badge
              title={isLocked ? t("common.locked") : `${progressPercent}%`}
              type={isLocked ? "default" : "continent"}
              continent={continent.id as any}
              size="small"
              unlocked={!isLocked}
            />
          </View>

          {!isLocked && (
            <View style={[styles.progressBar, { backgroundColor: `${continent.color}30` }]}>
              <View
                style={[
                  styles.progressFill,
                  {
                    backgroundColor: continent.color,
                    width: `${progressPercent}%`,
                  },
                ]}
              />
            </View>
          )}
        </View>

        <Button variant={isActive ? "primary" : "outline"} size="small" disabled={isLocked}>
          {isLocked ? t("common.locked") : isActive ? t("home.continueQuiz") : t("quiz.start")}
        </Button>
      </View>
    </Card>
  );
};

// 지도 모드 콘텐츠
const MapModeContent: React.FC<{ theme: Theme; navigation: any }> = ({ theme, navigation }) => {
  const { t } = useLocale();

  return (
    <View style={styles.mapContainer}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("explore.worldMap")}</Text>

      <Text style={[styles.sectionDescription, { color: theme.colors.textSecondary }]}>
        {t("explore.searchCountry")}
      </Text>

      {/* 지도 이미지 - 실제 앱에서는 상호작용 가능한 지도로 교체 */}
      <Card variant="outlined" style={styles.mapCard}>
        <Ionicons name="map" size={48} color={theme.colors.textSecondary} style={styles.mapIcon} />
        <Text style={[styles.mapPlaceholder, { color: theme.colors.textSecondary }]}>
          {t("explore.worldMap")} (개발 중)
        </Text>
      </Card>

      {/* 대륙 필터 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>{t("explore.categories")}</Text>

      <View style={styles.continentFilters}>
        {[
          { name: t("explore.continent.asia"), icon: "globe-outline" as const },
          { name: t("explore.continent.europe"), icon: "globe-outline" as const },
          { name: t("explore.continent.northAmerica"), icon: "globe-outline" as const },
          { name: t("explore.continent.southAmerica"), icon: "globe-outline" as const },
          { name: t("explore.continent.africa"), icon: "globe-outline" as const },
          { name: t("explore.continent.oceania"), icon: "globe-outline" as const },
        ].map((continent, index) => (
          <Badge
            key={index}
            title={continent.name}
            type="default"
            size="medium"
            style={{ marginRight: 8, marginBottom: 8 }}
            leftIcon={<Ionicons name={continent.icon} size={14} color={theme.colors.text} />}
          />
        ))}
      </View>

      {/* 인기 국가 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>{t("explore.popularCountries")}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularCountries}>
        {[
          { id: "KR", name: t("countries.KR") },
          { id: "USA", name: t("countries.USA") },
          { id: "JP", name: t("countries.JP") },
          { id: "FR", name: t("countries.FR") },
          { id: "IT", name: t("countries.IT") },
          { id: "AU", name: t("countries.AU") },
        ].map((country, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("CountryDetail", { id: country.id, name: country.name })}
          >
            <Card key={index} variant="filled" style={styles.countryCard}>
              <Ionicons name="flag-outline" size={18} color={theme.colors.text} style={styles.countryIcon} />
              <Text style={[styles.countryName, { color: theme.colors.text }]}>{country.name}</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
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
    justifyContent: "center",
    alignItems: "center",
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
    paddingBottom: 24,
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
  storyContainer: {
    paddingBottom: 24,
  },
  continentCard: {
    marginBottom: 12,
    padding: 16,
  },
  continentCardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  continentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  continentIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  continentName: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    width: "100%",
    maxWidth: 200,
    marginVertical: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
  },
  mapContainer: {
    paddingBottom: 24,
  },
  mapCard: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  mapIcon: {
    marginBottom: 12,
  },
  mapPlaceholder: {
    textAlign: "center",
  },
  continentFilters: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  popularCountries: {
    flexDirection: "row",
    marginBottom: 16,
  },
  countryCard: {
    width: 120,
    height: 80,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  countryIcon: {
    marginBottom: 8,
  },
  countryName: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ExploreScreen;
