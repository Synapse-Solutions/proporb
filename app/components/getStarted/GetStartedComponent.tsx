import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React from "react";

interface Props {}
export default function GetStartedComponent(props: Props) {
  return (
    <div>
      <Sidebar />
      <div className="w-[calc(85vw)] ml-[calc(15vw)] h-[calc(100vh)] p-[5%]">
        <Navbar />

        <div className="flex w-full my-14">
          <div className="w-[70%] py-8">
            <p className="text-black text-3xl font-bold">Get Started</p>
            <p className="text-[#797979] text-base my-5">
              We're thrilled to have you join our property management family.
              Let's kick off this exciting journey together. With just a few
              simple steps, you'll be well on your way to becoming a property
              management pro!
            </p>
            <div className="flex justify-start items-center gap-3 my-4">
              <div className="bg-[#DDDDDD] rounded-3xl h-4 w-[50%]">
                <div className="bg-[#1ED760] rounded-3xl w-[18%] h-full"></div>
              </div>
              <p className="text-black">18%</p>
            </div>
          </div>
          <div className="w-[30%] bg-white rounded-xl px-6 py-8">
            <div className="flex gap-4 items-center">
              <p className="text-4xl">👋</p>
              <p className="text-2xl text-black font-bold">
                Welcome to Property Management system
              </p>
            </div>
            <p className="text-[#797979] text-base my-4">
              If you need any help, we’re here to help you!
            </p>
            <button className="bg-[#1ED760] text-white text-bold rounded-3xl py-3 w-full flex justify-center items-center mt-5">
              Ask us anything
            </button>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
