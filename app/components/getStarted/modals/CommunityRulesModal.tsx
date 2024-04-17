"use client";
import Image from "next/image";
import React, { useState } from "react";

const petPolicyArray = [
  {
    name: "Pet Allowed",
    ActiveIcon: "/pet_active.webp",
    InactiveIcon: "/pet_inactive.webp",
  },
  {
    name: "Pet Not Allowed",
    ActiveIcon: "/pet_active.webp",
    InactiveIcon: "/pet_inactive.webp",
  },
];
const commonFacilitiesArray = [
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
    name: "Elevator Or Lift",
    isSelected: false,
    icon: "/commonfacilities/5.webp",
  },
  {
    name: "Flooring",
    isSelected: false,
    icon: "/commonfacilities/6.webp",
  },
  {
    name: "Check Other Facilites",
    isSelected: false,
    icon: "/commonfacilities/7.webp",
  },
];

const apartmentFacilitiesArray = [
  {
    name: "Balloted",
    isSelected: false,
    icon: "/apartmenfacilities/1.webp",
  },
  {
    name: "Sewerage",
    isSelected: false,
    icon: "/apartmenfacilities/2.webp",
  },
  {
    name: "Electricity",
    isSelected: false,
    icon: "/apartmenfacilities/3.webp",
  },
  {
    name: "Water Supply",
    isSelected: false,
    icon: "/apartmenfacilities/4.webp",
  },
  {
    name: "Boundary Wall",
    isSelected: false,
    icon: "/apartmenfacilities/5.webp",
  },
  {
    name: "Check Other Facilites",
    isSelected: false,
    icon: "/apartmenfacilities/6.webp",
  },
];

interface Props {
  onClose?: () => void;
  setCommunityModal: (value: number) => void;
  setIsSuccessModalShow: (value: boolean) => void;
}
export default function CommunityRulesModal(props: Props) {
  const [petPolicyType, setpetPolicyType] = useState(0);
  const [commonFacilities, setcommonFacilities] = useState(
    commonFacilitiesArray
  );
  const [apartmentFacilities, setapartmentFacilities] = useState(
    apartmentFacilitiesArray
  );
  const uploadPhotoRef = React.useRef<HTMLInputElement>(null);

  const onClickuploadPhoto = () => {
    uploadPhotoRef.current?.click();
  };

  const toggleSelected = (index: number) => {
    let temp = [...commonFacilitiesArray];
    temp[index].isSelected = !temp[index].isSelected;
    setcommonFacilities(temp);
  };

  const toggleApartmentSelected = (index: number) => {
    let temp = [...apartmentFacilitiesArray];
    temp[index].isSelected = !temp[index].isSelected;
    setapartmentFacilities(temp);
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
            <h1 className="text-[32px] font-bold">
              Community Rules & Regulations
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

        <div className="w-full mt-5 ">
          <p>Code Of Conduct</p>
          <div
            onClick={onClickuploadPhoto}
            className="flex border border-[#98A2B3] mt-2 border-dashed justify-center rounded-xl items-center px-5 py-3 w-full"
          >
            <button className="bg-[#1ED760] rounded-xl flex items-center gap-2 text-white px-5 py-3 ml-7">
              <input type="file" className="hidden" ref={uploadPhotoRef} />
              <Image
                src={"/uploadsimple.webp"}
                alt="upload"
                height={50}
                width={50}
                className="h-[30px] object-contain w-[30px]"
              />
              <p> Upload</p>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-semibold">Common Facilities</h3>
          <div className="flex gap-7 mt-5 flex-wrap">
            {commonFacilities.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-[22%]">
                {item.isSelected ? (
                  <div
                    onClick={() => toggleSelected(index)}
                    className="border border-gray-400 bg-[#1ED760]  h-5 w-5 cursor-pointer"
                  />
                ) : (
                  <div
                    onClick={() => toggleSelected(index)}
                    className="border border-gray-400  h-5 w-5 cursor-pointer"
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
          <h3 className="font-semibold mt-10">Apartment Facilities</h3>
          <div className="flex gap-7 mt-5 flex-wrap">
            {apartmentFacilities.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-[22%]">
                {item.isSelected ? (
                  <div
                    onClick={() => toggleApartmentSelected(index)}
                    className="border border-gray-400 bg-[#1ED760] h-5 w-5 cursor-pointer"
                  />
                ) : (
                  <div
                    onClick={() => toggleApartmentSelected(index)}
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
        </div>
        <div className="w-full">
          <h3 className="font-semibold mt-10">Pet Policy</h3>
          <div className="flex gap-7 justify-start mt-10">
            {petPolicyArray.map((item, index) => (
              <button
                key={index}
                onClick={() => setpetPolicyType(index)}
                className={`border ${
                  petPolicyType === index
                    ? "border-[#1ED760]"
                    : "border-gray-400"
                } p-5 flex flex-col items-center justify-center rounded-lg  px-20 relative`}
              >
                {petPolicyType === index && (
                  <Image
                    src={"/completedIcon.webp"}
                    alt="tick"
                    height={100}
                    width={100}
                    className="absolute top-3 right-[15px] h-[40px] object-contain w-[40px]"
                  />
                )}
                <Image
                  alt={item.name}
                  src={
                    petPolicyType === index
                      ? item.ActiveIcon
                      : item.InactiveIcon
                  }
                  height={100}
                  width={100}
                />
                <p className="mt-3 text-black">{item.name}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center px-[3%]">
          <button
            onClick={() => {
              props.setCommunityModal(3);
              // props.setIsSuccessModalShow(true);
            }}
            className="bg-[#1ED760] text-white py-3 px-3 rounded-xl mt-10 w-[25%] flex justify-center"
          >
            Review & Submit
          </button>
        </div>
      </div>
    </div>
  );
}
