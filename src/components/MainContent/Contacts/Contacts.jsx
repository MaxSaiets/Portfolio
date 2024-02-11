import React from "react";
import "./Contacts.css"
import ContactsList from "./ContactsList/ContactsList";

import { v4 as uuidv4 } from "uuid"; 

import telegramSVG from "../../../img/header/telegram.svg"
import gmailSVG from "../../../img/header/gmail.svg"
import upworkSVG from "../../../img/header/upwork.svg"
import githubSVG from "../../../img/header/github.svg"

const Contacts = () => {   
    const contactsLinks = [
        {topPos: "40px", leftPos: "5%", svg: telegramSVG, stylesSvg: {width: "40px", height: "40px"}, text: "Max_Saiets", href: "https://t.me/Max_Saiets", bgC: "#0088cc"},
        {topPos: "75px", leftPos: "60%", svg: gmailSVG, stylesSvg: {width: "40px", height: "40px"}, text: "sayetsm@gmail.com", href: "mailto:sayetsm@gmail.com", bgC: "#525252"},
        {topPos: "125px", leftPos: "25%", svg: upworkSVG, stylesSvg: {width: "40px", height: "40px"}, text: "Max S", href: "https://www.upwork.com/freelancers/~016ae2a0dbb6245846", bgC: "#32b320"},
        {topPos: "150px", leftPos: "52%", svg: githubSVG, stylesSvg: {width: "40px", height: "40px"}, text: "Max Saiets", href: "https://github.com/MaxSaiets", bgC: "#0d1117"},
    ] 

    return(
        <section className="Contacts" id="section5" data-section>
            <div className="container">
                <div className="contacts_wrapper">

                    <div className="contacts_title__wrapper">
                        <h1 className="contacts_title"><span className="contacts_span">#</span>contacts</h1>
                        <div className="contacts_title_line"></div>
                    </div>

                    <div className="contacts_content">

                        <div className="contacts_text__wrapper">
                            <p className="contacts_text">
                                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
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