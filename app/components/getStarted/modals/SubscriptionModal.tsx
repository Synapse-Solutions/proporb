"use client";
import { Add } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";

const faqsarray = [
  {
    question: "How do I upgrade my plan?",
  },
  {
    question: "How do I downgrade my plan?",
  },
  {
    question: "How do I add more users?",
  },
  {
    question: "How do I add more units?",
  },
  {
    question: "How do I view my previous payments and invoices?",
  },
  {
    question: "How do I export my information?",
  },
  {
    question: "Can I put my account on hold?",
  },
  {
    question: "If I cancel, will I lose my information?",
  },
  {
    question: "How do I cancel my plan?",
  },
  {
    question: "I have more questions.",
  },
];

interface Props {
  onClose?: () => void;
  setPremiumModalShow: (value: boolean) => void;
}
export default function SubscriptionModal({
  onClose,
  setPremiumModalShow,
}: Props) {
  // ******* States *******

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
                <h1 className="text-[32px] font-bold">Subscription Details</h1>
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
            <div className="flex justify-center gap-10 mt-10">
              <div className="bg-[#F7F7F7] rounded-xl p-7 flex flex-col gap-3 w-[24%]">
                <p>Starter Plan</p>
                <p className="text-[#797979] text-[12px]">
                  Plan Price $59.00 /month
                </p>
                <button
                  onClick={() => setPremiumModalShow(true)}
                  className="bg-[#1ED760] rounded-full py-2 px-4 text-white"
                >
                  upgrade plan
                </button>
              </div>
              <div className="bg-[#F7F7F7] rounded-xl p-7 flex flex-col gap-3 w-[24%]">
                <p>Payment Method</p>
                <div className="flex gap-3">
                  <div className="h-[23px] w-[23px] rounded-full border border-[#1ED760] flex items-center justify-center">
                    <div className="h-[13px] w-[13px] rounded-full bg-[#1ED760] " />
                  </div>
                  <p className="text-[#797979] text-[12px]">
                    Plan Price $59.00 /month
                  </p>
                </div>
                <button className="bg-[#1ED760] rounded-full py-2 px-4 text-white">
                  upgrade plan
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-10 mt-10">
              <div className="bg-[#F7F7F7] rounded-xl px-7 py-2 flex flex-col gap-3 w-1/2">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/dollar_icon.webp"}
                    alt="Icon"
                    width={30}
                    height={30}
                  />
                  <p>Next Payment</p>
                </div>
                <p className="text-[#1ED760] text-[18px]">
                  $29.50{" "}
                  <span className="text-[#656D76] text-[12px]">
                    on 12/8/2023{" "}
                  </span>
                </p>
              </div>
              <div className="bg-[#F7F7F7] rounded-xl px-7 py-2 flex flex-col gap-3 w-1/2">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/dollar_icon.webp"}
                    alt="Icon"
                    width={30}
                    height={30}
                  />
                  <p>Last Payment</p>
                </div>
                <p className="text-[#1ED760] text-[18px]">
                  $29.50{" "}
                  <span className="text-[#656D76] text-[12px]">
                    on 12/8/2023{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-[32px] font-bold">FAQS</h1>
              <div className="h-[2px] bg-[#1ED760] w-[100px]" />
            </div>
            <div className="mt-10">
              {faqsarray.map((faq, index) => (
                <div key={index} className="flex justify-between mt-5">
                  <p>{faq.question}</p>
                  <Add />
                </div>
              ))}
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
