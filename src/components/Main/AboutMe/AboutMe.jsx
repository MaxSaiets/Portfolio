import React from "react";
import "./AboutMe.css"
import ButtonSimple from "../../ButtonSimple/ButtonSimple";


const AboutMe = () => {   

    return(
        <section className="AboutMe">
            <div className="container">
                <div className="aboutMe_wrapper">

                    <div className="aboutMe_title__wrapper">
                        <h1 className="aboutMe_title"><span className="aboutMe_span">#</span>about-me</h1>
                        <div className="aboutMe_title_line"></div>
                    </div>

                    <div className="aboutme_content__wrapper">
                        <div className="aboutMe_content">
                            <p className="aboutMe_content__text">
                                sldkfjsd;fillasvdvdfdfdfdfdfdfdfffdf
                                sldfsdlf
                                sflksf
                            </p>

                            <p className="aboutMe_content__text">
                                sldfjldsjflskfj
                                sdfslf;jsdfs
                                fsd'fjdsfdsj
                            </p>

                            <div className="aboutMe_content__footer">
                                <ButtonSimple text={"Read more"} />
                            </div>
                        </div>

                        <div className="aboutMe_content__img">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;