/**
 * 국가 기본 정보 타입 정의
 */
export interface Country {
  id: string; // 국가 코드 (예: KR, US)
  continent: string; // 대륙 (예: asia, europe)
}

/**
 * 퀴즈 유형 열거형
 */
export enum QuizType {
  MULTIPLE_CHOICE = "multipleChoice", // 객관식
  TRUE_FALSE = "trueFalse", // O/X 퀴즈
  IMAGE_QUIZ = "imageQuiz", // 이미지 퀴즈
}

/**
 * 퀴즈 카테고리 열거형
 */
export enum QuizCategory {
  GEOGRAPHY = "geography", // 기본 지리
  HISTORY = "history", // 역사
  CULTURE = "culture", // 문화
  FOOD = "food", // 음식
  PEOPLE = "people", // 유명 인물
  NATURE = "nature", // 자연 및 환경
  ECONOMY = "economy", // 경제 및 정치
}

/**
 * 난이도 열거형
 */
export enum Difficulty {
  EASY = "easy", // 쉬움
  MEDIUM = "medium", // 중간
  HARD = "hard", // 어려움
}

/**
 * 퀴즈 문항 기본 인터페이스
 */
export interface QuizItem {
  id: string; // 문항 고유 ID
  countryId: string; // 관련 국가 ID
  type: QuizType; // 퀴즈 유형
  category: QuizCategory; // 퀴즈 카테고리
  difficulty: Difficulty; // 난이도
  image?: string; // 이미지 경로 (이미지 퀴즈인 경우)
  translationKey: string; // 다국어 리소스 키
}

/**
 * 객관식 문항
 */
export interface MultipleChoiceQuiz extends QuizItem {
  type: QuizType.MULTIPLE_CHOICE;
  correctOptionIndex: number; // 정답 인덱스 (0-3)
}

/**
 * O/X 문항
 */
export interface TrueFalseQuiz extends QuizItem {
  type: QuizType.TRUE_FALSE;
  correctAnswer: boolean; // 정답 (true/false)
}

/**
 * 이미지 퀴즈 문항
 */
export interface ImageQuiz extends QuizItem {
  type: QuizType.IMAGE_QUIZ;
  image: string; // 이미지 경로 (필수)
  correctOptionIndex: number; // 정답 인덱스 (0-3)
}

/**
 * 모든 퀴즈 유형 통합 타입
 */
export type Quiz = MultipleChoiceQuiz | TrueFalseQuiz | ImageQuiz;

/**
 * 화면에 표시할 간소화된 퀴즈 질문 인터페이스
 */
export interface QuizQuestion {
  id: string; // 질문 고유 ID
  question: string; // 질문 텍스트
  options: string[]; // 답변 옵션
  correctAnswer: number | boolean; // 정답 (인덱스 또는 true/false)
  explanation: string; // 설명 텍스트
  image?: string; // 선택적 이미지 URL
  quizType: QuizType; // 퀴즈 유형 (OX, 객관식, 이미지)
}

/**
 * 다국어 리소스 항목 인터페이스
 */
export interface QuizTranslation {
  question: string; // 문제 텍스트
  options?: string[]; // 보기 (객관식, 이미지 퀴즈)
  explanation: string; // 설명 텍스트
}

/**
 * 국가 정보 다국어 리소스 인터페이스
 */
export interface CountryTranslation {
  name: string; // 국가명
  capital: string; // 수도
  description: string; // 국가 설명
  facts: string[]; // 흥미로운 사실들
}
