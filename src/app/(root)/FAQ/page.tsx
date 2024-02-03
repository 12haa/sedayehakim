import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section
      className="flex flex-col items-center bg-[#f9f9f9] justify-center gap-4 "
      dir="rtl"
    >
      <div className=" rounded-md flex items-center justify-start bg-[#58c5c7] p-3 px-12 w-full">
        <p className="text-white text-[25px] font-semibold "> سوالات متداول</p>
      </div>
      <div className="flex w-full flex-row gap-5 items-center justify-center ">
        {/*Right Side*/}
        <div className="flex flex-col gap-3 ">
          {[1, 2, 3, 4].map(() => (
            <div
              className="bg-white flex flex-col      items-start py-6 px-7 pl-40 shadow-lg"
              dir="rtl"
            >
              <h2 className="font-semibold text-[19px]">ثبت نام و شهریه</h2>
              <p className="text-[16px] text-[#a6a6a6]">
                سوالات مربوط به روند ثبت نام و شهریه
              </p>
            </div>
          ))}
        </div>
        {/*  End Of Right Side*/}
        <div className="flex flex-col  flex-1 justify-between items-center ">
          {[1, 2, 3, 4].map(() => (
            <div className="flex mt-4 w-full  items-center justify-between gap-4 bg-white px-4 ">
              <div
                className="bg-white flex flex-col       items-start py-6 px-7 pl-40 "
                dir="rtl"
              >
                <h2 className="font-semibold text-[19px]">ثبت نام و شهریه</h2>
                <p className="text-[16px] text-[#a6a6a6]">
                  سوالات مربوط به روند ثبت نام و شهریه
                </p>
              </div>
              <Image
                src="/assets/icons/arrowDown.svg"
                alt=""
                width={15}
                height={15}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-60 bg-white flex flex-col items-center justify-center w-full  gap-10"
        dir="rtl"
      >
        <div className="flex flex-col w-full px-4">
          <h2 className="text-bold font-semibold text-[33px]">ثبت پرسش جدید</h2>
          <div className="flex">
            <div className="bg-[#e8cf75] h-0.5 p-0.5 px-16"></div>
            <div className="bg-[#d3d3d3] h-0.5 p-0.5 px-16 flex-1"></div>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-2 px-2">
          <h2 className="text-[#696464] text-[22px]">
            نوع درخواست
            <span className="text-rose-500 absolute  text-[24px]">
              * <span className="text-[#696464]"> :</span>
            </span>
          </h2>
          <div className="w-full px-4 p-6 bg-[#fcfcfc] flex  items-center justify-between">
            <input
              placeholder="انتخاب کنید"
              className="bg-[#fcfcfc] "
              type=""
            />
            <Image
              src="/assets/icons/arrowDown.svg"
              alt=""
              width={15}
              height={15}
            />
          </div>
        </div>
        <div className=" w-full flex flex-col gap-2 px-2">
          <h2 className="text-[#696464] text-[22px]">متن درخواست : </h2>
          <div className="w-full px-4 p-6 bg-[#fcfcfc] flex  items-center justify-between">
            <textarea
              placeholder=""
              className="bg-[#fcfcfc] w-full"
              rows={120}
              cols={40}
            />
          </div>
        </div>
        <div className="flex items-center w-full justify-between">
          <div className="flex gap-5" dir="">
            <p className="text-[#696464] px-2">کد اعتبار سنجی :</p>
            <p className="text-[#696464]" dir="ltr">
              16 +12 ={" "}
            </p>
          </div>
          <button className="p-4 px-14 text-white rounded-md bg-[#80b022]">
            تایید و ارسال درخواست
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
