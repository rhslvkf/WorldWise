import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocale } from "../../contexts/LocaleContext";
import { Card, Badge } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MoreStackScreenProps } from "../../navigation/types";

type MoreScreenProps = MoreStackScreenProps<"MoreMain">;

const MoreScreen: React.FC<MoreScreenProps> = ({ navigation }) => {
  const { theme, toggleTheme, isDarkMode } = useTheme();
  const { t } = useLocale();

  // 설정 항목 데이터
  const settings = [
    {
      id: "account",
      title: t("more.accountSettings"),
      icon: "person-circle-outline" as const,
      items: [
        { id: "profile", title: t("profile.editProfile"), icon: "person-outline" as const, onPress: () => {} },
        {
          id: "language",
          title: t("more.language"),
          icon: "language-outline" as const,
          onPress: () => navigation.navigate("Language"),
        },
        {
          id: "notifications",
          title: t("more.notifications"),
          icon: "notifications-outline" as const,
          onPress: () => {},
        },
      ],
    },
    {
      id: "app",
      title: t("more.appSettings"),
      icon: "settings-outline" as const,
      items: [
        { id: "theme", title: t("more.theme"), icon: "color-palette-outline" as const },
        { id: "sound", title: t("more.soundVibration"), icon: "volume-high-outline" as const },
        { id: "cache", title: t("common.delete"), icon: "trash-outline" as const },
      ],
    },
    {
      id: "help",
      title: t("more.help"),
      icon: "information-circle-outline" as const,
      items: [
        { id: "feedback", title: t("more.feedback"), icon: "mail-outline" as const },
        { id: "faq", title: t("more.faq"), icon: "help-circle-outline" as const },
        { id: "about", title: t("more.about"), icon: "information-outline" as const },
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
                {isDarkMode ? t("more.lightMode") : t("more.darkMode")}
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
                <TouchableOpacity key={item.id} onPress={item.onPress}>
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
          <Text style={[styles.versionText, { color: theme.colors.textDisabled }]}>{t("more.appVersion")} 1.0.0</Text>
          <TouchableOpacity style={styles.logoutButton}>
            <Ionicons name="log-out-outline" size={16} color={theme.colors.error} style={styles.logoutIcon} />
            <Text style={[styles.logoutText, { color: theme.colors.error }]}>{t("auth.logout")}</Text>
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
