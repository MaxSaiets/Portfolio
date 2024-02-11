import { useEffect, useState } from "react";

export const AnimatePath = (previusPoints, initialPoints, initialPathPoints, duration, forThreeDots = true, step) => {
    let path;
    const [pathPoints, setPathPoints] = useState(initialPathPoints);
    let targetPointsOrInitPoints = true;
    let newPathPoints;
    let targetPoints;
    let pathData;

    const easeInOutCubic = t => t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
    const bezierInterpolation = (p0, p1, t) => {
        return p0 + t * (2 * (1 - t) * (p1 - p0) + t * (p1 - p0));
    };

    const animatePath = () => {
        targetPoints = initialPathPoints.map(point => ({
            x: point.x + Math.random() * 10 - 5,
            y: point.y + Math.random() * 10 - 5,
        }));
           
        // previusPoints = targetPoints;

        let startTime;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = easeInOutCubic(Math.min(1, (timestamp - startTime) / duration));

            newPathPoints = previusPoints.map((point, index) => {
                const bezierX = bezierInterpolation(point.x, targetPoints[index].x, progress);
                const bezierY = bezierInterpolation(point.y, targetPoints[index].y, progress);

                return { x: bezierX, y: bezierY };
            });
            
            path = newPathPoints;
            setPathPoints(newPathPoints);


            if (progress < 1) {
                requestAnimationFrame(animate);
            }else{
                previusPoints = targetPoints;
            }
        };

        requestAnimationFrame(animate);
    };

    const animatePath2 = () => {
        let startTime;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = easeInOutCubic(Math.min(1, (timestamp - startTime) / duration));

            newPathPoints = path.map((point, index) => ({
                x: point.x + (previusPoints[index].x - point.x) * progress,
                y: point.y + (previusPoints[index].y - point.y) * progress,
            }));
           
            path = newPathPoints;

            setPathPoints(newPathPoints);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };


    useEffect(() => {
        targetPoints = initialPathPoints.map(point => ({
            x: point.x + Math.random() * 10 - 5,
            y: point.y + Math.random() * 10 - 5,
        }));

        previusPoints = targetPoints;

        let startTime;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = easeInOutCubic(Math.min(1, (timestamp - startTime) / duration));
            
            newPathPoints = initialPathPoints.map((point, index) => {
                const bezierX = bezierInterpolation(point.x, targetPoints[index].x, progress);
                const bezierY = bezierInterpolation(point.y, targetPoints[index].y, progress);

                return { x: bezierX, y: bezierY };
            });

            path = newPathPoints;
            setPathPoints(newPathPoints);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (targetPointsOrInitPoints === true) {
                animatePath();
                targetPointsOrInitPoints = false;
            } else {
                animatePath2();
                targetPointsOrInitPoints = true;
            }
        }, duration);

        return () => clearInterval(intervalId);
    }, [duration]);

    if(forThreeDots === true){
        pathData = `M ${initialPoints} ${pathPoints.reduce((acc, point) => `${acc} ${point.x} ${point.y} L`, '').slice(0, -1)}`;
    }else{
        pathData = `M  ${pathPoints.slice(0, step).reduce((acc, point) => `${acc} ${point.x} ${point.y} L`, '').slice(0, -1)} ${pathPoints.slice(step).reduce((acc, point) => `${acc} ${point.x} ${point.y} L`, '').slice(0, -1)}`;
    }
    
    return pathData;
};