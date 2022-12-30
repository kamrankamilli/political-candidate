import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const translate = {
    ä: "a",
    ö: "o",
    ü: "u",
    ç: "c",
    ş: "s",
    ğ: "g",
    Ä: "A",
    Ö: "O",
    Ü: "U",
    Ç: "C",
    Ş: "S",
    Ğ: "G",
  };
  const activeStyle = {
    color: "#499617",
  };

  const links = props.links.map((link) => (
    <li key={link}>
      <NavLink
        onClick={props.onClick}
        className={
          props.scrolled
            ? `${style["navbar-link"]} ${style.scrolled}`
            : style["navbar-link"]
        }
        to={`/${link
          .replace(/\s/g, "-")
          .replace(/[öäüçşğÖÄÜÇŞĞ]/g, (match) => translate[match])
          .toLowerCase()}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {link}
      </NavLink>
    </li>
  ));

  return (
    <nav className={style.navbar}>
      <ul className={style["navbar-list"]}>{links}</ul>
    </nav>
  );
};
export default NavBar;
