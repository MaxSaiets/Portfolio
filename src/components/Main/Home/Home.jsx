import React from "react";
import "./Home.css"
import ButtonSimple from "../../ButtonSimple/ButtonSimple";


const Home = () => {   

    return(
        <section>
            <div className="container">
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
        </section>
    );
};

export default Home;