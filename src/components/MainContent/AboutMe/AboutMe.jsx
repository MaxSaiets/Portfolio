import React, {useState} from "react";
import "./AboutMe.css"
import ButtonSimple from "../../ButtonSimple/ButtonSimple";
import DownArrowSvg from "./DownArrowSvg";


const AboutMe = () => {   
    const [moreAbMeOpen, setMoreAbMeOpen] = useState(false);

    const toggleMoreAbMe = () => {
        setMoreAbMeOpen(!moreAbMeOpen);
    };

    return(
        <section className="AboutMe" id="section4" data-section>
            <div className="container">
                <div className="aboutMe_wrapper">

                    <div className="aboutMe_title__wrapper">
                        <h1 className="aboutMe_title"><span className="aboutMe_span">#</span>about-me</h1>
                        <div className="aboutMe_title_line"></div>
                    </div>

                    <div className="aboutme_content__wrapper">
                        <div className={`aboutMe_content ${moreAbMeOpen ? "open" : ""}`}>
                            <div className="aboutMe_content__text">
                                Hello! My name is Max, and I'm a web developer from Ukraine. My journey with technology began from a personal desire to learn and a continuous commitment to refining my skills. Currently, I'm actively exploring various technologies while simultaneously pursuing higher education at the university.
                            </div>

                            <div className="aboutMe_content__text">
                                My interests span a wide spectrum of technologies, ranging from engaging web development to captivating innovative projects. Thanks to my ability to quickly grasp new concepts and programming languages, I efficiently bring ideas and projects to life
                            </div>

                            <div className="aboutMe_content__text">
                                In my learning and project work, I strive not only to enhance my technical skills but also to foster creativity and consider the aesthetic aspect. I believe that quality and design play a crucial role in web development.
                            </div>

                            <div className="aboutMe_content__text">
                                My ease of communication contributes to building effective relationships with clients and partners. With the conviction that collaboration and mutual understanding are key to successful projects, I am ready to create impressive and satisfying projects together with you.
                            </div>
                            
                            <div className="aboutMe_content__moreBtn" onClick={toggleMoreAbMe}>
                                <DownArrowSvg className={"aboutMe_content__moreBtn__arrow"} />
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