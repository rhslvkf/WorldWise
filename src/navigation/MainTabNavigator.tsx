import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { MainTabParamList } from "../types/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocale } from "../contexts/LocaleContext";

// 화면 및 네비게이터 임포트
import HomeStackNavigator from "./HomeStackNavigator";
import ExploreStackNavigator from "./ExploreStackNavigator";
import QuizStackNavigator from "./QuizStackNavigator";
import ProfileScreen from "../screens/profile/ProfileScreen";
import MoreStackNavigator from "./MoreStackNavigator";

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const { t, language } = useLocale();
  const insets = useSafeAreaInsets();

  // language가 변경될 때마다 콘솔 출력으로 확인
  useEffect(() => {
    console.log("[MainTabNavigator] 현재 언어:", language);
  }, [language]);

  // 아이콘 사이즈 설정
  const ICON_SIZE = 26;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          paddingTop: theme.spacing.sm,
          ...theme.shadow.light,
          marginTop: -33,
        },
        tabBarActiveTintColor: theme.colors.brandMain,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarLabelStyle: {
          fontSize: theme.typography.fontSize.label,
          fontWeight: "500",
          marginTop: 3,
        },
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.surface,
          shadowColor: "transparent",
          elevation: 0,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontWeight: theme.typography.fontWeight.semiBold as any,
          fontSize: theme.typography.fontSize.heading3,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontSize: 10, fontWeight: focused ? "600" : "400" }}>{t("home.title")}</Text>
          ),
          headerTitle: t("home.title"),
          tabBarIcon: ({ color }) => <Ionicons name="home" size={ICON_SIZE} color={color} />,
        }}
        key={`home-${language}`}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackNavigator}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontSize: 10, fontWeight: focused ? "600" : "400" }}>{t("explore.title")}</Text>
          ),
          headerTitle: t("explore.title"),
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={ICON_SIZE} color={color} />,
        }}
        key={`explore-${language}`}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizStackNavigator}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontSize: 10, fontWeight: focused ? "600" : "400" }}>{t("quiz.title")}</Text>
          ),
          tabBarIcon: ({ color }) => <Ionicons name="help-circle" size={ICON_SIZE} color={color} />,
        }}
        key={`quiz-${language}`}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontSize: 10, fontWeight: focused ? "600" : "400" }}>{t("profile.title")}</Text>
          ),
          headerTitle: t("profile.title"),
          tabBarIcon: ({ color }) => <Ionicons name="person" size={ICON_SIZE} color={color} />,
        }}
        key={`profile-${language}`}
      />
      <Tab.Screen
        name="More"
        component={MoreStackNavigator}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ color, fontSize: 10, fontWeight: focused ? "600" : "400" }}>{t("more.title")}</Text>
          ),
          headerTitle: t("more.title"),
          tabBarIcon: ({ color }) => <Ionicons name="menu" size={ICON_SIZE} color={color} />,
        }}
        key={`more-${language}`}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
