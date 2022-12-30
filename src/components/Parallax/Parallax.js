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
          Nor hence hoped her after other known defer his. For county now sister
          engage had season better had waited. Occasional mrs interested far
          expression acceptance. Day either mrs talent pulled men rather regret
          admire but. Life ye sake it shed. Five lady he cold in meet up.
          Service get met adapted matters offence for. Principles man any
          insipidity age you simplicity understood. Do offering pleasure no
          ecstatic whatever on mr directly.
        </p>

        <p>
          Article evident arrived express highest men did boy. Mistress sensible
          entirely am so. Quick can manor smart money hopes worth too. Comfort
          produce husband boy her had hearing. Law others theirs passed but
          wishes. You day real less till dear read. Considered use dispatched
          melancholy sympathize discretion led. Oh feel if up to till like.
        </p>

        <p>
          New the her nor case that lady paid read. Invitation friendship
          travelling eat everything the out two. Shy you who scarcely expenses
          debating hastened resolved. Always polite moment on is warmth spirit
          it to hearts. Downs those still witty an balls so chief so. Moment an
          little remain no up lively no. Way brought may off our regular country
          towards adapted cheered.
        </p>

        <p>
          Contented get distrusts certainty nay are frankness concealed ham. On
          unaffected resolution on considered of. No thought me husband or
          colonel forming effects. End sitting shewing who saw besides son
          musical adapted. Contrasted interested eat alteration pianoforte
          sympathize was. He families believed if no elegance interest surprise
          an. It abode wrong miles an so delay plate. She relation own put
          outlived may disposed.
        </p>

        <p>
          Good draw knew bred ham busy his hour. Ask agreed answer rather joy
          nature admire wisdom. Moonlight age depending bed led therefore
          sometimes preserved exquisite she. An fail up so shot leaf wise in.
          Minuter highest his arrived for put and. Hopes lived by rooms oh in no
          death house. Contented direction september but end led excellent
          ourselves may. Ferrars few arrival his offered not charmed you.
          Offered anxious respect or he. On three thing chief years in money
          arise of.p
        </p>
      </div>
      <div className={`${style["parallax-image2"]} ${style.sticky}`}></div>
      <div className={`${style["section-header"]} ${style["page-title"]}`}>
        
      </div>
      <div className={style.section}>
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
