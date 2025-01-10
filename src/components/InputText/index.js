// src/components/InputText/Index.js
import "./InputText.css";


const InputText = (props) => {

    const change = (e) => {
        props.change(e.target.value);
    }

    return (
        <div className="input-text">
            <label><b>{props.label}</b></label>
          <input
            value={ props.value }
            onChange={change}
            required={props.required}
            type="text" placeholder={props.placeholder}
          />
        </div>
    );
}

export default InputText;