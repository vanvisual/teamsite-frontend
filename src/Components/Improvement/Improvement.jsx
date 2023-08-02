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
                <p className='improvement__description'>We are a team of local Designers and Web developers solving your web design problems. We can design and build a website in a short turn around.</p>
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
                <p className='improvement__description'>With numerous technological devices, it's difficult to know who may view your website! With our industry leading code, we can create websites which will be asthetically pleasing on all devices.</p>
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
                <p className='improvement__description'>At additional cost, we can create websites which will have their own content management system and allow you to be able to adjust content quickly and easily.</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{

                    delay: 0.2,
                    // repeat: Infinity
                }} className="improvement__card">
                <h3 className='improvement__subtitle'>SEO</h3>
                <p className='improvement__description'>We can help analyse your website and explain how we can help it rank better with search engines such as Google. This can be from a content standpoint but also looking at behind the scenes to see if there's anything else you can do!</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                }} className="improvement__card">
                <h3 className='improvement__subtitle'>Increased Conversion Rates</h3>
                <p className='improvement__description'>We can help you increase traffic to your website!</p>
            </motion.article>
            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                }}

                className="improvement__card">
                <h3 className='improvement__subtitle'>Usability & Accessibility</h3>
                <p className='improvement__description'>We can help consult, design and develop a site which will be usable for all audiences.</p>
            </motion.article>
        </section>
    </div>
);

export default Improvement;
