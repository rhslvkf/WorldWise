import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 번역 파일 불러오기
import en from "./locales/en.json";
import ko from "./locales/ko.json";

// 저장된 언어 설정 키
export const LANGUAGE_STORAGE_KEY = "@language";

// 지원하는 언어 목록
export const LANGUAGES = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
  },
  ko: {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
  },
};

// 번역 테이블
const translations = {
  en,
  ko,
};

// i18n 인스턴스 생성
const i18n = new I18n(translations);

// 초기 설정
i18n.enableFallback = true;
i18n.defaultLocale = "ko"; // 한국어를 기본 언어로 설정

// 저장된 언어 설정 불러오기
export const loadStoredLanguage = async (): Promise<string | null> => {
  try {
    const storedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage;
  } catch (error) {
    console.error("언어 설정을 불러오는데 실패했습니다:", error);
    return null;
  }
};

// 언어 설정 저장하기
export const storeLanguage = async (languageCode: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode);
  } catch (error) {
    console.error("언어 설정을 저장하는데 실패했습니다:", error);
  }
};

// 초기 언어 설정
export const initializeLanguage = async (): Promise<string> => {
  // 저장된 설정 확인
  const storedLanguage = await loadStoredLanguage();

  if (storedLanguage && Object.keys(LANGUAGES).includes(storedLanguage)) {
    i18n.locale = storedLanguage;
    return storedLanguage;
  }

  // 저장된 설정이 없으면 기기 설정 확인
  const deviceLanguage = Localization.locale.split("-")[0];
  const supportedLanguage = Object.keys(LANGUAGES).includes(deviceLanguage) ? deviceLanguage : i18n.defaultLocale;

  i18n.locale = supportedLanguage;

  // 선택된 언어 저장
  await storeLanguage(supportedLanguage);

  return supportedLanguage;
};

export default i18n;
