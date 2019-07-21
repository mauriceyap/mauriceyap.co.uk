import dynamic from "next/dynamic";
import { Fragment, Component } from "react";
import "skeleton-css/css/skeleton.css";

import { MarkdownContent } from "../next-env";
import getMarkdownContent from "../utils/getMarkdownContent";
import "../css/styles.css";


const NavBar = dynamic(import("./NavBar"), { ssr: false });

export default class Container extends Component<
  { children: JSX.Element[] | JSX.Element | string },
  { mdContent: { [s: string]: MarkdownContent } }
> {
  constructor(props) {
    super(props);

    this.state = {
      mdContent: getMarkdownContent({ footer: "footer.md" })
    };
  }

  render() {
    return (
      <Fragment>
        <div id="wrapper">
          <NavBar />
          <div className="container">{this.props.children}</div>
        </div>
        <div id="footer">
          <div
            className="container"
            dangerouslySetInnerHTML={{
              __html: this.state.mdContent.footer.content
            }}
          />
        </div>
      </Fragment>
    );
  }
}
