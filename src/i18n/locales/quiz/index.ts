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
    console.log(`[퀴즈 번역 로드] 국가: ${country}`);

    // 영어 리소스 통합
    if (quizTranslations[country as keyof typeof quizTranslations].en) {
      const countryEn = quizTranslations[country as keyof typeof quizTranslations].en;
      console.log(`[퀴즈 번역 로드] ${country} 영어 키 샘플:`, Object.keys(countryEn).slice(0, 3));
      Object.assign(en, countryEn);
    }

    // 한국어 리소스 통합
    if (quizTranslations[country as keyof typeof quizTranslations].ko) {
      const countryKo = quizTranslations[country as keyof typeof quizTranslations].ko;
      console.log(`[퀴즈 번역 로드] ${country} 한국어 키 샘플:`, Object.keys(countryKo).slice(0, 3));
      Object.assign(ko, countryKo);
    }
  });

  // 최종 키 수 로깅
  console.log(`[퀴즈 번역 로드] 영어 키 수: ${Object.keys(en).length}`);
  console.log(`[퀴즈 번역 로드] 한국어 키 수: ${Object.keys(ko).length}`);

  return { en, ko };
};

export default quizTranslations;
