"use client";
import { on } from "events";
import Image from "next/image";
import React, { useState } from "react";
import GeneralInfoSidebar from "./GeneralInfoSidebar";

interface Props {
  onClose?: () => void;
}
export default function PropertyGeneralInfoModal({ onClose }: Props) {
  // ******* States *******
  const [screenName, setScreenName] = useState("contact");
  const [contactNumbers, setContactNumbers] = useState([
    {
      type: "mobile",
      number: "",
    },
  ]);
  const [emails, setEmails] = useState([
    {
      type: "personal",
      email: "",
    },
  ]);

  // ******* Functions *******
  const onAddNumber = () => {
    setContactNumbers([
      ...contactNumbers,
      {
        type: "mobile",
        number: "",
      },
    ]);
  };

  const onAddEmail = () => {
    setEmails([
      ...emails,
      {
        type: "personal",
        email: "",
      },
    ]);
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
                <div className="flex justify-between">
                  <div className="w-[47%]">
                    <p>Last Name</p>
                    <input
                      required
                      type="text"
                      placeholder="Enter your Last Name"
                      className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <div className="w-[47%]">
                  <p>First Name</p>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    required
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
                <div className="w-[47%]">
                  <p>Last Name</p>
                  <input
                    required
                    type="text"
                    placeholder="Enter your Last Name"
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
              </div>
              <div className="h-24" />
            </div>
          )}
          {screenName === "contact" && (
            <div className="text-black w-full px-10 pt-10 overflow-auto h-full">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Contact Information</h1>
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

              <div className="mt-10 space-y-2">
                <p>Phone Number</p>
                {contactNumbers.map((number, index) => (
                  <div key={index} className="flex justify-between">
                    <select className="border border-black rounded-lg h-10 w-[45%]">
                      <option value="mobile"> Mobile Number</option>

                      <option value="phone"> Phone Number</option>
                    </select>
                    <input
                      required
                      type="number"
                      placeholder="Enter your phone number"
                      className="border border-black rounded-lg h-10 w-[45%] pl-3"
                    />
                  </div>
                ))}
              </div>
              <p
                onClick={onAddNumber}
                className="text-[#1ED760] mt-5 cursor-pointer"
              >
                + Add Another
              </p>
              <div className="mt-10 space-y-2">
                <p>Email</p>
                {emails.map((number, index) => (
                  <div key={index} className="flex justify-between">
                    <select className="border border-black rounded-lg h-10 w-[45%]">
                      <option value="mobile">Primary</option>

                      <option value="phone">Secondary</option>
                    </select>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      required
                      className="border border-black rounded-lg h-10 w-[45%] pl-3"
                    />
                  </div>
                ))}
              </div>
              <p
                onClick={onAddEmail}
                className="text-[#1ED760] mt-5 cursor-pointer"
              >
                + Add Another
              </p>
              <div className="h-24" />
            </div>
          )}
          {screenName === "address" && (
            <div className="text-black w-full px-10 pt-10 relative">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Address</h1>
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

              <div className="mt-10 space-y-2">
                <p>Street</p>
                <div className="flex justify-between">
                  <input
                    required
                    type="text"
                    placeholder="Enter your street location"
                    className="border border-black rounded-lg h-10 w-[100%] pl-3"
                  />
                </div>
              </div>
              <div className="mt-10 space-y-2">
                <div className="flex justify-between">
                  <div className="w-[45%] space-y-2">
                    <p>City</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                  <div className="w-[45%] space-y-2">
                    <p>Province</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-10 space-y-2">
                <div className="flex justify-between">
                  <div className="w-[45%] space-y-2">
                    <p>Country</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                  <div className="w-[45%] space-y-2">
                    <p>Zip Code</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                </div>
              </div>
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
