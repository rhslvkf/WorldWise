import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./types";
import { useTheme } from "../contexts/ThemeContext";
import HomeScreen from "../screens/home/HomeScreen";
import CountryDetail from "../screens/country/CountryDetail";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.background },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="CountryDetail" component={CountryDetail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
