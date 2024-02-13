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
                        <h1><span className="home_text__accented">Hello</span> everyone!</h1>
                        <p>I am <span className="home_text__accented">Max</span> and I am web developer</p>
                    </div>
                    <div className="home_text">
                        <p className="home_text__subtext">And I create websites where technologies meet creativity</p>
                    </div>
                    <div className="home_btn__container">
                        <ButtonSimple text="Contact me!" link="#"/>
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