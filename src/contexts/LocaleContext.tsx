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
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  // 언어 설정 로드
  useEffect(() => {
    const loadLanguage = async () => {
      try {
        // AsyncStorage에서 저장된 언어 코드 가져오기
        const storedLanguage = await AsyncStorage.getItem("language");
        let initialLanguage = "ko"; // 기본값

        // 저장된 언어가 있고 지원하는 언어인 경우 해당 언어로 설정
        if (storedLanguage && Object.keys(LANGUAGES).includes(storedLanguage)) {
          initialLanguage = storedLanguage;
        }

        // i18n과 상태 업데이트
        i18n.locale = initialLanguage;
        setLanguageState(initialLanguage);
        console.log("[LocaleProvider] 초기 언어 설정:", initialLanguage);
        setIsInitialized(true);
      } catch (error) {
        console.error("[LocaleProvider] 언어 초기화 오류:", error);
        // 오류 발생 시 기본값으로 설정
        i18n.locale = "ko";
        setLanguageState("ko");
        setIsInitialized(true);
      }
    };

    loadLanguage();
  }, []);

  // 언어 변경 함수
  const setLanguage = async (language: string) => {
    console.log(`[LocaleContext] 언어 변경 시도: ${language}`);
    try {
      if (language === "en" || language === "ko") {
        // 먼저 상태 업데이트하여 UI가 즉시 반영되도록 함
        setLanguageState(language);

        // 그 다음 i18n 설정 및 저장
        i18n.locale = language;
        await AsyncStorage.setItem("language", language);
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

  // 초기화 되지 않았을 때 로딩 표시
  if (!isInitialized) {
    return null; // 또는 로딩 인디케이터
  }

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
