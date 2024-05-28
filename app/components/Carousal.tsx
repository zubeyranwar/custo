"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import slider3 from "../../public/home2.jpg";
import slider1 from "../../public/slider1.jpg";
import slider2 from "../../public/slider2.jpg";
import ParallaxObject from "./Parallax";

function Carousal() {
  const images = [slider1, slider2, slider3];

  return (
    <div className="flex justify-center gap-10 overflow-hidden p-4">
      <Swiper
        slidesPerView={2.5} // Adjusted to make slides larger
        centeredSlides={false}
        spaceBetween={20} // Adjusted spacing between slides
        grabCursor={true}
        modules={[Pagination]}
        loop={false} // Set loop to false to see the bounce effect at the end
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="rounded-xl overflow-hidden">
            <Image src={item} alt="" className="object-cover w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousal;
