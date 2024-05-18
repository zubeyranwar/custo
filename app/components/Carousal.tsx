"use client";

import slider1 from "../../public/slider1.jpg";
import slider2 from "../../public/slider2.jpg";
import slider3 from "../../public/home2.jpg";
import Image from "next/image";

function Carousal() {
  const images = [slider1, slider2, slider3];
  return (
    <div className="absolute flex justify-center gap-10 overflow-x-auto">
        {images.map((item, index) => (
            <Image src={item} alt="Custo products" key={index} width={545} height={370} className="rounded-md" />
        ))}
    </div>
  );
}

export default Carousal;
