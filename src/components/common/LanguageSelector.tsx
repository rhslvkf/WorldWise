import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, Animated } from "react-native";
import { useLocale } from "../../contexts/LocaleContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

interface LanguageSelectorProps {
  style?: StyleProp<ViewStyle>;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ style }) => {
  const { language, setLanguage, languages, t } = useLocale();
  const { theme } = useTheme();

  // 언어 선택 처리
  const handleLanguageSelect = async (languageCode: string) => {
    await setLanguage(languageCode);
  };

  return (
    <View style={[styles.container, style]}>
      {Object.entries(languages).map(([code, languageInfo]) => (
        <TouchableOpacity
          key={code}
          style={[
            styles.languageOption,
            language === code && {
              borderColor: theme.colors.brandMain,
              backgroundColor: `${theme.colors.brandMain}10`,
            },
            { borderColor: theme.colors.backgroundSecondary },
          ]}
          onPress={() => handleLanguageSelect(code)}
        >
          <View style={styles.languageContent}>
            <Text
              style={[
                styles.languageName,
                { color: theme.colors.text },
                language === code && { color: theme.colors.brandMain, fontWeight: "600" },
              ]}
            >
              {languageInfo.nativeName}
            </Text>
            <Text
              style={[
                styles.languageLocalName,
                { color: theme.colors.textSecondary },
                language === code && { color: theme.colors.brandMain },
              ]}
            >
              {languageInfo.name}
            </Text>
          </View>

          {language === code && (
            <View style={[styles.checkIcon, { backgroundColor: theme.colors.brandMain }]}>
              <Ionicons name="checkmark" size={14} color="#fff" />
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  languageOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 12,
  },
  languageContent: {
    flexDirection: "column",
  },
  languageName: {
    fontSize: 16,
    marginBottom: 4,
  },
  languageLocalName: {
    fontSize: 14,
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LanguageSelector;
