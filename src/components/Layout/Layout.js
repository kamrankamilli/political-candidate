import Header from "../Header/Header";
import style from "./Layout.module.css";
import Footer from "../Footer/Footer";
const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={style.main}>{props.children}</main>
      <Footer></Footer>
    </>
  );
};
export default Layout;
