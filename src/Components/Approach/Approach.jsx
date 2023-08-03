import { motion } from 'framer-motion';

import './Approach.scss';

import discover from "../../assets/icons/Discover_Icon.svg";
import design from "../../assets/icons/Design_Icon.svg";
import develop from "../../assets/icons/Develop_Icon.svg";



const Approach = () => {
    return (
        <section className="approach">
            <h2 className="approach__title">Our Approach</h2>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.2,
                }} className="appr-card appr-card--first">
                <h3 className="appr-card__subtitle">Our Design Approach</h3>
                <p className="appr-card__description">Our creative process begins with you. Tell us your goals, from functionalities to branding, we can fill in the blanks together. From there we follow a three step process.</p>
            </motion.div>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                }} className="appr-card">
                <img src={discover} alt="Discover Icon" className="appr-card__icon" />
                <h3 className="appr-card__subtitle">Discover</h3>
                <p className="appr-card__subtitle--top">01</p>
                <p className="appr-card__description">Our team analyzes your goals, target audience, industry trends, and competitors to uncover unique insights that will shape the direction of your digital presence.</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                }} className="appr-card">
                <img src={design} alt="Design Icon" className="appr-card__icon" />
                <h3 className="appr-card__subtitle">Design</h3>
                <p className="appr-card__subtitle--top">02</p>
                <p className="appr-card__description">We prioritize user experience and design intuitive interfaces and visually compelling websites that engage and delight your visitors.</p>
            </motion.article>
            <motion.article
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.2,
                }} className="appr-card">
                <img src={develop} alt="Develop Icon" className="appr-card__icon" />
                <h3 className="appr-card__subtitle">Develop</h3>
                <p className="appr-card__subtitle--top">03</p>
                <p className="appr-card__description">Our experienced developers brings your designs to life! We pay close attention to detail, ensuring clean code, responsiveness, and compatibility across devices and browsers.</p>
            </motion.article>
        </section>
    )
}

export default Approach
