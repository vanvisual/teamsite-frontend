import './AboutHero.scss';

const AboutHero = () => {
    return (

        <div id="about-hero">
            <section className="about">
                <h1 className="about__title">Meet the team</h1>
                <p className="about__writing--upper">We're a group of professionals raised by the internet and we want you to succeed.</p>
            </section>

            <div className="about hidden-mobile">
                <h2 className="about__title">Our Work</h2>
                <p className="about__writing">Great work gets results</p>
            </div>
        </div>

    )
}

export default AboutHero;
