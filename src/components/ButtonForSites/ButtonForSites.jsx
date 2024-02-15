import React from "react";

const ButtonForSites = ({ text, borderColor = "var(--textColorSecond)", link, stylesBtn, svg, stylesSvg}) => {  
    const buttonForSitesStyle = {
        display: "inline-block", 
        border: `2px solid ${borderColor}`, 
        cursor: "pointer",
    };
    const btnForSitesContentStyles = {
        textAlign: "center", 
        display: "flex", 
        flexDirection: "row", 
        gap: "10px", 
        width: "100%", 
        height: "100%", 
        padding: "8px 16px", 
        ...stylesBtn,
    };

    const mediaQuery = window.matchMedia("(max-width: 750px)");

    if (mediaQuery.matches) {
        btnForSitesContentStyles.padding = "4px 8px";
        btnForSitesContentStyles.fontSize = "14px";
    }


    return(
        <div className="button_forSites" style={buttonForSitesStyle}>
            <a href={link} target="_blank" style={btnForSitesContentStyles} className="btnForSites_content">
                <p style={{fontWeight: "500"}}>{text}</p>

                {svg && React.cloneElement(svg, { style: stylesSvg })}             
            </a>
        </div>        
    );
};

export default ButtonForSites;