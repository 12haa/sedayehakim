"use client"
import React, {useState} from "react";
import Image from "next/image";
import {useTurbopack} from "next/dist/client/components/react-dev-overlay/internal/helpers/use-websocket";

const page = () => {
    const [num, setNum] = useState(1)
    return <main className="w-full h-screen flex flex-col items-center  bg-[#f9f9f9]">
        <div className="w-full  bg-[#e8cf75]  flex flex-col p-4 items-end gap-4 rounded-md ">
            <h2 className="text-4xl font-semibold">ساخت شامپوهای گیاهی</h2>
            <p className="text-xl">صفحه اصلی > اموزش > سبد خرید </p>

        </div>
        <div className=" w-[75%] mt-10 flex  justify-between gap-2 p-4" dir="rtl">

            <div className="flex flex-col">
                <div className=" w-[1129px] flex flex-col gap-10   bg-white">
                    <div
                        className="flex flex-row items-center justify-between gap-20 p-2  w-[100%] px-24 rounded-md py-6">
                        <h2 className="text-[21px]">نام محصول</h2>
                        <h2 className="text-[21px]">قیمت</h2>
                        <h2 className="text-[21px]">تعداد</h2>
                        <h2 className="text-[21px]">جمع جزء</h2>
                    </div>

                </div>
                <div className="w-[1129px] flex flex-col gap-10   bg-white mt-6 rounded-md">
                    <div className="flex  items-center justify-between  py-2  w-[85%] px-1 mx-auto " dir="rtl">
                        <div className="flex items-center gap-2">

                            <Image src="/assets/Amoozesh.png" alt="Amoozesh" width={70} height={70}
                                   className="rounded-lg"/>
                            <p className="text-[18px]"> اکثیر اعظم 4 جلدی</p>
                        </div>
                        <p className="text-[22px] text-[#4caf50] ml-10"> 700,000 ریال </p>
                        <div className="rounded-lg p-4 bg-[#f3f3f3] flex gap-2 items-center ml-10">
                            <p>{num}</p>
                            <div className="flex flex-col gap-5">
                                <button onClick={() => setNum(prev => prev + 1)}>
                                    <Image src="/assets/icons/arrowUp.svg" alt="" width={15} height={15}/>

                                </button>
                                <button onClick={() => setNum(prev => prev - 1)} className="rotate-180">
                                    <Image src="/assets/icons/arrowUp.svg" alt="" width={15} height={15}/>

                                </button>

                            </div>


                        </div>
                        <p className="text-[22px] text-[#4caf50]"> 700,000 ریال </p>
                    </div>
                </div>


            </div>
            <div className="flex flex-col pb-20  " dir="rtl">
                <div className="bg-white  flex gap-5 items-center justify-end p-2 rounded-md">
                    <h2 className="text-[18px] font-semibold">کد تخفیف</h2>
                    <input className="bg-[#fcfcfc] p-4 border-2 rounded-md " placeholder="وارد کنید"/>
                    <button className="bg-[#58c5c7] p-4 text-white rounded-md px-8">اعمال کنید</button>

                </div>
                <div className="bg-white flex flex-col items-center justify-center gap-4 mt-4 rounded-md">
                    <div className="flex justify-around gap-10  p-4">
                        <p className="text-[21px]"> جمع مبلغ کالاها : </p>
                        <p className="text-[21px]"> 700,000 ریال</p>
                    </div>
                    <div className="flex justify-around gap-14  p-4">
                        <p className="text-[21px]"> تخفیف : </p>
                        <p className="text-[21px]"> 0 ریال</p>
                    </div>
                    <p className="text-[34px] text-[#c6c6c6]"> - - - - - - - - - - </p>
                    <p className="w-[50%] text-[18px]">هزینه ارسال در ادامه بر اساس آدرس و نحوه‌ی ارسال محاسبه و اضافه
                        خواهد شد</p>
                    <div className="flex justify-around gap-14  p-4">
                        <p className="text-[21px]"> جمع سبد خرید : </p>
                        <p className="text-[21px]"> 700,000 ریال</p>
                    </div>
                </div>
            <button className="p-4 px-20 bg-[#80b022] mt-4 rounded-md"> تکمیل فرایند خرید</button>

            </div>

        </div>


    </main>;
};

export default page;
