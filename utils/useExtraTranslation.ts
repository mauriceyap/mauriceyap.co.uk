import { useContext } from "react";
import { languageContext } from "../components/languageContext";

import extraTranslations from "./extraTranslations.json";

const useExtraTranslation = (
  translationPath: string[],
  languageOverride?: string
): string => {
  const { language: contextLanguage } = useContext(languageContext);
  const language = languageOverride ?? contextLanguage;
  return (
    translationPath.reduce((obj, path) => obj?.[path], extraTranslations)?.[
      language
    ] ?? ""
  );
};

export default useExtraTranslation;
