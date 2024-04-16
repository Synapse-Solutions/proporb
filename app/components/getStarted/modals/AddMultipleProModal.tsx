"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
}
export default function AddMultipleProModal(props: Props) {
  const [floors, setFloors] = useState([
    {
      floor: 1,
      unit: 2,
    },
  ]);

  const onAddFloor = () => {
    setFloors((prev) => [
      ...prev,
      {
        floor: prev.length + 1,
        unit: prev.length + 2,
      },
    ]);
  };
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
            <h1 className="text-[32px] font-bold">
              ADD MULTIPLE FLOOR & UNITS
            </h1>
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

        <div className="w-full mt-10 overflow-auto h-[75%] ">
          {floors.map((floor, index) => (
            <div key={index} className="flex w-full gap-10 mt-5">
              <div className="w-1/2">
                <p>Floor Number {index + 1}</p>
                <input
                  type="text"
                  className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
                />
              </div>
              <div className="w-1/2">
                <p>Unit Number {index + 1}</p>
                <input
                  type="text"
                  className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-between px-[3%]">
          <button
            onClick={onAddFloor}
            className="bg-[#1ED760] text-white py-3 px-3 rounded-xl mt-10 "
          >
            Add More Floors
          </button>
          <button
            onClick={() => {}}
            className="bg-[#1ED760] text-white py-3 px-3 rounded-xl mt-10 "
          >
            Equally Divide Number of Units with Number of floors
          </button>
          <button
            onClick={props.onClose}
            className="bg-[#1ED760] text-white py-3 px-3 rounded-xl mt-10 "
          >
            Skip For Now
          </button>
        </div>
      </div>
    </div>
  );
}
