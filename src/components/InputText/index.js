// src/components/InputText/Index.js
import "./InputText.css";

const InputText = (props) => {
  return (
    <div className="input-text">
        <label><b>{props.label}</b></label>
      <input required={props.required} type="text" placeholder={props.placeholder}  />
    </div>
  );
}

export default InputText;