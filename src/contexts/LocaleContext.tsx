import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import i18n, { initializeLanguage, storeLanguage, LANGUAGES } from "../i18n/i18n";

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
    };

    loadLanguage();
  }, []);

  // 언어 변경 함수
  const setLanguage = async (languageCode: string): Promise<void> => {
    if (Object.keys(LANGUAGES).includes(languageCode)) {
      i18n.locale = languageCode;
      setLanguageState(languageCode);
      await storeLanguage(languageCode);
    } else {
      console.warn(`Language ${languageCode} is not supported.`);
    }
  };

  // 번역 함수
  const t = (key: string, options?: any): string => {
    return i18n.t(key, options);
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
