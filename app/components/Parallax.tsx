"use client";

import React, { useEffect, useRef } from "react";

interface ParallaxObjectProps {
  dataRatio: number;
  children: React.ReactNode;
}

const ParallaxObject: React.FC<ParallaxObjectProps> = ({
  dataRatio,
  children,
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * dataRatio;
        parallaxRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dataRatio]);

  return (
    <div ref={parallaxRef} style={{ transform: "translateY(0px)" }}>
      {children}
    </div>
  );
};

export default ParallaxObject;
