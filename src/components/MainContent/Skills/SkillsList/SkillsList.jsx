import React from "react";

const SkillsList = ({elem}) => {  

    const skillContainerStyles = {
        position: "absolute",
        top: elem.topPos,
        left: elem.leftPos,
        border: "2px solid var(--textColorGray)",
        width: "200px",
        marginBottom: "20px",
    };
    const skillTitleStyles = {
        fontFamily: "LibreBodoni",
        fontSize: "20px",
        fontWeight: "400",
        padding: "8px 10px",
    };
    const skillContentStyles = {
        padding: "8px 10px",
        color: "var(--textColorGray)",
    };

    const mediaQuery950 = window.matchMedia("(max-width: 950px)");
    const mediaQuery600 = window.matchMedia("(max-width: 600px)");

    if (mediaQuery950.matches) {
        skillContainerStyles.position = "relative";
        skillContainerStyles.top = "0px";
        skillContainerStyles.left = "0px";
    }

    if (mediaQuery600.matches) {
        skillContainerStyles.width = "160px"

        skillTitleStyles.fontSize = "18px";
        skillTitleStyles.padding = "6px 8px";
        skillContentStyles.fontSize = "16px";
        skillContentStyles.padding = "6px 8px";
    }

    return(
        <div className="skill_container" style={skillContainerStyles}>
            <div className="skill_title__wrapper" style={{borderBottom: "2px solid var(--textColorGray)"}}>
                <p 
                    className="skill_title" 
                    style={skillTitleStyles}
                >
                    {elem.title}
                </p>
            </div>

            <div className="skill_content__wrapper">
                <p 
                    className="skill_content" 
                    style={skillContentStyles} 
                    dangerouslySetInnerHTML={{ __html: elem.content }}>
                </p>
            </div>
        </div>       
    );
};

export default SkillsList;