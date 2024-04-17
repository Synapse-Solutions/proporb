"use client";
import Image from "next/image";
import React, { useState } from "react";

const array = [1, 2, 3, 4, 5, 6, 7, 8];
interface Props {
  onClose?: () => void;
  setCommunityModal: (value: number) => void;
}
export default function UnitConfigurationModal(props: Props) {
  return (
    <div
      className="h-full w-full flex items-center justify-center fixed top-0 right-0"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-[calc(80vw)] bg-white py-10 px-[3%] text-black h-[92vh] relative flex flex-col items-center">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-[32px] font-bold">Unit Configuration</h1>
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
        <div className="w-full mt-10 h-[80%] overflow-auto">
          <div className="w-full flex items-center border-b-2 border-[#E4E7EC] p-3">
            <p style={{ flex: 1 }} className="text-center">
              Unique ID
            </p>
            <p style={{ flex: 1 }} className="text-center">
              Unit Name
            </p>
            <p style={{ flex: 1 }} className="text-center">
              Floors
            </p>
            <p style={{ flex: 1 }} className="text-center">
              Number Of Bedrooms
            </p>
            <p style={{ flex: 1 }} className="text-center">
              Area
            </p>
          </div>

          {array.map((item, index) => (
            <div key={index} className="w-full flex items-center p-3">
              <div style={{ flex: 1 }} className="flex justify-center">
                <p className="text-center bg-[#E4E7EC] text-[#000] py-2 w-[130px] rounded-md">
                  9987654
                </p>
              </div>
              <div style={{ flex: 1 }} className="flex justify-center">
                <p className="text-center bg-[#E4E7EC] text-[#000] py-2 w-[130px] rounded-md">
                  XYZ
                </p>
              </div>
              <div style={{ flex: 1 }} className="flex justify-center">
                <p className="text-center bg-[#E4E7EC] text-[#000] py-2 w-[130px] rounded-md">
                  2
                </p>
              </div>
              <div style={{ flex: 1 }} className="flex justify-center">
                <p className="text-center bg-[#E4E7EC] text-[#000] py-2 w-[130px] rounded-md">
                  3
                </p>
              </div>
              <div style={{ flex: 1 }} className="flex justify-center">
                <p className="text-center bg-[#E4E7EC] text-[#000] py-2 w-[130px] rounded-md">
                  XYZ
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center px-[3%]">
          <button
            onClick={() => props.setCommunityModal(0)}
            className="bg-[#1ED760] text-white py-3 px-3 rounded-xl mt-10 w-[20%] flex justify-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
