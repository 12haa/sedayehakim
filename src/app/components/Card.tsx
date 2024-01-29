import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-[50%]  h-full flex  items-end justify-center">
      <div className="bg-[#58c5c7] flex  h-[80%] w-full rounded-xl flex-col">
        <div className="w-full flex items-center justify-between px-2 ">
          <p className="text-[24px] tracking-wider text-[#e3ce77]">****</p>
          <h2 className="   items-start flex justify-center p-4 text-white text-[20px] font-semibold">
            کیف پول صدای حکیم
          </h2>
        </div>
        <div className="relative ">
          <Image
            src="/assets/icons/Path1.png"
            alt="inteface"
            width={570}
            height={600}
            className="absolute left-[px] "
          />
          <Image
            src="/assets/icons/Path2.png"
            alt="inteface"
            width={267}
            height={100}
            className="absolute left-[300px] top-[-60px] "
          />
        </div>
        <div className="mt-20 h-full flex flex-row items-center justify-evenly gap-24 ">
          <button className="bg-white  h-10 p-4 items-center flex rounded-lg px-12 text-[#58c5c7]">
            افزایش اعتبار
          </button>
          <div
            dir="rtl"
            className="flex flex-col  h-full justify-center items-start gap-4  "
          >
            <p className="text-white text-xl"> موجودی کیف پول</p>
            <h2 className="text-white text-2xl text-bold">‏500 هزار تومان</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
