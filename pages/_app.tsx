import App, { Container } from 'next/app';

import LanguageProvider from "../components/LanguageProvider";

export default class WebsiteApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <LanguageProvider>
          <Component {...pageProps} />
        </LanguageProvider>
      </Container>
    )
  }
}