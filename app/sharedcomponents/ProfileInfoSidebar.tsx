import Image from "next/image";
import React from "react";

export default function ProfileInfoSidebar() {
  return (
    <div className="w-[calc(15vw)] h-[100%] bg-[#191414] text-[#A9ACB2] py-10 px-5 ">
      <div className="flex flex-col gap-5">
        <div className="flex items-center space-x-2">
          <Image src="/user_icon.webp" alt="Icon" width={40} height={40} />
          <h1>Personal Information</h1>
        </div>
        <div className="px-5 space-y-5">
          <div className="flex gap-3 items-center mt-10">
            <Image src="/contact_icon.webp" alt="Icon" width={25} height={25} />
            <p>Personal Information</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image src="/call_icon.webp" alt="Icon" width={25} height={25} />
            <p>Contact Information</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              src="/location_icon.webp"
              alt="Icon"
              width={25}
              height={25}
            />
            <p>Address</p>
          </div>
        </div>
      </div>
    </div>
  );
}
