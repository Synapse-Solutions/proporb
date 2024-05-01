"use client";
import Image from "next/image";
import React, { useState } from "react";
import PropertyAddedModal from "./PropertyAddedModal";
import { postApiWithToken } from "@/app/utils/AppApi";

interface Props {
  setIsCreateAccountModal: (value: boolean) => void;
  bankDetails: any;
  setBankDetails: any;
}
export default function CreateAccountModal({
  setIsCreateAccountModal,
  bankDetails,
  setBankDetails,
}: Props) {
  const [isAccountCompleted, setIsAccountCompleted] = useState(false);

  const onAddBankDetails = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    console.log("🚀 ~ onAddBankDetails ~ token:", token);

    try {
      const response = await postApiWithToken("/v1/bank", bankDetails, token);
      console.log("🚀 ~ onAddBankDetails ~ response:", response);
      if (response.success === true) {
        setIsAccountCompleted(true);
      }
    } catch (error) {
      console.log("🚀 ~ onAddBankDetails ~ error:", error);
    }
  };
  return (
    <div
      className="h-full w-full flex items-center justify-center fixed top-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-[calc(80vw)] bg-white p-10 text-black overflow-auto h-[80vh]">
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
          <p className="text-[20px] text-black">Bank Name</p>
          <input
            type="text"
            value={bankDetails.bank_name}
            onChange={(e) =>
              setBankDetails({ ...bankDetails, bank_name: e.target.value })
            }
            className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
          />
        </div>
        <div className="mt-5">
          <p>Account Type</p>
          <select
            onChange={(e) =>
              setBankDetails({ ...bankDetails, account_type: e.target.value })
            }
            className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
          >
            <option value="current">Current</option>
            <option value="saving">Saving</option>
          </select>
        </div>

        <div className="w-full flex justify-between items-center gap-7 mt-5">
          <div className="w-full">
            <p>Recipient type*</p>
            <select
              name="person"
              id=""
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            >
              <option value="one">Bank Receipt</option>
              <option value="one">Bank Receipt</option>
            </select>
          </div>
          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              value={bankDetails.email}
              onChange={(e) =>
                setBankDetails({ ...bankDetails, email: e.target.value })
              }
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
              value={bankDetails.account_holder_name}
              onChange={(e) =>
                setBankDetails({
                  ...bankDetails,
                  account_holder_name: e.target.value,
                })
              }
              placeholder="Jon Doe"
              className="w-full border border-[gray] rounded-xl  h-12 px-3 mt-3"
            />
          </div>
          <div className="w-full">
            <p>Account Number</p>
            <input
              type="text"
              value={bankDetails.account_number}
              onChange={(e) =>
                setBankDetails({
                  ...bankDetails,
                  account_number: e.target.value,
                })
              }
              placeholder="456***"
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
            onClick={() => onAddBankDetails()}
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
