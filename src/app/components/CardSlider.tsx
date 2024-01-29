import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {[1, 2, 3].map((item) => (
          <SwiperSlide>
            <div className="flex items-center justify-center flex-col gap-10 rounded-xl border-4 shadow-lg  p-14">
              <Image
                src="/assets/Untitled.png"
                alt="Esfehan_Univercity"
                width={120}
                height={120}
              />
              <h2 className="text-[24px]">دانشگاه اصفهان</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
