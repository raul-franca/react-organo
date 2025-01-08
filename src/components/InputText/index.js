// src/components/InputText/Index.js
import "./InputText.css";

const InputText = (props) => {
  return (
    <div className="input-text">
        <label><b>{props.label}</b></label>
      <input type="text" placeholder={props.placeholder}  />
    </div>
  );
}

export default InputText;