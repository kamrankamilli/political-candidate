import style from "./Program.module.css";
import { ImWoman } from "react-icons/im";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
const Program = () => {
  return (
    <section className={style["section-program"]}>
      <div className={style.container}>
        <div className={style.program}>
          <ImWoman className={style.icon}></ImWoman>
          <p className={style.programTitle}>Kadın Hakları</p>
          <p className={style.programDescription}>
            Türk kültür ve geleneğinde kadın hem toplum hem de devlet içerisinde
            özel bir yere sahiptir. Eski Türkler’de evin sahibi kadındır, kız
            çocukları evin bereketidir
          </p>
        </div>
        <div className={style.program}>
          <FaMoneyBillWaveAlt className={style.icon}></FaMoneyBillWaveAlt>
          <p className={style.programTitle}>Ekonomiyi Büyütme</p>
          <p className={style.programDescription}>
            Bir ülkenin güçlü bir ekonomiye sahip olması o ülkede yaşayan her
            bireyin refah ve huzur içinde yaşaması demektir.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Program;
