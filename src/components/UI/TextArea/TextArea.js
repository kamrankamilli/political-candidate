import style from "./TextArea.module.css";
const TextArea = (props) => {
  return (
    <div className={style.control}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <textarea
        id={props.id}
        name={props.name}
        rows={props.rows}
        cols={props.cols}
        maxLength={props.maxLength}
        onChange={props.onChange}
        value={props.defaultValue}
      >
      </textarea>
    </div>
  );
};
export default TextArea;
