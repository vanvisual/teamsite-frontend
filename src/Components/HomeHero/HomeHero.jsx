import "./HomeHero.scss";
import arrow from "../../assets/icons/arrow.png";

const HomeHero = () => (

    <div className="hero">

        <section className="hero__content">
            <h1 id="hometitle" className="hero__title">VanVisual</h1>
            <p className="hero__subtitle hero__subtitle--1">Website Design</p>
            <p className="hero__subtitle">We are a team of designers and developers dedicated to helping businesses create and build their onlone presence through visual appealing websites.</p>
        </section>
        <div className="hero__content2 hidden-mobile">
            <p className="hero__subtitle">OUR WORK</p>
            <div className="hero__group">
                <p className="hero__subtitle">Great work gets result</p>
                <img src={arrow} alt="Arrow Icon" className="hero__icon" />
            </div>
        </div>

        <div className="custom-shape">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>

    </div>

)

export default HomeHero;