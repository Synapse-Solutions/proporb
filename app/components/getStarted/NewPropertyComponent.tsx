"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React, { useState } from "react";

let tabs = [
  {
    number: 1,
    name: "Type",
  },
  {
    number: 2,
    name: "Owner Information",
  },
  {
    number: 3,
    name: "Address",
  },
  {
    number: 4,
    name: "Units",
  },
  {
    number: 5,
    name: "Bank Accounts",
  },
  {
    number: 6,
    name: "Reserve funds",
  },
];

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
  {
    name: "Student Housing",
    ActiveIcon: "/property_green.webp",
    InactiveIcon: "/property_gray.webp",
  },
  {
    name: "Vocational Rentals",
    ActiveIcon: "/property_green.webp",
    InactiveIcon: "/property_gray.webp",
  },
  {
    name: "Community association",
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
const studentProperties = [
  {
    name: "Dormitories",
  },
  {
    name: "Apartment",
  },
  {
    name: "Housing",
  },
  {
    name: "Private House",
  },
  {
    name: "Single Room",
  },
  {
    name: "Others",
  },
];
const vocationalProperties = [
  {
    name: "Resorts",
  },
  {
    name: "Vocation Homes",
  },
  {
    name: "Bed & Breakfast",
  },
  {
    name: "Others",
  },
];
const communityProperties = [
  {
    name: "Residential Homes",
  },
  {
    name: "Apartments",
  },
  {
    name: "Villas",
  },
  {
    name: "Others",
  },
];
export default function NewPropertyComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [propertyType, setPropertyType] = useState(0);
  const [selectedPropertyName, setSelectedPropertyName] = useState("Home");
  const [unitsArray, setUnitsArray] = useState([{ beds: 0 }]);

  const onAddSingleUnit = () => {
    setUnitsArray((prev) => [...prev, { beds: 0 }]);
  };
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar />

          <div className="mt-10">
            <p className="text-[25px] font-bold">New Property</p>
            <div className="bg-white rounded-xl p-6 mt-5">
              <div className="flex items-center">
                {tabs.map((item, index) => (
                  <div>
                    <div key={index} className="flex items-center">
                      {activeTab === index ? (
                        <Image
                          src={"/active_green.webp"}
                          alt="Icon"
                          width={100}
                          height={100}
                          className="h-12 w-12"
                        />
                      ) : (
                        <button
                          onClick={() => setActiveTab(index)}
                          className="rounded-full border border-black h-12 w-12 flex items-center justify-center"
                        >
                          <p className="text-black font-bold">{item.number}</p>
                        </button>
                      )}
                      {item.number !== 6 && (
                        <div className="h-[1px] border border-dashed border-[gray] w-[calc(10vw)]" />
                      )}
                    </div>

                    <p className="text-black text-sm mt-2 ">{item.name}</p>
                  </div>
                ))}
              </div>
              {activeTab === 0 && (
                <>
                  <div className="mt-5">
                    <p className="font-bold text-black text-[23px]">
                      Select your property type
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
                    <p className="font-bold text-black text-[23px]">
                      Select what best describes your Property
                    </p>
                    <div className="flex flex-wrap items-center gap-5 mt-5">
                      {(propertyType === 0
                        ? properties
                        : propertyType === 1
                        ? commercialProperties
                        : propertyType === 2
                        ? studentProperties
                        : propertyType === 3
                        ? vocationalProperties
                        : communityProperties
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
                </>
              )}
              {activeTab === 1 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[23px]">
                    Property owner information
                  </p>
                  <div className="mt-5">
                    <p>Owner full name</p>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                    />
                  </div>
                  <div className="mt-5 flex gap-5 w-full justify-between">
                    <div className="w-[47%]">
                      <p>Email</p>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                    <div className="w-[47%]">
                      <p>Mobile Number</p>
                      <input
                        type="number"
                        placeholder="Enter your mobile number"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                  </div>
                  <div className="w-[100%] mt-5">
                    <p>CNIC</p>
                    <input
                      type="number"
                      placeholder="Enter your cnic number"
                      className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                    />
                  </div>
                  <div className="mt-5 ">
                    <p className="text-[14px] font-bold text-black">
                      Add multiple owners to this property
                    </p>
                    <button className="bg-[#1ED760] rounded-xl text-white px-5 py-2 text-[20px] mt-4">
                      +
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[23px]">
                    Property Property Address
                  </p>
                  <div className="mt-5">
                    <p>Street</p>
                    <input
                      type="text"
                      placeholder="Enter street name"
                      className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                    />
                  </div>
                  <div className="mt-5 flex gap-5 w-full justify-between">
                    <div className="w-[47%]">
                      <p>City</p>
                      <input
                        type="text"
                        placeholder="Enter city name"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                    <div className="w-[47%]">
                      <p>Province</p>
                      <input
                        type="number"
                        placeholder="Enter your province name"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex gap-5 w-full justify-between">
                    <div className="w-[47%]">
                      <p>Country</p>
                      <input
                        type="text"
                        placeholder="Enter Country name"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                    <div className="w-[47%]">
                      <p>ZIP Code</p>
                      <input
                        type="number"
                        placeholder="ZIP Code"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="mt-10">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold text-black text-[23px]">
                      Add units of property
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="bg-[#1ED760] rounded-full px-5 text-white py-2">
                        Submit CSV file
                      </button>
                      <button className="border border-[#1ED760] rounded-full px-5 text-black py-2">
                        + Add multiple units
                      </button>
                      <button
                        onClick={onAddSingleUnit}
                        className="border border-[#1ED760] rounded-full px-5 text-black py-2"
                      >
                        + Add unit
                      </button>
                    </div>
                  </div>
                  {unitsArray.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full mt-10"
                    >
                      <div className="w-[15%]">
                        <p>Number of Beds</p>
                        <input
                          type="number"
                          className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                        />
                      </div>
                      <div>
                        <p>Floor number</p>
                        <input
                          type="number"
                          className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                        />
                      </div>
                      <div>
                        <p>Area (sq feet)</p>
                        <input
                          type="number"
                          className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                        />
                      </div>
                      <div>
                        <p>Unit Name</p>
                        <input
                          type="number"
                          className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                        />
                      </div>
                      <div>
                        <p>Market Rent</p>
                        <input
                          type="number"
                          className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="w-full flex justify-between mt-10">
                <button
                  onClick={() => setActiveTab(activeTab - 1)}
                  className="border-[#1ED760] border text-black text-base font-semibold px-8 py-2 rounded-3xl"
                >
                  Back
                </button>
                <button
                  onClick={() => setActiveTab(activeTab + 1)}
                  className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
