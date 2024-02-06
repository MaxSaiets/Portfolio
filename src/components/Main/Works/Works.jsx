import React from "react";
import "./Works.css"
import ButtonText from "../../ButtonText/ButtonText";
import ProjectsBigList from "./ProjectsBigList/ProjectsBigList";
import { v4 as uuidv4 } from "uuid"; 

import F from './ProjectsPreview/BitcoinList.png';

import ProjectsSmallList from "./ProjectsSmallList/ProjectsSmallList";

const Works = () => {   
    const BigProjects = [
        {
            previewImg: F,
            technologies: "Html Css", 
            title: "BitcoinList", 
            text: "Site BitcoinList about", 
            href: "#"
        },
        {
            previewImg: F,
            technologies: "Html Css", 
            title: "BitcoinList", 
            text: "Site BitcoinList about", 
            href: "#"
        },
        {
            previewImg: F,
            technologies: "Html Css", 
            title: "BitcoinList", 
            text: "Site BitcoinList about", 
            href: "#"
        },
        {
            previewImg: F,
            technologies: "Html Css", 
            title: "BitcoinList", 
            text: "Site BitcoinList about", 
            href: "#"
        },
    ]
    const SmallProjects = [
        {
            previewImg: F,
            technologies: "Html Css", 
            title: "BitcoinList", 
            text: "Site BitcoinList about", 
            href: "#"
        },
        {
            previewImg: F,
            technologies: "Html Css", 
            title: "BitcoinList", 
            text: "Site BitcoinList about", 
            href: "#"
        },
        {
            previewImg: F,
            technologies: "Html Css", 
            title: "BitcoinList", 
            text: "Site BitcoinList about", 
            href: "#"
        },
        {
            previewImg: F,
            technologies: "Html Css", 
            title: "BitcoinList", 
            text: "Site BitcoinList about", 
            href: "#"
        },
    ]

    return(
        <section className="Works">
            <div className="container">
                <div className="works_wrapper">
                    <div className="works_title__wrapper">
                        <h1 className="works_title"><span className="works_span">#</span>projects</h1>
                        <div className="works_title_line"></div>
                        <ButtonText text="View all" link="#" />
                    </div>

                    <div className="works_content__wrapper">
                        <div className="worksBiG_wrapper">
                            {BigProjects.map(project => (
                                <ProjectsBigList project={project} key={uuidv4()}/>
                            ))}
                        </div>
                        <div className="worksSmall_wrapper">
                            {SmallProjects.map(project => (
                                <ProjectsSmallList project={project} key={uuidv4()}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;