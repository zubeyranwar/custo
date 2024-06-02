"use client";

import Image from "next/image";
import custo from "/public/custo-hero.png";
import { motion } from "framer-motion";

function HeroImage() {
  const animate = {
    initial: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
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
    >
      <Image
        src={custo}
        alt="custo image"
        width={592}
        height={1234}
        className="object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-10%] -z-[1000]"
      />
    </motion.div>
  );
}

export default HeroImage;
