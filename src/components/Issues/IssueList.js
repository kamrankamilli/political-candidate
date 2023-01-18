import style from "./IssueList.module.css";
import IssueItem from "./IssueItem";
const IssuesList = (props) => {

  return (
    <section className={style["section-issues"]}>
      <h1 className="heading-primary">Konular</h1>
      <ul className={style.list}>
        {props.issues.map((issue) => (
          <IssueItem
            key={issue.id}
            id={issue.id}
            youtube={issue.youtube}
            alt={issue.alt}
            title={issue.title}
            text={issue.text}
          ></IssueItem>
        ))}
      </ul>
    </section>
  );
};
export default IssuesList;
