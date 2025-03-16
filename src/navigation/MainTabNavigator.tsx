import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
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
  const { t } = useLocale();
  const insets = useSafeAreaInsets();

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
          tabBarLabel: t("home.title"),
          headerTitle: t("home.title"),
          tabBarIcon: ({ color }) => <Ionicons name="home" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackNavigator}
        options={{
          tabBarLabel: t("explore.title"),
          headerTitle: t("explore.title"),
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizStackNavigator}
        options={{
          tabBarLabel: ({ focused, color }) => <Text style={{ color, fontSize: 10 }}>{t("quiz.title")}</Text>,
          tabBarIcon: ({ color, size }) => <Ionicons name="help-circle" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: t("profile.title"),
          headerTitle: t("profile.title"),
          tabBarIcon: ({ color }) => <Ionicons name="person" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreStackNavigator}
        options={{
          tabBarLabel: t("more.title"),
          headerTitle: t("more.title"),
          tabBarIcon: ({ color }) => <Ionicons name="menu" size={ICON_SIZE} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
