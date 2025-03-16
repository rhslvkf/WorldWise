import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import i18n, { initializeLanguage, storeLanguage, LANGUAGES } from "../i18n/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 언어 컨텍스트 타입 정의
interface LocaleContextType {
  language: string;
  setLanguage: (language: string) => Promise<void>;
  t: (key: string, options?: any) => string;
  isRTL: boolean;
  languages: typeof LANGUAGES;
}

// 컨텍스트 생성
const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// 컨텍스트 Provider 컴포넌트
interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<string>("ko"); // 초기값은 한국어
  const [isRTL, setIsRTL] = useState<boolean>(false); // 우리는 RTL 언어를 지원하지 않음

  // 언어 설정 로드
  useEffect(() => {
    const loadLanguage = async () => {
      const initialLanguage = await initializeLanguage();
      setLanguageState(initialLanguage);
      console.log("Initial language loaded:", initialLanguage);
      console.log("i18n.locale set to:", i18n.locale);
    };

    loadLanguage();
  }, []);

  // 언어 변경 함수
  const setLanguage = async (language: string) => {
    console.log(`[LocaleContext] 언어 변경 시도: ${language}`);
    try {
      if (language === "en" || language === "ko") {
        await AsyncStorage.setItem("language", language);
        i18n.locale = language;
        setLanguageState(language);
        await storeLanguage(language);
        console.log(`[LocaleContext] 언어 변경 성공: ${language}, 현재 i18n.locale: ${i18n.locale}`);
      } else {
        console.warn(`[LocaleContext] 지원하지 않는 언어: ${language}`);
      }
    } catch (error) {
      console.error(`[LocaleContext] 언어 설정 중 오류 발생:`, error);
    }
  };

  // 번역 함수
  const t = (key: string, options?: any): string => {
    try {
      const translation = i18n.t(key, options);
      // 번역이 키와 동일하면 번역이 없는 것
      if (translation === key) {
        console.warn(`[LocaleContext] 번역 키를 찾을 수 없음: ${key}`);
      }
      return translation;
    } catch (error) {
      console.error(`[LocaleContext] 번역 중 오류 발생: ${key}`, error);
      return key;
    }
  };

  // 컨텍스트 값
  const contextValue: LocaleContextType = {
    language,
    setLanguage,
    t,
    isRTL,
    languages: LANGUAGES,
  };

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
};

// 커스텀 훅 생성
export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};

export default LocaleContext;
