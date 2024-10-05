import React from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../../utils/consts";
import { Box } from "@mui/system";

const HeaderContentList = ({ headerElem, toggleMenu }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const targetElement = document.getElementById(headerElem.href); // Отримання елементу за id
        if (targetElement) {
            const offset = -100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth" // плавність
            });

            if (toggleMenu) {
                toggleMenu(); // закрити hamburgerMenu
            }
        } else {
            navigate(MAIN_ROUTE); // Перехід на головну сторінку, якщо елемента не знайдено
        }
    };

    return (
        <Box className="header_link" style={{ cursor: "pointer" }} onClick={handleClick}>
            <span className="headerNav_span">#</span>
            {headerElem.title}
        </Box>
    );
};

export default HeaderContentList;
