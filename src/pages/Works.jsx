import React from "react";
//import { observer } from "mobx-react-lite";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WorksContent from "../components/WorksContent/WorksContent";

//observer

const Works = () => {

    return (
        <div className="WorksPage" style={{display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0}}>

            <Header />

            <WorksContent />

            <Footer />

        </div>
    );
};

export default Works;