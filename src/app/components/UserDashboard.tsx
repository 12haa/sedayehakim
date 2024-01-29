"use client";
import React, { useState } from "react";
import Image from "next/image";
import { sidebarIcons } from "@/constans";
import Link from "next/link";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";

const Dashboard = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState("");

  const handleSidebarItemClick = (index: any) => {
    setSelectedItemIndex(index);
  };
  return (
    <div className=" h-screen bg-[#f9f9f9] flex flex-col justify-between   ">
      <div className="flex flex-row  gap-8 items-center justify-between    bg-[#f9f9f9] ">
        <div className="border-4 border-red-500 w-full max-h-full flex flex-col items-center  ">
          <div className="w-[90%] rounded-lg border-4  flex flex-row bg-[#e8f1d7] mt-10 h-16 items-center justify-between p-4 ">
            <button className="bg-[#80b022] h-10 p-4 items-center flex rounded-lg px-10 text-white">
              تکمیل پروفایل
            </button>
            <div className="flex flex-row gap-4 items-center justify-center    flex-1 ml-[390px] ">
              <p>
                . دانشجوی گرامی : اطلاعات پروفایل شما تکمیل نشده است. لطفا نسبت
                به تکمیل ان اقدام فرمایید{" "}
              </p>
              <Image
                src="/assets/icons/interface.svg"
                alt="inteface"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="w-[90%] rounded-lg  flex flex-row bg-[#f3fdfc] mt-10 h-16 items-center justify-between p-4 ">
            <button className="bg-[#58c5c7] h-10 p-4 items-center flex rounded-lg px-12 text-white">
              نایید موبایل
            </button>
            <div className="flex flex-row gap-4 items-center justify-center    flex-1 ml-[390px] ">
              <p>
                . دانشجوی گرامی : شماره همراه شما تاکنون تائید نشده است. لطفا
                نسبت به تائید شماره اقدام فرمایید
              </p>
              <Image
                src="/assets/icons/interface.svg"
                alt="inteface"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className=" mt-10 w-[90%] flex flex-row h-[350px] items-center justify-between">
            <Card />
            <div className="flex flex-col items-center  justify-end  w-[800px] h-full">
              <div className="w-full flex justify-end p-4 ">
                <h2 className="text-2xl mr-2">آمار کلی فعالیت های من</h2>
              </div>
              <div className=" grid-cols-2 grid items-center justify-between  p-4  gap-2 border-   w-full">
                <div className="bg-white  p-4  justify-between gap-2   rounded-xl flex items-center flex-row">
                  <div className="flex flex-col gap-2 w-full items-end">
                    <p>تعداد کلاس‌های من</p>
                    <p>3کلاس</p>
                  </div>
                  <Image
                    alt=" "
                    src="/assets/icons/Rectangle_8086.png"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="bg-white  p-4 border-2  justify-between gap-2   rounded-xl flex items-center flex-row">
                  <div className="flex flex-col gap-2 w-full items-end">
                    <p>تعداد کلاس‌های من</p>
                    <p>3کلاس</p>
                  </div>
                  <Image
                    alt=" "
                    src="/assets/icons/Rectangle_8086.png"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="bg-white  p-4 border-2  justify-between gap-2   rounded-xl flex items-center flex-row">
                  <div className="flex flex-col gap-2 w-full items-end">
                    <p>تعداد کلاس‌های من</p>
                    <p>3کلاس</p>
                  </div>
                  <Image
                    alt=" "
                    src="/assets/icons/Rectangle_8086.png"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="bg-white  p-4 border-2  justify-between gap-2   rounded-xl flex items-center flex-row">
                  <div className="flex flex-col gap-2 w-full items-end">
                    <p>تعداد کلاس‌های من</p>
                    <p>3کلاس</p>
                  </div>
                  <Image
                    alt=" "
                    src="/assets/icons/Rectangle_8086.png"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col w-[90%]  border-2 items-center rounded-xl bg-white ">
            <div className="w-[99%] px-10 flex items-center justify-between p-4 border-b-[2px]    ">
              <button className="bg-[#80b022] h-10 p-4 items-center flex rounded-3xl px-12 text-white ">
                {" "}
                تیکت جدید
                <span className=" ml-2 text-3xl">+</span>
              </button>
              <h2 className="text-2xl font-semibold">اخرین تیکت ها</h2>
            </div>
            <div className="flex items-center justify-center w-full h-full mt-4 p-10 flex-col">
              <Image
                src="/assets/icons/empty-class.svg"
                width={200}
                height={200}
                alt="empty-class"
              />
              <p className="text-black text-xl mt-2">چیزی پیدا نشد!</p>
            </div>
          </div>
          <div className="flex flex-row w-[90%] border-4 items-center justify-between  mt-4 px-4 ">
            <div className="flex flex-col  flex-1  items-center justify-between gap-2">
              <div className="flex flex-col  items-end  justify-between rounded-md bg-[#94c846] w-full p-4 gap-2">
                <h2 className="text-white text-2xl font-bold">
                  جدید ترین دوره های طب سنتی
                </h2>
                <p className="text-white text-xl">
                  جدید ترین دور ی طب سنتی برای علاقه مندان به این رشته{" "}
                </p>
                <div className="flex w-full items-end">
                  <button className="bg-[#525251] p-2 px-10 text-white font-normal rounded-xl">
                    مشاهده
                  </button>
                </div>
              </div>
              <div className="flex flex-col  items-end  justify-between rounded-md bg-[#e49d07] w-full p-4 gap-2">
                <h2 className="text-white text-2xl font-bold">
                  جدید ترین دوره های طب سنتی
                </h2>
                <p className="text-white text-xl">
                  جدید ترین دور ی طب سنتی برای علاقه مندان به این رشته{" "}
                </p>
                <div className="flex w-full items-end">
                  <button className="bg-[#525251] p-2 px-10 text-white font-normal rounded-xl">
                    مشاهده
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-col  w-[50%] h-[330px]   border-2 items-center rounded-xl bg-white ">
              <div className="w-[99%]  px-10 flex items-center  justify-between p-4 border-b-[2px]    ">
                <button className="bg-[#80b022] h-10 p-4 items-center flex rounded-3xl px-12 text-white ">
                  {" "}
                  مشاهده همه
                  <span className=" ml-2 text-3xl">+</span>
                </button>
                <h2 className="text-2xl font-semibold">دوره های من</h2>
              </div>
              <div className="flex items-end  w-full h-full  p-4 flex-col">
                <div
                  className="flex  justify-between w-[42%] border mr-10
                "
                >
                  <p className="text-gray-500 text-[18px]">نام دوره</p>
                  <p className="text-gray-500 text-[18px]">استاد </p>
                </div>
                <div className="flex w-full items-center justify-center bg-[#fafbfc] gap-[100px]">
                  <button className="bg-[#f8f1e8] h-10 p-4 items-center flex rounded-md px-8 text-[#e07f00] ">
                    {" "}
                    مشاهده همه
                  </button>
                  <h2>دوره طب سنتی</h2>
                  <h2> دکتر رضایی</h2>
                </div>
              </div>
              <div className="flex items-end  w-full h-full  p-4 flex-col">
                <div
                  className="flex  justify-between w-[42%] border mr-10
                "
                >
                  <p className="text-gray-500 text-[18px]">نام دوره</p>
                  <p className="text-gray-500 text-[18px]">استاد </p>
                </div>
                <div className="flex w-full items-center justify-center bg-[#fafbfc] gap-[100px]">
                  <button className="bg-[#f8f1e8] h-10 p-4 items-center flex rounded-md px-8 text-[#e07f00] ">
                    {" "}
                    مشاهده همه
                  </button>
                  <h2>دوره طب سنتی</h2>
                  <h2> دکتر رضایی</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        {/*Right Sidebar*/}
        <div className="flex gap-4 gap-y-4 pt-2 w-[371px] border-4 flex-col items-center justify-center h-full pb-20 bg-white">
          <Image
            src="/assets/userImage.png"
            className=""
            alt="useImage"
            width={40}
            height={50}
          />
          <h2>UserName</h2>
          <p>13331215165</p>
          <div
            className="flex  flex-col  items-center w-full justify-center gap-4"
            dir="rtl"
          >
            {sidebarIcons.map((icon, index) => (
              <Link
                href={`${icon?.url}`}
                className={`flex border-4 w-[90%] gap-4 rounded-md p-2 ${
                  selectedItemIndex === index ? "bg-[#58c5c7]" : ""
                }`}
                onClick={() => handleSidebarItemClick(index)}
                key={index}
              >
                <Image
                  src={icon.iconUrl}
                  alt=""
                  className=""
                  width={20}
                  height={20}
                />
                <p className="inset-0 text-lg font-normal ">{icon?.title}</p>
              </Link>
            ))}
          </div>
        </div>
        {/*   End Of Right Sidebar*/}
      </div>
    </div>
  );
};

export default Dashboard;
