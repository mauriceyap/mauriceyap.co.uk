import { Converter } from "showdown";
import { MarkdownContent } from "../next-env";

export default function getMarkdownContent(filepaths: {
  [s: string]: string;
}): { [s: string]: MarkdownContent } {
  return Object.keys(filepaths).reduce(
    (acc: { [s: string]: MarkdownContent }, key: string) => {
      const converter: Converter = new Converter({ metadata: true });
      const rawMarkdown: string = require(`../md/${filepaths[key]}`).default;
      const content: string = converter.makeHtml(rawMarkdown);
      const meta: { [s: string]: string } = converter.getMetadata();
      return { ...acc, [key]: { content, meta } };
    },
    {}
  );
}
