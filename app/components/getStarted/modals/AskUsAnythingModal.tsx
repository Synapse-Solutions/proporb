"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
}
export default function AskUsAnythingModal(props: Props) {
  return (
    <div
      className="h-full w-full flex items-center justify-center fixed top-0 right-0"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-[calc(80vw)] bg-white py-10 px-[3%] text-black overflow-auto h-[90vh] relative flex flex-col items-center">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-[32px] font-bold">Ask Us Anything</h1>
            <div className="h-[2px] bg-[#1ED760] w-[100px]" />
          </div>
          <Image
            onClick={props.onClose}
            src="/cross_icon.webp"
            alt="Icon"
            width={50}
            height={50}
            className="cursor-pointer object-contain"
          />
        </div>
        <div className="flex w-full justify-between px-[10%] mt-20">
          <div className="w-[1/2] flex flex-col justify-between">
            <div className="flex gap-4 items-start">
              <Image
                src="/clockuser.webp"
                alt="Icon"
                width={100}
                height={100}
                className="h-[50px] object-contain w-auto"
              />
              <div>
                <p className="text-[20px] font-medium">
                  Customer Service hours
                </p>
                <p className="text-[16px] font-thin">Monday - Saturday</p>
                <p className="text-[16px] font-thin">8am - 6pm PK</p>
              </div>
            </div>
            <div className="flex gap-4 items-start ">
              <Image
                src="/phonecall.webp"
                alt="Icon"
                width={100}
                height={100}
                className="h-[50px] object-contain w-auto"
              />
              <div>
                <p className="text-[20px] font-medium">Phone Support</p>
                <p className="text-[16px] font-thin">+92 305 8689882</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image
                src="/envelopesimple.webp"
                alt="Icon"
                width={100}
                height={100}
                className="h-[50px] object-contain w-auto"
              />
              <div>
                <p className="text-[20px] font-medium">Email Support</p>
                <p className="text-[16px] font-thin">
                  Support-probnob@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Image
                src="/desktop.webp"
                alt="Icon"
                width={100}
                height={100}
                className="h-[50px] object-contain w-auto"
              />
              <div>
                <p className="text-[20px] font-medium">Our Website</p>
                <p className="text-[16px] font-thin">www.Probnob.com</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <p className="text-center font-semibold text-[20px]">
              Quick Contact
            </p>
            <input
              type="text"
              placeholder="Name*"
              className="border-2 border-[#E4E7EC] w-full p-2 rounded my-2"
            />
            <input
              type="text"
              placeholder="Email*"
              className="border-2 border-[#E4E7EC] w-full p-2 rounded my-2"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="border-2 border-[#E4E7EC] w-full p-2 rounded my-2"
            ></textarea>
            <button
              onClick={props.onClose}
              className="bg-[#1ED760] text-white py-3 px-3 rounded-xl mt-10 "
            >
              Submit
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Image
            src="/live_chat_icon.webp"
            alt="Map"
            width={200}
            height={200}
            className="w-[80px] object-contain mt-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
