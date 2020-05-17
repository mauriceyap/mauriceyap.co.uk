/// <reference types="next" />
/// <reference types="next/types/global" />

export interface MarkdownData {
  [language: string]: {
    meta: { [s: string]: any };
    content: string;
  };
}
