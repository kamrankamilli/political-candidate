import style from "./Hero.module.css";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";
const Hero = () => {
  const [play, setPlay] = useState(false);
  const openModal = () => {
    setPlay(true);
  };
  const closeModal = ()=>{
    setPlay(false);
  }
  return (
    <section className={style["hero-section"]}>
      <div className={style["hero-container"]}>
        <div className={style["hero-text-box"]}>
          <h1 className="heading-primary">Seçim Günü Geliyor</h1>
          <p className={style["hero-description"]}>
            <strong>Pınar Sarısaray Bölük</strong>'ü destekleyerek ailenize ve
            kendi geleceğinize sahip çıkın.
          </p>
          <div className={style["action-box"]}>
            <Link to="/hakkında" className="btn btn--full">
              Daha Fazla Bilgi Edinin
            </Link>
            <Button className="play-btn"  onClick={openModal}>
            </Button>
            {play && (
              <Modal onClose = {closeModal}>
                <iframe
                className={style["hero-iframe"]}
                  src="https://www.youtube.com/embed/YD2jsWGK2Jk?autoplay=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
