import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FC, useState, useContext } from "react";
import { languageContext } from "./languageContext";
import { navBar as translations } from "../utils/extraTranslations.json";

const items: { href: string; name: string }[] = [
  {
    href: "/dev",
    name: "dev",
  },
  {
    href: "/music",
    name: "music",
  },
  {
    href: "/contact",
    name: "contact",
  },
];

const NavBar: FC<{}> = () => {
  const [isNavBarMenuVisible, setNavBarMenuVisible] = useState(false);
  const { language } = useContext(languageContext);

  const onNavBarMenuTriggerChange = ({ target: { checked } }) => {
    setNavBarMenuVisible(checked);
  };

  return (
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
            onChange={onNavBarMenuTriggerChange}
          />
          <label htmlFor="navbar-menu-trigger">
            <FontAwesomeIcon
              style={isNavBarMenuVisible ? { display: "none" } : {}}
              icon={faBars}
            />
            <FontAwesomeIcon
              style={isNavBarMenuVisible ? {} : { display: "none" }}
              icon={faTimes}
            />
          </label>
        </div>
      </div>
      <ul
        className="navbar-menu"
        style={isNavBarMenuVisible ? {} : { display: "none" }}
      >
        {items.map(({ href, name }) => (
          <li className="navbar-menu-item" key={href}>
            <Link href={href}>
              <a className="undecorated">{translations[name][language]}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
