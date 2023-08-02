import "./Contact.scss";
import {useState} from "react";
import emailIcon from "../../assets/icons/Email_Icon.svg";
import phoneIcon from "../../assets/icons/Phone_Icon.svg";
import FormControl from "../../Components/FormControl/FormControl";
import {uid} from "uid";
import { useNavigate } from "react-router-dom";
// Firebase database 
import { Database } from "firebase/database";
import {set, ref} from "firebase/database";
import { database } from "../../firebase/firebase";


const Contact = () => {
    // Form State
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [services, setServices] = useState({});
    const [message, setMessage] = useState("");
    // Form Submit Status
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const handleServices = (e) => {
        const {name, checked} = e.target;
        setServices((prev) => ({...prev, [name]: checked}))
    }
    // Push client data to the database
    const handleSubmit = (e) => {
        e.preventDefault();
        const uuid = uid();
        const newClient = {
            uuid,fName, lName, email, phone, message, service: services
        }
        set(ref(database,`/${uuid}`), newClient)
            .then(()=>{
                setLName("");
                setFName("");
                setEmail("");
                setPhone("");
                setMessage("");
                setServices({});
                setSuccess("Successfully submited your request. Our team will get back to you as soon as possible.")
                setTimeout(() => {
                    setSuccess("")
                }, 5000)
            })
            .catch((error)=>{
                setError("Unable to submit your requestion right now. Please try again later.")
            })
    }
    return (
        <section className="contact">
            <div className="contact__container">
                {/* Hero */}
                <div className="contact__hero">
                    <h1 className="contact__title">Contact Information</h1>
                    <p className="contact__subtitle">Fill up the form and our Team will get back to you within 24 hours</p>
                    {/* Add when the team got an official number */}
                    {/* <div className="contact__group">
                        <img src={phoneIcon} alt="" className="contact__icon" />
                        <p className="contact__text">+1(604)-520-5555</p>
                    </div> */}
                    <div className="contact__group">
                        <img src={emailIcon} alt="" className="contact__icon" />
                        <p className="contact__text">info@vanvisual.com</p>
                    </div>
                </div>
                <div className="contact__form-container">
                    {/* Contact Header */}
                    <div className="contact__form__header">
                        <p className="contact__form__text">REQUEST A DESIGN</p>
                        <p className="contact__form__title">Any questions? Send us a message</p>
                    </div>
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="contact__form">
                        {/* Show status if it is successful or not */}
                        {success && <p className="contact__success">{success}</p>}
                        {error && <p className="contact__error">{error}</p>}
                        <FormControl label="First Name" type="text" placeholder="John" value={fName} setValue={setFName}/>
                        <FormControl label="Last Name" type="text" placeholder="Doe" value={lName} setValue={setLName}/>
                        <FormControl label="Email" type="email" placeholder="john@gmail.com" value={email} setValue={setEmail}/>
                        <FormControl label="Phone" type="text" placeholder="7780001111" value={phone} setValue={setPhone}/>
                        {/* Service Form */}
                        <div className="contact__form__services">
                            <p className="contact__form__services__title">What kind of services do you need?</p>
                            <div className="contact_form__services__container">
                                <FormControl label="Web Design" services={services} name="webdesign" id="webdesign" type="checkbox" setValue={handleServices}/>
                                <FormControl label="Maintenance" services={services} name="maintenance" id="maintenance" type="checkbox" setValue={handleServices}/>
                                <FormControl label="eCommerce" services={services} name="ecommerce" id="ecommerce" type="checkbox" setValue={handleServices}/>
                                <FormControl label="SEO" name="seo" services={services} id="seo" type="checkbox" setValue={handleServices}/>
                                <FormControl label="Web Development" services={services} name="webdevelopment" id="webdevelopment" type="checkbox" setValue={handleServices}/>
                            </div>
                        </div>
                        <FormControl label="Message" type="text" placeholder="I need a website for a newly opening restaurant" value={message} setValue={setMessage}/>
                        <button className="contact__form__btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
