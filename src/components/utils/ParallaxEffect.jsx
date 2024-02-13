import React, { useState, useEffect } from "react";

const ParallaxEffect = ({ Figure, className, fill, speed = 0.2, maxOffset = 300 }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newOffset = window.scrollY * speed;
      setOffset(Math.min(newOffset, maxOffset));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  const style = {
    transform: `translateY(${offset}px)`,
    transition: "transform 0.3s linear",
  };

  return <Figure className={className} fill={fill} style={style} />;
};

export default ParallaxEffect;
