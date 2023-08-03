import { Link } from "react-router-dom";

import "./HomeHero.scss";


import arrow from "../../assets/icons/arrow.png";

const HomeHero = () => (

    <div id="c-homehero">

        <section className="hh-card">
            <h1 id="hometitle" className="hh-card__title">VanVisual</h1>
            <p className="hh-card__subtitle hh-card__subtitle--1">Website Design</p>
            <p className="hh-card__description">We are a team of designers and developers dedicated to helping businesses create and build their online presence through visually appealing websites.</p>
        </section>
        <div className="hh-card-2 hidden-mobile">
            {/* <p className="hh-card-2__subtitle hh-card-2__subtitle--top">Our Work</p> */}
            <div className="hh-card-2__group">
                <p className="hh-card-2__subtitle">Great work gets results</p>


                <Link to="/contact" className="hh-card-2__link">
                    <img src={arrow} alt="Arrow Icon" className="" />
                </Link>
            </div>
        </div>

        {/* <div className="custom-shape">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div> */}

    </div>

)

export default HomeHero;