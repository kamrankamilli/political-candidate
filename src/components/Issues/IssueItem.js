import Card from "../UI/Card/Card";
import style from "./IssueItem.module.css";
import { Link } from "react-router-dom";
const IssueItem = (props) => {
  return (
    <li className={style.item}>
      <Link  to={`/konular/${props.id}`}>
        {props.linkTitle}
        <Card>
          <div className={style.image}>
            <img
              src={require(`../../assets/${props.img}`)}
              alt={props.alt}
              loading="lazy"
            ></img>
          </div>
          <div className={style.content}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
          </div>
        </Card>
      </Link>
    </li>
  );
};
export default IssueItem;
