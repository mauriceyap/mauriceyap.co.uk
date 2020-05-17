import { FC, useMemo, ReactElement, useContext, HTMLProps } from "react";
import getMarkdownDataForLanguages from "../utils/getMarkdownDataForLanguages";
import { languageContext } from "./languageContext";

interface MarkdownDisplayProps extends HTMLProps<HTMLDivElement> {
  filepath: string;
  languageOverride?: string;
  renderer?: (
    meta: Record<string, any>,
    contentElement: JSX.Element
  ) => ReactElement;
}

const MarkdownDisplay: FC<MarkdownDisplayProps> = ({
  filepath,
  languageOverride,
  renderer,
  ...divProps
}) => {
  const markdownDataForLanguages = useMemo(
    () => getMarkdownDataForLanguages(filepath),
    [filepath]
  );
  const { language: contextLanguage } = useContext(languageContext);
  const language = languageOverride ?? contextLanguage;

  const markdownData = markdownDataForLanguages[language];
  const contentElement = (
    <div
      dangerouslySetInnerHTML={{
        __html: markdownData.content,
      }}
      {...divProps}
    />
  );

  return renderer?.(markdownData.meta, contentElement) ?? contentElement;
};

export default MarkdownDisplay;
