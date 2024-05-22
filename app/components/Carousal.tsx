"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from "swiper/modules";

import Image from "next/image";
import slider3 from "../../public/home2.jpg";
import slider1 from "../../public/slider1.jpg";
import slider2 from "../../public/slider2.jpg";



function Carousal() {
  const images = [slider1, slider2, slider3];


  return (
      <div className='absolute flex justify-center gap-10 overflow-x-auto  pr-12 w-full'>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          modules={[Pagination]}
        >
          {
            images.map((item,index)=>(
              <SwiperSlide key={index}>
                <Image src={item} alt="" className='object-contain w-full h-auto max-w-full'/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
  );
}

export default Carousal;
