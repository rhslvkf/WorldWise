import { NavigatorScreenParams } from "@react-navigation/native";

// 탭 네비게이션 타입
export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Quiz: undefined;
  Profile: undefined;
  More: undefined;
};

// 홈 스택 네비게이션 타입
export type HomeStackParamList = {
  HomeMain: undefined;
  DailyChallenge: { countryId: string };
  QuizDetails: { quizId: string; type: string };
};

// 탐험 스택 네비게이션 타입
export type ExploreStackParamList = {
  ExploreMain: undefined;
  StoryMode: undefined;
  CountryDetails: { countryId: string };
  RegionDetails: { regionId: string };
};

// 퀴즈 스택 네비게이션 타입
export type QuizStackParamList = {
  QuizMain: undefined;
  QuizCategory: { categoryId: string };
  QuizDifficulty: { difficultyId: string };
  QuizCountry: { countryId: string };
  QuizSession: {
    quizId: string;
    type: "category" | "country" | "difficulty" | "challenge";
    timeLimit?: number;
  };
  QuizResults: {
    score: number;
    totalQuestions: number;
    timeSpent: number;
    quizId: string;
  };
};

// 프로필 스택 네비게이션 타입
export type ProfileStackParamList = {
  ProfileMain: undefined;
  Statistics: undefined;
  Badges: undefined;
  Achievements: undefined;
  Leaderboard: { type: "global" | "regional" | "friends" | "weekly" | "monthly" };
};

// 더보기 스택 네비게이션 타입
export type MoreStackParamList = {
  MoreMain: undefined;
  Settings: undefined;
  Help: undefined;
  About: undefined;
  LanguageSettings: undefined;
  NotificationCenter: undefined;
  InviteFriends: undefined;
};

// 인증 스택 네비게이션 타입
export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

// 루트 네비게이션 타입
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Onboarding: undefined;
  QuizModal: { quizId: string };
  NotificationModal: { notificationId: string };
};
