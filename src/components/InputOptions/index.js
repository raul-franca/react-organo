
import "./InputOption.css"

const InputOption = (props) => {
    return (
        <div className="input-option">
            <label><b>{props.label}</b></label>
            <select required={props.required}>
                <option value="">{props.placeholder}</option>
                {props.options.map((option) => {
                    return (
                        <option key={option}>{option}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default InputOption;