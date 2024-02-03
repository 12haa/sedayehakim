import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

const page = () => {
    return (
        <main className="w-full h-screen flex flex-col items-center  bg-[#f9f9f9] ">

            <div className="w-full  bg-[#e8cf75] flex flex-col p-4 items-end gap-4 rounded-md">
                <h2 className="text-4xl font-semibold">آکادمی</h2>
                <p className="text-xl">صفحه اصلی > اکادمی</p>
            </div>
            <div className="border-4 w-[90%] h-[1200px] mt-8 flex-row flex">
                <div className="flex-1 border-4 w-full h-fit grid grid-cols-3 flex-wrap gap-10 p-4" dir="rtl">
                    {[1, 2, 3,].map((item, key) => (
                        <div className="border-4  flex flex-col items-center justify-center rounded-3xl gap-4 ">
                            <Image
                                src="/assets/Amoozesh.png"
                                alt=""
                                className="w-full h-fit rounded-2xl bg-center bg-cover duration-500
                                    object-cover "
                                width={120}
                                height={120}
                            />
                            <p className="text-lg flex justify-start p-2" dir="rtl">
                                {" "}
                                کتابخانه جامع طب سنتی

                            </p>
                            <div className="flex w-full items-center  px-4 gap-2 mx-auto ">
                                <Image src="/assets/icons/drrezayi.svg" alt="drprofilepic" width={34} height={34}/>
                                <p className="text-[#817f7f]">دکتر رضایی</p>
                            </div>
                            <div className="w-[100%] bg-[#b0b0b0] h-1.5 border-2  justify-center items-center"></div>
                            <div className="flex w-full items-center  px-4 gap-2 mx-auto py-4 justify-between ">
                                <div
                                    className="flex items-center justify-center px-4 py-2 rounded-md bg-[#f7eecd] gap-4">
                                    <Image src="/assets/icons/wall-clock.svg" alt="drprofilepic" width={24}
                                           height={24}/>
                                    {/*    Add Live Clock*/}
                                    1:57:22
                                </div>
                                <p dir="rtl"><span className="text-[#71c100]">700,00</span> تومان</p>
                            </div>

                        </div>
                    ))}

                    {/* Add Pagination   */}


                </div>


                {/*    Right Filtering Section*/}
                <div className="flex  w-72 flex-col gap-6">
                    <div className=" mt-4 bg-white p-4 gap-2   flex flex-col items-center justify-center  ">
                        <div className="flex items-start  justify-end  border-b-2 w-full gap-4">
                            <h2>نوع دوره</h2>
                            <span className="bg-[#e8cf75] h-full w-0.5"></span>
                        </div>
                        <div dir="rtl" className="flex w-full gap-4 mt-2  ">
                            <div className="flex-1 gap-2 flex">
                                <input type="checkbox" id="myCheckbox"
                                       name="myCheckbox"/>
                                <label htmlFor="myCheckbox">رایگان</label>
                            </div>
                            <p className="text-gray-400">5</p>

                        </div>
                        <div dir="rtl" className="flex w-full gap-2 mt-2  ">
                            <div className="flex-1 flex gap-4">
                                <input type="checkbox" id="myCheckbox"
                                       name="myCheckbox"/>
                                <label htmlFor="myCheckbox">رایگان</label>
                            </div>
                            <p className="text-gray-400">5</p>

                        </div>
                    </div>
                    <div className=" mt-4 bg-white p-4 gap-2   flex flex-col items-center justify-center  ">
                        <div className="flex items-start  justify-end  border-b-2 w-full gap-4">
                            <h2>نوع دوره</h2>
                            <span className="bg-[#e8cf75] h-full w-0.5"></span>
                        </div>
                        <div dir="rtl" className="flex w-full gap-4 mt-2  ">
                            <div className="flex-1 gap-2 flex">
                                <input type="checkbox" id="myCheckbox"
                                       name="myCheckbox"/>
                                <label htmlFor="myCheckbox">رایگان</label>
                            </div>
                            <p className="text-gray-400">5</p>

                        </div>
                        <div dir="rtl" className="flex w-full gap-2 mt-2  ">
                            <div className="flex-1 flex gap-4">
                                <input type="checkbox" id="myCheckbox"
                                       name="myCheckbox"/>
                                <label htmlFor="myCheckbox">رایگان</label>
                            </div>
                            <p className="text-gray-400">5</p>

                        </div>
                        <div dir="rtl" className="flex w-full gap-2 mt-2  ">
                            <div className="flex-1 flex gap-4">
                                <input type="checkbox" id="myCheckbox"
                                       name="myCheckbox"/>
                                <label htmlFor="myCheckbox">رایگان</label>
                            </div>
                            <p className="text-gray-400">5</p>

                        </div>
                        <div dir="rtl" className="flex w-full gap-2 mt-2  ">
                            <div className="flex-1 flex gap-4">
                                <input type="checkbox" id="myCheckbox"
                                       name="myCheckbox"/>
                                <label htmlFor="myCheckbox">رایگان</label>
                            </div>
                            <p className="text-gray-400">5</p>

                        </div>
                        <div dir="rtl" className="flex w-full gap-2 mt-2  ">
                            <div className="flex-1 flex gap-4">
                                <input type="checkbox" id="myCheckbox"
                                       name="myCheckbox"/>
                                <label htmlFor="myCheckbox">رایگان</label>
                            </div>
                            <p className="text-gray-400">5</p>

                        </div>
                        <div dir="rtl" className="flex w-full gap-2 mt-2  ">
                            <div className="flex-1 flex gap-4">
                                <input type="checkbox" id="myCheckbox"
                                       name="myCheckbox"/>
                                <label htmlFor="myCheckbox">رایگان</label>
                            </div>
                            <p className="text-gray-400">5</p>

                        </div>
                        <div dir="rtl" className="flex w-full gap-2 mt-2  ">
                            <div className="flex-1 flex gap-4">
                                <input type="checkbox" id="myCheckbox"
                                       name="myCheckbox"/>
                                <label htmlFor="myCheckbox">رایگان</label>
                            </div>
                            <p className="text-gray-400">5</p>

                        </div>
                    </div>
                    <div className=" mt-4 bg-white p-4 gap-2   flex flex-col items-center justify-center  ">
                        <div className="flex items-start  justify-end  border-b-2 w-full gap-4">
                            <h2> فیلتر بر اساس قیمت</h2>
                            <span className="bg-[#e8cf75] h-full w-0.5"></span>
                        </div>
                        {/*Finish Slider*/}
                        <input type="range" id="priceSlider" name="price" min="0" max="1000" step="10"/>
                        <button className=" py-2 bg-[#80b022] text-white  px-12 rounded-lg"> اعمال کنید</button>
                    </div>
                    <div className=" mt-4 bg-white p-4 gap-2   flex flex-col items-center justify-center  ">
                        <Image src="/assets/icons/course-certificate.svg" alt="" width={186} height={172}
                               className="object-fit"/>
                        <h1 className="text-[#707070] text-[24px]">گواهی پایان دوره </h1>
                        <p dir="rtl" className="text-[18px] text-[#575757]">شما می‌توانید در پایان هر دوره از صدای حکیم
                            گواهی پایان دوره به همراه گواهی تاییدیه دریافت کنید، </p>
                    </div>


                </div>

                {/*End*/}

            </div>

        </main>
    );
};

export default page;