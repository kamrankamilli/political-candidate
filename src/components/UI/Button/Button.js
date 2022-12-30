import style from "./Button.module.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={style[props.className]} type={props.type}>
      {props.children}
    </button>
  );
};
export default Button;
