import React from "react";
import "./Home.css"
import ButtonSimple from "../../ButtonSimple/ButtonSimple";
import Box from "@mui/material/Box";
import Circles from "../../../img/FiguresPng/Circles.png";

import { useMediaQuery, useTheme } from "@mui/material";

const Home = () => {   
    const theme = useTheme();
    const matches900 = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <section className="Home" id="section1" data-section>
            <div className="container">
                
                <div className="header_decor__figures__container">
                    <img className="header_decor__imgCircles" src={Circles} />
                </div>

                <div className="home_wrapper">
                    <div className="home_title">
                        <h1><span className="home_text__accented">Hello</span> World!</h1>
                        <p>I am <span className="home_text__accented">Max</span>, a passionate web developer</p>
                    </div>
                    <div className="home_text">
                        <p className="home_text__subtext">weaving together cutting-edge technology and boundless creativity to build immersive websites. Join me on this journey through the art and science of web development.</p>
                    </div>
                    <div className="home_btn__container">
                        <ButtonSimple text="Contact me!" link={"#section5"}/>
                    </div>
                </div>
            </div>

            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    right: "-50px",
                    width: matches900 ? "5px" : "20px",
                    height: "100vh",
                    zIndex: -10,
                    backgroundColor: "#c1f285",
                    borderRadius: "20px",
                    boxShadow: matches900 ? "30px 0px 100px 100px #c1f285" : "100px 0px 100px 200px #c1f285",
                    opacity: 0.3,
                }}
            />        

      </section>
    );
};

export default Home;