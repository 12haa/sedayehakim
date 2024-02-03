import React from "react";
import Image from "next/image";
import { navbarMenuItems } from "@/constans";
import Link from "next/link";

type NavMenuItems = {
  id: number;
  name: string;
  href: string;
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-between flex-row min-sm:flex-row-reverse sm:gap-12 bg-white  p-4  lg:gap-20 md:w-[100%]     ">
      <div className="flex items-center justify-between flex-row w-full h-full    ">
        <div className="flex items-center justify-center gap-2 h-full ">
          <div className="relative flex items-center justify-center w-full  ">
            <div className="flex items-center justify-center w-full gap-2 ">
              <div className=" absolute flex items-center justify-center gap-2">
                <span className="text-[#58C5C7] font-semibold"> غضویت</span>
                <span className="text-[#58C5C7] font-semibold">/</span>
                <span className="text-[#58C5C7] font-semibold"> ورود</span>
                <div>
                  <div className=" relative flex items-center justify-center  p-2">
                    <Image
                      src="/assets/user.svg"
                      width={22.54}
                      height={29.22}
                      alt="logo"
                    />
                    <Image
                      src="/assets/Rectangle_2.svg"
                      width={28}
                      height={28}
                      alt="logo"
                      className="absolute  "
                    />
                  </div>
                </div>
              </div>

              <Image
                src="/assets/Rectangle_1.svg"
                width={209}
                height={55}
                alt="logo"
              />
            </div>
          </div>
          <div className="  flex items-center justify-center  ">
            <Image
              src="/assets/Rectangle_4.svg"
              width={77}
              height={50}
              alt="logo"
            />
            <Image
              src="/assets/cart.svg"
              width={27.61}
              height={28}
              alt="logo"
              className="absolute  "
            />
          </div>
        </div>
        <div className=" items-center justify-between  gap-24   md:w-full  w-full ml-16 hidden lg:flex   ">
          {navbarMenuItems.reverse().map((item: NavMenuItems) => (
            <Link
              href={item.href}
              key={item.id}
              className="  cursor-pointer font-normal  "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className=" h-full flex items-center justify-center ">
        <Image src="/assets/mainLogo.svg" width={127} height={68} alt="logo" />
      </div>
      <div className=" ">
        <div className="flex items-center flex-col gap-1">
          {[0, 1, 2].map((item, i) => {
            return (
              <button>
                <Image
                  src="/assets/Line_293.svg"
                  width={26.6}
                  height={22}
                  alt="logo"
                  className="cursor-pointer"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
