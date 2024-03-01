import { QueryBuilder } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

export default function PremiumPlanModal({
  onClose,
}: { onClose?: () => void } = {}) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="p-10 bg-white flex-col rounded-xl flex items-center gap-3">
        <Image
          src="/checksquareoffset.webp"
          width={50}
          height={50}
          alt="cross icon"
          className="cursor-pointer"
        />
        <p>Premium Plan</p>
        <p className="text-[#AAAAAA] text-[12px]">
          Your Plan Will Not automatically Renew.
        </p>
        <div className="bg-[#F8F8F8] flex gap-4 rounded-xl px-3 py-2 items-center">
          <Image src={"/profileIcon.webp"} width={40} height={40} alt="icon" />
          <p>3 months of plan</p>
        </div>
        <div className="bg-[#F8F8F8] flex gap-4 rounded-xl px-3 py-2 items-center">
          <div className="bg-[#EDEDED] p-2 rounded-full">
            <QueryBuilder />
          </div>
          <p>Expires 17/01/2024</p>
        </div>
        <button
          onClick={onClose}
          className="bg-[#1ED760] rounded-full px-7 py-3 text-white mt-5"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
