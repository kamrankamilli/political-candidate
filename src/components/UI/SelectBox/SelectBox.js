import style from "./SelectBox.module.css";
const SelectBox = (props) => {
  const options = props.options.map((option) => (
    <option
      key={option.id}
      data-id={option.id}
      value={option.name}
      selected={option.selected}
      disabled={option.disabled}
    >
      {option.name}
    </option>
  ));
  return (
    <div className={style["selectbox-control"]}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <select
        value={props.inputValue}
        onChange={props.onChange}
        name={props.name}
        id={props.id}
        defaultValue={''}
      >
        <option value="" key="0" data-id="0" disabled >
          {props.placeholder}
        </option>
        {options}
      </select>
    </div>
  );
};
export default SelectBox;
