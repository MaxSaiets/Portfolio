import React from "react";
import "./Works.css"
import ButtonText from "../../ButtonText/ButtonText";
import ProjectsBigList from "./ProjectsBigList/ProjectsBigList";
import { v4 as uuidv4 } from "uuid"; 

import F from './ProjectsPreview/BitcoinList.png';

import ProjectsSmallList from "./ProjectsSmallList/ProjectsSmallList";

import { WORKS_ROUTE } from "../../../utils/consts";

import DoubleSquareSvg from "../../svgShapes/DoubleSquareSvg";
import HalfCircle from "../../../img/FiguresPng/HalfCircle.png";
import ParallaxEffect from "../../utils/ParallaxEffect";

const Works = () => {   
    const BigProjects = [
        {
            previewImg: F,
            technologies: "Html Css", 
            title: "BitcoinList", 
            text: " Site BitcoinList aboutSite BitcoinList aboutSite BitcoinList about", 
            href: "https://www.youtube.com/watch?v=Fd_3EkGr0-4&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMFd_3EkGr0-4&start_radio=1"
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
            text: "Site BitcoinList ahsadfjlsdj jasfkl jsadfj asjdf lasjfkljsaf jk asjlkfj sljf lksaj jasd;f gdhgdfgdgdfgdfgdfgdfjvjkdkfv hh hh hboSite BitcoinList aboutSite BitcoinList aboutut", 
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
        <section className="Works" id="section2" data-section>

            <div className="works_decor__figures">
                <ParallaxEffect Figure={DoubleSquareSvg} className={"works_decor__svgDoubleSquareSvg"}/>
            </div>

            <div className="container">

                <div className="works_decor__figures__container">
                   <img className="works_decor__imgCircles" src={HalfCircle} />
                </div>

                <div className="works_wrapper">
                    <div className="works_title__wrapper">
                        <h1 className="works_title"><span className="works_span">#</span>projects</h1>
                        <div className="works_title_line"></div>
                        <ButtonText text="View all" link={WORKS_ROUTE} />
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

                    <div className="works_footer">
                        <div className="works_footer__btn">
                            <ButtonText text={"See more projects with in-depth explanations! Watch more!"} link={WORKS_ROUTE} textStyles={{fontSize: "22px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;