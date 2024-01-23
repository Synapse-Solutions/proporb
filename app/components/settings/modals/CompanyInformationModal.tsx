"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CompanyInformationModal() {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed left-0 top-0 text-black z-10 flex items-center justify-center"
    >
      <div className="w-[calc(80vw)] h-[calc(80vh)] bg-white text-black z-10 flex relative">
        <div className="w-[20%] h-full bg-[#191414] text-[#ffffff] px-6 py-20">
          <div className="flex gap-3 items-center">
            <Image
              src="/companyInfoIcon.webp"
              alt="Icon"
              height={50}
              width={50}
            />
            <p className="text-lg">Company Info</p>
          </div>

          <div className="px-3 mt-20 flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <Image
                src="/generalCompanyInfoIcon.webp"
                alt="Icon"
                height={25}
                width={25}
              />
              <p className="text-base">General Information</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image src="/urlIcon.webp" alt="Icon" height={25} width={25} />
              <p className="text-base">URL</p>
            </div>
            <div className="flex gap-3 items-center">
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

        {activeScreen === 1 && (
          <div className="w-[80%] px-8 py-12">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[32px] font-bold">General Information</h1>
                <div className="h-[2px] bg-[#1ED760] w-[100px]" />
              </div>
              <Image
                className="cursor-pointer"
                src="/cross_icon.webp"
                alt="Icon"
                height={25}
                width={45}
              />
            </div>
            <div className="w-full mt-10">
              <div className="w-[100%] my-5">
                <p className="text-black font-medium mb-3">Company Name</p>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                />
              </div>
              <div className="w-[100%] flex justify-between">
                <div className="w-[48%]">
                  <p>Full Name</p>
                  <input
                    type="text"
                    className="border border-black rounded h-10 w-[100%]"
                  />
                </div>
                <div className="w-[48%]">
                  <p>Current Password</p>
                  <input
                    type="text"
                    className="border border-black rounded h-10 w-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* {activeScreen === 1 && (
          <div className="flex flex-col items-center w-[60%] mt-10">
            <Image src="/password.webp" alt="Icon" width={100} height={100} />
            <h1 className="font-bold text-[30px]">Unlock Settings</h1>
            <p className="text-center mt-5">
              To enter the login and password settings, <br /> please provide
              your current password.
            </p>
            <div className="w-full mt-5">
              <p className="my-5">* Current Password</p>
              <input
                required
                type="password"
                placeholder="Enter your password"
                className="border border-black rounded-lg h-10 w-[100%] pl-3"
              />
            </div>
          </div>
        )}
        {activeScreen === 2 && (
          <div className="w-full mt-10">
            <div className="w-[100%] flex justify-between">
              <div className="w-[48%]">
                <p>Full Name</p>
                <input
                  type="text"
                  className="border border-black rounded h-10 w-[100%]"
                />
              </div>
              <div className="w-[48%]">
                <p>Current Password</p>
                <input
                  type="text"
                  className="border border-black rounded h-10 w-[100%]"
                />
              </div>
            </div>
            <div className="w-[100%] flex justify-between mt-5">
              <div className="w-[48%]">
                <p>Last Name</p>
                <input
                  type="text"
                  className="border border-black rounded h-10 w-[100%]"
                />
              </div>
              <div className="w-[48%]">
                <p>New Password</p>
                <input
                  type="text"
                  className="border border-black rounded h-10 w-[100%]"
                />
              </div>
            </div>
            <div className="w-[100%] flex justify-between mt-5">
              <div className="w-[48%]">
                <p>Email</p>
                <input
                  type="email"
                  className="border border-black rounded h-10 w-[100%]"
                />
              </div>
              <div className="w-[48%]">
                <p>Confirm Password</p>
                <input
                  type="text"
                  className="border border-black rounded h-10 w-[100%]"
                />
              </div>
            </div>
            <div className="w-[48%] mt-5">
              <p>Phone Number</p>
              <input
                type="text"
                className="border border-black rounded h-10 w-[100%]"
              />
            </div>
            <div className="w-[48%] mt-5">
              <p>Address</p>
              <input
                type="text"
                className="border border-black rounded h-10 w-[100%]"
              />
            </div>
          </div>
        )}
        <div className="flex justify-between absolute bottom-10 w-[100%] left-0 px-[calc(3vw)]">
          <button className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full mt-10">
            Cancel
          </button>
          <button className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full mt-10">
            {activeScreen === 1 ? "Next" : "Save"}
          </button>
        </div> */}
      </div>
    </div>
  );
}
