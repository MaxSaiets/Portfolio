import React from "react";
import { AnimatePath } from "./headerWave_Logic";

const  HeaderWaves = ({width, height, positionX, positionY, numberOfPoints, duration = 2000 }) => {
    let previusPoints = [];

    function findPointsOnSegment(startPoint, endPoint, numberOfPoints) {
        const result = [];
        
        for (let i = 0; i < numberOfPoints; i++) {
          const t = i / (numberOfPoints - 1); // параметр t від 0 до 1
          const x = startPoint[0] * (1 - t) + endPoint[0] * t;
          const y = startPoint[1] * (1 - t) + endPoint[1] * t;
          
          result.push({x: x, y: y});
        }
        
        return result;
    }

    const initialPathPoints = findPointsOnSegment([positionX, 0], [0, positionY], numberOfPoints);
    // const initialPathPoints = findPointsOnSegment([900, 0], [0, 64], 30);
    // const initialPathPoints = findPointsOnSegment([160, 0], [0, 35], 15);
    
    const pathData = AnimatePath(previusPoints, `0 ${positionY} 0 0 ${positionX} 0`, initialPathPoints, duration);

    const pathStyle = {
        fill: "var(--textColorSecond)",
        stroke: "var(--textColorSecond)",
    };
   
    return (
        <>
            <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
                <path className="wave_path" style={pathStyle} d={pathData} />
            </svg>  
        </>
    );
};

export default HeaderWaves;