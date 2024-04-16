"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React, { useState } from "react";
import CreateAccountModal from "./modals/CreateAccountModal";
import PropertyAddedModal from "./modals/PropertyAddedModal";

let tabs = [
  {
    number: 1,
    name: "Apartment Type",
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
    name: "Photos",
  },
  {
    number: 5,
    name: "Amenities",
  },
  {
    number: 6,
    name: "Pet Policy",
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
export default function NewApartmentComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const [propertyType, setPropertyType] = useState(0);
  const [createAccountModal, setCreateAccountModal] = useState(false);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
  const [amenitedArray, setAmenitedArray] = useState(amenities);
  const uploadPhotoRef = React.createRef<HTMLInputElement>();

  const onClickuploadPhoto = () => {
    if (uploadPhotoRef.current) {
      uploadPhotoRef.current.click();
    }
  };

  const toggleSelected = (index: number) => {
    let temp = [...amenities];
    temp[index].isSelected = !temp[index].isSelected;
    setAmenitedArray(temp);
  };
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />

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
                    <div className="w-[150px] text-center -ml-[45px] ">
                      <p className="text-black text-sm mt-2 ">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              {activeTab === 0 && (
                <>
                  <div className="mt-5">
                    <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                      Apartment Information
                    </p>
                    <div className="mt-5 flex gap-5 w-full justify-between">
                      <div className="w-[47%]">
                        <p>Apartment ID</p>
                        <input
                          type="text"
                          placeholder="ID"
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        />
                      </div>
                      <div className="w-[47%]">
                        <p>Status</p>
                        <input
                          type="text"
                          placeholder="Vacant/Occupied"
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex gap-5 w-full justify-between">
                      <div className="w-[47%]">
                        <p>Rent Amount</p>
                        <input
                          type="text"
                          placeholder="amount"
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        />
                      </div>
                      <div className="w-[47%]">
                        <p>Bedrooms</p>
                        <input
                          type="text"
                          placeholder="Bedrooms"
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex gap-5 w-full justify-between">
                      <div className="w-[47%]">
                        <p>Apartment Sq ft</p>
                        <input
                          type="text"
                          placeholder="ft"
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        />
                      </div>
                      <div className="w-[47%]">
                        <p>Bathrooms</p>
                        <input
                          type="text"
                          placeholder="Number of bathrooms"
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === 1 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
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
                </div>
              )}
              {activeTab === 2 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
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
                <div className="mt-10 flex">
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
              )}
              {activeTab === 4 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Amenities
                  </p>
                  <div className="flex gap-7 justify-between mt-10 flex-wrap">
                    {amenitedArray.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 w-[25%]"
                      >
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
                </div>
              )}
              {activeTab === 5 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Add Reserve funds
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
      {createAccountModal && (
        <CreateAccountModal setIsCreateAccountModal={setCreateAccountModal} />
      )}
      {isSuccessModalShow && (
        <PropertyAddedModal
          setIsPropertyAddedModal={setIsSuccessModalShow}
          title="Property Added Successfully"
        />
      )}
    </div>
  );
}
