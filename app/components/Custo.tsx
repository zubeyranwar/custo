"use client";

import Image from "next/image";
import custo from "/public/custo-hero.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useLenis from "../hooks/useLenis";

function HeroImage() {
  useLenis();
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (container.current) {
        container.current.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
      }

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
  }, []);

  const animate = {
    initial: {
      y: 120,
      opacity: 0,
    },
    show: {
      y: -120,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.7,
        ease: [0.165, 0.84, 0.44, 1],
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      whileInView="show"
      variants={animate}
      viewport={{ once: true }}
      ref={container}
    >
      <Image
        src={custo}
        alt="custo image"
        width={592}
        height={1234}
        className="object-cover absolute  left-[50%] translate-x-[-50%]  -z-[1000]"
      />
    </motion.div>
  );
}

export default HeroImage;
