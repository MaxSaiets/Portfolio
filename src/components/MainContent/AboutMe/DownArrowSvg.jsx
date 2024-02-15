import React from 'react';

const DownArrowSvg = ({className, fill, stroke}) => {
  return (
    <svg className={className} height="128px" viewBox="0 0 128 128" width="128px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g>
        <line style={{ fill: {fill}, stroke: {stroke}, strokeWidth: 12, strokeLinecap: 'square', strokeMiterlimit: 10 }} x1="111" x2="64" y1="40.5" y2="87.499" />
        <line style={{ fill: {fill}, stroke: {stroke}, strokeWidth: 12, strokeLinecap: 'square', strokeMiterlimit: 10 }} x1="64" x2="17" y1="87.499" y2="40.5" />
      </g>
    </svg>
  );
};

export default DownArrowSvg;
