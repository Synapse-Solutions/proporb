import SearchView from "@/app/sharedcomponents/SearchView";
import Image from "next/image";
import React from "react";

export default function RentApplicationSingleComponent() {
  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <SearchView />
        <div className="bg-[#1ED760] px-4 py-2 rounded-full text-white h-12 flex items-center">
          + New Unit
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 gap-3">
        <Image
          src="/error_icon.webp"
          alt="properties"
          height={100}
          width={100}
        />
        <p className="text-black font-bold text-[25px] text-center">
          Property Not Set Up <br /> for Rentals Applications
        </p>
        <div className="bg-[#CF5D65] rounded-full text-white w-[35%] text-center py-2">
          View Settings
        </div>
      </div>
    </div>
  );
}
