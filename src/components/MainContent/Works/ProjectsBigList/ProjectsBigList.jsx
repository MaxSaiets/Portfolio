import React from "react";
import ButtonForSites from "../../../ButtonForSites/ButtonForSites"
import ArrowSvg from "../ProjectsSvg/ProjectsSvg.jsx"

const ProjectsBigList = ({project}) => {
    const projectTechnologiesStyle = {
        color: "var(--textColorGray)", 
        padding: "8px", 
        borderTop: "2px solid var(--textColorGray)", 
        borderBottom: "2px solid var(--textColorGray)",
    };
    const projectTitleStyle = {
        fontSize: "24px", 
        fontWeight: "500",
    };
    const projectDescriptionStyle = {
        color: "var(--textColorGray)"
    };
    const projectContentStyle = {
        padding: "16px", 
        display: "flex", 
        flexDirection: "column", 
        gap: "16px",
    };

    const mediaQuery750 = window.matchMedia("(max-width: 750px)");
    const mediaQuery600 = window.matchMedia("(max-width: 600px)");

    if (mediaQuery750.matches) {
        projectContentStyle.gap = "5px";
        projectTechnologiesStyle.fontSize = "16px";
        projectTitleStyle.fontSize = "20px";
        projectDescriptionStyle.fontSize = "16px";
    }
    if (mediaQuery600.matches) {
        projectContentStyle.padding = "10px";
        projectTechnologiesStyle.padding = "10px";
    }
       
    

    return(
        <div className="project_wrapper" style={{marginBottom: "20px", border: "2px solid var(--textColorGray)", backgroundColor: "var(--projectsWrappersBG)", zIndex: "1000"}}>
            <div className="project_img">
                <img className="project_imgPreview" 
                    src={project.previewImg}
                    alt={`preview img of ${project.title}`}
                    style={{width: "100%", height: "100%"}}
                />
            </div>
            <div className="project_technologies"
                style={projectTechnologiesStyle}
            >
                <p>{project.technologies}</p>
            </div>

            <div className="project_content" style={projectContentStyle}>
                <div className="project_title" style={projectTitleStyle}>
                    <h1>{project.title}</h1>
                </div>
                <div className="project_description" style={projectDescriptionStyle}>
                    <p>{project.text}</p>
                </div>
                <div className="project_footer">
                    <ButtonForSites text="Live" link={project.href} svg={ArrowSvg} stylesSvg={{width: "20px"}} />
                </div>
            </div>
        </div>
    );
};

export default ProjectsBigList;