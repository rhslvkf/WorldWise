import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { Card, Button, Badge } from "../../components";
import { Theme } from "../../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// 탐험 모드 유형
type ExploreMode = "story" | "map";

const ExploreScreen: React.FC = () => {
  const { theme } = useTheme();
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
              스토리 모드
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
              세계 지도
            </Text>
          </TouchableOpacity>
        </View>

        {/* 콘텐츠 영역 */}
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          {activeMode === "story" ? <StoryModeContent theme={theme} /> : <MapModeContent theme={theme} />}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// 스토리 모드 콘텐츠
const StoryModeContent: React.FC<{ theme: Theme }> = ({ theme }) => {
  // 대륙 데이터 (임시)
  const continents = [
    {
      id: "asia",
      name: "아시아",
      progress: 0.3,
      unlocked: true,
      color: theme.colors.asia,
      icon: "globe-outline" as const,
    },
    {
      id: "europe",
      name: "유럽",
      progress: 0.1,
      unlocked: true,
      color: theme.colors.europe,
      icon: "globe-outline" as const,
    },
    {
      id: "north-america",
      name: "북아메리카",
      progress: 0,
      unlocked: false,
      color: theme.colors.northAmerica,
      icon: "globe-outline" as const,
    },
    {
      id: "south-america",
      name: "남아메리카",
      progress: 0,
      unlocked: false,
      color: theme.colors.southAmerica,
      icon: "globe-outline" as const,
    },
    {
      id: "africa",
      name: "아프리카",
      progress: 0,
      unlocked: false,
      color: theme.colors.africa,
      icon: "globe-outline" as const,
    },
    {
      id: "oceania",
      name: "오세아니아",
      progress: 0,
      unlocked: false,
      color: theme.colors.oceania,
      icon: "globe-outline" as const,
    },
  ];

  return (
    <View style={styles.storyContainer}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>세계 탐험을 시작하세요!</Text>

      <Text style={[styles.sectionDescription, { color: theme.colors.textSecondary }]}>
        대륙별로 국가를 탐험하고 퀴즈를 풀면서 세계 지식을 넓혀보세요.
      </Text>

      {/* 현재 탐험 중인 대륙 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>현재 탐험 중</Text>

      {continents
        .filter((c) => c.unlocked && c.progress > 0)
        .map((continent) => (
          <ContinentCard key={continent.id} continent={continent} theme={theme} isActive={true} />
        ))}

      {/* 탐험 가능한 대륙 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>탐험 가능</Text>

      {continents
        .filter((c) => c.unlocked && c.progress === 0)
        .map((continent) => (
          <ContinentCard key={continent.id} continent={continent} theme={theme} isActive={false} />
        ))}

      {/* 잠긴 대륙 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>잠긴 대륙</Text>

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
              title={isLocked ? "잠김" : `${progressPercent}%`}
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
          {isLocked ? "잠김" : isActive ? "계속하기" : "시작하기"}
        </Button>
      </View>
    </Card>
  );
};

// 지도 모드 콘텐츠
const MapModeContent: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <View style={styles.mapContainer}>
      <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>세계 지도</Text>

      <Text style={[styles.sectionDescription, { color: theme.colors.textSecondary }]}>
        지도에서 국가를 선택하여 해당 국가에 대한 퀴즈와 정보를 확인하세요.
      </Text>

      {/* 지도 이미지 - 실제 앱에서는 상호작용 가능한 지도로 교체 */}
      <Card variant="outlined" style={styles.mapCard}>
        <Ionicons name="map" size={48} color={theme.colors.textSecondary} style={styles.mapIcon} />
        <Text style={[styles.mapPlaceholder, { color: theme.colors.textSecondary }]}>
          세계 지도가 이곳에 표시됩니다. (개발 중)
        </Text>
      </Card>

      {/* 대륙 필터 */}
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>대륙 선택</Text>

      <View style={styles.continentFilters}>
        {[
          { name: "아시아", icon: "globe-outline" as const },
          { name: "유럽", icon: "globe-outline" as const },
          { name: "북아메리카", icon: "globe-outline" as const },
          { name: "남아메리카", icon: "globe-outline" as const },
          { name: "아프리카", icon: "globe-outline" as const },
          { name: "오세아니아", icon: "globe-outline" as const },
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
      <Text style={[styles.subSectionTitle, { color: theme.colors.text }]}>인기 국가</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularCountries}>
        {["미국", "일본", "프랑스", "이탈리아", "호주"].map((country, index) => (
          <Card key={index} variant="filled" style={styles.countryCard}>
            <Ionicons name="flag-outline" size={18} color={theme.colors.text} style={styles.countryIcon} />
            <Text style={[styles.countryName, { color: theme.colors.text }]}>{country}</Text>
          </Card>
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
