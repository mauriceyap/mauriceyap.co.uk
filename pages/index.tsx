import Head from "next/head";
import { Component } from "react";

import Container from "../components/Container";
import getMarkdownContent from "../utils/getMarkdownContent";
import { MarkdownContent } from "../next-env";
import "../css/index.css";

export default class Index extends Component<
  {},
  { mdContent: { [s: string]: MarkdownContent } }
> {
  constructor(props) {
    super(props);

    this.state = {
      mdContent: getMarkdownContent({ welcome: "index/welcome.md" })
    };
  }

  render() {
    return (
      <Container>
        <Head>
          <title>Maurice Yap</title>
        </Head>
        <div
          id="welcome"
          dangerouslySetInnerHTML={{
            __html: this.state.mdContent.welcome.content
          }}
        />
      </Container>
    );
  }
}
