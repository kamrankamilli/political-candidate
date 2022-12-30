import style from "./TwitList.module.css";
import TwitItem from "./TwitItem";
const TwitList = (props) => {
  return (
    <section className={style["section-issues"]}>
      <h1 className="heading-primary">En son Twit'ler</h1>
      <ul className={style.list}>
        {props.twits.map((twit) => (
          <TwitItem key={twit.id} text={twit.text} createdAt={twit.createdAt}></TwitItem>
        ))}
      </ul>
    </section>
  );
};
export default TwitList;
