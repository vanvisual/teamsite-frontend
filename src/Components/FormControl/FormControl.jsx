import "./FormControl.scss";
const FormControl = ({type, placeholder, label, value, setValue}) => {
    return (
        <div className="form-control">
            <label htmlFor="" className="form__label">{label}</label>
            <input value={value} onChange={(e)=>setValue(e.target.value)} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default FormControl
