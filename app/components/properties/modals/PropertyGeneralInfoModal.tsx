"use client";
import { on } from "events";
import Image from "next/image";
import React, { useState } from "react";
import GeneralInfoSidebar from "./GeneralInfoSidebar";
import UploadPhotoBox from "@/app/sharedcomponents/UploadPhotoBox";

let properties = [
  {
    name: "House",
  },
  {
    name: "Shop",
  },
  {
    name: "Warehouse",
  },
  {
    name: "Factory",
  },
  {
    name: "Building",
  },
  {
    name: "Other",
  },
];
let propertyTypes = [
  {
    name: "Residential Property",
    ActiveIcon: "/green_outlilne_home.webp",
    InactiveIcon: "/gray_outline_home.webp",
  },
  {
    name: "Commercial Property",
    ActiveIcon: "/property_green.webp",
    InactiveIcon: "/property_gray.webp",
  },
];
let commercialProperties = [
  {
    name: "Office",
  },
  {
    name: "Rental Space",
  },
  {
    name: "Buildings",
  },
  {
    name: "Warehouse",
  },
  {
    name: "Factory",
  },
  {
    name: "Restaurant",
  },
  {
    name: "Others",
  },
];
const amenities = [
  {
    name: "Other",
    isSelected: false,
  },
  {
    name: "Availability 24 Hours",
    isSelected: false,
  },
  {
    name: "Accent Walls",
    isSelected: false,
  },
  {
    name: "Basketball Court",
    isSelected: false,
  },
  {
    name: "Bilingual",
    isSelected: false,
  },
  {
    name: "Boat Docks",
    isSelected: false,
  },
  {
    name: "Business Center",
    isSelected: false,
  },
  {
    name: "Car Wash Area",
    isSelected: false,
  },
  {
    name: "Child Care",
    isSelected: false,
  },
  {
    name: "Club Discount",
    isSelected: false,
  },
  {
    name: "Club House",
    isSelected: false,
  },
  {
    name: "Conference Room",
    isSelected: false,
  },
  {
    name: "Availability 24 Hours",
    isSelected: false,
  },
  {
    name: "Accent Walls",
    isSelected: false,
  },
  {
    name: "Boat Docks",
    isSelected: false,
  },
  {
    name: "Other",
    isSelected: false,
  },
];

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

interface Props {
  onClose?: () => void;
}
export default function PropertyGeneralInfoModal({ onClose }: Props) {
  // ******* States *******
  const [screenName, setScreenName] = useState("general information");
  const [propertyType, setPropertyType] = useState(0);
  const [selectedPropertyName, setSelectedPropertyName] = useState("");
  const [amenitedArray, setAmenitedArray] = useState(amenities);

  const toggleSelected: any = (index: number) => {
    let temp = [...amenities];
    temp[index].isSelected = !temp[index].isSelected;
    setAmenitedArray(temp);
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="w-[90%] 2xl:w-[calc(80vw)] h-[calc(90vh)]  bg-white border border-black  flex ">
        <GeneralInfoSidebar
          activeTab={screenName}
          setActiveTab={setScreenName}
        />
        <div className="w-[75%] 2xl:w-[80%]  relative h-full">
          {screenName === "General Information".toLocaleLowerCase() && (
            <div className="text-black w-full px-10 pt-10 h-full overflow-auto ">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">General Information</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  height={50}
                  className="cursor-pointer object-contain"
                />
              </div>
              <div className="flex gap-5 items-center mt-5">
                <p>This information will be used in your online listings.</p>
              </div>
              <div className="mt-10 space-y-2">
                <div className="w-[100%]">
                  <p>Property Name</p>
                  <input
                    type="text"
                    placeholder="Enter your property name"
                    required
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
                <div className="w-[100%]">
                  <p>Street</p>
                  <input
                    type="text"
                    placeholder="Enter house and street number"
                    required
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-5 gap-3">
                <div className="w-[47%]">
                  <p>City</p>
                  <input
                    type="text"
                    placeholder="Enter City Name"
                    required
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
                <div className="w-[47%]">
                  <p>Province</p>
                  <input
                    required
                    type="text"
                    placeholder="Enter Province Name"
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
                <div className="w-[47%]">
                  <p>Country</p>
                  <input
                    type="text"
                    placeholder="Enter Country Name"
                    required
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
                <div className="w-[47%]">
                  <p>ZIP Code</p>
                  <input
                    required
                    type="text"
                    placeholder="Enter ZIP Code"
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
              </div>
              <div className="mt-5">
                <p>Description</p>
                <textarea
                  name=""
                  id=""
                  rows={10}
                  className="border border-black rounded-lg w-full pl-3 mt-4"
                ></textarea>
              </div>
              <div className="h-24" />
            </div>
          )}
          {screenName === "photos" && (
            <div className="text-black w-full px-10 pt-10 overflow-auto h-full">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Photos</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
              </div>

              <p className="text-[#656D76] mt-5">
                Upload, rearrange, or delete photos that appear in your online
                listings.
              </p>
              <div className="flex justify-center mt-10">
                <UploadPhotoBox />
              </div>
              <div className="h-24" />
            </div>
          )}
          {screenName === "property type" && (
            <div className="text-black w-full px-10 pt-10 overflow-auto h-full">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Property Type</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  className="cursor-pointer"
                  height={50}
                />
              </div>
              <p className="text-[#656D76] mt-5">
                Upload, rearrange, or delete photos that appear in your online
                listings.
              </p>

              <div className="mt-5">
                <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                  Which kind of property do you manage?
                </p>
                <div className="flex gap-5 mt-5">
                  {propertyTypes.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setPropertyType(index)}
                      className={`border ${
                        propertyType === index
                          ? "border-[#1ED760]"
                          : "border-gray-400"
                      } p-5 flex flex-col items-center justify-center rounded-lg w-[17%]`}
                    >
                      <Image
                        alt={item.name}
                        src={
                          propertyType === index
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
              <div className="mt-10">
                <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                  Which type best describes your property?
                </p>
                <div className="flex flex-wrap items-center gap-5 mt-5">
                  {(propertyType === 0
                    ? properties
                    : commercialProperties
                  )?.map((item, index) => (
                    <button
                      key={index}
                      style={{
                        backgroundColor:
                          item.name === selectedPropertyName
                            ? "#E8FBEF"
                            : "white",
                      }}
                      onClick={() => setSelectedPropertyName(item.name)}
                      className={`border ${
                        item.name === selectedPropertyName
                          ? "border-[#1ED760]"
                          : "border-gray-500"
                      } px-4 p-2 rounded-xl flex gap-3 items-center`}
                    >
                      <Image
                        src={"/mdi_house.webp"}
                        alt="Icon"
                        width={30}
                        height={30}
                      />
                      <p className="text-black">{item.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-24" />
            </div>
          )}
          {screenName === "amenities" && (
            <div className="text-black w-full px-10 pt-10 overflow-auto h-full">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Amenities</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  className="cursor-pointer"
                  height={50}
                />
              </div>
              <p className="text-[#656D76] mt-5">
                Please select which amenities are included in this property.
              </p>

              <div className="flex gap-7 justify-between mt-10 flex-wrap">
                {amenitedArray.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 w-[25%]">
                    {item.isSelected ? (
                      <div
                        onClick={() => toggleSelected(index)}
                        className="border border-gray-400 bg-[#1ED760] rounded h-5 w-5 cursor-pointer"
                      />
                    ) : (
                      <div
                        onClick={() => toggleSelected(index)}
                        className="border border-gray-400 rounded h-5 w-5 cursor-pointer"
                      />
                    )}
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>

              <div className="h-24" />
            </div>
          )}
          {screenName === "pet policy" && (
            <div className="text-black w-full px-10 pt-10 overflow-auto h-full">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Amenities</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  className="cursor-pointer"
                  height={50}
                />
              </div>
              <p className="text-[#656D76] mt-5">
                Please select which amenities are included in this property.
              </p>

              <div className="flex gap-7 justify-center mt-10">
                {petPolicyArray.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setPropertyType(index)}
                    className={`border ${
                      propertyType === index
                        ? "border-[#1ED760]"
                        : "border-gray-400"
                    } p-5 flex flex-col items-center justify-center rounded-lg  px-20 relative`}
                  >
                    {propertyType === index && (
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
                        propertyType === index
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

              <div className="h-24" />
            </div>
          )}
          <div className="flex justify-between absolute bottom-0 pb-10 bg-white pt-3 w-[100%] left-0 px-[calc(3vw)] ">
            <button className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full">
              Back
            </button>
            <button
              onClick={() => setScreenName("address")}
              className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
