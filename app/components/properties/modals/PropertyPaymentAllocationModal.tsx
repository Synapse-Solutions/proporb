"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
}
export default function PropertyPaymentAllocationModal({ onClose }: Props) {
  // ******* States *******
  const [selectedoption, setSelectedoption] = useState(0);

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
                <h1 className="text-[32px] font-bold">Payment Allocation</h1>
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
                Edit how payments are automatically received, either by custom
                priority or date.
              </p>
            </div>
            <div>
              <div className="flex gap-3 items-center mt-10">
                <button
                  onClick={() => setSelectedoption(0)}
                  className="h-[23px] w-[23px] rounded-full border border-[#1ED760] flex items-center justify-center"
                >
                  {selectedoption === 0 && (
                    <div className="h-[13px] w-[13px] rounded-full bg-[#1ED760] " />
                  )}
                </button>
                <p className="text-[#101928]">
                  Use company default settings for this property
                </p>
              </div>
              <div className="flex gap-3 items-center mt-5">
                <button
                  onClick={() => setSelectedoption(1)}
                  className="h-[23px] w-[23px] rounded-full border border-[#1ED760] flex items-center justify-center"
                >
                  {selectedoption === 1 && (
                    <div className="h-[13px] w-[13px] rounded-full bg-[#1ED760] " />
                  )}
                </button>
                <p className="text-[#101928]">
                  Specify settings for this property
                </p>
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
