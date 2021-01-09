import { useState, FC } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faSoundcloud,
  faInstagram,
  faFacebookMessenger,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Container from "../components/Container";
import contactAccountsData from "../data/contact.json";
import MarkdownDisplay from "../components/MarkdownDisplay";
import useExtraTranslation from "../utils/useExtraTranslation";

const MAGIC_REVEAL_EMAIL_ADDRESS_BUTTON_ID = "reveal-email-address-button";
const MAGIC_EMAIL_ADDRESS_ELEMENT_ID = "email-address-element";
const EMAIL_ADDRESS_ENC =
  "V1d4a1IwMVhUblJpUjNCaFYwZDRiMWt3VmtOaU1rbDZWVzVTV2xZeWVIcFVSekZQWkd0NGRWWnVTVDA9";
const COPIED_EMAIL_ADDRESS_GREEN = "#1B0";

const Contact: FC<{}> = () => {
  const contactPageTitle = useExtraTranslation(["contact", "pageTitle"]);
  const myEmailAddressText = useExtraTranslation(["contact", "myEmailAddress"]);
  const copiedEmailAddressText = useExtraTranslation([
    "contact",
    "copiedEmailAddress",
  ]);
  const loadingText = useExtraTranslation(["contact", "loading"]);

  const [
    isRevealEmailAddressButtonClicked,
    setRevealEmailAddressButtonClicked,
  ] = useState(false);

  const onRevealEmailButtonClick = () => {
    const revealEmailAddressButton = document.getElementById(
      MAGIC_REVEAL_EMAIL_ADDRESS_BUTTON_ID
    );
    revealEmailAddressButton.style.backgroundColor = COPIED_EMAIL_ADDRESS_GREEN;
    revealEmailAddressButton.style.borderColor = COPIED_EMAIL_ADDRESS_GREEN;
    revealEmailAddressButton.style.fontWeight = "700";
    revealEmailAddressButton.innerText = copiedEmailAddressText;

    const emailAddress = atob(atob(atob(atob(EMAIL_ADDRESS_ENC))));

    const dummyNode: HTMLTextAreaElement = document.createElement("textarea");
    dummyNode.value = emailAddress;
    revealEmailAddressButton.append(dummyNode);
    dummyNode.select();
    document.execCommand("copy");
    dummyNode.remove();

    if (isRevealEmailAddressButtonClicked) {
      return;
    }

    setRevealEmailAddressButtonClicked(true);
    const emailAddressElement: HTMLElement = document.getElementById(
      MAGIC_EMAIL_ADDRESS_ELEMENT_ID
    );
    emailAddressElement.innerText = loadingText;
    setTimeout(() => (emailAddressElement.innerText = emailAddress), 600);
  };

  return (
    <Container>
      <Head>
        <title>Maurice Yap - {contactPageTitle}</title>
      </Head>
      <div className="row" id="contact-wrapper">
        <div className="six columns">
          <MarkdownDisplay filepath="contact/intro" />
          <button
            className="button-primary"
            onClick={onRevealEmailButtonClick}
            id={MAGIC_REVEAL_EMAIL_ADDRESS_BUTTON_ID}
          >
            {myEmailAddressText}
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
  );
};

export default Contact;
