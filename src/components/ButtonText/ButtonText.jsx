import React from "react";
import { Link } from "react-router-dom";

const ButtonText = ({ text, link, textStyles}) => {  
    return(
        <div className="buttonText" style={{display: "inline-block"}}>
            <Link to={link} style={{width: "100%", height: "100%"}} className="btnText_content">
                <p style={{fontSize: "16px", fontWeight: "500", ...textStyles }}>{text}</p>
            </Link>
        </div>        
    );
};

export default ButtonText;