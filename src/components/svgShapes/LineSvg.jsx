import React from "react";

const LineSvg = ({ className, fill, strokeWidth, width, height}) => {
  console.log(className.width)
  return (
    <svg
      version="1.1"
      id="LineSvg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
      xmlSpace="preserve"
      className={className}
      fill={fill}
    >
      <line
        x1={width / 2}
        y1="10"
        x2={width / 2}
        y2={height - 10}
        style={{ stroke: fill, strokeWidth: strokeWidth, strokeLinecap: "round" }}
      />
    </svg>
  );
};

export default LineSvg;