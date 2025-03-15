import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "../types/navigation";
import { useTheme } from "../contexts/ThemeContext";
import { Text, View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// 임시 화면 컴포넌트들
const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>홈 화면</Text>
  </View>
);

const ExploreScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>탐험 화면</Text>
  </View>
);

const QuizScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>퀴즈 화면</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>프로필 화면</Text>
  </View>
);

const MoreScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>더보기 화면</Text>
  </View>
);

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC = () => {
  const { theme } = useTheme();

  // 아이콘 사이즈 설정
  const ICON_SIZE = 24;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.brandMain,
        tabBarInactiveTintColor: theme.colors.textDisabled,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.backgroundSecondary,
          paddingTop: theme.spacing.sm,
          ...theme.shadow.light,
        },
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
        // 탭 레이블 스타일
        tabBarLabelStyle: {
          fontSize: theme.typography.fontSize.label,
          marginTop: -4,
          marginBottom: 6, // 하단 레이블 마진도 증가
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "홈",
          headerTitle: "WorldWise",
          tabBarIconStyle: {
            marginBottom: theme.spacing.xs,
          },
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: "탐험",
          headerTitle: "세계 탐험",
          tabBarIconStyle: {
            marginBottom: theme.spacing.xs,
          },
          tabBarIcon: ({ color, size }) => <Ionicons name="compass-outline" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          tabBarLabel: "퀴즈",
          headerTitle: "퀴즈",
          tabBarIconStyle: {
            marginBottom: theme.spacing.xs,
          },
          tabBarIcon: ({ color, size }) => <Ionicons name="help-circle-outline" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "프로필",
          headerTitle: "내 프로필",
          tabBarIconStyle: {
            marginBottom: theme.spacing.xs,
          },
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: "더보기",
          headerTitle: "메뉴",
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={ICON_SIZE} color={color} />,
          tabBarIconStyle: {
            marginBottom: theme.spacing.xs,
          },
        }}
      />
    </Tab.Navigator>
  );
};
