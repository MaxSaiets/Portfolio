import React from "react";

const ButtonSimple = ({ text, borderColor = "var(--textColorSecond)", link, stylesBtn, svg, stylesSvg}) => {  
    return(
        <div className="buttonSimple" style={{display: "inline-block", border: `2px solid ${borderColor}`, cursor: "pointer"}}>
            <a href={link} style={{textAlign: "center", display: "flex", flexDirection: "row", gap: "10px", width: "100%", height: "100%", margin: "8px 16px", ...stylesBtn}} className="btnSimple_content">
                <p style={{fontWeight: "500"}}>{text}</p>

                {svg && React.cloneElement(svg, { style: stylesSvg })}             
            </a>
        </div>        
    );
};

export default ButtonSimple;