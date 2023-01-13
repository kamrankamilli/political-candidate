import style from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Social from "../Social/Social";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.logoCol}>
          <Logo></Logo>
          <Social></Social>
          <p className={style.copyright}>
            Pınar Sarısaray Bölük &#169; <span>{new Date().getFullYear()}</span>
          </p>
          <p className={style.copyright}>Website created by Kamran Kamilli</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
