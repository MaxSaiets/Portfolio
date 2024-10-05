import React from "react";
import { AppBar, Toolbar, IconButton, Box, Menu, MenuItem, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MoreIcon from '@mui/icons-material/MoreVert';
import { v4 as uuidv4 } from "uuid"; 
import HeaderSVGIconsList from "./HeaderSVGIconsList/HeaderSVGIconsList";
import telegramSVG from "../../img/header/telegram.svg";
import gmailSVG from "../../img/header/gmail.svg";
import upworkSVG from "../../img/header/upwork.svg";
import githubSVG from "../../img/header/github.svg";
import HeaderWaves from "./HeaderWaves/HeaderWaves";
import HeaderLogoImg from "./HeaderLogoImg.svg";
import { MAIN_ROUTE } from "../../utils/consts";
import "./Header.css";
import { useMediaQuery, useTheme } from "@mui/material";
import HeaderContentList from "./HeaderContentList/HeaderContentList";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const matches600 = useMediaQuery(theme.breakpoints.down("sm"));

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        if (isMobileMenuOpen) {
            setMobileMoreAnchorEl(null);
        } else {
            setMobileMoreAnchorEl(event.currentTarget);
        }
    };
    

    const headerSVGIcons = [
        { alt: "telegram", href: "https://t.me/Max_Saiets", src: telegramSVG },
        { alt: "gmail", href: "mailto:sayetsm@gmail.com", src: gmailSVG },
        { alt: "upwork", href: "https://www.upwork.com/freelancers/~016ae2a0dbb6245846", src: upworkSVG },
        { alt: "github", href: "https://github.com/MaxSaiets", src: githubSVG },
    ];

    const headerTitles = [
        { title: "Home", href: "section1" },
        { title: "Works", href: "section2" },
        { title: "Skills", href: "section3" },
        { title: "About-me", href: "section4" },
        { title: "Contacts", href: "section5" },
    ];

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            sx={{
                "& .MuiPaper-root": {
                    backgroundColor: "var(--headerBG2)", // Стилі для фону меню
                }
            }}
        >
            {headerTitles.map((title, index) => (
                <MenuItem
                    key={index}
                    onClick={handleMobileMenuClose}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Стилі для ховеру
                        },
                    }}
                >
                    <HeaderContentList headerElem={title} toggleMenu={handleMobileMenuClose} />
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <header className="Header">
            <AppBar position="sticky" sx={{ background: 'var(--headerBG)', backdropFilter: 'saturate(180%) blur(20px)' }}>
                <Toolbar className="header_wrapper" sx={{ zIndex: 1000, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    {/* Логотип */}
                    <RouterLink to={MAIN_ROUTE} style={{ marginLeft: matches600 ? "5px" : "12px", display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", textDecoration: "none", color: "inherit" }}>
                        <img src={HeaderLogoImg} alt="Logo" className="header_logo__img" style={{width: "30px", height: "30px"}} />
                        <Typography variant="h5" className="header_logo__text">Max Saiets</Typography>
                    </RouterLink>

                    {/* Соц іконки */}
                    <Box className="header_leftDecor__container">
                        <div className="header_leftDecor__line"></div>
                        <Box className="header_iconsUL">
                            {headerSVGIcons.map((icon) => (
                                <HeaderSVGIconsList icon={icon} key={uuidv4()} />
                            ))}
                        </Box>
                    </Box>

                    {/* Меню */}
                    {isMobile ? (
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="open drawer"
                            aria-controls="menu-mobile"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            {headerTitles.map((title, index) => (
                                <HeaderContentList key={index} headerElem={title} />
                            ))}
                        </Box>
                    )}
                </Toolbar>

                {/* Хвилі */}
                <Box sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "64px",
                    userSelect: "none",
                    zIndex: 1,
                    overflow: "hidden"
                }}>
                    {matches600 ? 
                        <HeaderWaves width={550} height={50} positionX={600} positionY={60} numberOfPoints={20} /> 
                        :
                        <HeaderWaves width={900} height={40} positionX={900} positionY={40} numberOfPoints={30} />
                    }
                </Box>
                {/* <Box sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "500px",
                    height: "100px",
                    userSelect: "none",
                    zIndex: 1,
                }}>
                    <HeaderWaves width={250} height={100} />
                </Box> */}

                {renderMobileMenu}
            </AppBar>
        </header>
    );
};

export default Header;