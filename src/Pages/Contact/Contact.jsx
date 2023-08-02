import "./Contact.scss";
import {useState} from "react";
import emailIcon from "../../assets/icons/Email_Icon.svg";
import phoneIcon from "../../assets/icons/Phone_Icon.svg";
import FormControl from "../../Components/FormControl/FormControl";
import { Form } from "react-router-dom";
const Contact = () => {
    // Form State
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [services, setServices] = useState([]);
    const [message, setMessage] = useState("");

    const handleServices = (e) => {
        if (services.includes(e.target.value)) {
            const filteredServices = services.filter(service => service !== e.target.value);
            setServices(filteredServices);
        } else {
            setServices(prevServices => [...prevServices, e.target.value]);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(services);
        console.log(fName);
        console.log(lName);
        console.log(email);
        console.log(phone);
        console.log(services);
        console.log(message);
    }
    return (
        <section className="contact">
            <div className="contact__container">
                {/* Hero */}
                <div className="contact__hero">
                    <h1 className="contact__title">Contact Information</h1>
                    <p className="contact__subtitle">Fill up the form and our Team will get back to you within 24 hours</p>
                    <div className="contact__group">
                        <img src={phoneIcon} alt="" className="contact__icon" />
                        <p className="contact__text">+1(604)-520-5555</p>
                    </div>
                    <div className="contact__group">
                        <img src={emailIcon} alt="" className="contact__icon" />
                        <p className="contact__text">bniowneoifwon@gmail.com</p>
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
                        <FormControl label="First Name" type="text" placeholder="John" value={fName} setValue={setFName}/>
                        <FormControl label="Last Name" type="text" placeholder="Doe" value={lName} setValue={setLName}/>
                        <FormControl label="Email" type="email" placeholder="john@gmail.com" value={email} setValue={setEmail}/>
                        <FormControl label="Phone" type="text" placeholder="7780001111" value={phone} setValue={setPhone}/>
                        {/* Service Form */}
                        <div className="contact__form__services">
                            <p className="contact__form__services__title">What kind of services do you need?</p>
                            <div className="contact_form__services__container">
                                <FormControl label="Web Design" value="Web Design" id="webdesign" type="checkbox" setValue={handleServices}/>
                                <FormControl label="Maintenance" value="Maintenance" id="maintenance" type="checkbox" setValue={handleServices}/>
                                <FormControl label="eCommerce" value="eCommerce" id="eCommerce" type="checkbox" setValue={handleServices}/>
                                <FormControl label="SEO" value="SEO" id="seo" type="checkbox" setValue={handleServices}/>
                                <FormControl label="Web Development" value="Web Development" id="webdevelopment" type="checkbox" setValue={handleServices}/>
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
