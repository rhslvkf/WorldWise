import React, { createContext, useState, useEffect, useContext } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme, Theme } from "../styles/theme";

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// ThemeContext 생성
export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDarkMode: false,
  toggleTheme: () => {},
});

// 테마 컨텍스트 훅 사용을 위한 커스텀 훅
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider 컴포넌트
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 시스템 컬러 스킴 감지
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  // 시스템 설정 변경 시 자동 업데이트
  useEffect(() => {
    setIsDarkMode(colorScheme === "dark");
  }, [colorScheme]);

  // 현재 테마 선택
  const theme = isDarkMode ? darkTheme : lightTheme;

  // 테마 수동 토글 함수
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
