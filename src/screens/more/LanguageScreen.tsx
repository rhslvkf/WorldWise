import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocale } from "../../contexts/LocaleContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MoreStackParamList } from "../../navigation/types";
import { LanguageSelector } from "../../components";

type LanguageScreenProps = NativeStackScreenProps<MoreStackParamList, "Language">;

const LanguageScreen: React.FC<LanguageScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const { t } = useLocale();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>{t("more.language")}</Text>
        <View style={styles.rightPlaceholder} />
      </View>

      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoText, { color: theme.colors.textSecondary }]}>{t("more.languageDescription")}</Text>
        </View>

        <LanguageSelector style={styles.languageSelector} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  rightPlaceholder: {
    width: 40,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  infoContainer: {
    marginBottom: 24,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
  languageSelector: {
    marginBottom: 20,
  },
});

export default LanguageScreen;
