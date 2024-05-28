"use client";
import React from "react";
import Cta from "./components/Cta";
import { procedures } from "./constants";
import Image from "next/image";

export default function Procedure() {
  return (
    <div className="relative lg:container max-w-[1355px] min-h-[100vh] overflow-hidden mx-auto pt-[200px] pb-9 lg:px-16 px-16 bg-white text-[#222]">
      <div className="flex justify-between items-end mb-[160px]">
        <h2 className="text-6xl w-[50%]">
          Custo® will integrate with your life seamlessly.
        </h2>
        <Cta title="Discover how it works" />
      </div>
      <div>
        <div className="flex flex-col ">
          {procedures.map((item, index) => (
            <div
              key={index}
              className="self-end w-[50%] flex gap-12 items-center px-4 py-10 border-b-2 text-[#a7aaad] cursor-pointer"
            >
              <h5 className="text-xl">0{index + 1}.</h5>
              <h3 className="text-4xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
