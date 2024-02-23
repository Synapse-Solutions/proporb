"use client";
import AccountCreatedModal from "@/app/sharedcomponents/AccountCreatedModal";
import Image from "next/image";
import React, { useState, useRef } from "react";

interface Props {
  onClose: () => void;
}

export default function CompanyInformationModal(props: Props) {
  const [activeScreen, setActiveScreen] = useState(1);
  const [isAccountCreatedOpen, setIsAccountCreatedOpen] = useState(false);

  const uploadFileRef = useRef<any>(null);

  const uploadFile = () => {
    if (uploadFileRef.current) {
      uploadFileRef.current?.click();
    }
  };

  const onClickBack = () => {
    if (activeScreen === 1) {
      props.onClose();
    } else {
      setActiveScreen(activeScreen - 1);
    }
  };
  const onClckNext = () => {
    if (activeScreen === 3) {
      setIsAccountCreatedOpen(true);
    } else {
      setActiveScreen(activeScreen + 1);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed left-0 top-0 text-black z-10 flex items-center justify-center"
    >
      <div className="w-[calc(90vw)] 2xl:w-[calc(80vw)] h-[calc(90vh)] bg-white text-black z-10 flex relative">
        <div className="w-[25%] 2xl:w-[20%] h-full bg-[#191414] text-[#ffffff] px-6 py-20">
          <div className="flex gap-3 items-center">
            <Image
              src="/companyInfoIcon.webp"
              alt="Icon"
              height={50}
              width={50}
            />
            <p className="text-lg">Company Info</p>
          </div>

          <div className="px-3  mt-10 2xl:mt-20 flex flex-col gap-5">
            <div
              className="flex gap-3 items-center px-4 py-2 rounded-xl"
              style={{ backgroundColor: activeScreen === 1 ? "#5E5A5A" : "" }}
              onClick={() => {
                setActiveScreen(1);
              }}
            >
              <Image
                src="/generalCompanyInfoIcon.webp"
                alt="Icon"
                height={25}
                width={25}
              />
              <p className="text-base">General Information</p>
            </div>
            <div
              className="flex gap-3 items-center px-4 py-2 rounded-xl"
              style={{ backgroundColor: activeScreen === 2 ? "#5E5A5A" : "" }}
              onClick={() => {
                setActiveScreen(2);
              }}
            >
              <Image src="/urlIcon.webp" alt="Icon" height={25} width={25} />
              <p className="text-base">URL</p>
            </div>
            <div
              className="flex gap-3 items-center px-4 py-2 rounded-xl"
              style={{ backgroundColor: activeScreen === 3 ? "#5E5A5A" : "" }}
              onClick={() => {
                setActiveScreen(3);
              }}
            >
              <Image
                src="/accountOwnerIcon.webp"
                alt="Icon"
                height={25}
                width={25}
              />
              <p className="text-base">Account Owner</p>
            </div>
          </div>
        </div>
        <div className="w-[75%] 2xl:w-[80%] overflow-auto relative">
          {activeScreen === 1 && (
            <div className="w-full px-8 py-8 relative">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[25px] 2xl:text-[32px] font-bold">
                    General Information
                  </h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={props.onClose}
                  className="cursor-pointer object-contain"
                  src="/cross_icon.webp"
                  alt="Icon"
                  height={25}
                  width={45}
                />
              </div>
              <div className="w-full mt-5">
                <div className="w-[100%] flex items-center gap-6 my-4">
                  <div
                    className="rounded-[32px] h-16 w-16 bg-[#EFEFEF] flex justify-center items-center"
                    onClick={uploadFile}
                  >
                    <p className="text-[#656D76] text-5xl font-extralight">+</p>
                  </div>
                  <div
                    className="border-[#1ED760] border-2 flex gap-2 items-center h-10 px-4 rounded-lg"
                    onClick={uploadFile}
                  >
                    <Image
                      src="/addImageIconGreen.webp"
                      alt="Icon"
                      height={20}
                      width={20}
                    />
                    <p className="text-[#1ED760] text-sm font-semibold">
                      Upload Company Logo
                    </p>
                  </div>
                  <input type="file" className="hidden" ref={uploadFileRef} />
                </div>
                <div className="w-[100%] my-5">
                  <p className="text-black font-medium mb-1">Company Name</p>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
                <div className="w-[100%] flex gap-10 my-4">
                  <div className="w-[50%]">
                    <p className="text-black font-medium mb-1">
                      Primary Email Address
                    </p>
                    <input
                      type="text"
                      placeholder="Enter Primary Email Address"
                      className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                    />
                  </div>
                  <div className="w-[50%]">
                    <p className="text-black font-medium mb-1">
                      Primary Phone Number
                    </p>
                    <input
                      type="text"
                      placeholder="Enter Primary Phone Number"
                      className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                    />
                  </div>
                </div>
                <div className="w-[100%] my-4">
                  <p className="text-black font-medium mb-1">Address</p>
                  <input
                    type="text"
                    placeholder="Enter house and street number"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
                <div className="w-[100%] flex gap-10 my-4">
                  <div className="w-[50%]">
                    <p className="text-black font-medium mb-1">City</p>
                    <select className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2 pr-5">
                      <option value="">City 1</option>
                      <option value="">City 2</option>
                    </select>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-black font-medium mb-1">Province</p>
                    <select className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2 pr-5">
                      <option value="">Province 1</option>
                      <option value="">Province 2</option>
                    </select>
                  </div>
                </div>
                <div className="w-[100%] flex gap-10 my-4">
                  <div className="w-[50%]">
                    <p className="text-black font-medium mb-1">Country</p>
                    <select className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2 pr-5">
                      <option value="">Country 1</option>
                      <option value="">Country 2</option>
                    </select>
                  </div>
                  <div className="w-[50%]">
                    <p className="text-black font-medium mb-1">Zip Code</p>
                    <select className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2 pr-5">
                      <option value="">44000</option>
                      <option value="">44001</option>
                    </select>
                  </div>
                </div>
                <div className="w-[100%] my-4">
                  <p className="text-black font-medium mb-1">
                    Company Website URL
                  </p>
                  <input
                    type="text"
                    placeholder="Enter URL"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
                <div className="w-[100%] my-4">
                  <p className="text-black font-medium mb-1">
                    Company Social Media Links
                  </p>
                  <input
                    type="text"
                    placeholder="Enter URL"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
              </div>
            </div>
          )}

          {activeScreen === 2 && (
            <div className="w-full px-8 py-8 relative">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[32px] font-bold">URL</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={props.onClose}
                  className="cursor-pointer"
                  src="/cross_icon.webp"
                  alt="Icon"
                  height={25}
                  width={45}
                />
              </div>
              <div className="w-full mt-10">
                <div className="w-[100%] my-5">
                  <p className="text-black font-medium mb-1">
                    You can modify your DoorLoop URL to match your company
                    brand.
                  </p>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
                <div className="w-[100%] flex gap-10 my-4">
                  <div className="w-[50%]">
                    <p className="text-black font-medium mb-1">
                      Primary Email Address
                    </p>
                    <input
                      type="text"
                      placeholder="Enter Primary Email Address"
                      className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                    />
                  </div>
                  <div className="w-[50%]">
                    <p className="text-black font-medium mb-1">
                      Primary Phone Number
                    </p>
                    <input
                      type="text"
                      placeholder="Enter Primary Phone Number"
                      className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeScreen === 3 && (
            <div className="w-full px-8 py-8 relative">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-[32px] font-bold">Account Owner</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={props.onClose}
                  className="cursor-pointer"
                  src="/cross_icon.webp"
                  alt="Icon"
                  height={25}
                  width={45}
                />
              </div>
              <div className="w-full mt-10">
                <div className="w-[100%] my-5">
                  <p className="text-black font-medium mb-1">
                    The user selected below is the owner of this DoorLoop
                    account. They will always have full access to all the data
                    and features on this account.
                  </p>
                  <input
                    type="text"
                    placeholder="Account Owner"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
                <div className="w-[100%] my-4">
                  <p className="text-black font-medium mb-1">
                    <span className="text-red-500">*</span> Only the current
                    account owner can change the owner of the account.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="h-20" />
          <div className="w-full flex justify-between px-8 mb-10 absolute bottom-0 right-0">
            <button
              onClick={onClickBack}
              className="border-[#1ED760] border text-black text-base font-semibold px-8 py-2 rounded-3xl"
            >
              Back
            </button>
            <button
              onClick={onClckNext}
              className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl"
            >
              Next
            </button>
          </div>
        </div>
        {isAccountCreatedOpen && (
          <AccountCreatedModal
            onClose={() => {
              setIsAccountCreatedOpen(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
