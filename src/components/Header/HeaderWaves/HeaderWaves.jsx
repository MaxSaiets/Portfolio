import React, { useState } from "react";
import { AnimatePath } from "./headerWave_Logic";
import { useEffect } from "react";

const  HeaderWaves = () => {
    
    // const [initPoints1, setInitPoints1] = useState();
    // const [initPoints2, setInitPoints2] = useState();
    // useEffect(() => {
        // setInitPoints1("0 35 0 0 180 0");
        // setInitPoints2("0 65 0 55 280 0 300 0");
    //     setInitPoints1(`0 ${window.innerHeight * 0.045}  0 0  ${window.innerWidth * 0.14} 0`)
    //     setInitPoints2(`0 ${window.innerHeight * 0.07}  0 ${window.innerHeight * 0.09}  ${window.innerWidth * 0.16} 0  ${window.innerWidth * 0.18} 0`)
    // }, []); 

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

    const initialPathPoints = findPointsOnSegment([180, 0], [0, 35], 15);
    const initialPathPoints2 = [...findPointsOnSegment([280, 0], [0, 55], 15), ...findPointsOnSegment([0, 65], [300, 0], 15)];
    
    const pathData = AnimatePath("0 35 0 0 180 0", initialPathPoints, 3000);
    const pathData2 = AnimatePath("280 0 0 55 0 65 300 0", initialPathPoints2, 3000, false, 15);

    const pathStyle = {
        fill: "var(--textColorSecond)",
        stroke: "var(--textColorSecond)",
    };
   
    return (
        <>
            <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                <path className="wave_path" style={pathStyle} d={pathData} />
                <path className="wave_path" style={pathStyle} d={pathData2} />
            </svg>  
        </>
    );
};

export default HeaderWaves;