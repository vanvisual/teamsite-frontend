import "./Contact.scss";
import {useState} from "react";
import emailIcon from "../../assets/icons/Email_Icon.svg";
import phoneIcon from "../../assets/icons/Phone_Icon.svg";
import FormControl from "../../Components/FormControl/FormControl";
const Contact = () => {
    const [fName, setFName] = useState("");
    return (
        <section className="contact">
            <div className="contact__container">
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
                    <div className="contact__form__header">
                        <p className="contact__form__text">REQUEST A DESIGN</p>
                        <p className="contact__form__title">Any questions? Send us a message</p>
                    </div>
                    <form className="contact__form">
                        <FormControl label="First Name" placeholder="John" value={fName} setValue={setFName}/>
                        <FormControl label="First Name" placeholder="John" value={fName} setValue={setFName}/>
                        <FormControl label="First Name" placeholder="John" value={fName} setValue={setFName}/>
                        <FormControl label="First Name" placeholder="John" value={fName} setValue={setFName}/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
