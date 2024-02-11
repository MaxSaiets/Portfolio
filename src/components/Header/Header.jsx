import React, {useState, useEffect} from "react";
import HeaderContentList from "./HeaderContentList/HeaderContentList";
import HeaderSVGIconsList from "./HeaderSVGIconsList/HeaderSVGIconsList";
// import { observer } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid"; 
import './Header.css';

import telegramSVG from "../../img/header/telegram.svg"
import gmailSVG from "../../img/header/gmail.svg"
import upworkSVG from "../../img/header/upwork.svg"
import githubSVG from "../../img/header/github.svg"

import HeaderWaves from "./HeaderWaves/HeaderWaves";

import HeaderLogoImg from "./HeaderLogoImg.svg"

import { MAIN_ROUTE } from "../../utils/consts";
import { Link } from "react-router-dom";

const Header = () => {  

    const headerSVGIcons = [
        {alt: "telegram", href: "https://t.me/Max_Saiets", src: telegramSVG},
        {alt: "gmail", href: "mailto:sayetsm@gmail.com", src: gmailSVG},
        {alt: "upwork", href: "https://www.upwork.com/freelancers/~016ae2a0dbb6245846", src: upworkSVG},
        {alt: "github", href: "https://github.com/MaxSaiets", src: githubSVG},
    ]
    const headerTitles = [
        {title: "Home", href: "#section1"},
        {title: "Works", href: "#section2"},
        {title: "Skills", href: "#section3"},
        {title: "About-me", href: "#section4"},
        {title: "Contacts", href: "#section5"},
    ]
    
    return(
        <header className="Header">
            
            <div className="header_decor">
                <div className="header_waves">
                    <HeaderWaves />
                </div>

            </div>
            
            <div className="container">
                <div className="header_content">

                    <div className="header_leftDecor__container">
                        <div className="header_leftDecor__line"></div>
                        <ul className="header_iconsUL">
                            {headerSVGIcons.map(icon => (
                                <HeaderSVGIconsList icon={icon} key={uuidv4()} />
                            ))}
                        </ul>
                    </div>

                    <nav className="header_nav">
                        <Link to={MAIN_ROUTE} className="header_logo">
                            <img src={HeaderLogoImg} className="header_logo__img" alt="Logo img" />
                            <p style={{display: 'inline-block', verticalAlign: 'middle'}} className="header_logo__text">Max Saiets</p>
                        </Link>
                        <ul className="header_ul">
                            {headerTitles.map(headerElem => (
                                <HeaderContentList headerElem={headerElem} key={uuidv4()}/>
                            ))}
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;