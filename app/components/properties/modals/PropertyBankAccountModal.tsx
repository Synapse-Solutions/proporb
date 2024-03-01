"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
}
export default function PropertyBankAccountModal({ onClose }: Props) {
  // ******* States *******
  const [selectedBankAccount, setSelectedBankAccount] = useState(0);
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
                <h1 className="text-[32px] font-bold">
                  Property Bank Accounts
                </h1>
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
                    You can set different bank accounts for each property as
                    needed, or use your default accounts.
                  </p>
                </div>
                <div>
                  <div className="flex gap-3 items-center mt-10">
                    <button
                      onClick={() => setSelectedBankAccount(0)}
                      className="h-[23px] w-[23px] rounded-full border border-[#1ED760] flex items-center justify-center"
                    >
                      {selectedBankAccount === 0 && (
                        <div className="h-[13px] w-[13px] rounded-full bg-[#1ED760] " />
                      )}
                    </button>
                    <p className="text-[#101928]">
                      Use company default bank accounts
                    </p>
                  </div>
                  <div className="flex gap-3 items-center mt-5">
                    <button
                      onClick={() => {
                        setScreenNo(1);
                        setSelectedBankAccount(1);
                      }}
                      className="h-[23px] w-[23px] rounded-full border border-[#1ED760] flex items-center justify-center"
                    >
                      {selectedBankAccount === 1 && (
                        <div className="h-[13px] w-[13px] rounded-full bg-[#1ED760] " />
                      )}
                    </button>
                    <p className="text-[#101928]">
                      Specify a bank account for this property
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div className="mt-5">
                  <p className="">Account Type</p>
                  <select className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3">
                    <option
                      value="plan"
                      className="border border-black rounded h-10 w-[100%]"
                    >
                      Local account
                    </option>

                    <option value="planone">Plan one</option>

                    <option value="plantwo">Plan two</option>
                  </select>
                </div>
                <p className="bg-[#F8F8F8] w-full px-5 rounded-2xl py-2 mt-5">
                  Recipient Bank Details
                </p>
                <div className="flex items-center gap-5 mt-5">
                  <div className="w-1/2">
                    <p className="">Recipient Type*</p>
                    <select className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3">
                      <option
                        value="plan"
                        className="border border-black rounded h-10 w-[100%]"
                      >
                        Local account
                      </option>

                      <option value="planone">Plan one</option>

                      <option value="plantwo">Plan two</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <p className="">Email</p>
                    <input
                      type="email"
                      placeholder="Example@gmail.com"
                      className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <div className="w-1/2">
                    <p className="">Full Name of the Account Holder</p>
                    <input
                      type="text"
                      placeholder="Example@gmail.com"
                      className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="">Account Type</p>
                    <input
                      type="text"
                      placeholder="Example@gmail.com"
                      className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <div className="w-1/2">
                    <p className="">Account Number</p>
                    <input
                      type="text"
                      placeholder="75934908"
                      className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3"
                    />
                  </div>
                </div>
                <p className="bg-[#F8F8F8] w-full px-5 rounded-2xl py-2 mt-5">
                  Account Details
                </p>
                <div className="flex items-center gap-5 mt-5">
                  <div className="w-1/2">
                    <p className="">Country</p>
                    <input
                      type="text"
                      placeholder="Country"
                      className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="">City</p>
                    <input
                      type="text"
                      placeholder="City"
                      className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 mt-3"
                    />
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div className="w-1/2">
                    <p className="">Recipient Address</p>
                    <textarea
                      name=""
                      id=""
                      rows={10}
                      className="border-[1px] border-[#d0d5dd] rounded 14 w-[100%] px-3 mt-3"
                    ></textarea>
                  </div>
                  <div className="w-1/2">
                    <p className="">State</p>
                    <input
                      type="text"
                      placeholder="State"
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
              onClick={onCancel}
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
