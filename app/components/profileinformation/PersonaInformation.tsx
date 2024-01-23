"use client";
import ProfileInfoSidebar from "@/app/sharedcomponents/ProfileInfoSidebar";
import { on } from "events";
import Image from "next/image";
import React, { useState } from "react";

export default function PersonaInformation() {
  // ******* States *******
  const [screenName, setScreenName] = useState("address");
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
    <div className="w-[calc(90vw)] h-[calc(90vh)] fixed bg-white border border-black mx-[calc(5vw)] my-[calc(5vh)] top-0 z-10 flex">
      <ProfileInfoSidebar activeTab="contact" />
      {screenName === "contact" && (
        <div className="text-black w-[calc(75vw)] px-10 pt-10 relative">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-[32px] font-bold">Contact Information</h1>
              <div className="h-[2px] bg-[#1ED760] w-[100px]" />
            </div>
            <Image src="/cross_icon.webp" alt="Icon" width={50} height={50} />
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
          <div className="flex justify-between absolute bottom-10 w-[100%] left-0 px-[calc(3vw)]">
            <button className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full mt-10">
              Back
            </button>
            <button className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full mt-10">
              Next
            </button>
          </div>
        </div>
      )}
      {screenName === "address" && (
        <div className="text-black w-[calc(75vw)] px-10 pt-10 relative">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-[32px] font-bold">Address</h1>
              <div className="h-[2px] bg-[#1ED760] w-[100px]" />
            </div>
            <Image src="/cross_icon.webp" alt="Icon" width={50} height={50} />
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
          <div className="flex justify-between absolute bottom-10 w-[100%] left-0 px-[calc(3vw)]">
            <button className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full mt-10">
              Back
            </button>
            <button className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full mt-10">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
