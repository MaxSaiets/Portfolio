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

  const linkBeforeStyles = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: isHovered ? "100%" : 0,
    height: "100%",
    backgroundColor: elem.bgC,
    transition: "width 0.5s ease",
    zIndex: -1,
  };

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
