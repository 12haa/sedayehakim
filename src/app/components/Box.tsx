import React from "react";
import Image from "next/image";

type BoxType = {
  title: string;
  iconUrl: string;
};
const Box = ({ title, iconUrl }: BoxType) => {
  return (
    <div className=" flex items-center w-fit justify-end flex-col  gap-2     ">
      <div className="bg-white border border-gray-300 p-4 rounded-2xl  ">
        <Image src={iconUrl} alt={title} width={50} height={50} />
      </div>
      <p className="md:text-2xl   z-10 ml-2 t">{title}</p>
    </div>
  );
};

export default Box;
