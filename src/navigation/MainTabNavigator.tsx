import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { MainTabParamList } from "../types/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// 화면 임포트
import ExploreScreen from "../screens/explore/ExploreScreen";
import HomeScreen from "../screens/home/HomeScreen";
import MoreScreen from "../screens/more/MoreScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import QuizScreen from "../screens/quiz/QuizScreen";

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
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
        component={HomeScreen}
        options={{
          tabBarLabel: "홈",
          headerTitle: "WorldWise",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: "탐험",
          headerTitle: "세계 탐험",
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          tabBarLabel: "퀴즈",
          headerTitle: "퀴즈",
          tabBarIcon: ({ color }) => <Ionicons name="help-circle" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "프로필",
          headerTitle: "내 프로필",
          tabBarIcon: ({ color }) => <Ionicons name="person" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: "더보기",
          headerTitle: "메뉴",
          tabBarIcon: ({ color }) => <Ionicons name="menu" size={ICON_SIZE} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
