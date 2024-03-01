"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
}
export default function PropertyLateFeesModal({ onClose }: Props) {
  // ******* States *******
  const [selectedoption, setSelectedoption] = useState(0);
  const [screenNo, setScreenNo] = useState(0);

  const onCancel = () => {
    if (screenNo === 0) {
      onClose && onClose();
    } else {
      setScreenNo(0);
    }
  };

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
                <h1 className="text-[32px] font-bold">Late Fees</h1>
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
            {screenNo === 0 ? (
              <>
                <div className="flex gap-5 items-center mt-5">
                  <p className="text-[#656D76]">
                    If you manage this property on behalf of a landlord, you can
                    set up your late fee structure or use the company default
                    setting
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
                      Use company default late fee structure
                    </p>
                  </div>
                  <div className="flex gap-3 items-center mt-5">
                    <button
                      onClick={() => {
                        setSelectedoption(1);
                        setScreenNo(1);
                      }}
                      className="h-[23px] w-[23px] rounded-full border border-[#1ED760] flex items-center justify-center"
                    >
                      {selectedoption === 1 && (
                        <div className="h-[13px] w-[13px] rounded-full bg-[#1ED760] " />
                      )}
                    </button>
                    <p className="text-[#101928]">
                      Specify a late fee structure for this property
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div className="flex items-center gap-5 mt-5">
                  <div className="w-1/3">
                    <p className="">Days After the invoice is Sent </p>
                    <input
                      type="number"
                      placeholder="10"
                      className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3"
                    />
                  </div>
                  <div className="w-1/3">
                    <p className="">Set Late fee to be Set Amount or %.</p>
                    <input
                      type="text"
                      placeholder="Exact Amount"
                      className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <div className="w-1/3">
                    <p className="">Late Fee Amount </p>
                    <input
                      type="text"
                      placeholder="5.00 USD"
                      className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3"
                    />
                  </div>
                </div>
              </div>
            )}
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
