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



            <div class="custom-shape">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
                </svg>
            </div>


        </div>







    </>

)

export default HomeHero;