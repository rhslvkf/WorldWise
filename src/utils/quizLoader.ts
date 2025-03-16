import { Quiz } from "../types/quiz";
import quizzes from "../data/quizzes";
import i18n from "../i18n/i18n";

/**
 * 특정 국가의 퀴즈 문항을 로드하는 함수
 * @param countryId 국가 ID (예: 'KR', 'US')
 * @returns 해당 국가 관련 퀴즈 문항 배열
 */
export const loadCountryQuizzes = (countryId: string): Quiz[] => {
  return quizzes.filter((quiz) => quiz.countryId === countryId);
};

/**
 * 특정 카테고리의 퀴즈 문항을 로드하는 함수
 * @param categoryId 카테고리 ID
 * @returns 해당 카테고리 관련 퀴즈 문항 배열
 */
export const loadCategoryQuizzes = (categoryId: string): Quiz[] => {
  return quizzes.filter((quiz) => quiz.category === categoryId);
};

/**
 * 특정 난이도의 퀴즈 문항을 로드하는 함수
 * @param difficultyId 난이도 ID
 * @returns 해당 난이도의 퀴즈 문항 배열
 */
export const loadDifficultyQuizzes = (difficultyId: string): Quiz[] => {
  return quizzes.filter((quiz) => quiz.difficulty === difficultyId);
};

/**
 * 문항의 다국어 리소스를 로드하는 함수
 * @param quiz 퀴즈 문항
 * @returns 현재 언어로 된 문항의 번역 내용
 */
export const loadQuizTranslation = (quiz: Quiz) => {
  const translationKey = quiz.translationKey;
  return i18n.t(translationKey, { defaultValue: { question: "Translation not found" } });
};

/**
 * 라이브 퀴즈 세션에 필요한 퀴즈 문항을 무작위로 선택하는 함수
 * @param countryId 국가 ID
 * @param count 선택할 문항 수
 * @returns 무작위로 선택된 퀴즈 문항 배열
 */
export const getRandomQuizzes = (countryId: string, count: number = 10): Quiz[] => {
  const countryQuizzes = loadCountryQuizzes(countryId);

  // 퀴즈 문항이 count보다 적으면 모두 반환
  if (countryQuizzes.length <= count) {
    return countryQuizzes;
  }

  // 무작위로 count개 선택
  const shuffled = [...countryQuizzes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * 각 카테고리마다 골고루 문항을 선택하는 함수
 * @param countryId 국가 ID
 * @param countPerCategory 카테고리별 선택할 문항 수
 * @returns 카테고리별로 골고루 선택된 퀴즈 문항 배열
 */
export const getBalancedQuizzes = (countryId: string, countPerCategory: number = 2): Quiz[] => {
  const countryQuizzes = loadCountryQuizzes(countryId);

  // 카테고리별로 문항 분류
  const categorized: Record<string, Quiz[]> = {};

  countryQuizzes.forEach((quiz) => {
    if (!categorized[quiz.category]) {
      categorized[quiz.category] = [];
    }
    categorized[quiz.category].push(quiz);
  });

  // 각 카테고리에서 countPerCategory개씩 무작위 선택
  const result: Quiz[] = [];

  Object.keys(categorized).forEach((category) => {
    const quizzes = categorized[category];
    const shuffled = [...quizzes].sort(() => 0.5 - Math.random());
    result.push(...shuffled.slice(0, countPerCategory));
  });

  return result;
};

export default {
  loadCountryQuizzes,
  loadCategoryQuizzes,
  loadDifficultyQuizzes,
  loadQuizTranslation,
  getRandomQuizzes,
  getBalancedQuizzes,
};
