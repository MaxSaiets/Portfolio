import React from "react";

const FooterSVGIconsList = ({icon}) => {  
    return(
        <li className="footer_svgIcon__link">
            <a href={icon.href} target="_blank">
                <img className="footer_svgIcon" style={{width: "40px", height: "40px"}} src={icon.src} alt={icon.alt} />
            </a>
        </li>        
    );
};

export default FooterSVGIconsList;