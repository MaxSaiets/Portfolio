import React from "react";

const SquareSvg = ({ className, fill, stroke, strokeWidth }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="miter" className={className}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke={fill} strokeWidth="2.4">
        <polygon points="12 3 2.5 21 21.5 21 12 3"></polygon>
      </g>
      <g id="SVGRepo_iconCarrier">
        <polygon points="12 3 2.5 21 21.5 21 12 3"></polygon>
      </g>
    </svg>
  );
};

export default SquareSvg;
