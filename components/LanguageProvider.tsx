import { Component, createContext, Context } from "react";

import { languages } from "../data/config.json";

const DEFAULT_LANGUAGE: string = "en";

const LanguageContext: Context<{
  language: string;
  switchLanguage: (language: string) => void;
}> = createContext({
  language: DEFAULT_LANGUAGE,
  switchLanguage(_: string) {}
});

export const LanguageConsumer: React.ExoticComponent<
  React.ConsumerProps<{
    language: string;
    switchLanguage: (language: string) => void;
  }>
> = LanguageContext.Consumer;

export default class LanguageProvider extends Component<
  { children: JSX.Element[] | JSX.Element | string },
  { language: string }
> {
  constructor(props) {
    super(props);
    if (navigator) {
      const browserLanguage: string = (navigator.languages !== undefined
        ? navigator.languages[0]
        : navigator.language
      ).slice(0, 2);
      const initialLanguage: string = languages.includes(browserLanguage)
        ? browserLanguage
        : DEFAULT_LANGUAGE;
      this.state = { language: initialLanguage };
    } else {
      this.state = { language: DEFAULT_LANGUAGE };
    }
    this.switchLanguage = this.switchLanguage.bind(this);
  }
  switchLanguage(language: string) {
    this.setState({ language });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          switchLanguage: this.switchLanguage
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
