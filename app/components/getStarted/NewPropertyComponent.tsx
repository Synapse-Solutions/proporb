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
export default function NewPropertyComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [propertyType, setPropertyType] = useState(0);
  const [selectedPropertyName, setSelectedPropertyName] = useState("Home");
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
                      <button
                        onClick={() => setPropertyType(0)}
                        className={`border ${
                          propertyType === 0
                            ? "border-[#1ED760]"
                            : "border-gray-400"
                        } p-5 flex flex-col items-center justify-center rounded-lg`}
                      >
                        <Image
                          alt="home"
                          src={
                            propertyType === 0
                              ? "/green_outlilne_home.webp"
                              : "/gray_outline_home.webp"
                          }
                          height={100}
                          width={100}
                        />
                        <p className="mt-3 text-black">Residential Property</p>
                      </button>
                      <button
                        onClick={() => setPropertyType(1)}
                        className={`border ${
                          propertyType === 1
                            ? "border-[#1ED760]"
                            : "border-gray-400"
                        } p-5 flex flex-col items-center justify-center rounded-lg`}
                      >
                        <Image
                          alt="home"
                          src={
                            propertyType === 1
                              ? "/property_green.webp"
                              : "/property_gray.webp"
                          }
                          height={100}
                          width={100}
                        />
                        <p className="mt-3 text-black">Commercial Property</p>
                      </button>
                    </div>
                  </div>
                  <div className="mt-10">
                    <p className="font-bold text-black text-[23px]">
                      Select what best describes your Property
                    </p>
                    <div className="flex flex-wrap items-center gap-5 mt-5">
                      {properties.map((item, index) => (
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
                  <div className="mt-5 flex gap-5">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
