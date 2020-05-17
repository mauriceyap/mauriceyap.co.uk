import { FC } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Container from "../components/Container";
import projects from "../data/projects.json";
import useExtraTranslation from "../utils/useExtraTranslation";
import MarkdownDisplay from "../components/MarkdownDisplay";

const Dev: FC<{}> = () => {
  const devPageTitle = useExtraTranslation(["dev", "pageTitle"]);
  return (
    <Container>
      <Head>
        <title>Maurice Yap - {devPageTitle}</title>
      </Head>
      <div className="row">
        <div className="six columns">
          <h4>
            <a href="https://github.com/mauriceyap" className="undecorated">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </h4>
          <MarkdownDisplay filepath="dev/github-intro" />
        </div>
        <div className="six columns">
          <h4>
            <a
              href="https://www.linkedin.com/in/mauriceyap"
              className="undecorated"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </h4>
          <MarkdownDisplay filepath="dev/linkedin-intro" />
        </div>
      </div>
      <hr />
      <MarkdownDisplay filepath="dev/main-intro" />

      {projects.length > 0 && (
        <>
          <hr />
          <MarkdownDisplay filepath="dev/projects-intro" />
        </>
      )}
      <div className="row">
        {projects.map(
          ({ title, subtitle, descriptionParagraphs, image, url }) => (
            <div className="six columns" key={title}>
              <h4>
                {title}
                <br />
                <small>{subtitle}</small>
              </h4>
              <a href={url}>
                <img src={`/static/images/${image}`} alt={title} />
              </a>
              {descriptionParagraphs.map((paragraph, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
              <a className="button" href={url}>
                See more
              </a>
            </div>
          )
        )}
      </div>
    </Container>
  );
};

export default Dev;
