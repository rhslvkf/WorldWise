import React from "react";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { RootStackParamList } from "../types/navigation";
import { useTheme } from "../contexts/ThemeContext";
import { Text, View } from "react-native";

// 임시 온보딩 화면
const OnboardingScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>온보딩 화면</Text>
  </View>
);

// 임시 인증 화면
const AuthScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>인증 화면</Text>
  </View>
);

// 네비게이터 임포트
import { MainTabNavigator } from "./MainTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  const { theme, isDarkMode } = useTheme();

  // 실제 앱에서는 로그인 상태 등을 확인하여 초기 라우트를 결정할 것입니다.
  const isAuthenticated = true; // 임시로 인증된 상태로 설정
  const hasCompletedOnboarding = true; // 임시로 온보딩 완료 상태로 설정

  // 기본 테마를 선택하고 필요한 색상만 오버라이드
  const baseTheme = isDarkMode ? DarkTheme : DefaultTheme;
  const customTheme = {
    ...baseTheme,
    dark: isDarkMode,
    colors: {
      ...baseTheme.colors,
      primary: theme.colors.brandMain,
      background: theme.colors.background,
      card: theme.colors.backgroundSecondary,
      text: theme.colors.text,
      border: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      notification: theme.colors.error,
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <Stack.Navigator
        initialRouteName={!hasCompletedOnboarding ? "Onboarding" : !isAuthenticated ? "Auth" : "Main"}
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
