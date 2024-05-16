"use client";
import LandingPageFooter from "@/app/sharedcomponents/LandingPageFooter";
import LandingPageNavbar from "@/app/sharedcomponents/LandingPageNavbar";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const array = [1, 2, 3];
export default function page() {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#ffffff]">
      <LandingPageNavbar />
      <div className="h-36" />
      <div className=" text-black px-[5%]">
        <div className="flex flex-col items-center mt-[7vh]">
          <h2 className="text-[30px] 2xl:text-[40px] font-bold text-center">
            Make Better <br />
            decisions, Together
          </h2>
          <p className="text-[#797979] text-center w-[30%] mt-10">
            Choose The perfect Plan of your needs. Always Flexible to grow
          </p>

          <div className="bg-[#d5f7e2] flex items-center rounded-full px-5 py-3 w-[250px] mt-10">
            <button
              className={` bg-[#1ED760] rounded-full w-full py-2 text-white`}
            >
              Explore Our Products
            </button>
          </div>
        </div>
        <div className="mt-[5vh] flex flex-col items-center">
          <Image
            src={"/landingpage/frame_1618868275.webp"}
            width={1000}
            height={500}
            alt="image"
            className="w-[70%] h-auto object-contain"
          />
        </div>
        <div className="flex flex-col items-center mt-20">
          <h2 className="text-[30px] 2xl:text-[40px] font-bold text-center">
            Feature One
          </h2>
          <p className="text-[#797979] text-center w-[30%] mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="flex justify-between w-full mt-10">
            {array.map((item, index) => (
              <div key={index} className="w-[30%] flex-col flex gap-4">
                <Image
                  src={"/landingpage/frame_1618868275.webp"}
                  width={1000}
                  height={500}
                  alt="image"
                  className="w-full h-auto object-contain"
                />
                <p className="text-[20px] font-bold">Write it down</p>
                <p className="text-[#797979]">
                  Explore the features of our product.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <p className="text-[#1ED760] text-center">Explore</p>
          <h2 className="text-[30px] 2xl:text-[40px] font-bold text-center">
            Answers at Your <br />
            Fingertips
          </h2>
          <p className="text-[#797979] text-center w-[30%] mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="flex justify-between w-full mt-10">
            {array.map((item, index) => (
              <div key={index} className="w-[30%] flex-col flex gap-4">
                <Image
                  src={"/landingpage/frame_1618868275.webp"}
                  width={1000}
                  height={500}
                  alt="image"
                  className="w-full h-auto object-contain"
                />
                <p className="text-[20px] font-bold">Write it down</p>
                <p className="text-[#797979]">
                  Explore the features of our product.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1ED760] rounded-xl flex flex-col items-center p-10 text-white  mt-10">
          <p>Explore</p>
          <p className="text-[30px] 2xl:text-[35px]">
            Set Goals. See <br />
            metrics move.
          </p>
          <p className="w-[40%] mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <Image
            src={"/landingpage/frame_1618868275.webp"}
            width={1000}
            height={500}
            alt="image"
            className="w-[50%] h-auto object-contain mt-10"
          />
          <button className="text-[#1ED760] rounded-full bg-white px-10 py-2 mt-10">
            Explore Our Product
          </button>
        </div>
        <div className="my-10 flex flex-col items-center">
          <p className="text-[30px] 2xl:text-[35px]">
            Unlock truth for everyone
          </p>
          <button className="text-white rounded-full bg-[#1ED760] px-10 py-2 mt-5">
            Explore Our Product
          </button>
        </div>
        <LandingPageFooter />
      </div>
    </div>
  );
}
