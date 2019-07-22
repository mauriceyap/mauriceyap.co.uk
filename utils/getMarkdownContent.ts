import { Converter } from "showdown";
import { MarkdownContent } from "../next-env";
import { languages } from "../data/config.json";

export default function getMarkdownContent(filepaths: {
  [s: string]: string;
}): { [s: string]: MarkdownContent } {
  return Object.keys(filepaths).reduce(
    (mainAcc: { [s: string]: MarkdownContent }, key: string) => {
      return {
        ...mainAcc,
        [key]: languages.reduce((translationsAcc, language: string) => {
          const converter: Converter = new Converter({ metadata: true });
          const rawMarkdown: string = require(`../md/${
            filepaths[key]
          }/${language}.md`).default;
          const content: string = converter.makeHtml(rawMarkdown);
          const meta: { [s: string]: string } = converter.getMetadata();
          return { ...translationsAcc, [language]: { content, meta } };
        }, {})
      };
    },
    {}
  );
}
