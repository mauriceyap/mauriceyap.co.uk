import Head from "next/head";
import { FC } from "react";

import Container from "../components/Container";
import MarkdownDisplay from "../components/MarkdownDisplay";

const Index: FC<{}> = () => (
  <Container>
    <Head>
      <title>Maurice Yap</title>
    </Head>
    <MarkdownDisplay id="welcome" filepath="index/welcome" />
  </Container>
);

export default Index;
