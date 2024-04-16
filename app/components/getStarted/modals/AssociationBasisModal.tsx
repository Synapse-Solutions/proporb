"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
  setCommunityModal: (value: number) => void;
}
export default function AssociationBasisModal(props: Props) {
  const [boardMembers, setBoardMembers] = useState([
    {
      name: "",
    },
  ]);

  const onAddMembers = () => {
    setBoardMembers((prev) => [
      ...prev,
      {
        name: "",
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
      <div className="w-[calc(80vw)] bg-white py-10 px-[3%] text-black overflow-auto h-[92vh] relative flex flex-col items-center">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-[32px] font-bold">Association Basis</h1>
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

        <div className="w-full mt-5 ">
          <div className="flex w-full justify-between">
            <div className="w-[48%]">
              <p>Association Name </p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="w-[48%]">
              <p>Association Type </p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
          </div>
          <div className="flex w-full justify-between mt-2">
            <div className="w-[48%]">
              <p>Association Area</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="w-[48%]">
              <p>Association City</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-[32px] font-bold">Association Leadership</h1>
            <div className="h-[2px] bg-[#1ED760] w-[100px]" />
          </div>
          <p className=" mt-5">Board Members</p>
          <div className="flex w-full flex-wrap justify-between">
            {boardMembers.map((member, index) => (
              <div key={index} className="w-[48%]">
                <input
                  type="text"
                  placeholder="Enter Name of Board Members"
                  className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
                />
              </div>
            ))}
          </div>
          <button
            onClick={onAddMembers}
            className="bg-[#1ED760] text-white py-3 px-3 rounded-xl mt-10 "
          >
            Add More Members
          </button>
          <div className="flex w-full justify-between mt-5">
            <div className="w-[48%]">
              <p>Association Area</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="w-[48%]">
              <p>Association City</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center px-[3%]">
          <button
            onClick={() => props.setCommunityModal(2)}
            className="bg-[#1ED760] text-white py-3 px-3 rounded-xl mt-10 w-[20%] flex justify-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
