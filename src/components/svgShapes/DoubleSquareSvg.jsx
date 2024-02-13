import React from "react";

const DoubleSquareSvg = ({className, fill, style}) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 437.348 437.348"
      xmlSpace="preserve"
      className={className}
      fill={fill}
      style={style}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <polygon
              style={{ fill: fill}}
              points="428.233,324.297 350.983,324.297 350.983,312.587 416.523,312.587 416.523,11.711 115.647,11.711 115.647,95.474 103.936,95.474 103.936,0 428.233,0"
            ></polygon>
          </g>
          <g>
            <polygon
              style={{ fill: fill }}
              points="333.417,437.348 9.115,437.348 9.115,113.04 86.371,113.04 86.371,124.75 20.825,124.75 20.825,425.638 321.707,425.638 321.707,341.863 333.417,341.863"
            ></polygon>
          </g>
          <g>
            <polygon
              style={{ fill: fill }}
              points="333.417,341.863 321.707,341.863 321.707,124.75 86.371,124.75 86.371,113.04 333.417,113.04"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default DoubleSquareSvg;