import React from "react";
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

const Header = () => {  

    const headerSVGIcons = [
        {alt: "telegram", href: "#", src: telegramSVG},
        {alt: "gmail", href: "#", src: gmailSVG},
        {alt: "upwork", href: "#", src: upworkSVG},
        {alt: "github", href: "#", src: githubSVG},
    ]
    const headerTitles = [
        {title: "home", href: "#"},
        {title: "works", href: "#"},
        {title: "about-me", href: "#"},
        {title: "contacts", href: "#"},
    ]

    return(
        <header className="header">

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
                        <a href="#" className="header_logo">
                            {/*<img src="#" alt="myLogo" /> */}
                            <span style={{display: 'inline-block', verticalAlign: 'middle'}} className="header_logo__text">Max Saiets</span>
                        </a>
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