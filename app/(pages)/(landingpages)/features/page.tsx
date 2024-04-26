"use client";
import LandingPageFooter from "@/app/sharedcomponents/LandingPageFooter";
import LandingPageNavbar from "@/app/sharedcomponents/LandingPageNavbar";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const [isMonthlyPayment, setIsMonthlyPayment] = useState(true);

  return (
    <div className="w-full overflow-hidden bg-[#ffffff]">
      <LandingPageNavbar />
      <div className="h-36" />
      <div className=" text-black px-[5%]">
        <div className="flex flex-col items-center mt-[7vh]">
          <h2 className="text-[30px] 2xl:text-[40px] font-bold text-center">
            Make Better <br />
            decisions, Together
          </h2>
          <p className="text-[#797979] text-center w-[30%] mt-10">
            Choose The perfect Plan of your needs. Always Flexible to grow
          </p>

          <div className="bg-[#d5f7e2] flex items-center rounded-full px-5 py-3 w-[400px] mt-10">
            <button
              onClick={() => setIsMonthlyPayment(false)}
              className={`${
                isMonthlyPayment
                  ? "bg-transparent"
                  : "bg-[#1ED760] rounded-full"
              } w-1/2 py-2`}
            >
              Billed Annualy
            </button>
            <button
              onClick={() => setIsMonthlyPayment(true)}
              className={`${
                !isMonthlyPayment
                  ? "bg-transparent"
                  : "bg-[#1ED760] rounded-full"
              } w-1/2 py-2`}
            >
              Billed Monthly
            </button>
          </div>
        </div>

        <LandingPageFooter />
      </div>
    </div>
  );
}
