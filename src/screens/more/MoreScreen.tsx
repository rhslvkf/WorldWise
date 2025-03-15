import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { Card, Badge } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const MoreScreen: React.FC = () => {
  const { theme, toggleTheme, isDarkMode } = useTheme();

  // 설정 항목 데이터
  const settings = [
    {
      id: "account",
      title: "계정 설정",
      icon: "person-circle-outline" as const,
      items: [
        { id: "profile", title: "프로필 정보", icon: "person-outline" as const },
        { id: "language", title: "언어 설정", icon: "language-outline" as const },
        { id: "notifications", title: "알림 설정", icon: "notifications-outline" as const },
      ],
    },
    {
      id: "app",
      title: "앱 설정",
      icon: "settings-outline" as const,
      items: [
        { id: "theme", title: "테마 설정", icon: "color-palette-outline" as const },
        { id: "sound", title: "소리 설정", icon: "volume-high-outline" as const },
        { id: "cache", title: "캐시 지우기", icon: "trash-outline" as const },
      ],
    },
    {
      id: "help",
      title: "도움말 및 정보",
      icon: "information-circle-outline" as const,
      items: [
        { id: "feedback", title: "피드백 보내기", icon: "mail-outline" as const },
        { id: "faq", title: "자주 묻는 질문", icon: "help-circle-outline" as const },
        { id: "about", title: "앱 정보", icon: "information-outline" as const },
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* 계정 요약 정보 */}
        <Card variant="outlined" style={styles.profileCard}>
          <View style={styles.profileContent}>
            <View style={[styles.profileAvatar, { backgroundColor: theme.colors.brandMain }]}>
              <Ionicons name="person" size={24} color={theme.colors.backgroundLight} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={[styles.profileName, { color: theme.colors.text }]}>김세계</Text>
              <Text style={[styles.profileEmail, { color: theme.colors.textSecondary }]}>kim@worldwise.com</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="create-outline" size={20} color={theme.colors.brandMain} />
            </TouchableOpacity>
          </View>
        </Card>

        {/* 다크 모드 토글 */}
        <Card variant="outlined" style={styles.themeToggleCard}>
          <TouchableOpacity style={styles.themeToggleContent} onPress={toggleTheme}>
            <View style={styles.themeToggleLeft}>
              <View style={[styles.themeIcon, { backgroundColor: `${theme.colors.warning}30` }]}>
                <Ionicons name={isDarkMode ? "moon-outline" : "sunny-outline"} size={18} color={theme.colors.warning} />
              </View>
              <Text style={[styles.themeToggleText, { color: theme.colors.text }]}>
                {isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
              </Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color={theme.colors.textSecondary} />
          </TouchableOpacity>
        </Card>

        {/* 설정 섹션들 */}
        {settings.map((section) => (
          <View key={section.id} style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionIcon, { backgroundColor: `${theme.colors.brandMain}30` }]}>
                <Ionicons name={section.icon} size={16} color={theme.colors.brandMain} />
              </View>
              <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{section.title}</Text>
            </View>

            <Card variant="outlined" style={styles.sectionCard}>
              {section.items.map((item, index) => (
                <TouchableOpacity key={item.id}>
                  <View
                    style={[
                      styles.settingItem,
                      index < section.items.length - 1 && {
                        borderBottomWidth: 1,
                        borderBottomColor: theme.colors.backgroundSecondary,
                      },
                    ]}
                  >
                    <View style={styles.settingItemLeft}>
                      <View style={[styles.settingItemIcon, { backgroundColor: `${theme.colors.brandSecondary}20` }]}>
                        <Ionicons name={item.icon} size={16} color={theme.colors.brandSecondary} />
                      </View>
                      <Text style={[styles.settingItemText, { color: theme.colors.text }]}>{item.title}</Text>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={18} color={theme.colors.textSecondary} />
                  </View>
                </TouchableOpacity>
              ))}
            </Card>
          </View>
        ))}

        {/* 추가 버전 정보 */}
        <View style={styles.versionContainer}>
          <Text style={[styles.versionText, { color: theme.colors.textDisabled }]}>WorldWise 버전 1.0.0</Text>
          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={16} color={theme.colors.error} style={styles.logoutIcon} />
            <Text style={[styles.logoutText, { color: theme.colors.error }]}>로그아웃</Text>
          </TouchableOpacity>
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
  profileCard: {
    padding: 16,
    marginBottom: 16,
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 14,
  },
  editButton: {
    padding: 8,
  },
  themeToggleCard: {
    marginBottom: 16,
  },
  themeToggleContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  themeToggleLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  themeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  themeToggleText: {
    fontSize: 16,
    fontWeight: "500",
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  sectionCard: {
    overflow: "hidden",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  settingItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingItemIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  settingItemText: {
    fontSize: 14,
  },
  versionContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  versionText: {
    fontSize: 12,
    marginBottom: 8,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  logoutIcon: {
    marginRight: 6,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default MoreScreen;
