import React from "react";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { LogBox } from "react-native";

// 개발 중 일부 경고 무시 (프로덕션에서는 제거할 것)
LogBox.ignoreLogs(["ViewPropTypes will be removed", "ColorPropType will be removed"]);

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
