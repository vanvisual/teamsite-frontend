import "./FormControl.scss";
const FormControl = ({type, placeholder, label, value, setValue, id}) => {
    if(type === "checkbox") {
        return (
            <div className="form-control--checkbox">
                <input id={id} value={value} className="form-control__input--checkbox" onChange={(e)=>setValue(e)} type={type}/>
                <label htmlFor={id} className="form-control__label--checkbox">{label}</label>
            </div>
        )
    }
    return (
        <div className="form-control">
            <label htmlFor="" className="form-control__label">{label}</label>
            <input value={value} className="form-control__input" onChange={(e)=>setValue(e.target.value)} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default FormControl
