"use client";
import ProfileInfoSidebar from "@/app/sharedcomponents/ProfileInfoSidebar";
import { on } from "events";
import Image from "next/image";
import React, { useState } from "react";

export default function PersonaInformation() {
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
      <ProfileInfoSidebar />
      <div className="text-black w-[calc(75vw)] px-10 pt-10">
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
              <select className="border border-black rounded h-10 w-[45%]">
                <option value="mobile"> Mobile Number</option>

                <option value="phone"> Phone Number</option>
              </select>
              <input
                required
                type="number"
                placeholder="Enter your phone number"
                className="border border-black rounded h-10 w-[45%] pl-3"
              />
            </div>
          ))}
        </div>
        <p onClick={onAddNumber} className="text-[#1ED760] mt-5 cursor-pointer">
          + Add Another
        </p>
        <div className="mt-10 space-y-2">
          <p>Email</p>
          {emails.map((number, index) => (
            <div key={index} className="flex justify-between">
              <select className="border border-black rounded h-10 w-[45%]">
                <option value="mobile">Primary</option>

                <option value="phone">Secondary</option>
              </select>
              <input
                type="email"
                placeholder="Enter your Email"
                required
                className="border border-black rounded h-10 w-[45%] pl-3"
              />
            </div>
          ))}
        </div>
        <p onClick={onAddEmail} className="text-[#1ED760] mt-5 cursor-pointer">
          + Add Another
        </p>
      </div>
    </div>
  );
}
