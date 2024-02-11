import React from "react";
import "./Footer.css"
import { v4 as uuidv4 } from "uuid"; 

import FooterDecorImg1 from "../../img/FiguresPng/Lines.png";
import FooterDecorImg2 from "../../img/FiguresPng/HalfCircle.png";
import FooterLogoImg from "../../img/FiguresPng/Triangle.png";

import telegramSVG from "../../img/header/telegram.svg"
import gmailSVG from "../../img/header/gmail.svg"
import upworkSVG from "../../img/header/upwork.svg"
import githubSVG from "../../img/header/github.svg"
import FooterSVGIconsList from "./FooterSVGIconsList/FooterSVGIconsList";

const Footer = () => {  
    const footerSVGIcons = [
        {alt: "telegram", href: "https://t.me/Max_Saiets", src: telegramSVG},
        {alt: "gmail", href: "mailto:sayetsm@gmail.com", src: gmailSVG},
        {alt: "upwork", href: "https://www.upwork.com/freelancers/~016ae2a0dbb6245846", src: upworkSVG},
        {alt: "github", href: "https://github.com/MaxSaiets", src: githubSVG},
    ]

    return(
        <footer className="Footer">

            <div className="footer_decor__wrapper">
                <img className="footer_decor__left" src={FooterDecorImg1} />
                <img className="footer_decor__right" src={FooterDecorImg2} />
            </div>    

            <div className="container">
                <div className="footer_wrapper">
                    
                    <div className="footer_content">
                        <div className="footer_logo">
                            <a className="footer_logo__link" href="#">
                                <img className="footer_logo__img" src={FooterLogoImg} alt="Site logo" />
                                <div className="footer_logo__text">Max Saiets</div>
                            </a>
                        </div>

                        <div className="footer_portfolio__links">
                            <a className="footer_link__socia">
                                <p>

                                </p>
                            </a>
                        </div>

                        <div className="footer_quote">
                            <div className="footer_quote__text">He who has a why to live can bear almost any how.</div>
                            <div className="footer_quote__name">Friedrich Nietzsche</div>
                        </div>
                    </div>

                    <div className="footer_links__wrapper">
                        <div className="footer_links">
                            <h2 className="footer_links__title">My links:</h2>
                            
                            <div className="footer_links__icons">
                                <ul className="footer_links__ul">
                                    {footerSVGIcons.map(icon => (
                                        <FooterSVGIconsList icon={icon} key={uuidv4()} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="footer_secretLinks">
                            <a className="footer_secretLink" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                                <h2 style={{cursor: "pointer"}}>Secret link</h2>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;