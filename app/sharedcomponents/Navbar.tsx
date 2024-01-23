import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center bg-transparent">
      <div className="w-[50%]">
        <p className="text-black text-lg">Welcome, Ahsan👋</p>
      </div>
      <div className="w-[50%]">
        <div className="flex justify-between bg-white">
          <p>Filter 1</p>
          <Image
            src={"/dropDownArrowBlack.webp"}
            alt="Icon"
            height={5}
            width={5}
          />
        </div>
      </div>
    </div>
  );
}
