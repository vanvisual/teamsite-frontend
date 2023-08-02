import { motion } from 'framer-motion';
import './Improvement.scss';

const Improvement = ({ index }) => (
    <div>

        <section className="improvement">
            <h2 className='improvement__title'>How we benefit you</h2>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                    // repeat: Infinity
                }}
                className="improvement__card">
                <h3 className='improvement__subtitle'>Custom Web Design</h3>
                <p className='improvement__description'>We are a team of local Designers and Web developers solving your web design problems</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    // repeat: Infinity
                }}

                className="improvement__card">
                <h3 className='improvement__subtitle'>Responsive Design</h3>
                <p className='improvement__description'>We are a team of local Designers and Web developers solving your web design problems</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                    // repeat: Infinity
                }}
                className="improvement__card">
                <h3 className='improvement__subtitle'>Content Management System</h3>
                <p className='improvement__description'>We are a team of local Designers and Web developers solving your web design problems</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{

                    delay: 0.2,
                    // repeat: Infinity
                }} className="improvement__card">
                <h3 className='improvement__subtitle'>SEO</h3>
                <p className='improvement__description'>We are a team of local Designers and Web developers solving your web design problems</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                }} className="improvement__card">
                <h3 className='improvement__subtitle'>Increased Conversion Rates</h3>
                <p className='improvement__description'>We are a team of local Designers and Web developers solving your web design problems</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                }}

                className="improvement__card">
                <h3 className='improvement__subtitle'>Usability & Accessibility</h3>
                <p className='improvement__description'>We are a team of local Designers and Web developers solving your web design problems</p>
            </motion.article>
        </section>
    </div>
);

export default Improvement;
