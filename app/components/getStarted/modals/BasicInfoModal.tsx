"use client";
import Image from "next/image";
import React, { useState } from "react";

const sharedFacilitiesArray = [
  {
    name: "Parking Spaces",
    isSelected: false,
    icon: "/commonfacilities/1.webp",
  },
  {
    name: "Public Parking",
    isSelected: false,
    icon: "/commonfacilities/2.webp",
  },
  {
    name: "Underground Parking",
    isSelected: false,
    icon: "/commonfacilities/3.webp",
  },
  {
    name: "Lobby In Building",
    isSelected: false,
    icon: "/commonfacilities/4.webp",
  },
  {
    name: "Elevator or Lift",
    isSelected: false,
    icon: "/commonfacilities/5.webp",
  },
  {
    name: "Flooring",
    isSelected: false,
    icon: "/commonfacilities/6.webp",
  },
  {
    name: "Check other Facilites",
    isSelected: false,
    icon: "/commonfacilities/7.webp",
  },
];
interface Props {
  onClose?: () => void;
  setCommunityModal: (value: number) => void;
}
export default function BasicInfoModal(props: Props) {
  const [sharedFacilites, setSharedFacilites] = useState(sharedFacilitiesArray);

  const togglesharedFacility = (index: number) => {
    let temp = [...sharedFacilitiesArray];
    temp[index].isSelected = !temp[index].isSelected;
    setSharedFacilites(temp);
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
            <h1 className="text-[32px] font-bold">Basic Information</h1>
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
          <div className="w-[100%] mt-3">
            <p>Building name</p>
            <input
              type="text"
              placeholder="Enter Name of Your Building"
              className="border border-[gray] rounded-xl w-full h-12 px-3 mt-1"
            />
          </div>
          <div className="w-[100%] mt-3">
            <p>Address</p>
            <input
              type="text"
              placeholder="Enter Name Of Building"
              className="border border-[gray] rounded-xl w-full h-12 px-3 mt-1"
            />
          </div>
          <div className="flex w-full justify-between mt-4">
            <div className="w-[48%]">
              <p>Number of Units</p>
              <input
                type="text"
                placeholder="Enter Number of Units"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="w-[48%]">
              <p>Number of Floors</p>
              <input
                type="text"
                placeholder="Enter Number of Floors"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
          </div>
          <div className="flex w-full justify-between mt-2">
            <div className="w-[48%]">
              <p>Number of Bedrooms</p>
              <input
                type="text"
                placeholder="Enter Number of Bedrooms"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="w-[48%]">
              <p>Area</p>
              <input
                type="text"
                placeholder="Enter Area"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
          </div>

          <p className=" mt-5">Shared Facilites</p>
          <div className="flex gap-7 mt-5 flex-wrap">
            {sharedFacilites.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-[22%]">
                {item.isSelected ? (
                  <div
                    onClick={() => togglesharedFacility(index)}
                    className="border border-gray-400 bg-[#1ED760] h-5 w-5 cursor-pointer"
                  />
                ) : (
                  <div
                    onClick={() => togglesharedFacility(index)}
                    className="border border-gray-400 h-5 w-5 cursor-pointer"
                  />
                )}
                <Image
                  alt={item.name}
                  src={item.icon}
                  height={50}
                  width={50}
                  className="h-[20px] object-contain w-auto"
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-between mt-10">
            <div className="w-[100%]">
              <p>Parking Information</p>
              <input
                type="text"
                placeholder="Enter Parking Information"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center px-[3%]">
          <button
            onClick={() => props.setCommunityModal(4)}
            className="bg-[#1ED760] text-white py-3 px-3 rounded-xl mt-10 w-[20%] flex justify-center"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
