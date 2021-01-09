import { Converter } from "showdown";
import { MarkdownData } from "../next-env";
import { languages } from "../data/config.json";

const getMarkdownDataForLanguages = (filepath: string): MarkdownData =>
  languages.reduce((acc, language: string) => {
    const converter: Converter = new Converter({
      metadata: true,
      strikethrough: true,
    });
    const rawMarkdown: string = require(`../md/${filepath}/${language}.md`)
      .default;
    const content: string = converter.makeHtml(rawMarkdown);
    const meta: { [s: string]: string } = converter.getMetadata();
    return { ...acc, [language]: { content, meta } };
  }, {});

export default getMarkdownDataForLanguages;
