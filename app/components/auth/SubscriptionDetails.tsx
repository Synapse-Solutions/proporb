"use client";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import React, { useState } from "react";

interface Props {
  setScreenName: React.Dispatch<React.SetStateAction<any>>;
  subscriptionPayload: any;
  setSubscriptionPayload: any;
  onAddTenant: () => void;
}
export default function SubscriptionDetails(props: Props) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="h-screen flex p-6 bg-white">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] px-10 ">
        <h1 className="text-[30px] 2xl:text-[40px] font-bold ">
          Subscription Details
        </h1>
        <p className="text-[15px] 2xl:text-[20px]">
          Get started by entering your details
        </p>

        <div className="flex flex-col items-center mt-8">
          <div className="bg-[#F7F7F7] p-5 rounded-lg space-y-3 w-[calc(100%)] text-center">
            <h1 className="text-black text-[15px] 2xl:text-[30px] font-bold">
              Landlord & Agent
            </h1>
            <p className="text-[#797979] text-[12px] 2xl:text-[15px]">
              Plan Price $15.00 /month
            </p>
            <div
              onClick={() => props.setScreenName("paymentdetails")}
              className="bg-[#1ED760] text-center text-white py-2 rounded-full text-[12px] 2xl:text-[20px] hover:bg-[#4f9e6a] cursor-pointer"
            >
              Buy Plan
            </div>
          </div>
          <div
            onClick={props.onAddTenant}
            className="bg-[#F7F7F7] p-5 rounded-lg space-y-3 mt-5 2xl:mt-10 w-[calc(100%)] text-center"
          >
            <h1 className="text-black text-[15px] 2xl:text-[30px] font-bold">
              Tenants
            </h1>
            <p className="text-[#797979] text-[12px] 2xl:text-[15px]">
              Plan Price Free
            </p>
            <div className="bg-[#1ED760] text-center text-white py-2 rounded-full text-[12px] 2xl:text-[20px] hover:bg-[#4f9e6a] cursor-pointer">
              Invite Your Landlord
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
