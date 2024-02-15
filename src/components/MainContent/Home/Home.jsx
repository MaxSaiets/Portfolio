import React from "react";
import "./Home.css"
import ButtonSimple from "../../ButtonSimple/ButtonSimple";

import Circles from "../../../img/FiguresPng/Circles.png";

const Home = () => {   

    return(
        <section className="Home" id="section1" data-section>
            <div className="container">
                
                <div className="header_decor__figures__container">
                    <img className="header_decor__imgCircles" src={Circles} />
                </div>

                <div className="home_wrapper">
                    <div className="home_title">
                        <h1><span className="home_text__accented">Hello</span> World!</h1>
                        <p>I am <span className="home_text__accented">Max</span>, a passionate web developer</p>
                    </div>
                    <div className="home_text">
                        <p className="home_text__subtext">weaving together cutting-edge technology and boundless creativity to build immersive websites. Join me on this journey through the art and science of web development.</p>
                    </div>
                    <div className="home_btn__container">
                        <ButtonSimple text="Contact me!" link={"#section5"}/>
                    </div>
                </div>
            </div>

            <div className="header_decor__figures">
                <div className="header_decor__neonLine"></div>
            </div>
        </section>
    );
};

export default Home;