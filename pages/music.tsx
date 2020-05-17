import { FC } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons";

import Container from "../components/Container";
import MarkdownDisplay from "../components/MarkdownDisplay";
import useExtraTranslation from "../utils/useExtraTranslation";

const Music: FC<{}> = () => {
  const musicPageTitle = useExtraTranslation(["music", "pageTitle"]);
  return (
    <Container>
      <Head>
        <title>Maurice Yap - {musicPageTitle}</title>
      </Head>
      <MarkdownDisplay filepath="music/main-intro" />
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
          <MarkdownDisplay filepath="music/youtube-intro" />
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
          <MarkdownDisplay filepath="music/soundcloud-intro" />
        </div>
      </div>
      <hr />
      <MarkdownDisplay filepath="music/credits" />
    </Container>
  );
};

export default Music;
