import style from "./TwitItem.module.css";
import Card from "../UI/Card/Card";
import { FaTwitter } from "react-icons/fa";
import timeSince from "../../utils/timeSince";
const TwitItem = (props) => {
  return (
    <li className={style.item}>
      <Card>
        <div className={style.content}>
          <FaTwitter className={style.icon}></FaTwitter>
          <p className={style.text}>{props.text}</p>
          <p className={style.ago}>{timeSince(new Date(props.createdAt))} önce</p>
        </div>
      </Card>
    </li>
  );
};
export default TwitItem;
