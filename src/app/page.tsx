"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Box from "@/app/components/Box";
import { HeroItems } from "@/constans";
import Button from "@/app/components/Button";
import CardSlider from "@/app/components/CardSlider";
import Carousel from "@/app/components/Carousel";
import { slides } from "@/constans";
import React from "react";
import { RxDotFilled } from "react-icons/rx";
import { ChevronLeft, ChevronRight } from "react-feather";
import Link from "next/link";

export default function Home() {
  const windowWidth = window.innerWidth;

  console.log(windowWidth);
  return (
    <main className=" w-full h-screen flex flex-col ">
      {/*Hero Text And SearchBar*/}
      <div className="w-full  mt-28">
        <div className="flex flex-row items-center  justify-center h-1/6  gap-4 w-full">
          <div className="flex flex-row items-center justify-center">
            <p className="md:text-6xl text-4xl  font-normal z-10">ایران</p>
            <div className="-z-10  h-full flex flex-row items-center justify-center ">
              <p className="md:text-6xl text-4xl text-white font-normal z-10 ml-2">
                طب ستنی
              </p>

              <Image
                src="/assets/backBrush.png"
                width={318}
                height={100}
                alt="backBrush"
                className="max-md:flex absolute md:w-[500px] mt-2 ml-10 "
              />
            </div>
            <h2 className="md:text-6xl text-4xl font-normal tracking-wide ml-4">
              معتبر ترین سایت{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="   items-center flex justify-center mt-10">
        <div className=" flex flex-col items-center justify-end gap-2 max-sm:w-[59%]">
          <p className="md:text-2xl text-xl   z-10 ml-2 font-normal">
            موسسه پژوهشی و آموزشی صدای حکیم با هدف ارتقا سطح علمی و ترویج دانش
          </p>
          <p className="md:text-2xl text-xl   z-10 ml-2 font-normal">
            طب سنتی با بهره گیری از برترین اساتید اقدام به برگزاری دوره های ویژه
            مینماید
          </p>
        </div>
      </div>
      {/*Search */}
      <div className="w-full    mt-20 h-28 flex items-center   justify-center  ">
        <div className="  w-[55%]  rounded-2xl border-2 border-gray-200   shadow-2xl  h-full flex   items-center ">
          <form className=" w-full  h-full flex flex-row items-center justify  rtl-placeholder   ">
            <div className=" flex items-center justify-center h-full mt-1 cursor-pointer  rtl-placeholder">
              <Image
                src="/assets/search.svg"
                width={40}
                height={40}
                alt="Search"
                className="absolute"
              />
              <button type="submit">
                <Image
                  src="/assets/SearchIcon.svg"
                  width={100}
                  height={100}
                  alt="Search"
                />
              </button>
            </div>
            <input
              type="search"
              name="search"
              placeholder="جست و جو در محتوای آموزشی"
              className="flex-1 h-full outline-none rtl-placeholder p-2 text-[24px]  "
              dir="rtl"
            />
          </form>
        </div>
      </div>
      <div className="  relative  items-center flex justify-center -z-10 ">
        <div className="absolute w-[100%] -top-[60px]  h-[full]    ">
          <Image
            src="/assets/Ellipse_1263.svg"
            width={550}
            height={550}
            alt="Eplipse"
            className="w-full full"
          />
        </div>
      </div>
      <div className=" mt-4 h-20 flex items-center justify-between  md:px-4  gap-2  w-full">
        <div className=" max-md:hidden   ">
          <Button title="مشاهده همه" />
        </div>
        <div className="bg-white border-2 ml-auto   p-2 rounded-lg ">
          <p>دوره های آموزشی سلامت جسم</p>
        </div>
        <div className="bg-white border-2  border-[#E8CF75] p-2 rounded-lg">
          <p>دوره های آموزشی سلامت جسم</p>
        </div>
      </div>
      <div className="mt-4  flex items-center flex-col       ">
        <div className=" grid grid-cols-3   justify-center items-center md:gap-x-56  gap-12      md:grid-cols-4  md:ml-20 ">
          {windowWidth <= 758
            ? HeroItems.slice(3).map((item) => {
                return <Box title={item.title} iconUrl={item.iconUrl} />;
              })
            : HeroItems.map((item) => {
                return <Box title={item.title} iconUrl={item.iconUrl} />;
              })}
        </div>
        <div className="flex items-center gap-4 justify-center mt-10 md:hidden  ">
          <Button title="مشاهده همه" />
        </div>
      </div>
      <div className=" mt-10 w-full h-full ">
        <div className=" flex items-center justify-between">
          <Button title="مشاهده همه" />
          <div className="flex flex-row p-4 justify-between items-center gap-2 ">
            <div className="flex flex-col ">
              <p className="text-2xl">جدید ترین دوره ها</p>
              <p className="justify-end flex"> دوره های آپدیت شده</p>
            </div>
            <div className="h-[100px] border-4 rounded-full   border-[#e8cf75] "></div>
          </div>
        </div>
        <div className="  md:hidden border-gray-300 ">
          <Carousel />
        </div>
        <div className=" flex flex-row max-md:hidden   overflow-hidden    items-center justify-between">
          {slides.map((slide, index) => (
            <div className="border-4  flex flex-col items-center justify-center rounded-3xl ">
              <Image
                src={slide.imageUrl}
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
                <Button
                  title="خرید دوره"
                  bgColor="blue-500"
                  textColor="white"
                />
                <div className="gap-2 flex justify-between p-2">
                  <p className="text-xl font-bold p-1">
                    700,000
                    <span className="font-light">ریال</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 w-full bg-[#fffae7] flex flex-col md:flex-row-reverse items-center justify-between h-[400%] ">
        <div className="h-full   ">
          <div className=" flex items-center justify-start">
            <div className="flex flex-row p-4 justify-between items-center gap-2  flex-1">
              <div className="flex flex-col items-end ">
                <p className="text-2xl md:text-4xl">
                  با <span className="text-[#58c5c7]"> صدای حکیم </span>
                  {""}
                  بیشتر اشننا شوید
                </p>
                <p className="justify-items-start flex text-lg" dir="rtl">
                  موسسه پژوهشی و آموزشی صدای حکیم با هدف ارتقا سطح علمی و ترویج
                  دانش طب سنتی با بهره گیری از برترین اساتید اقدام به برگزاری
                  دوره های ویژه مینماید
                </p>
              </div>
              <div className="h-[100px] border-4 rounded-full   border-[#e8cf75] "></div>
            </div>
          </div>
          <div
            className="flex flex-row w-full items-start p-4 max-md:hidden  "
            dir="rtl"
          >
            <Button title="بیشتر بخوانید" bgColor="black" textColor="white" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-20 border-4">
          <Image
            src="/assets/Amoozesh.png"
            alt="video"
            width={700}
            height={700}
          />
          {/*<video />*/}
        </div>
      </div>
      <div className="  md:hidden border-gray-300  mt-20">
        <Carousel />
      </div>
      <div className=" flex flex-row max-md:hidden   overflow-hidden    items-center justify-between">
        {slides.map((slide, index) => (
          <div className="border-4  flex flex-col items-center justify-center rounded-3xl ">
            <Image
              src={slide.imageUrl}
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
              <div className="gap-2 flex justify-between p-2">
                <p className="text-xl font-bold p-1">
                  700,000
                  <span className="font-light">ریال</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-10 w-full h-full ">
        <div className=" flex items-center justify-between">
          <Button title="مشاهده همه" />
          <div className="flex flex-row p-4 justify-between items-center gap-2 ">
            <div className="flex flex-col ">
              <p className="text-2xl">جدید ترین دوره ها</p>
              <p className="justify-end flex"> دوره های آپدیت شده</p>
            </div>
            <div className="h-[100px] border-4 rounded-full   border-[#e8cf75] "></div>
          </div>
        </div>

        <div className=" flex flex-row max-md:hidden   overflow-hidden    items-center justify-between">
          {slides.map((slide, index) => (
            <div className="border-4  flex flex-col items-center justify-center rounded-3xl ">
              <Image
                src={slide.imageUrl}
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
                <Button
                  title="خرید دوره"
                  bgColor="blue-500"
                  textColor="white"
                />
                <div className="gap-2 flex justify-between p-2">
                  <p className="text-xl font-bold p-1">
                    700,000
                    <span className="font-light">ریال</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 w-full md:bg-gradient-to-r from-[rgb(208,163,4)] bg-gradient-to-br via-white flex flex-col md:flex-row-reverse items-center justify-between h-[400%] ">
        <div className="h-full  w-[1700px]  flex flex-col justify-start items-center  gap-16 ">
          <div className=" flex  ">
            <div className="flex flex-row p-4   items-center gap-10   ">
              <div className="flex flex-col items-start  w-full " dir="rtl">
                <p className="text-2xl md:text-4xl font-bold w-full ">
                  توصیه های پزشک
                  <p dir="rtl" className="text-[#58c5c7] text-3xl">
                    {" "}
                    صدای حکیم{" "}
                  </p>
                </p>
              </div>
              <div className="h-[100px] border-4 rounded-full   border-[#e8cf75] "></div>
            </div>
          </div>
          <div
            className="flex items-center  max-md:hidden justify-center"
            dir="rtl"
          >
            <p className="w-[50%] text-[18px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است{" "}
            </p>
          </div>
          <div className="flex items-center justify-between w-[60%] py-4 max-md:hidden">
            <button className="rounded-sm bg-[#000] h-10 p-2 ">
              <ChevronLeft size={30} className="text-white" />
            </button>
            {[1, 2, 3].map((i, j) => (
              <RxDotFilled />
            ))}
            <button className="rounded-sm bg-[#000] h-10 p-2 ">
              <ChevronRight size={30} className="text-white" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full p-20 flex-col gap-10 ">
          <Image
            src="/assets/doctor.png"
            alt="video"
            width={400}
            height={400}
            className=" min-h-[400px]  "
          />

          <div className="flex items-center justify-center h-2 rounded-full bg-[#58c5c7] p-6 md:hidden  ">
            <p className="font-[32px] text-white ">1</p>
          </div>
          <p className="text-[26px] md:hidden" dir="rtl ">
            موسسه پژوهشی و آموزشی صدای حکیم با هدف ارتقا سطح علمی و ترویج دانش
            طب سنتی با بهره گیری از برترین اساتید اقدام به برگزاری دوره های ویژه
            مینماید
          </p>
          <div className="flex items-center justify-between w-[60%] md:hidden">
            <button className="rounded-full bg-[#e8cf75] h-10 p-2 ">
              <ChevronLeft size={30} className="text-white" />
            </button>
            {[1, 2, 3].map((i, j) => (
              <RxDotFilled />
            ))}
            <button className="rounded-full bg-[#e8cf75] h-10 p-2 ">
              <ChevronRight size={30} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-10 w-full h-full ">
        <div className=" flex items-center justify-between">
          <Button title="مشاهده همه" />
          <div className="flex flex-row p-4 justify-between items-center gap-2 ">
            <div className="flex flex-col ">
              <p className="text-2xl">جدید ترین دوره ها</p>
              <p className="justify-end flex"> دوره های آپدیت شده</p>
            </div>
            <div className="h-[100px] border-4 rounded-full   border-[#e8cf75] "></div>
          </div>
        </div>
        <div className="  md:hidden border-gray-300 ">
          <Carousel />
        </div>
        <div className=" flex flex-row lg:flex-wrap max-md:hidden bg-[#f5f5f7]     items-center  gap-4">
          {slides.slice(4).map((slide, index) => (
            <div className="border-4  flex flex-col items-center justify-center rounded-3xl ">
              <Image
                src={slide.imageUrl}
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
                <Button
                  title="خرید دوره"
                  bgColor="blue-500"
                  textColor="white"
                />
                <div className="gap-2 flex justify-between p-2">
                  <p className="text-xl font-bold p-1">
                    700,000
                    <span className="font-light">ریال</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center border-4 mt-12   h-full ">
        <div className="flex flex-col gap-4 items-center justify-center p-4    ">
          <h2>چرا صدای حکیم؟</h2>
          <p>برخی از ویژگی ها و قابلیت های صدای حکیم </p>
          <div className="w-[50%]  bg-[#e8cf75] h-1.5 border-2  justify-center items-center"></div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:pt-10 w-full justify-center  md:w-[70%] items-center  shadow-2xl ">
          {[1, 2, 3].map((item, index) => (
            <div className="border-2 rounded-2xl w-[50%] flex flex-col items-center justify-center p-4 gap-6">
              <Image src="/assets/clock.png " alt="" width={100} height={100} />
              <p className="text-[21px]"> یادگیری بدون توقف </p>
              <h1 className="items-center justify-center flex  " dir="rtl">
                تمامی دوره ها به صورت کامل داخل پنل دانشجویان قرار دارد
              </h1>
            </div>
          ))}
        </div>
        <div className="mt-10 hidden md:flex">
          <Button title="همین حالا شروع کن" textColor="white" bgColor="red" />
        </div>
        <div className=" w-full items-start justify-start mt-4  hidden md:flex">
          <Image src="/assets/Component_5.png" alt="" width={60} height={60} />
        </div>
      </div>
      <div className="flex flex-row bg-[#545454] items-center justify-center mt-20    ">
        <div className="flex flex-row justify-center items-center gap-10 md:gap-40 lg:gap-96 p-5  min-w-full">
          <div className="flex flex-col items-center gap-10 ">
            <h2 className="text-white text-4xl ">
              <span className="text-[#e8cf75]">+</span>130
            </h2>
            <p className="text-white">دوره اموزشی</p>
          </div>
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-white text-4xl">
              <span className="text-[#e8cf75]">+</span>130
            </h2>
            <p className="text-white">دوره در حال برگزاریی</p>
          </div>
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-white text-4xl">
              <span className="text-[#e8cf75]">+</span>130
            </h2>
            <p className="text-white">دوره اموزشی</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mt-20 gap-4">
        <h2 className="text-black text-[32px] font-semibold">
          دانشگاه های همکار
        </h2>
        <div className="w-[30%]  bg-[#e8cf75] h-2 border-2  items-center justify-center flex"></div>
      </div>
      <div className="mt-10 flex items-center justify-center flex-row bg-[#fcfcfc] gap-10 min-w-full  ">
        <div className="md:hidden flex items-center justify-center max-w-[350px]">
          <CardSlider />
        </div>
        {[0, 1, 2, 3].map((item, index) => (
          <div className="hidden   md:flex items-center justify-center flex-col gap-10 rounded-xl border-4 shadow-lg md:p-6 ">
            <Image
              src="/assets/Untitled.png"
              alt="Esfehan_Univercity"
              width={120}
              height={120}
            />
            <h2 className="text-[24px] md:text-[18px]  ">دانشگاه اصفهان</h2>
          </div>
        ))}
      </div>
      <div className="mt-20 flex flex-col bg-[#fff] items-center justify-center md:hidden">
        <div
          className=" flex flex-col items-center justify-center gap-4"
          dir="ltr"
        >
          <div className="flex flex-row gap-4 items-center justify-center">
            <p className="text-[24px]">021-132465</p>
            <Image
              src="/assets/whatsapp.png"
              alt="CallPng"
              width={30}
              height={30}
            />
          </div>
          <p className="text-[24px] text-[#9a9a9a]">تلفن پشتیبانی</p>
        </div>
        <div className="flex items-center justify-center gap-2 w-full flex-col mt-6">
          <div className="w-[80%]  bg-[#8a8a8a] h-0.5 border-2  items-center justify-center flex"></div>
          <div className="w-[80%]  bg-[#8a8a8a] h-0.5 border-2  items-center justify-center flex"></div>
          <div className="flex flex-col items-center justify-center gap-5 mt-8 ">
            <div className="flex flex-row gap-12 justify-between border-2 px-4 py-2 items-center rounded-3xl w-full">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/aparat.svg"
                  alt="aparatLogo"
                  className="absolute"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assets/Ellipseblack.svg"
                  alt="eplipse"
                  width={40}
                  height={40}
                />
              </div>
              <p>عضویت در کانال آپارات ما </p>
            </div>
            <div className="flex flex-row gap-12 justify-between border-2 px-4 py-2 items-center rounded-3xl w-full">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/aparat.svg"
                  alt="aparatLogo"
                  className="absolute"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assets/Ellipseblack.svg"
                  alt="eplipse"
                  width={40}
                  height={40}
                />
              </div>
              <p>عضویت در کانال آپارات ما </p>
            </div>
            <div className="flex flex-row gap-12 justify-between border-2 px-4 py-2 items-center rounded-3xl w-full">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/aparat.svg"
                  alt="aparatLogo"
                  className="absolute"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assets/Ellipseblack.svg"
                  alt="eplipse"
                  width={40}
                  height={40}
                />
              </div>
              <p>عضویت در کانال آپارات ما </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-row mt-10 w-full max-md:hidden ">
        <div className="bg-[#e8cf75] flex flex-row w-[70%] rounded-xl justify-between items-center ">
          <div className="flex flex-row gap-12 justify-between border-2 px-4 py-2 items-center rounded-3xl ">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/aparat.svg"
                alt="aparatLogo"
                className="absolute"
                width={20}
                height={20}
              />
              <Image
                src="/assets/Ellipseblack.svg"
                alt="eplipse"
                width={40}
                height={40}
              />
            </div>
            <p>عضویت در کانال آپارات ما </p>
          </div>
          <div className="flex flex-row items-center justify-center  gap-4   flex-1  ">
            <div className="flex items-center flex-col  gap-4">
              <p>تلفن پشتیبانی</p>
              <p>پاسخگو 8 صبح تا 5 عصر</p>
              <p className="text-[24px]">021-132465</p>
            </div>
            <Image
              src="/assets/whatsapp.png"
              alt="CallPng"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col md:hidden md:gap-10 bg-[#f7f7f7] items-center justify-center p-4 gap-4">
        <h2 className="text-semibold text-[22px]">نشانی دفتر مرکزی</h2>
        <p className="text-normal text-[#949494]">
          {" "}
          تهران ستارخان نبش نیایش_ پلاک 321 واحد 5{" "}
        </p>
        <div className="w-[80%]  bg-[#E8CF75] h-0.5 border-2  items-center justify-center flex"></div>
        <div className="w-[80%]  bg-[#E8CF75] h-0.5 border-2  items-center justify-center flex"></div>
        <h2 className="text-semibold text-[22px]">نشانی دفتر مرکزی</h2>
        <Link href="/" className="text-normal text-[#949494]">
          درباره ما
        </Link>
        <Link href="/" className="text-normal text-[#949494]">
          تماس با ما
        </Link>
        <Link href="/" className="text-normal text-[#949494]">
          سیاست حریم خصوصی
        </Link>
        <Link href="/" className="text-normal text-[#949494]">
          همکاری با ما
        </Link>
        <Link href="/" className="text-normal text-[#949494]">
          سوالات متداول
        </Link>

        <div className="w-[80%]  bg-[#E8CF75] h-0.5 border-2  items-center justify-center flex"></div>
        <div className="w-[80%]  bg-[#E8CF75] h-0.5 border-2  items-center justify-center flex"></div>
        <div className="flex flex-row items-center justify-between gap-4 w-full p-10 rounded-xl mt-10">
          <div className=" border-4 flex items-center flex-col p-4 rounded-xl ">
            <Image
              src="/assets/NamadElectronic.svg"
              alt="ElectronicLogo"
              width={150}
              height={150}
            />
          </div>
          <div className=" border-4 flex items-center flex-col p-4 rounded-xl  ">
            <Image
              src="/assets/NamadElectronic.svg"
              alt="ElectronicLogo"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
      <div className="md:flex flex-row items-center justify-center hidden mt-20 ">
        <div className=" flex flex-row-reverse items-center justify-between gap-12 ">
          <div className="flex flex-col items-center gap-8 p-4 ">
            <h2 className="text-semibold text-[22px]">نشانی دفتر مرکزی</h2>
            <p className="text-normal text-[#949494]">
              {" "}
              تهران ستارخان نبش نیایش_ پلاک 321 واحد 5{" "}
            </p>
            <div className="flex flex-row items-center justify-between gap-4  ">
              <p>شماره تماس : 021-66195502 </p>
              <Image
                src="/assets/Phone.svg"
                alt="phone"
                width={25}
                height={25}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2>لینک های کاربردی</h2>
            <Link href="/" className="text-normal text-[#949494]">
              درباره ما
            </Link>
            <Link href="/" className="text-normal text-[#949494]">
              تماس با ما
            </Link>
            <Link href="/" className="text-normal text-[#949494]">
              سیاست حریم خصوصی
            </Link>
            <Link href="/" className="text-normal text-[#949494]">
              همکاری با ما
            </Link>
            <Link href="/" className="text-normal text-[#949494]">
              سوالات متداول
            </Link>
          </div>
          <div className=" border-4 flex items-center flex-col p-4 rounded-xl ">
            <Image
              src="/assets/NamadElectronic.svg"
              alt="ElectronicLogo"
              width={100}
              height={100}
            />
          </div>
          <div className=" border-4 flex items-center flex-col rounded-xl p-4 ">
            <Image
              src="/assets/NamadElectronic.svg"
              alt="ElectronicLogo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
