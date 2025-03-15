import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// 메인 탭 네비게이션 파라미터 목록
export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Quiz: undefined;
  Profile: undefined;
  More: NavigatorScreenParams<MoreStackParamList>;
};

// 더보기 스택 네비게이션 파라미터 목록
export type MoreStackParamList = {
  MoreMain: undefined;
  Settings: undefined;
  Language: undefined;
  About: undefined;
  Help: undefined;
  Feedback: undefined;
  Notifications: undefined;
  Privacy: undefined;
  Terms: undefined;
};

// 홈 스택 네비게이션 파라미터 목록
export type HomeStackParamList = {
  HomeMain: undefined;
  CountryDetail: { id: string; name: string };
};

// 탐색 스택 네비게이션 파라미터 목록
export type ExploreStackParamList = {
  ExploreMain: undefined;
  CategoryDetail: { id: string; name: string };
  CountryDetail: { id: string; name: string };
};

// 퀴즈 스택 네비게이션 파라미터 목록
export type QuizStackParamList = {
  QuizMain: undefined;
  QuizPlay: { quizId: string; quizName: string };
  QuizResult: { score: number; total: number; quizId: string };
};

// 프로필 스택 네비게이션 파라미터 목록
export type ProfileStackParamList = {
  ProfileMain: undefined;
  EditProfile: undefined;
  Achievements: undefined;
  Statistics: undefined;
  History: undefined;
};

// 인증 스택 네비게이션 파라미터 목록
export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

// 루트 스택 네비게이션 파라미터 목록
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  Modal: undefined;
  NotFound: undefined;
};

// 복합 스크린 타입 헬퍼
export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type MoreStackScreenProps<T extends keyof MoreStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<MoreStackParamList, T>,
  MainTabScreenProps<"More">
>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, T>,
  MainTabScreenProps<"Home">
>;

export type ExploreStackScreenProps<T extends keyof ExploreStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<ExploreStackParamList, T>,
  MainTabScreenProps<"Explore">
>;

export type QuizStackScreenProps<T extends keyof QuizStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<QuizStackParamList, T>,
  MainTabScreenProps<"Quiz">
>;

export type ProfileStackScreenProps<T extends keyof ProfileStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<ProfileStackParamList, T>,
  MainTabScreenProps<"Profile">
>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, T>,
  RootStackScreenProps<"Auth">
>;

// 기본 선언 확장
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
