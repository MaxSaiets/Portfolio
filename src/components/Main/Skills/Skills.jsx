import React from "react";
import "./Skills.css";

import SquareSvg from "../../svgShapes/TriangleSvg.jsx"
import SkillsList from "./SkillsList/SkillsList.jsx";

import { v4 as uuidv4 } from "uuid"; 

const Skills = () => {   
    const skills = [
        {topPos: "100%", leftPos: "0%", title: "Languages", content: "TypeScript Python <br> JavaScript"},
    ]

    return(
        <section className="Skills">
            <div className="container">
                <div className="skills_wrapper">
                    <div className="skills_title__wrapper">
                        <h1 className="skills_title"><span className="skills_span">#</span>skills</h1>
                        <div className="skills_title_line"></div>
                    </div>

                    <div className="skills_content__wraper">
                        <div className="skills_content__decorations">

                        </div>

                        <div className="skills_content__main">
                            {skills.map(elem => (
                                <SkillsList elem={elem} key={uuidv4()} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="test">
                <SquareSvg />
            </div>
                
        </section>
    );
};

export default Skills;