"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
}
export default function PropertyReserveFundsModal({ onClose }: Props) {
  // ******* States *******
  const [selectedBankAccount, setSelectedBankAccount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="w-[90%] 2xl:w-[calc(80vw)] h-[calc(90vh)]  bg-white border border-black  flex ">
        <div className="w-[100%]  relative h-full">
          <div className="text-black w-full px-10 pt-10 h-full overflow-auto ">
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[32px] font-bold">Reserve Funds</h1>
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
              <p className="text-[#656D76]">
                Reserve funds will make sure there is always enough money in the
                bank. It is used to calculate the available cash for this
                property.
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-3 mt-10">
                <p className="text-[#101928]">
                  How much money should be in your reserve funds?
                </p>
                <input
                  type="text"
                  placeholder="Enter reserve funds amount"
                  required
                  className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                />
              </div>
            </div>

            <div className="h-24" />
          </div>

          <div className="flex justify-between absolute bottom-0 pb-10 bg-white pt-3 w-[100%] left-0 px-[calc(3vw)] ">
            <button
              onClick={onClose}
              className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full"
            >
              Cancel
            </button>
            <button
              onClick={() => {}}
              className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
