import App from "next/app";

import { LanguageProvider } from "../components/languageContext";

import "skeleton-css/css/skeleton.css";
import "../css/contact.css";
import "../css/index.css";
import "../css/styles.css";

export default class WebsiteApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    );
  }
}
