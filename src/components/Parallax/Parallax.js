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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
          lacinia felis. Curabitur commodo nibh ac lectus aliquet vestibulum.
          Quisque eu dapibus turpis. Vestibulum commodo orci commodo diam
          ullamcorper, quis interdum nulla malesuada. Quisque in enim in nulla
          luctus ullamcorper a vitae nibh. Integer sollicitudin hendrerit leo,
          et porta quam posuere sed. Ut elementum metus quis ante egestas
          iaculis. Suspendisse eget congue est. Donec dui tortor, pretium eget
          turpis nec, eleifend auctor nulla. Aenean finibus congue sem id
          laoreet. Sed eget imperdiet dui. Pellentesque lacus magna, posuere sit
          amet egestas a, auctor sit amet orci. Donec lacinia eu augue ut
          feugiat. Morbi et nibh eu tortor euismod tincidunt. Nulla sollicitudin
          lacus sed imperdiet interdum. Nullam auctor, nibh id dignissim
          fringilla, erat felis sodales diam, in tincidunt ipsum massa ut nibh.
        </p>

        <p>
          Duis cursus convallis risus eget sagittis. Praesent laoreet aliquet
          turpis. Duis vel urna velit. Integer lobortis id sapien vitae mollis.
          Aliquam molestie erat et commodo rutrum. Duis sit amet eros nisl.
          Aliquam tempor malesuada neque nec euismod. Mauris congue quis lacus a
          posuere. Sed tincidunt sapien vel scelerisque sodales. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Phasellus at imperdiet massa.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          ullam repellat aliquid aspernatur quaerat doloremque soluta ratione
          laudantium saepe vero eligendi ad hic ipsam tempora accusantium
          architecto optio, quibusdam non!
        </p>

        <p>
          Maecenas condimentum elementum ligula, nec feugiat turpis. Aenean nunc
          magna, finibus vitae cursus vel, mollis nec quam. Fusce fermentum nibh
          at varius vestibulum. Proin quis dapibus odio. Phasellus sed nisl
          felis. Nam varius enim enim, in mattis enim imperdiet vitae. Integer
          augue odio, ultrices rutrum placerat id, tempor at ipsum. Ut vel nibh
          vitae nisl cursus tempus non ut erat. Maecenas luctus gravida ligula,
          non rutrum purus dictum eu. In sit amet odio eu est pellentesque
          sagittis a eget urna. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed nibh mauris, aliquet in nunc accumsan, vulputate
          porttitor velit. Suspendisse sed arcu non leo consectetur vulputate
          quis at nibh. Fusce ut mattis diam.
        </p>

        <p>
          Maecenas metus nisi, bibendum et erat et, malesuada imperdiet turpis.
          Fusce luctus, magna sit amet fermentum consequat, ligula urna dapibus
          felis, id sodales urna metus sed nisl. Cras ac libero et diam laoreet
          viverra. Pellentesque placerat massa ligula, lacinia faucibus ante
          maximus nec. Etiam venenatis efficitur sapien eget dignissim. Integer
          ultrices lectus ut nunc feugiat placerat. Curabitur et ante felis.
          Curabitur risus ipsum, ultricies id diam id, pretium sagittis elit.
          Etiam ut risus interdum, dignissim ligula sollicitudin, auctor dui.
          Integer in tempus mauris, ut placerat eros. Integer eget tellus nibh.
          Mauris pharetra felis tempus dolor aliquet, euismod commodo massa
          efficitur. Sed at neque facilisis, semper metus et, faucibus orci.
          Praesent mauris nunc, viverra in tristique eget, volutpat sit amet
          arcu. Fusce justo libero, dapibus et quam eu, fringilla malesuada
          tortor. Vestibulum non nulla ullamcorper, mattis est vel, egestas sem.
        </p>
      </div>
      <div className={`${style["parallax-image2"]} ${style.sticky}`}></div>
      <div className={`${style["section-header"]} ${style["page-title"]}`}>
        <div class={`${style["header-text"]}`}>
          <h2 className="heading-primary">En son siyasi röportaj</h2>
        </div>
      </div>
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
