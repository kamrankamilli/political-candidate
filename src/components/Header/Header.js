import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import style from "./Header.module.css";
import Social from "../Social/Social";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Button from "../UI/Button/Button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [noScroll, setNoScroll] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 613) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = "";
  if (scrolled) {
    x = "scrolled";
  }
  const hamburgerMenuHandler = () => {
    setHamburgerMenu(!hamburgerMenu);
    setNoScroll(!noScroll);
  };
  const navLinkClickHandler = () => {
    if (hamburgerMenu) {
      setHamburgerMenu(false);
      setNoScroll(!noScroll);
    }
  };

  if(noScroll){
    document.body.style.overflow = "hidden";
  }
  else{
    document.body.style.overflow = "visible";
  }
  return (
    <header className={`${style.header} ${scrolled ? style[x] : ""}`}>
      <Logo></Logo>
      <div
        className={`${style.content} ${hamburgerMenu ? style["nav-open"] : ""}`}
      >
        <NavBar
          onClick={navLinkClickHandler}
          links={["Hakkında", "Konular", "İletişim"]}
          scrolled={scrolled}
        ></NavBar>
        <Social></Social>
      </div>
      <Button className={"btn-mobile-nav"} onClick={hamburgerMenuHandler}>
        <GiHamburgerMenu
          className={`${style.icon} ${hamburgerMenu ? style["hide"] : ""}`}
        />
        <RxCross2
          className={`${style.icon} ${hamburgerMenu ? "" : style["hide"]}`}
        />
      </Button>
    </header>
  );
};
export default Header;
