import style from "./Social.module.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Social = () => {
  return (
    <div className={style["social-container"]}>
      <a
        className={style["social-link"]}
        href="https://facebook.com"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Facebook"
      >
        <FaFacebookF className={style["social-icon"]} />
      </a>
      <a
        className={style["social-link"]}
        href="https://instagram.com"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Instagram"
      >
        <FaInstagram className={style["social-icon"]} />
      </a>
      <a
        className={style["social-link"]}
        href="https://youtube.com"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Youtube"
      >
        <FaYoutube className={style["social-icon"]} />
      </a>
      
      <a
        className={style["social-link"]}
        href="https://twitter.com"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Twitter"
      >
        <FaTwitter className={style["social-icon"]} />
      </a>
    </div>
  );
};
export default Social;
