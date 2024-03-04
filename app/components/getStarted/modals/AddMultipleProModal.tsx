"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
}
export default function AddMultipleProModal(props: Props) {
  return (
    <div
      className="h-full w-full flex items-center justify-center fixed top-0 right-0"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-[calc(80vw)] bg-white p-10 text-black overflow-auto h-screen relative flex flex-col items-center">
        <Image
          onClick={props.onClose}
          src="/cross_icon.webp"
          width={40}
          height={40}
          alt="cross icon"
          className="cursor-pointer absolute top-5 right-5"
        />
        <div className="flex w-full justify-center items-center mt-14">
          <Image src="/info_icon.webp" width={70} height={70} alt="icon" />
        </div>
        <p className="font-semibold text-center mt-10">
          Add multiple properties
        </p>
        <p className="font-semibold text-center text-[#AAAAAA]">
          Either upload the csv file or add Bulk Units
        </p>

        <div className="flex flex-col justify-center w-[70%] mt-10">
          <div className="mt-3">
            <p>Enter Number of Units</p>
            <input
              type="text"
              className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
            />
          </div>
          <div className="mt-3">
            <p>Number of Beds for each Unit</p>
            <input
              type="text"
              className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
            />
          </div>
          <div className="mt-3">
            <p>Number Of Floors</p>
            <input
              type="text"
              className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
            />
          </div>
          <div className="mt-3">
            <p>Floor Number for the Units</p>
            <input
              type="text"
              className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
            />
          </div>
        </div>

        <button
          onClick={() => {}}
          className="bg-[#1ED760] text-white py-2 px-8 rounded-full mt-10 "
        >
          Submit
        </button>
      </div>
    </div>
  );
}
