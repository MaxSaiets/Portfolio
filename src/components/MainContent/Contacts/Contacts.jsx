import React from "react";
import "./Contacts.css"
import ContactsList from "./ContactsList/ContactsList";

import { v4 as uuidv4 } from "uuid"; 

import telegramSVG from "../../../img/header/telegram.svg"
import gmailSVG from "../../../img/header/gmail.svg"
import upworkSVG from "../../../img/header/upwork.svg"
import githubSVG from "../../../img/header/github.svg"


import DoubleSquareSvg from "../../svgShapes/DoubleSquareSvg";
import FourSquaresSvg from "../../svgShapes/FourSquaresSvg";
import PetalsSvg from "../../svgShapes/PetalsSvg";
import SquareSvg from "../../svgShapes/SquareSvg";
import TriangleSvg from "../../svgShapes/TriangleSvg";
import LineSvg from "../../svgShapes/LineSvg";

import Circles from "../../../img/FiguresPng/Circles.png";
import Cube from "../../../img/FiguresPng/Cube.png";
import HalfCircle from "../../../img/FiguresPng/HalfCircle.png";
import Lines from "../../../img/FiguresPng/Lines.png";
import Triangle from "../../../img/FiguresPng/Triangle.png";
import ParallaxEffect from "../../utils/ParallaxEffect";

const Contacts = () => {   
    const contactsLinks = [
        {topPos: "40px", leftPos: "5%", svg: telegramSVG, stylesSvg: {width: "40px", height: "40px"}, text: "Max_Saiets", href: "https://t.me/Max_Saiets", bgC: "#0088cc"},
        {topPos: "75px", leftPos: "60%", svg: gmailSVG, stylesSvg: {width: "40px", height: "40px"}, text: "sayetsm@gmail.com", href: "mailto:sayetsm@gmail.com", bgC: "#525252"},
        {topPos: "125px", leftPos: "25%", svg: upworkSVG, stylesSvg: {width: "40px", height: "40px"}, text: "Max S", href: "https://www.upwork.com/freelancers/~016ae2a0dbb6245846", bgC: "#31b32070"},
        {topPos: "150px", leftPos: "52%", svg: githubSVG, stylesSvg: {width: "40px", height: "40px"}, text: "Max Saiets", href: "https://github.com/MaxSaiets", bgC: "#0d1117"},
    ] 

    return(
        <section className="Contacts" id="section5" data-section>
            <div className="container">
                <div className="contact_decor__figures__container">
                   <DoubleSquareSvg className={"contact_decor__imgCircles"}/>
                </div>

                <div className="contacts_wrapper">

                    <div className="contacts_title__wrapper">
                        <h1 className="contacts_title"><span className="contacts_span">#</span>contacts</h1>
                        <div className="contacts_title_line"></div>
                    </div>

                    <div className="contacts_content">

                        <div className="contacts_text__wrapper">
                            <p className="contacts_text">
                                My interest spans a wide range of job opportunities. I am open to collaboration and ready to consider various projects. If my work or skills have caught your interest, I would be delighted to answer any questions or discuss potential collaboration. Feel free to get in touch for further details or to talk about your project.
                            </p>
                        </div>

                        <div className="contacts_opport">
                            <div className="contacts_opport__wrapper">
                                <div className="contacts_opport__title">
                                    <p>You can find me here!</p>
                                </div>

                               {contactsLinks.map((elem) => (
                                    <ContactsList elem={elem} key={uuidv4()}/>
                               ))}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;