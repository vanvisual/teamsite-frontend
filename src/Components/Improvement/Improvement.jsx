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
                <p className='improvement__description'>We tell stories and bring your vision to life. Our designs guide users to action.</p>
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
                <p className='improvement__description'>We maintain mobile first and responsive designs, available to users from all viewports.</p>
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
                <p className='improvement__description'>A Custom CMS gives you the control you need over your site, no technical know-how required.</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{

                    delay: 0.2,
                    // repeat: Infinity
                }} className="improvement__card">
                <h3 className='improvement__subtitle'>SEO</h3>
                <p className='improvement__description'>SEO is an integral part of your success - our techniques improve your websites visibility among search rankings.</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                }} className="improvement__card">
                <h3 className='improvement__subtitle'>Increased Conversion Rates</h3>
                <p className='improvement__description'>We create optimized website experiences to meet your conversion goals.</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                }}

                className="improvement__card">
                <h3 className='improvement__subtitle'>Usability & Accessibility</h3>
                <p className='improvement__description'>The user is at the forefront of design - our designs are created prioritizing accessibility and usability.</p>
            </motion.article>
        </section>
    </div>
);

export default Improvement;
