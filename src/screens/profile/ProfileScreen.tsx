import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { Card, Button, Badge } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen: React.FC = () => {
  const { theme } = useTheme();

  // 유저 데이터 (임시)
  const user = {
    name: "김세계",
    level: 12,
    xp: 3500,
    xpToNextLevel: 5000,
    completedQuizzes: 84,
    totalCorrect: 542,
    totalQuestions: 720,
    streak: 7,
    badges: [
      {
        id: "asia_master",
        name: "아시아 마스터",
        description: "아시아 국가 퀴즈 완료",
        icon: "globe-outline" as const,
      },
      { id: "streak_7", name: "7일 연속", description: "7일 연속 퀴즈 풀이", icon: "flame-outline" as const },
      { id: "quiz_50", name: "퀴즈 50개", description: "50개 퀴즈 완료", icon: "ribbon-outline" as const },
    ],
    achievements: [
      { id: "world_map", name: "세계 지도", progress: 0.3, total: 195, current: 59, icon: "map-outline" as const },
      {
        id: "capitals",
        name: "수도 전문가",
        progress: 0.5,
        total: 195,
        current: 98,
        icon: "business-outline" as const,
      },
      { id: "flags", name: "국기 수집가", progress: 0.2, total: 195, current: 39, icon: "flag-outline" as const },
    ],
  };

  // 정답률 계산
  const accuracyRate = Math.round((user.totalCorrect / user.totalQuestions) * 100);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* 프로필 헤더 */}
        <View style={styles.profileHeader}>
          <View style={[styles.profileImageContainer, { backgroundColor: theme.colors.brandMain }]}>
            <Ionicons name="person" size={40} color={theme.colors.backgroundLight} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: theme.colors.text }]}>{user.name}</Text>
            <View style={styles.levelContainer}>
              <Badge
                title={`레벨 ${user.level}`}
                type="success"
                size="small"
                leftIcon={<Ionicons name="star" size={12} color={theme.colors.success} />}
              />
              <Badge
                title={`${user.streak}일 연속`}
                type="warning"
                size="small"
                style={{ marginLeft: 8 }}
                leftIcon={<Ionicons name="flame" size={12} color={theme.colors.warning} />}
              />
            </View>
          </View>
          <Button variant="outline" size="small">
            편집
          </Button>
        </View>

        {/* XP 프로그레스 */}
        <Card variant="outlined" style={styles.xpCard}>
          <View style={styles.xpHeader}>
            <View style={styles.xpTitleContainer}>
              <Ionicons name="trophy" size={16} color={theme.colors.brandMain} style={styles.xpIcon} />
              <Text style={[styles.xpTitle, { color: theme.colors.text }]}>경험치</Text>
            </View>
            <Text style={[styles.xpValue, { color: theme.colors.text }]}>
              {user.xp} / {user.xpToNextLevel} XP
            </Text>
          </View>
          <View style={[styles.xpProgressBar, { backgroundColor: `${theme.colors.brandMain}30` }]}>
            <View
              style={[
                styles.xpProgress,
                {
                  backgroundColor: theme.colors.brandMain,
                  width: `${(user.xp / user.xpToNextLevel) * 100}%`,
                },
              ]}
            />
          </View>
          <Text style={[styles.xpNextLevel, { color: theme.colors.textSecondary }]}>
            다음 레벨까지 {user.xpToNextLevel - user.xp} XP 남음
          </Text>
        </Card>

        {/* 통계 카드 */}
        <Card variant="outlined" style={styles.statsCard}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>나의 통계</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <View style={[styles.statIconContainer, { backgroundColor: `${theme.colors.success}30` }]}>
                <Ionicons name="checkmark-done-outline" size={20} color={theme.colors.success} />
              </View>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>{user.completedQuizzes}</Text>
              <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>완료한 퀴즈</Text>
            </View>

            <View style={styles.statItem}>
              <View style={[styles.statIconContainer, { backgroundColor: `${theme.colors.info}30` }]}>
                <Ionicons name="analytics-outline" size={20} color={theme.colors.info} />
              </View>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>{accuracyRate}%</Text>
              <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>정답률</Text>
            </View>

            <View style={styles.statItem}>
              <View style={[styles.statIconContainer, { backgroundColor: `${theme.colors.warning}30` }]}>
                <Ionicons name="flame-outline" size={20} color={theme.colors.warning} />
              </View>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>{user.streak}</Text>
              <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>연속일</Text>
            </View>
          </View>
        </Card>

        {/* 배지 섹션 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>획득한 배지</Text>
            <TouchableOpacity>
              <Text style={[styles.viewAllButton, { color: theme.colors.brandMain }]}>모두 보기</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.badgesContainer}>
            {user.badges.map((badge) => (
              <Card key={badge.id} variant="outlined" style={styles.badgeCard}>
                <View style={[styles.badgeIconContainer, { backgroundColor: `${theme.colors.brandMain}30` }]}>
                  <Ionicons name={badge.icon} size={24} color={theme.colors.brandMain} />
                </View>
                <Text style={[styles.badgeName, { color: theme.colors.text }]}>{badge.name}</Text>
                <Text style={[styles.badgeDescription, { color: theme.colors.textSecondary }]} numberOfLines={2}>
                  {badge.description}
                </Text>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* 도전 과제 섹션 */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>도전 과제</Text>

          {user.achievements.map((achievement) => (
            <Card key={achievement.id} variant="outlined" style={styles.achievementCard}>
              <View style={styles.achievementContent}>
                <View
                  style={[styles.achievementIconContainer, { backgroundColor: `${theme.colors.brandSecondary}30` }]}
                >
                  <Ionicons name={achievement.icon} size={20} color={theme.colors.brandSecondary} />
                </View>
                <View style={styles.achievementInfo}>
                  <Text style={[styles.achievementName, { color: theme.colors.text }]}>{achievement.name}</Text>
                  <View
                    style={[styles.achievementProgressBar, { backgroundColor: `${theme.colors.brandSecondary}30` }]}
                  >
                    <View
                      style={[
                        styles.achievementProgress,
                        {
                          backgroundColor: theme.colors.brandSecondary,
                          width: `${achievement.progress * 100}%`,
                        },
                      ]}
                    />
                  </View>
                  <Text style={[styles.achievementStatus, { color: theme.colors.textSecondary }]}>
                    {achievement.current} / {achievement.total} 완료
                  </Text>
                </View>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  levelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  xpCard: {
    padding: 16,
    marginBottom: 16,
  },
  xpHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  xpTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  xpIcon: {
    marginRight: 8,
  },
  xpTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  xpValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  xpProgressBar: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  xpProgress: {
    height: "100%",
  },
  xpNextLevel: {
    fontSize: 12,
    textAlign: "right",
  },
  statsCard: {
    padding: 16,
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
  },
  statItem: {
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
  },
  section: {
    marginBottom: 20,
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
  viewAllButton: {
    fontSize: 14,
    fontWeight: "500",
  },
  badgesContainer: {
    flexDirection: "row",
    marginLeft: -4,
    marginRight: -4,
  },
  badgeCard: {
    width: 140,
    padding: 16,
    marginHorizontal: 4,
    alignItems: "center",
  },
  badgeIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  badgeName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "center",
  },
  badgeDescription: {
    fontSize: 12,
    textAlign: "center",
  },
  achievementCard: {
    padding: 16,
    marginBottom: 12,
  },
  achievementContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  achievementIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  achievementProgressBar: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 6,
  },
  achievementProgress: {
    height: "100%",
  },
  achievementStatus: {
    fontSize: 12,
  },
});

export default ProfileScreen;
