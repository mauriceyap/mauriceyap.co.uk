import dynamic from "next/dynamic";
import { useContext, FC } from "react";
import "skeleton-css/css/skeleton.css";

import { languages } from "../data/config.json";
import { languageContext } from "./languageContext";
import MarkdownDisplay from "./MarkdownDisplay";

import "../css/styles.css";

const NavBar = dynamic(import("./NavBar"), { ssr: false });

const Container: FC<{}> = ({ children }) => {
  const { language, setLanguage } = useContext(languageContext);
  return (
    <>
      <div id="wrapper">
        <NavBar />
        <div className="container">{children}</div>
      </div>
      <div id="footer" className="container">
        <div className="row">
          <MarkdownDisplay className="nine columns" filepath="footer" />
          <div className="three columns" id="language-switch-wrapper">
            <p>
              {languages.map((languageOption, index) => (
                <span key={languageOption}>
                  {index > 0 && "  |  "}
                  {language === languageOption ? (
                    <span className="selected">{languageOption}</span>
                  ) : (
                    <a
                      className="undecorated"
                      onClick={() => setLanguage(languageOption)}
                    >
                      {languageOption}
                    </a>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
