"use client";
import Cta from "./components/Cta";
import Custo from "./components/Custo";
import { motion } from "framer-motion";

function Hero() {
  const show = {
    initial: {
      opacity: 0,
      y: 20,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.165, 0.84, 0.44, 1],
      },
    }),
  };
  return (
    <div className="relative lg:container max-w-[1355px] h-[90vh] overflow-hidden mx-auto pt-[36px] pb-9 lg:px-16 px-16">
      <div className="flex-col md:flex-row md:justify-between space-y-8">
        <div className="flex flex-col z-10">
          <motion.div
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            custom="index"
            transition={{ staggerChildren: 0.1 }}
            variants={show}
            className=""
          >
            <motion.div variants={show} viewport={{once:true}}>
              <h1 className="text-6xl">Receive the world</h1>
            </motion.div>
            <motion.div variants={show}>
              <h1 className="text-6xl">at your doorstep.</h1>
            </motion.div>
          </motion.div>
          <Cta />
        </div>
        <Custo />
      </div>
    </div>
  );
}

export default Hero;
