"use client";
import React, { useState } from "react";
import Cta from "./components/Cta";
import { procedures as initialProcedures } from "./constants";
import Image from "next/image";

export default function Procedure() {
  const [data, setData] = useState(initialProcedures);

  const handleClick = (index: any) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, opacity: 1 } : { ...item, opacity: 0 }
      )
    );
  };

  return (
    <div className="relative lg:container max-w-[1355px] min-h-[100vh] overflow-hidden mx-auto pt-[200px] pb-[200px] lg:px-16 px-16 bg-white text-[#222]">
      <div className="flex justify-between items-end mb-[160px]">
        <h2 className="text-6xl w-[50%]">
          Custo® will integrate with your life seamlessly.
        </h2>
        <Cta title="Discover how it works" />
      </div>
      <div>
        <div className="flex flex-col">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative self-end w-[50%] flex gap-12 items-center px-4 py-10 border-b-2 text-[#a7aaad] cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="absolute left-[-100%] rounded-lg transition-opacity duration-500"
                style={{ opacity: item.opacity }}
              />
              <h5 className="text-xl">0{index + 1}.</h5>
              <h3 className="text-4xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
