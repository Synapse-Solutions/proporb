import Image from "next/image";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-[calc(15vw)] h-[calc(100vh)] bg-[#191414] text-[#A9ACB2] py-10 px-5 fixed top-0 left-0">
      <div className="flex w-full justify-start my-10">
        <Image src="/logo.webp" alt="Logo" width={80} height={80} />
      </div>
      <div className="flex w-full justify-center my-10">
        <button className="bg-[#1ED760] text-white text-semibold rounded-3xl px-6 py-2 w-[80%] flex justify-center items-center">
          + Create
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <Image src="/dashBoardIcon.webp" alt="Icon" width={25} height={25} />
          <p>Dashboard</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/propertiesIcon.webp" alt="Icon" width={25} height={25} />
          <p>Properties</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/rentalsIcon.webp" alt="Icon" width={25} height={25} />
          <p>Rentals</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/peopleIcon.webp" alt="Icon" width={25} height={25} />
          <p>People</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/tasksIcon.webp" alt="Icon" width={25} height={25} />
          <p>Tasks & Maintenance</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/accountingIcon.webp" alt="Icon" width={25} height={25} />
          <p>Accounting</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src="/communicationIcon.webp"
            alt="Icon"
            width={25}
            height={25}
          />
          <p>Communication</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/notesIcon.webp" alt="Icon" width={25} height={25} />
          <p>Notes</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/filesIcon.webp" alt="Icon" width={25} height={25} />
          <p>Files</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src="/reportsIcon.webp" alt="Icon" width={25} height={25} />
          <p>Reports</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 fixed bottom-0 pb-20">
        <div className="flex gap-2 items-center text-[#ffffff]">
          <Image src="/getStartedIcon.webp" alt="Icon" width={20} height={20} />
          <p>Get Started</p>
          <div className="flex gap-1 items-center text-[#ffffff] ml-1">
            <Image
              src="/completePercentIcon.webp"
              alt="Icon"
              width={15}
              height={15}
            />
            <p className="text-xs">33% Complete</p>
          </div>
        </div>
        <div className="flex gap-2 items-center text-[#ffffff]">
          <Image src="/settingIcon.webp" alt="Icon" width={20} height={20} />
          <p>Setting</p>
        </div>
        <div className="flex gap-2 items-center text-[#ffffff]">
          <Image src="/logoutIcon.webp" alt="Icon" width={20} height={20} />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
