"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose: () => void;
}

export default function AccountCreatedModal(props: Props) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed left-0 top-0 text-black z-10 flex items-center justify-center"
    >
      <div className="w-[calc(20vw)] h-[calc(25vh)] bg-white text-black z-10 relative rounded-3xl px-5">
        <div className="flex flex-col justify-center items-center mt-8">
          <Image src="/checkcircle.webp" alt="icon" height={50} width={50} />
          <p className="text-black text-lg my-3">
            Account Successfully Created
          </p>
          <p className="text-[#AAAAAA] text-sm text-center">
            This record can not be restore. Do you want to edit?
          </p>
        </div>
        <div className="w-full flex gap-3 justify-center px-8 mb-5 absolute bottom-0 right-0">
          <button className="border-[#1ED760] border text-black text-base w-[45%] py-2 rounded-3xl">
            Edit
          </button>
          <button
            className="bg-[#1ED760] text-white text-base w-[45%] py-2 rounded-3xl"
            onClick={props.onClose}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
