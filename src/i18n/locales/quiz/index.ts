import koreaTranslations from "./korea";

/**
 * 모든 퀴즈 관련 다국어 리소스
 */
const quizTranslations = {
  // 국가별 리소스
  korea: koreaTranslations,

  // 후에 다른 국가도 추가 가능
  // japan: japanTranslations,
  // usa: usaTranslations,
  // ...
};

/**
 * 지원 언어별로 통합된 퀴즈 리소스 반환
 */
export const getQuizTranslations = () => {
  // 언어별로 리소스 통합
  const en: Record<string, any> = {};
  const ko: Record<string, any> = {};

  // 각 국가별 리소스를 언어별로 통합
  Object.keys(quizTranslations).forEach((country) => {
    // 영어 리소스 통합
    if (quizTranslations[country as keyof typeof quizTranslations].en) {
      Object.assign(en, quizTranslations[country as keyof typeof quizTranslations].en);
    }

    // 한국어 리소스 통합
    if (quizTranslations[country as keyof typeof quizTranslations].ko) {
      Object.assign(ko, quizTranslations[country as keyof typeof quizTranslations].ko);
    }
  });

  return { en, ko };
};

export default quizTranslations;
