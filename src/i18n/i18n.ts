import { I18n } from "i18n-js";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 언어 파일 가져오기
import en from "./locales/en.json";
import ko from "./locales/ko.json";

// 지원하는 언어 목록
export const LANGUAGES = {
  en: {
    name: "English",
    nativeName: "English",
  },
  ko: {
    name: "Korean",
    nativeName: "한국어",
  },
};

// 기본 언어 설정
export const DEFAULT_LANGUAGE = "ko";

// 번역 테이블 명시적으로 설정
const translations = {
  en: en,
  ko: ko,
};

// i18n 인스턴스 생성 및 설정
const i18n = new I18n(translations);

// 번역이 없을 경우 기본 언어로 폴백
i18n.enableFallback = true;
i18n.defaultLocale = DEFAULT_LANGUAGE;

// 초기화 시 로깅
console.log("[i18n] 번역 테이블 초기화:", Object.keys(i18n.translations));
console.log(`[i18n] 기본 언어: ${i18n.defaultLocale}`);

// 언어 초기화 함수
export const initializeLanguage = async (): Promise<string> => {
  try {
    // AsyncStorage에서 저장된 언어 코드 가져오기
    const storedLanguage = await AsyncStorage.getItem("language");

    // 저장된 언어가 있고 지원하는 언어인 경우 해당 언어로 설정
    if (storedLanguage && Object.keys(LANGUAGES).includes(storedLanguage)) {
      i18n.locale = storedLanguage;
      console.log(`[i18n] 저장된 언어로 초기화: ${storedLanguage}`);
      return storedLanguage;
    }

    // 저장된 언어가 없거나 지원하지 않는 언어인 경우 기본 언어(한국어)로 설정
    i18n.locale = DEFAULT_LANGUAGE;
    console.log(`[i18n] 기본 언어로 초기화: ${DEFAULT_LANGUAGE}`);
    return DEFAULT_LANGUAGE;
  } catch (error) {
    console.error("[i18n] 언어 초기화 중 오류 발생:", error);
    i18n.locale = DEFAULT_LANGUAGE;
    return DEFAULT_LANGUAGE;
  }
};

// 언어 저장 함수
export const storeLanguage = async (language: string): Promise<void> => {
  try {
    await AsyncStorage.setItem("language", language);
    console.log(`[i18n] 언어 저장 성공: ${language}`);
  } catch (error) {
    console.error("[i18n] 언어 저장 중 오류 발생:", error);
  }
};

export default i18n;
