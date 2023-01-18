import Card from "../UI/Card/Card";
import style from "./IssueItem.module.css";
import { Link } from "react-router-dom";
const IssueItem = (props) => {
  return (
    <li className={style.item}>
      {props.linkTitle}
      <Card>
        <div className={style.image}>
          <iframe
            src={props.youtube}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Link to={`/konular/${props.id}`}>
          <div className={style.content}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default IssueItem;
