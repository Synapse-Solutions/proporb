"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React, { useState } from "react";

let tabs = [
  {
    number: 1,
    name: "Overview",
  },
  {
    number: 2,
    name: "Tenants",
  },
  {
    number: 3,
    name: "Rent",
  },
  {
    number: 4,
    name: "Deposit",
  },
  {
    number: 5,
    name: "Late Fees",
  },
  {
    number: 6,
    name: "Status",
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
const bankDetails = [
  {
    name: "Company default account",
    ActiveIcon: "/bank_active.webp",
    InactiveIcon: "/bank_inactive.webp",
  },
  {
    name: "Specify Bank Account",
    ActiveIcon: "/bank_active.webp",
    InactiveIcon: "/bank_inactive.webp",
  },
];
const reserveFundsArray = [
  {
    name: "Fixed Term",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
  {
    name: "Month to Month",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
];
const depositArray = [
  {
    name: "Yes",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
  {
    name: "No",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
];
const statusArray = [
  {
    name: "Signed",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
  {
    name: "Unsigned",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
];

const options = [
  { label: "Use Property Late Fees", value: "option1" },
  { label: "Specify a late fees Policy", value: "option2" },
];

const nestedMenuItems = ["Tenants", "Vendors", "Prospects"];

export default function NewRentalsComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [propertyType, setPropertyType] = useState(0);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const uploadPhotoRef = React.createRef<HTMLInputElement>();

  const onClickuploadPhoto = () => {
    if (uploadPhotoRef.current) {
      uploadPhotoRef.current?.click();
    }
  };

  const handleOptionChange = (event: any) => {
    const value = event.target.value;
    setSelectedOption(value);
    handleOptionSelect(value);
  };

  const handleOptionSelect = (value: any) => {
    setSelectedOption(value);
  };
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar activeTab="Rental" nestedMenuItems={nestedMenuItems} />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />

          <div className="mt-10">
            <p className="text-[25px] font-bold">New Rental</p>
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
                    <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                      Property
                    </p>
                    <div className="mt-5 flex gap-5 w-full justify-between">
                      <div className="w-[47%]">
                        <p>Which property is the lease for?</p>
                        <select
                          name=""
                          id=""
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        >
                          <option value="1">Commercial</option>
                          <option value="2">Residential</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-5 flex gap-5 w-full justify-between">
                      <div className="w-[47%]">
                        <p>Select the unit of property</p>
                        <input
                          type="text"
                          placeholder="amount"
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        />
                      </div>
                    </div>
                    <div className="mt-10">
                      <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                        Add Reserve funds
                      </p>
                      <div className="flex gap-7 justify-center mt-10">
                        {reserveFundsArray.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => setPropertyType(index)}
                            className={`border ${
                              propertyType === index
                                ? "border-[#1ED760]"
                                : "border-gray-400"
                            } p-5 flex flex-col items-center justify-center rounded-lg  px-20 relative `}
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
                              className="object-contain"
                            />
                            <p className="mt-3 text-black">{item.name}</p>
                          </button>
                        ))}
                      </div>
                      <div className="mt-10 flex justify-center gap-7">
                        <div>
                          <p>Select the Start Date</p>
                          <input
                            type="date"
                            className="border border-[#D8D8D8] rounded-lg px-3 h-10 mt-3 w-[calc(20vw)] 2xl:w-[calc(15vw)]"
                          />
                        </div>
                        <div>
                          <p>Select the End Date</p>
                          <input
                            type="date"
                            className="border border-[#D8D8D8] rounded-lg px-3 h-10 mt-3 w-[calc(20vw)] 2xl:w-[calc(15vw)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === 1 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Rental Tenants
                  </p>
                  <div className="flex justify-center mt-10">
                    <div className="border-2 border-[#1ED760] border-dashed p-10 flex flex-col items-center rounded-lg">
                      <p className="text-[30px] text-[#1ED760]">+</p>
                      <p>Add Tenant</p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Rent Charges
                  </p>
                  <div className="flex flex-col items-center w-full">
                    <div className="mt-5 w-[60%]">
                      <p>When should we start charging Rent</p>
                      <input
                        type="date"
                        placeholder="Enter street name"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                    <div className="mt-5 w-[60%]">
                      <p>How often do you charge rent?</p>

                      <select
                        name=""
                        id=""
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      >
                        <option value="1">Monthly</option>
                        <option value="2">Weekly</option>
                        <option value="3">Yearly</option>
                      </select>
                    </div>
                    <div className="mt-5 w-[60%]">
                      <p>Enter the Rent Amount</p>
                      <input
                        type="number"
                        placeholder="Enter street name"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="mt-10 flex flex-col">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px] w-full">
                    Security Deposit
                  </p>
                  <div className="flex gap-7 justify-center mt-12 w-full">
                    {depositArray.map((item, index) => (
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
                            className="absolute top-3 right-[15px] h-[40px] object-contain w-[30px]"
                          />
                        )}
                        <div
                          className={`h-[50px] w-[50px] flex items-center justify-center rounded-full ${
                            propertyType === index
                              ? "bg-[#e8fbef]"
                              : "bg-[#eaeaea]"
                          }`}
                        >
                          {index === 0 ? <p> ✔ </p> : <p>✕</p>}
                        </div>
                        <p className="mt-3 text-black font-bold">{item.name}</p>
                      </button>
                    ))}
                  </div>
                  <div>
                    <div className=" flex justify-center w-full mt-10">
                      <div className="w-[40%]">
                        <p>Security Deposit Amount</p>
                        <input
                          type="number"
                          placeholder="Enter amount"
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 4 && (
                <div className="mt-10 flex flex-col">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px] w-full">
                    Late Fees
                  </p>
                  <div className="flex gap-7 justify-center mt-12 w-full">
                    {depositArray.map((item, index) => (
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
                            className="absolute top-3 right-[15px] h-[40px] object-contain w-[30px]"
                          />
                        )}
                        <div
                          className={`h-[50px] w-[50px] flex items-center justify-center rounded-full ${
                            propertyType === index
                              ? "bg-[#e8fbef]"
                              : "bg-[#eaeaea]"
                          }`}
                        >
                          {index === 0 ? <p> ✔ </p> : <p>✕</p>}
                        </div>
                        <p className="mt-3 text-black font-bold">{item.name}</p>
                      </button>
                    ))}
                  </div>
                  <div>
                    <div className=" flex flex-col items-center w-full mt-10">
                      <div className="w-[43%]">
                        {options.map((option, index) => (
                          <div key={index} className="gap-2 flex">
                            <input
                              type="radio"
                              id={option.value}
                              name="dynamicRadio"
                              value={option.value}
                              checked={selectedOption === option.value}
                              onChange={handleOptionChange}
                            />
                            <label htmlFor={option.value}>{option.label}</label>
                          </div>
                        ))}

                        <div className="w-full mt-10 flex border border-[#D8D8D8] rounded-lg justify-between px-5 py-5 text-[18px]">
                          <p>Home</p>
                          <div className="bg-[#EAFAE5] rounded-full flex gap-3 text-[#1ED760] px-3 py-2">
                            <Image
                              src={"/completedIcon.webp"}
                              alt="tick"
                              height={100}
                              width={100}
                              className="top-3 right-[15px] h-[20px] object-contain w-[20px]"
                            />
                            <p className="text-sm">Company Policy Activated</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 5 && (
                <div className="mt-10 flex flex-col">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px] w-full">
                    Original Rental Copy
                  </p>
                  <div className="flex gap-7 justify-center mt-12 w-full">
                    {statusArray.map((item, index) => (
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
                            className="absolute top-3 right-[15px] h-[40px] object-contain w-[30px]"
                          />
                        )}
                        <div
                          className={`h-[50px] w-[50px] flex items-center justify-center rounded-full ${
                            propertyType === index
                              ? "bg-[#e8fbef]"
                              : "bg-[#eaeaea]"
                          }`}
                        >
                          {index === 0 ? <p> ✔ </p> : <p>✕</p>}
                        </div>
                        <p className="mt-3 text-black font-bold">{item.name}</p>
                      </button>
                    ))}
                  </div>
                  <div>
                    <div className=" flex justify-center w-full mt-10">
                      <div
                        onClick={onClickuploadPhoto}
                        className="flex border border-[#98A2B3] border-dashed rounded-xl items-center px-5 py-3"
                      >
                        <Image
                          src={"/file_upload.webp"}
                          alt="upload"
                          height={50}
                          width={50}
                          className="h-[50px] object-contain w-[50px]"
                        />
                        <div>
                          <p className="text-black font-bold">Tap to upload</p>
                          <p className="text-[#98A2B3] text-[12px]">
                            DOC or PDF | 10MB max
                          </p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          ref={uploadPhotoRef}
                        />
                        <button className="bg-[#1ED760] rounded text-white px-5 py-2 ml-7">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="w-full flex justify-between mt-10">
                {activeTab === 0 ? (
                  <div />
                ) : (
                  <button
                    onClick={() => setActiveTab(activeTab - 1)}
                    className="border-[#1ED760] border text-black text-base font-semibold px-8 py-2 rounded-3xl"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={() =>
                    activeTab === 5
                      ? setIsSuccessModalShow(true)
                      : setActiveTab(activeTab + 1)
                  }
                  className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {createAccountModal && (
        <CreateAccountModal setIsCreateAccountModal={setCreateAccountModal} />
      )}
      {isSuccessModalShow && (
        <PropertyAddedModal
          setIsPropertyAddedModal={setIsSuccessModalShow}
          title="Property Added Successfully"
        />
      )} */}
    </div>
  );
}
