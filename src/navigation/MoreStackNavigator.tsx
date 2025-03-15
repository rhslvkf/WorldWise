import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MoreStackParamList } from "./types";
import { useTheme } from "../contexts/ThemeContext";
import MoreScreen from "../screens/more/MoreScreen";
import LanguageScreen from "../screens/more/LanguageScreen";

const Stack = createNativeStackNavigator<MoreStackParamList>();

const MoreStackNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.background },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="MoreMain" component={MoreScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      {/* 추가 화면들은 여기에 추가하세요 */}
    </Stack.Navigator>
  );
};

export default MoreStackNavigator;
