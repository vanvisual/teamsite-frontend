import './AboutHero.scss';

const AboutHero = () => {
    return (

        <div id='c-abouthero'>
            <section className="about-card">
                <h1 className="about-card__title">Meet the team</h1>
                <p className="about-card__description about-card__description--upper">We're a group of professionals raised by the internet and we want you to succeed.</p>
            </section>

            <div className="about-card hidden-mobile">
                <h2 className="about-card__title">Our Work</h2>
                <p className="about-card__description">Great work gets results</p>
            </div>
        </div>

    )
}

export default AboutHero;
