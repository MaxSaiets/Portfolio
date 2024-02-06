import React from "react";
import ButtonSimple from "../../../ButtonSimple/ButtonSimple"
import ArrowSvg from "../ProjectsSvg/ProjectsSvg.jsx"

const ProjectsBigList = ({project}) => {  
    return(
        <div className="project_wrapper" style={{width: "49%", border: "2px solid var(--textColorGray)"}}>
            <div className="project_img">
                <img className="project_imgPreview" 
                    src={project.previewImg}
                    alt={`preview img of ${project.title}`}
                    style={{width: "100%", height: "100%"}}
                />
            </div>
            <div className="project_technologies"
                style={{color: "var(--textColorGray)", padding: "8px", borderTop: "2px solid var(--textColorGray)", borderBottom: "2px solid var(--textColorGray)"}}
            >
                <p>{project.technologies}</p>
            </div>

            <div className="project_content" style={{padding: "16px", display: "flex", flexDirection: "column", gap: "16px"}}>
                <div className="project_title" style={{fontSize: "24px", fontWeight: "500"}}>
                    <h1>{project.title}</h1>
                </div>
                <div className="project_description" style={{color: "var(--textColorGray)"}}>
                    <p>{project.text}</p>
                </div>
                <div className="project_footer">
                    <ButtonSimple text="Live" link={project.href} stylesBtn={{margin: "4px 8px"}} svg={ArrowSvg} stylesSvg={{width: "20px"}} />
                </div>
            </div>
        </div>
    );
};

export default ProjectsBigList;