import { Link } from "react-router-dom";
import style from "./Logo.module.css";
import logo from "../../assets/logo.webp";
const Logo = () => {
  const clickHandler = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
  };
  return (
    <Link to="/" className={style["logo-link"]} onClick={clickHandler}>
      <img
        className={style.logo}
        src={logo}
        alt="Pinar Sarisay Boluk Logo"
      ></img>
    </Link>
  );
};
export default Logo;
