import "./HomeHero.scss";
import arrow from "../../assets/icons/arrow.png";

const HomeHero = () => (


    <>

        <div className="hero">
            <div className="hero__section">
                <p className="hero__subtitle">Website Design</p>
                <p className="hero__title">VanVisual</p>
                <p className="hero__subtitle">We are a team of designers and developers dedicated to helping businesses create and build their onlone presence through visual appealing websites.</p>
            </div>
            <div className="hero__section2">
                <p className="hero__subtitle">OUR WORK</p>
                <div className="hero__group">
                    <p className="hero__subtitle">Great work gets result</p>
                    <img src={arrow} alt="Arrow Icon" className="hero__icon" />
                </div>
            </div>






        </div>







    </>

)

export default HomeHero;