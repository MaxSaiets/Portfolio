import React from "react";
//import { observer } from "mobx-react-lite";

import Header from "../components/Header/Header";
import MainContent from "../components/Main/MainContent";
import Footer from "../components/Footer/Footer";

//observer

const Main = () => {

    return (
        <div className="wrapper" style={{height: "3000px"}}>
                
            <Header />

            <MainContent />

            <Footer />

        </div>
    );
};

export default Main;