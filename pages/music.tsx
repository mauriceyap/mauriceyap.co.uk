import { Component, Fragment } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

import Container from "../components/Container";
import getMarkdownContent from "../utils/getMarkdownContent";
import { MarkdownContent } from "../next-env";

export default class Music extends Component<
  {},
  { mdContent: { [s: string]: MarkdownContent } }
> {
  constructor(props) {
    super(props);

    this.state = {
      mdContent: getMarkdownContent({
        youTubeIntro: "music/youtube-intro.md",
        soundCloudIntro: "music/soundcloud-intro.md",
        mainIntro: "music/main-intro.md",
        credits: "music/credits.md"
      })
    };
  }
  render() {
    return (
      <Fragment>
        <Container>
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.mdContent.mainIntro.content
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
                  __html: this.state.mdContent.youTubeIntro.content
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
                  __html: this.state.mdContent.soundCloudIntro.content
                }}
              />
            </div>
          </div>
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.mdContent.credits.content
            }}
          />
        </Container>
        <Head>
          <title>Maurice Yap - Music</title>
        </Head>
      </Fragment>
    );
  }
}
