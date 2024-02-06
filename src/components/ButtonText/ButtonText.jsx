import React from "react";

const ButtonText = ({ text, link}) => {  
    return(
        <div className="buttonText" style={{display: "inline-block"}}>
            <a href={link} style={{width: "100%", height: "100%"}} className="btnText_content">
                <p style={{fontSize: "16px", fontWeight: "500"}}>{text}</p>
            </a>
        </div>        
    );
};

export default ButtonText;