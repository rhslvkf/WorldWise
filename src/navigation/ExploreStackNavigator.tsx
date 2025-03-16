import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploreStackParamList } from "./types";
import { useTheme } from "../contexts/ThemeContext";
import ExploreScreen from "../screens/explore/ExploreScreen";
import CountryDetail from "../screens/country/CountryDetail";

const Stack = createNativeStackNavigator<ExploreStackParamList>();

const ExploreStackNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.background },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="ExploreMain" component={ExploreScreen} />
      <Stack.Screen name="CountryDetail" component={CountryDetail} />
      {/* CategoryDetail 화면이 구현되면 여기에 추가하세요 */}
    </Stack.Navigator>
  );
};

export default ExploreStackNavigator;
