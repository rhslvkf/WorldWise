import { Quiz, QuizTranslation, QuizCategory, Difficulty } from "../types/quiz";
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
export const loadQuizTranslation = (quiz: Quiz): QuizTranslation => {
  const translationKey = quiz.translationKey;

  // 기본 번역 값 설정
  const defaultTranslation: QuizTranslation = {
    question: "번역을 찾을 수 없습니다",
    options: ["옵션 1", "옵션 2", "옵션 3", "옵션 4"],
    explanation: "설명이 제공되지 않았습니다",
  };

  try {
    // 디버깅 정보
    console.log(`[퀴즈 번역 디버깅] 번역 키: ${translationKey}`);
    console.log(`[퀴즈 번역 디버깅] 현재 언어: ${i18n.locale}`);

    // 먼저 직접 translations 객체에서 키 찾기 시도
    const directTranslation = i18n.translations[i18n.locale]?.[translationKey];

    if (directTranslation) {
      console.log(`[퀴즈 번역] 직접 키 접근 성공: ${translationKey}`);
      return directTranslation as QuizTranslation;
    }

    // i18n.t를 사용하여 번역 가져오기 시도
    const translation = i18n.t(translationKey, {
      defaultValue: defaultTranslation,
    });

    console.log(`[퀴즈 번역] 키: ${translationKey}, 결과 타입:`, typeof translation);

    // 반환 값이 문자열이라면 기본값 사용
    if (typeof translation === "string") {
      console.warn(`[퀴즈 번역 경고] ${translationKey}에 대한 번역이 문자열입니다.`);

      // 임시 대체 방안: Korea 퀴즈 문항인 경우 특수 처리
      if (translationKey.startsWith("quiz.kr.")) {
        // 한국어 퀴즈에 대한 기본 대체 번역 생성
        const koreanDefault = generateKoreanQuizFallback(quiz);
        console.log(`[퀴즈 번역] 한국어 퀴즈 대체 번역 생성됨`);
        return koreanDefault;
      }

      return defaultTranslation;
    }

    return translation as QuizTranslation;
  } catch (error) {
    console.error(`[퀴즈 번역 오류] 키 ${translationKey} 처리 중 오류:`, error);
    return defaultTranslation;
  }
};

/**
 * 한국어 퀴즈에 대한 기본 대체 번역 생성
 * @param quiz 퀴즈 문항
 * @returns 생성된 기본 번역
 */
function generateKoreanQuizFallback(quiz: Quiz): QuizTranslation {
  const key = quiz.translationKey;
  let question = "한국 관련 퀴즈 문항";
  let options = ["옵션 1", "옵션 2", "옵션 3", "옵션 4"];
  let explanation = "이 문항에 대한 설명입니다.";

  // 카테고리에 따른 기본 문구 설정
  switch (quiz.category) {
    case QuizCategory.GEOGRAPHY:
      question = "한국의 지리에 관한 질문입니다.";
      explanation = "한국의 지리적 특성에 관한 설명입니다.";
      break;
    case QuizCategory.HISTORY:
      question = "한국의 역사에 관한 질문입니다.";
      explanation = "한국의 역사적 사실에 관한 설명입니다.";
      break;
    case QuizCategory.CULTURE:
      question = "한국의 문화에 관한 질문입니다.";
      explanation = "한국의 문화적 특성에 관한 설명입니다.";
      break;
    case QuizCategory.FOOD:
      question = "한국의 음식에 관한 질문입니다.";
      explanation = "한국의 전통 음식에 관한 설명입니다.";
      break;
    case QuizCategory.PEOPLE:
      question = "한국의 유명 인물에 관한 질문입니다.";
      explanation = "한국의 유명 인물에 관한 설명입니다.";
      break;
    case QuizCategory.NATURE:
      question = "한국의 자연에 관한 질문입니다.";
      explanation = "한국의 자연환경에 관한 설명입니다.";
      break;
    case QuizCategory.ECONOMY:
      question = "한국의 경제에 관한 질문입니다.";
      explanation = "한국의 경제적 특성에 관한 설명입니다.";
      break;
  }

  // 난이도에 따른 부가 설명
  const difficultyText =
    quiz.difficulty === Difficulty.EASY ? "(쉬움)" : quiz.difficulty === Difficulty.MEDIUM ? "(보통)" : "(어려움)";

  return {
    question: `${question} ${difficultyText}`,
    options,
    explanation,
  };
}

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
