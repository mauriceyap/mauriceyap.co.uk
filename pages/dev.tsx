import { Component, Fragment } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Container from "../components/Container";
import getMarkdownContent from "../utils/getMarkdownContent";
import { MarkdownContent } from "../next-env";
import projects from "../data/projects.json";

export default class Dev extends Component<
  {},
  { mdContent: { [s: string]: MarkdownContent } }
> {
  constructor(props) {
    super(props);

    this.state = {
      mdContent: getMarkdownContent({
        gitHubIntro: "dev/github-intro.md",
        linkedInIntro: "dev/linkedin-intro.md",
        mainIntro: "dev/main-intro.md"
      })
    };
  }
  render() {
    return (
      <Fragment>
        <Container>
          <div className="row">
            <div className="six columns">
              <h4>
                <a href="https://github.com/mauriceyap" className="undecorated">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.mdContent.gitHubIntro.content
                }}
              />
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
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.mdContent.linkedInIntro.content
                }}
              />
            </div>
          </div>
          <hr />
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.mdContent.mainIntro.content
            }}
          />
          {projects.length > 0 && (
            <Fragment>
              <hr />
              <h3>Some of my projects</h3>
            </Fragment>
          )}
          <div className="row">
            {projects.map(({ title, subtitle, description, image, url }) => (
              <div className="six columns" key={title}>
                <h4>
                  {title}
                  <br />
                  <small>{subtitle}</small>
                </h4>
                <a href={url}>
                  <img src={`/static/images/${image}`} alt={title} />
                </a>
                <p>{description}</p>
                <a className="button" href={url}>
                  See more
                </a>
              </div>
            ))}
          </div>
        </Container>
        <Head>
          <title>Maurice Yap - Software Projects</title>
        </Head>
      </Fragment>
    );
  }
}
