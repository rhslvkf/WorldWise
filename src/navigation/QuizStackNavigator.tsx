import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QuizStackParamList } from "./types";
import { useTheme } from "../contexts/ThemeContext";
import QuizScreen from "../screens/quiz/QuizScreen";
import QuizMainScreen from "../screens/QuizMainScreen";
import QuizPlayScreen from "../screens/QuizPlayScreen";
import QuizResultScreen from "../screens/QuizResultScreen";

const Stack = createNativeStackNavigator<QuizStackParamList>();

const QuizStackNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.background },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="QuizMain" component={QuizScreen} />
      <Stack.Screen name="QuizPlay" component={QuizPlayScreen} />
      <Stack.Screen name="QuizResult" component={QuizResultScreen} />
    </Stack.Navigator>
  );
};

export default QuizStackNavigator;
