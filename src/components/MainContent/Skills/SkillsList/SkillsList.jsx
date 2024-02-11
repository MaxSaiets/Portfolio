import React from "react";

const SkillsList = ({elem}) => {  
    return(
        <div className="skill_container" style={{position: "absolute", top: elem.topPos, left: elem.leftPos, border: "2px solid var(--textColorGray)", width: "200px"}}>
            <div className="skill_title__wrapper" style={{borderBottom: "2px solid var(--textColorGray)"}}>
                <p 
                    className="skill_title" 
                    style={{fontSize: "20px", fontWeight: "600", padding: "8px 10px"}}
                >
                    {elem.title}
                </p>
            </div>

            <div className="skill_content__wrapper">
                <p 
                    className="skill_content" 
                    style={{padding: "8px 10px", color: "var(--textColorGray)"}} 
                    dangerouslySetInnerHTML={{ __html: elem.content }}>
                </p>
            </div>
        </div>       
    );
};

export default SkillsList;