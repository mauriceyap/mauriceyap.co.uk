import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { LanguageConsumer } from "./LanguageProvider";
import { navBar as translations } from "../utils/extraTranslations.json";

const items: { href: string; name: string }[] = [
  {
    href: "/dev",
    name: "dev"
  },
  {
    href: "/music",
    name: "music"
  },
  {
    href: "/contact",
    name: "contact"
  }
];

export default class NavBar extends Component<
  {},
  { isNavMenuVisible: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { isNavMenuVisible: false };

    this.setIsNavMenuVisible = this.setIsNavMenuVisible.bind(this);
  }

  setIsNavMenuVisible({ target: { checked: isNavMenuVisible } }) {
    this.setState({
      isNavMenuVisible
    });
  }

  render() {
    return (
      <LanguageConsumer>
        {({ language }) => (
          <div id="navbar">
            <div className="container">
              <Link href="/">
                <div id="website-title">Maurice Yap.</div>
              </Link>
              <div id="navbar-links-container">
                {items.map(({ href, name }) => (
                  <div className="navbar-link" key={href}>
                    <Link href={href}>
                      <a className="undecorated">{translations[name][language]}</a>
                    </Link>
                  </div>
                ))}
              </div>
              <div id="navbar-menu-trigger-wrapper">
                <input
                  id="navbar-menu-trigger"
                  type="checkbox"
                  onChange={this.setIsNavMenuVisible}
                />
                <label htmlFor="navbar-menu-trigger">
                  <FontAwesomeIcon
                    style={
                      this.state.isNavMenuVisible ? { display: "none" } : {}
                    }
                    icon={faBars}
                  />
                  <FontAwesomeIcon
                    style={
                      this.state.isNavMenuVisible ? {} : { display: "none" }
                    }
                    icon={faTimes}
                  />
                </label>
              </div>
            </div>
            <ul
              className="navbar-menu"
              style={this.state.isNavMenuVisible ? {} : { display: "none" }}
            >
              {items.map(({ href, name }) => (
                <li className="navbar-menu-item" key={href}>
                  <Link href={href}>
                    <a className="undecorated">{name[language]}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </LanguageConsumer>
    );
  }
}
