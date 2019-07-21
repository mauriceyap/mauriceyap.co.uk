import { Component, Fragment } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faSoundcloud,
  faInstagram,
  faFacebookMessenger,
  faTwitter,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import Container from "../components/Container";
import getMarkdownContent from "../utils/getMarkdownContent";
import { MarkdownContent } from "../next-env";
import contactAccountsData from "../data/contact.json";
import "../css/contact.css";

const MAGIC_EMAIL_ADDRESS_ELEMENT_ID: string = "MaGiCeMaIlAdDrEsSeLeMeNtId";
const EMAIL_ADDRESS: string = "mauriceyap@hotmail.co.uk";
const COPIED_EMAIL_ADDRESS_GREEN: string = "#1B0";

export default class Contact extends Component<
  {},
  { mdContent: { [s: string]: MarkdownContent }; isEmailRevealed: boolean }
> {
  constructor(props) {
    super(props);

    this.onRevealEmailButtonClick = this.onRevealEmailButtonClick.bind(this);

    this.state = {
      isEmailRevealed: false,
      mdContent: getMarkdownContent({
        intro: "contact/intro.md"
      })
    };
  }
  onRevealEmailButtonClick() {
    const revealEmailAddressButton = document.getElementById(
      "reveal-email-address"
    );
    revealEmailAddressButton.style.backgroundColor = COPIED_EMAIL_ADDRESS_GREEN;
    revealEmailAddressButton.style.borderColor = COPIED_EMAIL_ADDRESS_GREEN;
    revealEmailAddressButton.style.fontWeight = "700";
    revealEmailAddressButton.innerText = "Copied email address to clipboard!";
    const dummyNode: HTMLTextAreaElement = document.createElement("textarea");
    dummyNode.value = EMAIL_ADDRESS;
    revealEmailAddressButton.append(dummyNode);
    dummyNode.select();
    document.execCommand("copy");
    dummyNode.remove();

    if (this.state.isEmailRevealed) {
      return;
    }
    this.setState({
      isEmailRevealed: true
    });
    const emailAddressElement: HTMLElement = document.getElementById(
      MAGIC_EMAIL_ADDRESS_ELEMENT_ID
    );
    emailAddressElement.innerText = "Loading...";
    setTimeout(
      () =>
        (emailAddressElement.innerText = emailAddressElement.innerText = EMAIL_ADDRESS),
      600
    );
  }
  render() {
    return (
      <Fragment>
        <Container>
          <div className="row" id="contact-wrapper">
            <div className="six columns">
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.mdContent.intro.content
                }}
              />
              <button
                className="button-primary"
                onClick={this.onRevealEmailButtonClick}
                id="reveal-email-address"
              >
                My email address
              </button>
              <p id={MAGIC_EMAIL_ADDRESS_ELEMENT_ID} />
            </div>
            <div className="six columns" id="contact-accounts">
              <p>
                <FontAwesomeIcon icon={faFacebookMessenger} /> Messenger:{" "}
                <a href={contactAccountsData.messenger.url}>
                  {contactAccountsData.messenger.username}
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn:{" "}
                <a href={contactAccountsData.linkedIn.url}>
                  {contactAccountsData.linkedIn.username}
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faGithub} /> GitHub:{" "}
                <a href={contactAccountsData.github.url}>
                  {contactAccountsData.github.username}
                </a>
              </p>

              <p>
                <FontAwesomeIcon icon={faInstagram} /> Instagram:{" "}
                <a href={contactAccountsData.instagram.url}>
                  {contactAccountsData.instagram.username}
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faYoutube} /> YouTube:{" "}
                <a href={contactAccountsData.youTube.url}>
                  {contactAccountsData.youTube.username}
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faSoundcloud} /> SoundCloud:{" "}
                <a href={contactAccountsData.soundcloud.url}>
                  {contactAccountsData.soundcloud.username}
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faTwitter} /> Twitter:{" "}
                <a href={contactAccountsData.twitter.url}>
                  {contactAccountsData.twitter.username}
                </a>
              </p>
            </div>
          </div>
        </Container>
        <Head>
          <title>Maurice Yap - Contact</title>
        </Head>
      </Fragment>
    );
  }
}
