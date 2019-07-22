import dynamic from "next/dynamic";
import { Fragment, Component } from "react";
import "skeleton-css/css/skeleton.css";

import { MarkdownContent } from "../next-env";
import getMarkdownContent from "../utils/getMarkdownContent";
import { languages } from "../data/config.json";
import { LanguageConsumer } from "./LanguageProvider";
import "../css/styles.css";

const NavBar = dynamic(import("./NavBar"), { ssr: false });

export default class Container extends Component<
  { children: JSX.Element[] | JSX.Element | string },
  { mdContent: { [s: string]: MarkdownContent } }
> {
  constructor(props) {
    super(props);

    this.state = {
      mdContent: getMarkdownContent({ footer: "footer" })
    };
  }

  render() {
    return (
      <LanguageConsumer>
        {({ language, switchLanguage }) => (
          <Fragment>
            <div id="wrapper">
              <NavBar />
              <div className="container">{this.props.children}</div>
            </div>
            <div id="footer" className="container">
              <div className="row">
                <div
                  className="nine columns"
                  dangerouslySetInnerHTML={{
                    __html: this.state.mdContent.footer[language].content
                  }}
                />
                <div className="three columns" id="language-switch-wrapper">
                  <p>
                    {languages.map((languageOption, index) => (
                      <span key={languageOption}>
                        {index > 0 && "  |  "}
                        {language === languageOption ? (
                          <span className="selected">{languageOption}</span>
                        ) : (
                          <a className="undecorated" onClick={() => switchLanguage(languageOption)}>{languageOption}</a>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </LanguageConsumer>
    );
  }
}
