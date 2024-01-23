"use client";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import React, { useState } from "react";

export default function SubscriptionDetails() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="h-screen flex p-6">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] px-10 ">
        <h1 className="text-[40px] font-bold ">Subscription Details</h1>
        <p>Get started by entering your details</p>

        <div className="flex flex-col items-center mt-12">
          <div className="bg-[#F7F7F7] p-5 rounded-lg space-y-3 w-[calc(20vw)]">
            <h1 className="text-black text-[30px] font-bold">
              Landlord & Agent
            </h1>
            <p className="text-[#797979]">Plan Price $15.00 /month</p>
            <div className="bg-[#1ED760] text-center text-white py-3 rounded-full">
              Buy Plan
            </div>
          </div>
          <div className="bg-[#F7F7F7] p-5 rounded-lg space-y-3 mt-10 w-[calc(20vw)]">
            <h1 className="text-black text-[30px] font-bold">Tenants</h1>
            <p className="text-[#797979]">Plan Price Free</p>
            <div className="bg-[#1ED760] text-center text-white py-3 rounded-full">
              Invite Your Landlord
            </div>
          </div>
          <div className="bg-[#F7F7F7] p-5 rounded-lg space-y-3 mt-10 w-[calc(20vw)]">
            <h1 className="text-black text-[30px] font-bold">XYZ</h1>
            <div className="flex">
              <div
                onClick={() => setIsChecked(!isChecked)}
                className="w-[20px] h-[20px] border border-[#1ED760] rounded-full flex items-center justify-center p-[3px] mr-2"
              >
                {isChecked && (
                  <div className="bg-[#1ED760] w-[13px] h-[13px] rounded-full" />
                )}
              </div>
              <p className="text-[#797979]">Master Card</p>
            </div>
            <div className="bg-[#1ED760] text-center text-white py-3 rounded-full">
              Buy Plan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
