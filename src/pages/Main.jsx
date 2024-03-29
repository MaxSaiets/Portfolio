import React from "react";
//import { observer } from "mobx-react-lite";

import Header from "../components/Header/Header";
import MainContent from "../components/MainContent/MainContent";
import Footer from "../components/Footer/Footer";

//observer

const Main = () => {

    return (
        <div className="MainPage" style={{display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0}}>
                
            <Header />

            <MainContent />

            <Footer />

        </div>
    );
};

export default Main;