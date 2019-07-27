import { Component, Fragment } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

import Container from "../components/Container";
import getMarkdownContent from "../utils/getMarkdownContent";
import { MarkdownContent } from "../next-env";
import { LanguageConsumer } from "../components/LanguageProvider";
import { music as translations } from "../utils/extraTranslations.json";

export default class Music extends Component<
  {},
  { mdContent: { [s: string]: MarkdownContent } }
> {
  constructor(props) {
    super(props);

    this.state = {
      mdContent: getMarkdownContent({
        youTubeIntro: "music/youtube-intro",
        soundCloudIntro: "music/soundcloud-intro",
        mainIntro: "music/main-intro",
        credits: "music/credits"
      })
    };
  }
  render() {
    return (
      <LanguageConsumer>
        {({ language }) => (
          <Fragment>
            <Container>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.mdContent.mainIntro[language].content
                }}
              />
              <hr />
              <div className="row">
                <div className="six columns">
                  <h4>
                    <a
                      href="https://www.youtube.com/user/mauriceyap/"
                      className="undecorated"
                    >
                      <FontAwesomeIcon icon={faYoutube} /> YouTube
                    </a>
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.mdContent.youTubeIntro[language]
                        .content
                    }}
                  />
                </div>
                <div className="six columns">
                  <h4>
                    <a
                      href="https://soundcloud.com/maurice-yap"
                      className="undecorated"
                    >
                      <FontAwesomeIcon icon={faSoundcloud} /> SoundCloud
                    </a>
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.state.mdContent.soundCloudIntro[language]
                        .content
                    }}
                  />
                </div>
              </div>
              <hr />
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.mdContent.credits[language].content
                }}
              />
            </Container>
            <Head>
              <title>Maurice Yap - {translations.pageTitle[language]}</title>
            </Head>
          </Fragment>
        )}
      </LanguageConsumer>
    );
  }
}
