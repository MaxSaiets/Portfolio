import React from "react";

const SquareSvg = ({ className, fill }) => {
  return (
    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill={fill} className={className}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g id="layer1">
          <path d="M 1 1 L 1 19 L 19 19 L 19 1 L 1 1 z M 2 2 L 18 2 L 18 18 L 2 18 L 2 2 z" style={{ fill: {fill}, fillOpacity: 1, stroke: "none", strokeWidth: "0px" }}></path>
        </g>
      </g>
    </svg>
  );
};

export default SquareSvg;
