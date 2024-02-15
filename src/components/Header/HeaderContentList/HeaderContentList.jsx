import React from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../../utils/consts";

const HeaderContentList = ({headerElem, toggleMenu}) => {  
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(MAIN_ROUTE)
        
        const targetElement = document.getElementById(headerElem.href.substring(1)); // Отримання елементу за id
        if (targetElement) {
            const offset = -100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth" //плавність
            });
 
            toggleMenu(); // закрити hamburgerMenu
        }
    };

    return(
        <li className="header_link" style={{cursor: "pointer"}}>
            <div onClick={handleClick}>
                <span className="headerNav_span">#</span>
                {headerElem.title}
            </div>
        </li>     
    );
};

export default HeaderContentList;