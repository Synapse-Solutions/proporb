import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import React from "react";

export default function PaymentFail() {
  return (
    <div className="flex justify-between p-10 h-screen overflow-hidden">
      <AuthLeftSide />

      <div className="w-[calc(50vw)] flex flex-col items-center space-y-5 pl-[calc(5vw)] px-[calc(5vw)] h-screen justify-center text-black">
        <Image src={"/error_icon.webp"} width={60} height={60} alt="check" />
        <h1 className="text-[20px]">Plan Payment Successfull</h1>
        <div className="h-1 w-[50%] bg-[#797979] rounded-full" />
        <p className="text-[#797979]">
          Amount : <span className="text-[#1ED760]">$15</span>
        </p>
        <p className="text-[#797979]">
          You can retry the payment below to continue this
        </p>
        <div className="bg-[#1ED760] rounded-full py-2 px-5 text-white">
          Retry
        </div>
      </div>
    </div>
  );
}
