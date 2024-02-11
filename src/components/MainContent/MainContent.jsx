import React from "react";
import "./MainContent.css"
import Works from "./Works/Works";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import AboutMe from "./AboutMe/AboutMe";
import Contacts from "./Contacts/Contacts";
// import { observer } from "mobx-react-lite";

const MainContent = () => {    

    return(
        <main style={{flex: "1 1 auto"}}>
            <Home />
            
            <Works />

            <Skills />

            <AboutMe />

            <Contacts />
        </main>
    );
};

export default MainContent;