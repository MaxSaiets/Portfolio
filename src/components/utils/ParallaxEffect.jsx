import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";

const ParallaxEffect = ({ Figure, className, fill, speed = 0.2, maxOffset = 300, workOnMobile = false }) => {
  const [offset, setOffset] = useState(0);

  const theme = useTheme();
  const matches900 = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      // Якщо workOnMobile = false і екран менше 900px, не виконуємо паралакс
      if (!workOnMobile && matches900) {
        setOffset(0); // Скидаємо offset
        return;
      }

      // Обчислюємо зміщення на основі скролу
      const newOffset = window.scrollY * speed;
      setOffset(Math.min(newOffset, maxOffset));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, maxOffset, workOnMobile, matches900]);

  const style = {
    transform: `translateY(${offset}px)`,
    transition: "transform 0.3s linear",
  };

  return <Figure className={className} fill={fill} style={style} />;
};

export default ParallaxEffect;
