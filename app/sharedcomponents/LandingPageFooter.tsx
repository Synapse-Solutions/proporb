import Image from "next/image";
import React from "react";

export default function LandingPageFooter() {
  return (
    <div className="bg-[#191414]  text-white rounded-xl mb-[5vh] pb-[5vh] w-full">
      <div className="flex px-20 py-10 text-white  items-center">
        <div className="w-[45%]">
          <Image
            src={"/landingpage/footerlogo.webp"}
            width={100}
            height={100}
            alt="logo"
          />
          <h3 className="text-[30px] mt-10 font-semibold">
            Your smart{" "}
            <span className="text-[#1ED760]">
              {" "}
              Property <br /> Management
            </span>{" "}
            System
          </h3>
        </div>
        <div className="w-[45%] flex justify-between">
          <div className="flex flex-col gap-4">
            <h4 className="text-[20px]">Company</h4>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[20px]">Features</h4>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[20px]">Contact Us</h4>
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
        </div>
      </div>
      <div className="w-[calc(90vw)] h-[1px] bg-white  mb-4"></div>
      <p className="text-center">Copyright 2024 All Rights Reserved.</p>
    </div>
  );
}
