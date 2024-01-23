"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React, { useState } from "react";

interface Props {}
export default function GetStartedComponent(props: Props) {
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);

  return (
    <div>
      <Sidebar />
      <div className="w-[calc(85vw)] ml-[calc(15vw)] h-[calc(100vh)] p-[4%] overflow-x-hidden">
        <Navbar />

        <div className="flex w-full my-12">
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
          <div className="bg-white rounded-xl overflow-hidden my-5">
            <div className="flex justify-between p-5">
              <div className="w-[50%] flex gap-8 items-center justify-start">
                <Image
                  src="/thumbsUpIconGreen.webp"
                  alt="Icon"
                  height={50}
                  width={50}
                />
                <p className="text-black font-bold text-xl">
                  Subscribe to Property Management System
                </p>
                <Image
                  src="/dropDownArrowBlack.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                />
              </div>
              <div className="w-[50%] flex gap-3 justify-end items-center">
                <Image
                  src="/completedIcon.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                />
                <p className="text-[#1ED760] font-medium text-base">
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden my-5">
            <div className="flex justify-between p-5">
              <div className="w-[50%] flex gap-8 items-center justify-start">
                <Image
                  src="/scheduleIconGreen.webp"
                  alt="Icon"
                  height={50}
                  width={50}
                />
                <p className="text-black font-bold text-xl">
                  Schedule an Onboarding session
                </p>
                <Image
                  src="/dropDownArrowBlack.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                />
              </div>
              <div className="w-[50%] flex gap-5 justify-end items-center"></div>
            </div>
          </div>
          <div
            className="bg-white rounded-xl overflow-hidden my-5"
            onClick={() => {
              setIsCompanyInfoOpen(!isCompanyInfoOpen);
            }}
          >
            <div className="flex justify-between p-5">
              <div className="w-[50%] flex gap-8 items-center justify-start">
                <Image
                  src="/companyInfoIconGreen.webp"
                  alt="Icon"
                  height={50}
                  width={50}
                />
                <p className="text-black font-bold text-xl">
                  Add your Company Information
                </p>
                <Image
                  src="/dropDownArrowBlack.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                  style={
                    isCompanyInfoOpen
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                />
              </div>
              <div className="w-[50%] flex gap-5 justify-end items-center"></div>
            </div>
            {isCompanyInfoOpen && (
              <div className="p-6">
                <div className="bg-[#D8D8D8] w-full h-[1px]"></div>
                <div className="flex justify-between items-center py-5">
                  <div className="w-[50%]">
                    <p className="text-[#797979] max-w-[500px]">
                      Customize your company settings and add your company name,
                      contact into, and more
                    </p>
                    <button className="bg-[#1ED760] text-white text-bold rounded-3xl py-3 px-2 w-52 flex justify-center items-center mt-5">
                      Add Company info
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <Image
                      src="/youtubeThumbnail.webp"
                      alt="Image"
                      height={150}
                      width={280}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white rounded-xl overflow-hidden my-5">
            <div className="flex justify-between p-5">
              <div className="w-[50%] flex gap-8 items-center justify-start">
                <Image
                  src="/propertyIconGreen.webp"
                  alt="Icon"
                  height={50}
                  width={50}
                />
                <p className="text-black font-bold text-xl">
                  Add your Properties
                </p>
                <Image
                  src="/dropDownArrowBlack.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                />
              </div>
              <div className="w-[50%] flex gap-5 justify-end items-center">
                <p className="text-[#1ED760] font-medium text-base">1/1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
