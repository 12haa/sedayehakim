import React from "react";
type ButtonProps = {
  title: string;
  bgColor: string;
  textColor: string;
};
const Button = ({ title, bgColor, textColor }: ButtonProps) => {
  return (
    <div
      className={`rounded-xl  border-2 sm:p-2  max-w-full lg:px-12 bg-#${bgColor}`}
    >
      <button className={`text-${textColor}  text-xl `}>
        {title}{" "}
        <span className="ml-1 font-medium lg:text-[16px] text-[12px]"></span>
      </button>
    </div>
  );
};

export default Button;
