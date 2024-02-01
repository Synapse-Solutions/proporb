"use client";
import Image from "next/image";
import React, { useState } from "react";
import PropertyAddedModal from "./PropertyAddedModal";

interface Props {
  setIsCreateAccountModal: (value: boolean) => void;
}
export default function CreateAccountModal({ setIsCreateAccountModal }: Props) {
  const [isAccountCompleted, setIsAccountCompleted] = useState(false);
  return (
    <div
      className="h-full w-full flex items-center justify-center fixed top-0 right-0"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-[calc(80vw)] bg-white p-10 text-black overflow-auto h-screen">
        <div className="flex w-full justify-between items-center">
          <div>
            <p className="text-[25px] font-bold text-black">Bank Details</p>
            <div className="bg-[#1ED760] h-1 w-[60px]" />
          </div>
          <Image
            onClick={() => setIsCreateAccountModal(false)}
            src="/cross_icon.webp"
            width={40}
            height={40}
            alt="cross icon"
            className="cursor-pointer"
          />
        </div>
        <div className="mt-5">
          <p className="text-[20px] text-black">Account Title</p>
          <input
            type="text"
            className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
          />
        </div>
        <div className="mt-5">
          <p>Account Type</p>
          <select className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3">
            <option value="volvo">Current</option>
            <option value="saab">Saving</option>
          </select>
        </div>
        <p className="bg-[#F8F8F8] w-full rounded-2xl px-5 py-1 mt-5 font-bold">
          Recipient bank details
        </p>
        <div className="w-full flex justify-between items-center gap-7 mt-5">
          <div className="w-full">
            <p>Recipient type*</p>
            <select
              name="person"
              id=""
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            >
              <option value="one">one</option>
              <option value="one">one</option>
            </select>
          </div>
          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-7 mt-5">
          <div className="w-full">
            <p>Full name of the account holder</p>
            <input
              type="text"
              placeholder="Jon Doe"
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            />
          </div>
          <div className="w-full">
            <p>Account type</p>
            <input
              type="text"
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-7 mt-5">
          <div className="w-full">
            <p>Account Number</p>
            <input
              type="text"
              placeholder="456***"
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            />
          </div>
          <div className="w-full" />
        </div>
        <p className="bg-[#F8F8F8] w-full rounded-2xl px-5 py-1 mt-5 font-bold">
          Address Details
        </p>
        <div className="w-full flex justify-between items-center gap-7 mt-5">
          <div className="w-full">
            <p>Country</p>
            <select
              name="pakistan"
              id=""
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            >
              <option value="one">Pakistan</option>
              <option value="one">Dubai</option>
            </select>
          </div>
          <div className="w-full">
            <p>City</p>
            <input
              type="text"
              placeholder="Rawalpindi"
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-start gap-7 mt-5">
          <div className="w-full">
            <p>Address</p>
            <textarea
              name="address"
              id=""
              cols={20}
              rows={5}
              className="w-full border border-[gray] rounded-xl py-2  px-3 mt-3"
            ></textarea>
          </div>
          <div className="w-full">
            <p>State</p>
            <input
              type="text"
              placeholder="Rawalpindi"
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            />
          </div>
        </div>
        <div className="w-full flex justify-between mt-10">
          <button
            onClick={() => setIsCreateAccountModal(false)}
            className="border-[#1ED760] border text-black text-base font-semibold px-8 py-2 rounded-3xl"
          >
            Cancel
          </button>
          <button
            onClick={() => setIsAccountCompleted(true)}
            className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl"
          >
            Save
          </button>
        </div>
      </div>
      {isAccountCompleted && (
        <PropertyAddedModal
          setIsPropertyAddedModal={setIsAccountCompleted}
          title="Account created successfully"
        />
      )}
    </div>
  );
}
