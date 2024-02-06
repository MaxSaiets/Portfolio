import React from "react";

const HeaderSVGIconsList = ({icon}) => {  
    return(
        <li className="header_svgIcon__link">
            <a href={icon.href}>
                <img className="header_svgIcon" src={icon.src} alt={icon.alt} />
            </a>
        </li>        
    );
};

export default HeaderSVGIconsList;