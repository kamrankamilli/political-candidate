import style from "./Toast.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
const Toast = (props) => {
  const { toastList, position, autoDelete, autoDeleteTime } = props;
  const [list, setList] = useState(toastList);
  
  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTime, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };
  return (
    <>
      <div className={`${style["notification-container"]} ${style[position]}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`${style.notification} ${style.toast} ${style[position]}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div className={style["notification-image"]}>{toast.icon}</div>
            <div>
              <p className={style["notification-title"]}>{toast.title}</p>
              <p className={style["notification-message"]}>
                {toast.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Toast.propTypes = {
  toastList: PropTypes.array.isRequired,
  position: PropTypes.string.isRequired,
  autoDelete: PropTypes.bool,
  autoDeleteTime: PropTypes.number,
};
export default Toast;
