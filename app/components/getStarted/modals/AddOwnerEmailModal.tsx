"use client";
import Image from "next/image";
import React, { useState } from "react";
import PropertyAddedModal from "./PropertyAddedModal";
import { postApiWithToken } from "@/app/utils/AppApi";

interface Props {
  setIsOwenerEmailModalShow: (value: boolean) => void;
  ownerEmail?: any;
  setOwnerEmail?: any;
}
export default function AddOwnerEmailModal(props: Props) {
  const [isAccountCompleted, setIsAccountCompleted] = useState(false);

  return (
    <div
      className="h-full w-full flex items-center justify-center fixed top-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-[calc(40vw)] bg-white p-10 text-black overflow-auto h-auto rounded-md">
        <div className="flex w-full justify-between items-center">
          <div>
            <p className="text-[25px] font-bold text-black">
              Enter Owner Email
            </p>
            <div className="bg-[#1ED760] h-1 w-[60px]" />
          </div>
          <Image
            onClick={() => props.setIsOwenerEmailModalShow(false)}
            src="/cross_icon.webp"
            width={40}
            height={40}
            alt="cross icon"
            className="cursor-pointer"
          />
        </div>
        <div className="mt-5">
          <p className="text-[20px] text-black">Owner Email</p>
          <input
            type="text"
            value={props.ownerEmail}
            onChange={(e) => props.setOwnerEmail(e.target.value)}
            className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
          />
        </div>

        <div className="w-full flex justify-between mt-10">
          <button
            onClick={() => props.setIsOwenerEmailModalShow(false)}
            className="border-[#1ED760] border text-black text-base font-semibold px-8 py-2 rounded-3xl"
          >
            Cancel
          </button>
          <button className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl">
            Continue
          </button>
        </div>
      </div>
      {isAccountCompleted && (
        <PropertyAddedModal
          setIsPropertyAddedModal={setIsAccountCompleted}
          title="Account created successfully"
        />
      )}
    </div>
  );
}
