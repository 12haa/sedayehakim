import React, { useState } from "react";
import { slides } from "@/constans";
import { ChevronLeft, ChevronRight } from "react-feather";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import Button from "@/app/components/Button";

const Carousel = () => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    const isFirstSlide = curr === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : curr - 1;
    setCurr(newIndex);
  };

  const next = () => {
    const isFirstSlide = curr === slides.length - 1;
    const newIndex = isFirstSlide ? 0 : curr + 1;
    setCurr(newIndex);
  };

  const handleDotClick = (slideIndex) => {
    setCurr(slideIndex);
  };

  return (
    <div className="max-w-[440px] h-[480px] w-full m-auto   px-4 relative flex flex-col items-center  p-10 ">
      <button
        className="rounded-full bg-[#e8cf75] h-10  p-2 absolute top-[70%] -left-12 "
        onClick={prev}
      >
        <ChevronLeft size={30} className="text-white" />
      </button>
      <div className="w-full h-full border-4  flex flex-col items-center justify-center rounded-3xl ">
        <Image
          src={slides[curr].imageUrl}
          alt=""
          className="w-full h-fit rounded-2xl bg-center bg-cover duration-500
        object-cover "
          width={70}
          height={70}
        />
        <p className="text-2xl flex justify-start p-2">
          {" "}
          کتابخانه جامع طب سنتی
        </p>
        <div className="w-[70%] bg-[#b0b0b0] h-1.5 border-2  justify-center items-center"></div>
        <div className="w-full h-full flex justify-between items-center  p-6 pb-10    ">
          <Button title="خرید دوره" bgColor="blue-500" textColor="white" />
          <div className="gap-2 flex justify-between p-2 items-center">
            <p className="md:text-xl font-bold p1">
              700,000
              <div className="font-light">ریال</div>
            </p>
          </div>
        </div>
      </div>
      <button
        className="rounded-full bg-[#e8cf75] h-10 p-2 absolute top-[70%] left-[435px]"
        onClick={next}
      >
        <ChevronRight size={30} className="text-white" />
      </button>
      <div className="flex top-4 justify-center py-2 ">
        {slides.map((s, index) => (
          <div
            className="text-2xl cursor-pointer"
            key={index}
            onClick={() => handleDotClick(index)}
          >
            <RxDotFilled
              color={curr === index ? "#30d5c8" : "#6c6c6c"}
              onClick={handleDotClick}
            />
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Carousel;
