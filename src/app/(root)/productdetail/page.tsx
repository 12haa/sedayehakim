"use client"
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";


const page = () => {
    return <main className="w-full h-screen flex flex-col items-center  bg-[#f9f9f9]">
        <div className="w-full  bg-[#e8cf75] flex flex-col p-4 items-end gap-4 rounded-md">
            <h2 className="text-4xl font-semibold">ساخت شامپوهای گیاهی</h2>
            <p className="text-xl">صفحه اصلی > اموزش > ساخت شامپوهای گیاهی </p>

        </div>

        <div className="w-[80%] flex   gap-5  justify-between   mt-10">
            <div className="border-4 ">sssssssssssssssssssssssss</div>


            <div dir="rtl" className=" flex flex-col w-[70%]       items-center  gap-24 bg-white p-4">
                <div className=" flex   p-4 w-full    items-center justify-between gap-10 ">
                    <div className=" flex w-full h-full  items-center justify-between   gap-20 ">
                        <div className=" ">
                            <Image src="/assets/Amoozesh.png" alt="amoozesh" className=" " width={400} height={300}/>
                        </div>
                        <div className="flex flex-col flex-1  ">

                            <div className="flex    items-center justify-between py-2 ">
                                <h1 className="text-xl">ساخت شامپوهای گیاهی</h1>
                                <div className="  flex   gap-1">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <Image src="assets/icons/star.svg" width={12} height={12} alt="start"/>
                                    ))}
                                </div>


                            </div>
                            <div className="w-[100%] "></div>
                            <div className=" mt-2" dir="rtl">
                                <p className=" tracking-wider leading-[40px]  "> لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت
                                    چاپ
                                    و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان
                                    که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                    از
                                    طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک
                                    است چاپگرها و متون بلکه روزنامه </p>
                            </div>

                        </div>


                    </div>


                </div>


            </div>


        </div>
        <div className="mt-10 bg-white  ml-[490px]  border-4 flex gap-10 items-center justify-end w-[56%] ">
            <p className="text-[#3b3b3b] text-xl mr-2 p-2">توضیحات دوره</p>
            <p className="text-[#3b3b3b] text-xl mr-2 p-2">دوره های مرتبط</p>
            <p className="text-[#3b3b3b] text-xl mr-2 p-2">نظرات کاربران</p>
        </div>
        <div className=" w-[56%] p-2 ml-[490px] mt-10 bg-white" dir="rtl">
            <h2 className="text-[31px]">توضیحات</h2>
            <div className="border-2 w-[100px] border-[#e8cf75]"></div>
            <div className="w-[98%] mt-2">
                <p className="text-[20px] font-normal font-serif tracking-wider">لورم ایپسوم متن ساختگی با تولید سادگی
                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
                    سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است چاپگرها و متون بلکه روزنامه </p>
            </div>
            <div className="w-[40%]  mt-8 flex justify-between gap-6">
                <div className="flex flex-col gap-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div className="flex gap-2 ">
                            <Image src="/assets/icons/dot.svg" alt="dot" width={10} height={10}/>
                            <p className="text-[20px]">فصل 1 کتاب</p>
                        </div>

                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div className="flex gap-2 ">
                            <Image src="/assets/icons/dot.svg" alt="dot" width={10} height={10}/>
                            <p className="text-[20px]">فصل 1 کتاب</p>
                        </div>

                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="mt-10  flex justify-between ">
                    <div className="flex flex-col gap-4 ">
                        <div className="flex gap-4 items-center justify-between">
                            <div className="relative">
                                <p className="absolute left-4 top-2 text-2xl">1</p>
                                <Image src="/assets/icons/goldenCircle.svg" alt="goldenCircle" width={50} height={50}
                                       className=""/>
                            </div>
                            <div className="flex flex-col gap-2 items-start ">
                                <h2 className="text-2xl">مقدمه</h2>
                                <p className="text-xl">. مقدمه ای از این دوره برای شما آماده شده است</p>
                            </div>

                        </div>
                        <div className="flex gap-4 items-center justify-between">
                            <div className="relative">
                                <Image src="/assets/icons/youtube.svg" alt="goldenCircle" width={50} height={50}
                                       className=""/>
                            </div>
                            <div className="flex flex-col gap-2 items-start ">
                                <h2 className="text-2xl">مقدمه</h2>
                                <p className="text-xl">. مقدمه ای از این دوره برای شما آماده شده است</p>
                            </div>

                        </div>
                        <div className="flex gap-4 items-center justify-between ">
                            <div className="relative">
                                <Image src="/assets/icons/youtube.svg" alt="goldenCircle" width={50} height={50}
                                       className=""/>
                            </div>
                            <div className="flex flex-col gap-2 items-start ">
                                <h2 className="text-2xl">مقدمه</h2>
                                <p className="text-xl">. مقدمه ای از این دوره برای شما آماده شده است</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="flex items-center gap-6">

                            <div className="relative">

                            <span className="absolute left-3 top-2">
                                <Image src="/assets/icons/YoutubePLay.svg"
                                       alt="Ellipse_1253" width={30}
                                       height={30}/></span>
                                <div className=" absolute top-2 right-10 "><p className="text-white text-xl">پیش
                                    نمایش</p></div>
                                <Image src="/assets/icons/RectangleRed.svg" alt="RectangleRed" width={200}
                                       height={200}/>
                            </div>


                            <div className="relative">
                            <span className="absolute left-3 top-3"><Image src="/assets/icons/SaveLogo.svg"
                                                                           alt="Ellipse_1253" width={30}
                                                                           height={30}/></span>
                                <Image src="/assets/icons/Ellipse_1253.svg" alt="Ellipse_1253" width={54} height={54}/>
                            </div>


                        </div>
                        <div className="flex items-center justify-between gap-4 mt-20">
                            <Image src="assets/icons/secured-lock.svg" alt="secured-lock" width={24} height={24}/>
                            <p className="text-2xl"> خصوصی</p>
                        </div>
                    </div>

                </div>
                <div className="mt-10  flex justify-between ">
                    <div className="flex flex-col gap-4 ">
                        <div className="flex gap-4 items-center justify-between">
                            <div className="relative">
                                <p className="absolute left-4 top-2 text-2xl">1</p>
                                <Image src="/assets/icons/goldenCircle.svg" alt="goldenCircle" width={50} height={50}
                                       className=""/>
                            </div>
                            <div className="flex flex-col gap-2 items-start ">
                                <h2 className="text-2xl">مقدمه</h2>
                                <p className="text-xl">. مقدمه ای از این دوره برای شما آماده شده است</p>
                            </div>

                        </div>
                        <div className="flex gap-4 items-center justify-between">
                            <div className="relative">
                                <Image src="/assets/icons/youtube.svg" alt="goldenCircle" width={50} height={50}
                                       className=""/>
                            </div>
                            <div className="flex flex-col gap-2 items-start ">
                                <h2 className="text-2xl">مقدمه</h2>
                                <p className="text-xl">. مقدمه ای از این دوره برای شما آماده شده است</p>
                            </div>

                        </div>
                        <div className="flex gap-4 items-center justify-between ">
                            <div className="relative">
                                <Image src="/assets/icons/youtube.svg" alt="goldenCircle" width={50} height={50}
                                       className=""/>
                            </div>
                            <div className="flex flex-col gap-2 items-start ">
                                <h2 className="text-2xl">مقدمه</h2>
                                <p className="text-xl">. مقدمه ای از این دوره برای شما آماده شده است</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <div className="flex items-center gap-6">

                            <div className="relative">

                            <span className="absolute left-3 top-2">
                                <Image src="/assets/icons/YoutubePLay.svg"
                                       alt="Ellipse_1253" width={30}
                                       height={30}/></span>
                                <div className=" absolute top-2 right-10 "><p className="text-white text-xl">پیش
                                    نمایش</p></div>
                                <Image src="/assets/icons/RectangleRed.svg" alt="RectangleRed" width={200}
                                       height={200}/>
                            </div>


                            <div className="relative">
                            <span className="absolute left-3 top-3"><Image src="/assets/icons/SaveLogo.svg"
                                                                           alt="Ellipse_1253" width={30}
                                                                           height={30}/></span>
                                <Image src="/assets/icons/Ellipse_1253.svg" alt="Ellipse_1253" width={54} height={54}/>
                            </div>


                        </div>
                        <div className="flex items-center justify-between gap-4 mt-20">
                            <Image src="assets/icons/secured-lock.svg" alt="secured-lock" width={24} height={24}/>
                            <p className="text-2xl"> خصوصی</p>
                        </div>
                    </div>

                </div>
                <div className="border-2 border-[$35a081] rounded-xl w-full bg-[#e8f6e6] p-4 items-center  ">
                    <div className="flex flex-col w-[53%] gap-4  " dir="rtl">
                        <h2 className="text-xl text-[#049447]">ضمانت بازگشت وجه ۷ روزه بدون ریسک</h2>
                        <p>در صورت عدم تطابق دوره با سرفصل‌ها، وجه پرداختی شما را بازگشت خواهیم داد.</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[31px]"> دوره های مرتبط </h2>
                    <div className="border-2 w-[100px] border-[#e8cf75] gap-10"></div>
                    <div className="flex w-full gap-4 mt-6 ">
                        <Image src="/assets/Amoozesh.png" alt="Amoozesh" width={364} height={226}/>
                        <div className="flex flex-col">
                            <h2 className="text-2xl">ساخت شامپوهای گیاهی</h2>
                            <p className="text-[#898989] tracking-wider text-[18px]">لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                                و مجله در ستون و سطرآنچنان که لازم است </p>
                            <div className="flex items-center  gap-10 mt-10">
                                <Image src="/assets/icons/drrezayi.svg" alt="drrezayi" width={30} height={30}/>
                                <p>مدرس: دکتررضایی</p>
                                <div className="rounded-lg   p-1 flex gap-2 bg-[#f7eecd]">
                                    <Image src="/assets/icons/wall-clock.svg" alt="wall-clock" width={20} height={20}/>
                                    01:57:22


                                </div>
                                700,000ریال
                                <Button title="شروع دوره" textColor="white" bgColor="rose"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full gap-4 mt-6 ">
                        <Image src="/assets/Amoozesh.png" alt="Amoozesh" width={364} height={226}/>
                        <div className="flex flex-col">
                            <h2 className="text-2xl">ساخت شامپوهای گیاهی</h2>
                            <p className="text-[#898989] tracking-wider text-[18px]">لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                                و مجله در ستون و سطرآنچنان که لازم است </p>
                            <div className="flex items-center  gap-10 mt-10">
                                <Image src="/assets/icons/drrezayi.svg" alt="drrezayi" width={30} height={30}/>
                                <p>مدرس: دکتررضایی</p>
                                <div className="rounded-lg   p-1 flex gap-2 bg-[#f7eecd]">
                                    <Image src="/assets/icons/wall-clock.svg" alt="wall-clock" width={20} height={20}/>
                                    01:57:22


                                </div>
                                700,000ریال
                                <Button title="شروع دوره" textColor="white" bgColor="rose"/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <div className="flex flex-col w-[56%]  ml-[490px] mt-5 p-2" dir="rtl">
            <h2 className="text-[31px]">نظرات و دیدگاه ها</h2>
            <div className="border-2 w-[100px] border-[#e8cf75]"></div>
        </div>
        <div className="flex flex-col w-[56%]  ml-[490px] mt-5 bg-white " dir="rtl">
            <div className="w-[90%] flex items-center justify-between p-10">
                <div className="flex gap-2  w-full ">
                    <Image src="/assets/icons/Ellipse_172.svg" alt="Ellipse_172" width={78} height={78}
                           className="rounded-full"/>
                    <div className="flex flex-col mt-2">
                        <h2 className="text-xl">علی رضا مرجانی</h2>
                        <p className="text-[#a3a1a1]">‏2 ساعت پیش</p>

                    </div>
                    <div className="flex  items-center justify-end flex-1 ">
                        <div className="flex flex-col">
                            <div className="flex gap-5 items-center justify-between">
                                <p className="text-[#80b022]"> میزان رضایت :5 از 5 </p>
                                <div className="  flex   gap-1">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <Image src="assets/icons/star.svg" width={12} height={12} alt="start"/>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-evenly mt-1 mr-24 ">
                                <div className="flex gap-2 items-center justify-center">
                                    <Image src="/assets/icons/like.svg" alt="" width={16} height={16}/>
                                    <p className="text-[#b7b7b7]">10</p>
                                </div>
                                <div className="flex gap-2 items-center justify-center">
                                    <Image src="/assets/icons/like.svg" alt="" width={16} height={16}/>
                                    <p className="text-[#b7b7b7]">10</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>


            </div>
            <div className="flex flex-col items-center justify-center p-10 tracking-wider space-x-2">
                <p> این هتل از همان بدو ورود، نگاه هر گردشگری را به چالش می‌کشد. در و دیوار و سقف، همه و همه دست به دست
                    هم داده‌اند تا به مسافر از راه رسیده یادآوری کنند که اینجا تنها مکانی برای خوابیدن و شب طولانی را به
                    صبح رساندن نیست؛ اینجا یک نمایشگاه بزرگ و هیجان‌انگیز از آثار آینه‌کاری و گره‌چینی و گچبری و تذهیب و
                    نقاشی هنرمندان این شهر است و شیوه کارشان به زمانی دور می رسد: عصر صفوی و کمی نزدیکتر: قاجار. </p>
                <div className="w-full bg-[#f8f8f8] flex flex-col mt-10 rounded-md  ">

                    <div className="flex gap-4 p-4">
                        <Image src="/assets/icons/Ellipse 173.svg" alt="Ellipse_173" width={78} height={78}
                               className="rounded-full"/>
                        <div className="flex flex-col mt-2">
                            <h2 className="text-xl">علی رضا مرجانی</h2>
                            <p className="text-[#a3a1a1]">‏2 ساعت پیش</p>
                            <p className="text-[#555555] mt-4">ممنونم از شما که نظرات خودتون را درباره ی این هتل نوشتید
                                تا همه ی دوستان </p>

                        </div>
                    </div>

                </div>
            </div>


        </div>
        <div className="flex flex-col w-[56%]  ml-[490px] mt-5 p-2" dir="rtl">
            <h2 className="text-[31px]"> ثبت نظر  </h2>
            <div className="border-2 w-[100px] border-[#e8cf75]"></div>
        </div>
        <div className=" bg-white p-10 w-[56%] mt-4 ml-[490px]">
            <div className="flex flex-col items-start justify-start" dir="rtl">
        <h2>متن پیام</h2>
                <textarea className="bg-[#fcfcfc] p-4" placeholder=" نام کاربری را وارد کنید" cols={100} rows={8} ></textarea>
            </div>
        </div>
    </main>;
};

export default page;
