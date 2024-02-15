import React from "react";

const ButtonSimple = ({ text, borderColor = "var(--textColorSecond)", link, stylesBtn, svg, stylesSvg}) => {  
    const btnSimpleContentStyles = {
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
        btnSimpleContentStyles.padding = "6px 8px";
        btnSimpleContentStyles.fontSize = "18px";
    }

    const handleClick = () => {
        const targetElement = document.getElementById(link.substring(1)); // Отримання елементу за id
        if (targetElement) {
            const offset = -100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth" //плавність
            });
        }
    };

    return(
        <div onClick={handleClick} className="buttonSimple" style={{display: "inline-block", border: `2px solid ${borderColor}`, cursor: "pointer"}}>
            <div style={btnSimpleContentStyles} className="btnSimple_content">
                <p style={{fontWeight: "500"}}>{text}</p>

                {svg && React.cloneElement(svg, { style: stylesSvg })}             
            </div>
        </div>        
    );
};

export default ButtonSimple;