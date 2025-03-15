import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { MainTabNavigator } from "./MainTabNavigator";
import { RootStackParamList } from "../types/navigation";
import { useTheme } from "../contexts/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
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

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  const { theme, isDarkMode } = useTheme();

  // 실제 앱에서는 로그인 상태 등을 확인하여 초기 라우트를 결정할 것입니다.
  const isAuthenticated = true; // 임시로 인증된 상태로 설정
  const hasCompletedOnboarding = true; // 임시로 온보딩 완료 상태로 설정

  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
    </SafeAreaProvider>
  );
};
