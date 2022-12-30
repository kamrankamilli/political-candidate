import style from "./IssueDetails.module.css";
const IssueDetails = (props) => {
  return (
    <section className={style["section-detail"]}>
      <div className={style.container}>
        <h1 className="heading-primary">{props.data.heading}</h1>
        <div className={style.details}>
          <p>{props.data.details.p1}</p>
          <p>{props.data.details.p2}</p>
          <p>
            <strong>{props.data.details.p3}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
export default IssueDetails;
