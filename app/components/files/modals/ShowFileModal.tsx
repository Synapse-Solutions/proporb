import Image from "next/image";
import React from "react";

export default function ShowFileModal({ onClose }: { onClose: any }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="w-[40%]  bg-white border border-gray-400 rounded-xl  p-10 ">
        <div className="flex justify-between ">
          <div></div>
          <Image
            onClick={onClose}
            src="/cross_icon.webp"
            alt="Icon"
            width={50}
            height={50}
            className="cursor-pointer object-contain"
          />
        </div>
        <div className="flex justify-between  w-full mt-10">
          <p className="text-[14px] text-[#808191]">27 June, 2017</p>
          <div className="flex gap-5 items-center">
            <Image
              src="/tag.webp"
              alt="Edit"
              width={20}
              height={20}
              className="h-[30px] w-auto object-contain"
            />
            <p>Tags</p>
          </div>
        </div>
        <p>Go to Town Hall</p>
        <p className="text-[15px] text-[#808191]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <Image
          src="/house.webp"
          alt="File"
          width={1000}
          height={1000}
          className="w-full h-auto mt-10"
        />
      </div>
    </div>
  );
}
