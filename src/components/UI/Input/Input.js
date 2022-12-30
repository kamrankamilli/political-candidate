import style from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={style.control}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        placeholder={props.placeholder}
      />
      {props.error && <p>{props.errorText}</p>}
    </div>
  );
};
export default Input;
