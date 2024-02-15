import React from "react";
import "./Skills.css";

import SkillsList from "./SkillsList/SkillsList.jsx";

import { v4 as uuidv4 } from "uuid"; 

import Lines from "../../../img/FiguresPng/Lines.png";

const Skills = () => {   
    const skills = [
        {topPos: "0%", leftPos: "2%", title: "Languages", content: "JavaScript C# Python Golang TypeScript"},
        {topPos: "40%", leftPos: "10%", title: "Databases", content: "FireBase MySQL PostgreSql MongoDB"},
        {topPos: "40%", leftPos: "40%", title: "Other", content: "HTML CSS GIT Webpack Docker APIs SCSS"},
        {topPos: "6%", leftPos: "30%", title: "Desktop development", content: "C# WinForms WPF"},
        {topPos: "5%", leftPos: "55%", title: "Frameworks", content: "Express.js React-Js Vue React-Native ASP.NET"},
        {topPos: "2%", leftPos: "80%", title: "AI", content: "Neural Networks Computer Vision "},
    ]

    return(
        <section className="Skills" id="section3" data-section>
            <div className="container">
                <div className="skills_decor__figures__container">
                   <img className="skills_decor__imgCircles" src={Lines} />
                </div>

                <div className="skills_wrapper">
                    <div className="skills_title__wrapper">
                        <h1 className="skills_title"><span className="skills_span">#</span>skills</h1>
                        <div className="skills_title_line"></div>
                    </div>

                    <div className="skills_content__wraper">
                        <div className="skills_content__main">
                            {skills.map(elem => (
                                <SkillsList elem={elem} key={uuidv4()} />
                            ))}
                        </div>

                        <div className="skills_content__footer">
                            <div className="skills_footer__text">
                                <p>
                                    I have a keen interest in various technologies, and I have achieved good results in many areas. I can develop applications for Windows, design responsive and user-friendly websites, create mobile apps for different platforms, and much more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;