import './Approach.scss';


const Approach = () => {
    return (
        <div>

            <section className="approach">
                <h2 className="approach__title">Our Approach</h2>
                <article className="appr-card appr-card--first">
                    <h3 className="appr-card__subtitle">Our Design Approach</h3>
                    <p className="appr-card__description">Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </article>
                <article className="appr-card">
                    <h3 className="appr-card__subtitle">Discover</h3>
                    <p className="appr-card__description">Our team analyze your target audience, industry trends, and competitors to uncover unique insights that will shape the direction of your digital presence.</p>
                </article>
                <article className="appr-card">
                    <h3 className="appr-card__subtitle">Design</h3>
                    <p className="appr-card__description">We prioritize user experience and design intuitive interfaces and visually compelling websites that engage and delight your visitors.</p>
                </article>
                <article className="appr-card">
                    <h3 className="appr-card__subtitle">Develop</h3>
                    <p className="appr-card__description">Our experienced developers brings your designs to life! We pay close attention to detail, ensuring clean code, responsiveness, and compatibility across devices and browsers.</p>
                </article>
            </section>

        </div>
    )
}

export default Approach
