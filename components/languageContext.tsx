import { createContext, Context, FC, useState } from "react";

const DEFAULT_LANGUAGE: string = "en";

interface LanguageContextValue {
  language: string;
  setLanguage: (language: string) => void;
}

export const languageContext: Context<LanguageContextValue> = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage(_: string) {},
});

export const LanguageProvider: FC<{}> = ({ children }) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  return (
    <languageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </languageContext.Provider>
  );
};
