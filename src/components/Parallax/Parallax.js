import style from "./Parallax.module.css";
import { useState, useEffect } from "react";
const Parallax = () => {
  // const [scrolled, setScrolled] = useState(0);

  // const onScrollAutoPlay = () => {
  //   const el = document.getElementById("offset").offsetTop;
  //   const offset = window.scrollY;
  //   if (offset >= el-88) {
  //     setScrolled(1);
  //   } else {
  //     setScrolled(0);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", onScrollAutoPlay);
  // });
  return (
    <section className={style.parallax}>
      <div
        className={`${style["parallax-image1"]} ${style.sticky} ${style["page-title"]}`}
      ></div>
      <div className={`${style["section-header"]} ${style["page-title"]}`}>
        <div class={`${style["header-text"]}`}>
          <h1 className="heading-primary">Hakkında</h1>
        </div>
      </div>
      <div className={style.section}>
        <p>
          Pınar Sarısaray Bölük, ülkemizin insanlarıyla ve onların her gün
          karşılaştıkları zorluklarla bağlantılıdır. Devletimizin gelişimini
          sınırlayan ve yavaşlatan toplumumuzun eski partizan engellerini yıkmak
          için çalışıyor.
        </p>

        <p>
          Pınar Sarısaray Bölük yenilikçi, ısrarcı ve partizanlığı bir kenara
          bırakarak devletimiz için işleri halletmek üzere insanları bir araya
          getirdi. Pınar Sarısaray Bölük, yeni işler yaratmaya, eyaletimizin tüm
          sakinleri ve misafirleri için ekonomik fırsatları iyileştirmeye, orta
          sınıf ailelerin karşı karşıya olduğu ekonomik sıkışıklığı gidermeye ve
          genel iyileştirmeyi hedeflemeye odaklandı.
        </p>

        <p>
          Görevini, senato düzeyinde iyileştirmeler yaparak devletimizin
          insanlarına yardım etmek olarak görüyor. hükümetin ekonomik ve politik
          uzmanlarının dikkatini ülkenin küçük kasabalardan başlayan sorunlarına
          çekmeye olanak tanır.
        </p>
      </div>
      <div className={`${style["parallax-image2"]} ${style.sticky}`}></div>
      {/* <div className={`${style["section-header"]} ${style["page-title"]}`}>
        <div class={`${style["header-text"]}`}>
          <h2 className="heading-primary">En son siyasi röportaj</h2>
        </div>
      </div> */}
      <div className={`${style.section} ${style.transparent}`}>
        <iframe
          className={style["parallax-iframe"]}
          src={`https://www.youtube.com/embed/UQzbwKxsCcg`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
export default Parallax;
