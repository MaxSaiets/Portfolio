import React, { useState } from "react";

const ContactsList = ({ elem }) => {
  const [isHovered, setHovered] = useState(false);

  const linkStyles = {
    position: "relative",
    overflow: "hidden",
        
    position: "absolute",
    top: elem.topPos,
    left: elem.leftPos,
    border: "2px solid var(--textColorGray)",
    borderRadius: "6px",
    zIndex: 1,
  };
  const mediaQuery = window.matchMedia("(max-width: 1100px)");
  const mediaQuery800 = window.matchMedia("(max-width: 800px)");

  const linkBeforeStyles = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: isHovered && !mediaQuery800.matches ? "100%" : 0,
    height: "100%",
    backgroundColor: elem.bgC,
    transition: "width 0.5s ease",
    zIndex: -1,
  };



  if (mediaQuery.matches) {
    linkStyles.position = "relative";
    linkStyles.top = "0px";
    linkStyles.left = "0px";
  }

  return (
    <div
      className="contacts_opport__link"
      style={linkStyles}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        className="opport_link"
        target="_blank"
        href={elem.href}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          padding: "5px",
          zIndex: 2,
        }}
      >
        <img
          className="opport_link__svg"
          src={elem.svg}
          style={elem.stylesSvg}
        />

        <p className="opport_link__text" style={{ paddingRight: "5px", cursor: "pointer"}}>
          {elem.text}
        </p>
      </a>

      <div
        className="contacts_opport__link__before"
        style={linkBeforeStyles}
      ></div>
    </div>
  );
};

export default ContactsList;