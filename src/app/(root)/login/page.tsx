import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="flex  justify-center  w-full" dir="rtl">
      <div className="  w-[75%] items-center justify-evenly flex px-40">
        {/*Login Form*/}
        <div className="flex flex-col  ">
          <div className="flex flex-col w-full items-center justify-center gap-5   bg-white p-4  rounded-xl ">
            <h1 className="text-[24px] font-semibold">ورود به حساب کاربری</h1>
            <div className="bg-[#e8cf75]  p-0.5 w-20"></div>
            <div className="flex flex-col  pt-2 gap-2 w-full px-2 ">
              <h2>
                کد ملی <span className="text-red-500 text-[28px]">*</span>
              </h2>
              <input
                type="text"
                placeholder="نام کاربری را وارد کنید"
                className="bg-[#fcfcfc] p-4 w-full"
              />
              <h2>رمزعبور</h2>
              <div className="relative flex ">
                <input
                  type="text"
                  placeholder="رمز عبور خود را وارد کنید"
                  className="bg-[#fcfcfc] p-4 w-full"
                />
                <Image
                  src="/assets/icons/EyeIcon.svg"
                  className=""
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center justify-center py-6">
                <button className="bg-[#80b022] rounded-lg px-48 py-4 text-white text-[21px]">
                  ورود
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5   rounded-lg bg-white mt-4 w-full">
            <div className=" py-4">
              <p className="text-[20px]">
                کاربر جدید هستید؟{" "}
                <Link href="/signup" className="text-[#80b022] text-[18px]">
                  برای عضویت کلیک کنید
                </Link>
              </p>
            </div>
          </div>
          <div className="flex  items-center justify-center gap-10 w-full  rounded-lg bg-white mt-4 ">
            <div className=" py-4 gap-2 px-2">
              <p className="text-[18px]">
                نام کاربری یا رمز عبور خود را فراموش کردید؟
                <Link href="/signup" className="text-[#58c5c7] text-[18px]">
                  اینجا بزنید
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="  h-full flex flex-col items-center justify-center gap-5 w-[60%] px-2  ">
          <div className="flex w-full gap-5">
            <Image
              src="/assets/icons/Triangle.svg"
              alt=""
              width={20}
              height={20}
              className="rotate-180"
            />
            <h2 className="text-[24px]"> دانشجوی گرامی :</h2>
          </div>
          <div className="flex flex-col gap-6" dir="rtl">
            <div className="flex  gap-5">
              <Image
                src="/assets/icons/Dot2.svg"
                alt=""
                width={14}
                height={14}
                className="mb-6"
              />
              <p className="text-[21px]">
                ثبت نام قبلی شما در دوره های صدای حکیم به منزله ثبت نام در سایت
                نبوده و میبایست . برای مشاهده دوره ها در این سایت ثبت نام نمایید
              </p>
            </div>
            <div className="flex  gap-5">
              <Image
                src="/assets/icons/Dot2.svg"
                alt=""
                width={14}
                height={14}
                className="mb-6"
              />
              <p className="text-[21px]">
                ثبت نام قبلی شما در دوره های صدای حکیم به منزله ثبت نام در سایت
                نبوده و میبایست . برای مشاهده دوره ها در این سایت ثبت نام نمایید
              </p>
            </div>
            <div className="flex  gap-5">
              <Image
                src="/assets/icons/Dot2.svg"
                alt=""
                width={14}
                height={14}
                className="mb-6"
              />
              <p className="text-[21px]">
                ثبت نام قبلی شما در دوره های صدای حکیم به منزله ثبت نام در سایت
                نبوده و میبایست . برای مشاهده دوره ها در این سایت ثبت نام نمایید
              </p>
            </div>
            <div className="flex  gap-5">
              <Image
                src="/assets/icons/Dot2.svg"
                alt=""
                width={14}
                height={14}
                className="mb-6"
              />
              <p className="text-[21px]">
                ثبت نام قبلی شما در دوره های صدای حکیم به منزله ثبت نام در سایت
                نبوده و میبایست . برای مشاهده دوره ها در این سایت ثبت نام نمایید
              </p>
            </div>
            <div className="flex w-full gap-5 mt-2">
              <Image
                src="/assets/icons/Triangle.svg"
                alt=""
                width={20}
                height={20}
                className="rotate-180"
              />
              <h2 className="text-[24px]"> اتباع گرامی سایر کشور ها : </h2>
            </div>
            <div className="flex  gap-5">
              <Image
                src="/assets/icons/Dot2.svg"
                alt=""
                width={14}
                height={14}
                className="mb-6"
              />
              <p className="text-[21px]">
                ثبت نام قبلی شما در دوره های صدای حکیم به منزله ثبت نام در سایت
                نبوده و میبایست . برای مشاهده دوره ها در این سایت ثبت نام نمایید
              </p>
            </div>
            <div className="flex  gap-5">
              <Image
                src="/assets/icons/Dot2.svg"
                alt=""
                width={14}
                height={14}
                className="mb-6"
              />
              <p className="text-[21px]">
                ثبت نام قبلی شما در دوره های صدای حکیم به منزله ثبت نام در سایت
                نبوده و میبایست . برای مشاهده دوره ها در این سایت ثبت نام نمایید
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
