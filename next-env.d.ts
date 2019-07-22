/// <reference types="next" />
/// <reference types="next/types/global" />

export interface MarkdownContent {
  [language: string]: {
    meta: { [s: string]: any };
    content: string;
  };
}
