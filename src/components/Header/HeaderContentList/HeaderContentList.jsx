import React from "react";

const HeaderContentList = ({headerElem}) => {  
    return(
        <li className="header_link">
            <a href={headerElem.href}>
                <span className="headerNav_span">#</span>{headerElem.title}
            </a>
        </li>        
    );
};

export default HeaderContentList;