export const COLORS = {
  // 브랜드 컬러
  brandMain: "#1E88E5", // 지구와 지도를 연상시키는 신뢰감 있는 파란색
  brandSecondary: "#7986CB", // 탐험과 발견의 느낌을 주는 보라빛 파란색

  // 대륙별 컬러 코드
  asia: "#FF9800", // 따뜻하고 활기찬 주황색
  europe: "#5C6BC0", // 클래식하고 안정적인 파란색
  northAmerica: "#66BB6A", // 자연과 풍요로움을 나타내는 녹색
  southAmerica: "#FFC107", // 활기 넘치고 밝은 노란색
  africa: "#EF5350", // 열정과 생동감을 주는 붉은색
  oceania: "#26C6DA", // 바다와 하늘을 연상시키는 청록색

  // UI 컬러 - 라이트 모드
  backgroundLight: "#FFFFFF",
  backgroundLightSecondary: "#F5F7FA",
  surfaceLight: "#FFFFFF",

  // UI 컬러 - 다크 모드
  backgroundDark: "#121212",
  backgroundDarkSecondary: "#1E1E1E",
  surfaceDark: "#242424",

  // 기능적 컬러
  success: "#4CAF50", // 정답, 완료, 성취
  warning: "#FFC107", // 주의 필요, 힌트
  error: "#F44336", // 오답, 오류
  info: "#2196F3", // 도움말, 팁

  // 텍스트 컬러 - 라이트 모드
  textPrimaryLight: "#212121",
  textSecondaryLight: "#757575",
  textDisabledLight: "#9E9E9E",

  // 텍스트 컬러 - 다크 모드
  textPrimaryDark: "#FFFFFF",
  textSecondaryDark: "#B0B0B0",
  textDisabledDark: "#6B6B6B",
};

export const FONT_SIZE = {
  heading1: 28,
  heading2: 24,
  heading3: 20,
  heading4: 18,
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 12,
  label: 11,
};

export const LINE_HEIGHT = {
  heading1: 36,
  heading2: 32,
  heading3: 28,
  heading4: 24,
  bodyLarge: 24,
  bodyMedium: 20,
  bodySmall: 16,
  label: 16,
};

export const FONT_WEIGHT = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

// 폰트 패밀리 추가
export const FONT_FAMILY = {
  regular: "System",
  medium: "System",
  light: "System",
  thin: "System",
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 999, // 완전 라운드를 위한 큰 값
};

export const SHADOW = {
  light: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  heavy: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
};

// 전체 테마 객체
const lightTheme = {
  colors: {
    background: COLORS.backgroundLight,
    backgroundSecondary: COLORS.backgroundLightSecondary,
    surface: COLORS.surfaceLight,
    text: COLORS.textPrimaryLight,
    textSecondary: COLORS.textSecondaryLight,
    textDisabled: COLORS.textDisabledLight,
    ...COLORS,
  },
  typography: {
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT,
    fontWeight: FONT_WEIGHT,
    fontFamily: FONT_FAMILY,
  },
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  shadow: SHADOW,
};

const darkTheme = {
  colors: {
    background: COLORS.backgroundDark,
    backgroundSecondary: COLORS.backgroundDarkSecondary,
    surface: COLORS.surfaceDark,
    text: COLORS.textPrimaryDark,
    textSecondary: COLORS.textSecondaryDark,
    textDisabled: COLORS.textDisabledDark,
    ...COLORS,
  },
  typography: {
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT,
    fontWeight: FONT_WEIGHT,
    fontFamily: FONT_FAMILY,
  },
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  shadow: SHADOW,
};

export type Theme = typeof lightTheme;

export { lightTheme, darkTheme };
