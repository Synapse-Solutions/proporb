"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React from "react";
import OverViewSingleProperty from "./OverViewSingleProperty";
import ReportsSingleProperty from "./ReportsSingleProperty";
import UnitsSingleComponent from "./UnitsSingleComponent";
import RentalSingleComponent from "./RentalSingleComponent";
import TenantSingleComponent from "./TenantSingleComponent";
import RentApplicationSingleComponent from "./RentApplicationSingleComponent";
import TasksSingleComponent from "./TasksSingleComponent";
import NotesSingleComponent from "@/app/sharedcomponents/NotesSingleComponent";
import FilesSingleComponent from "@/app/sharedcomponents/FilesSingleComponent";

const tabs = [
  "Overview",
  "Reports",
  "Units",
  "Rentals",
  "Tenants",
  "Rent Applications",
  "Tasks",
  "Notes",
  "Files",
  "Settings",
];
export default function SinglePropertyComponents() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar />
      <div className="flex text-black">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar />
          <div className="bg-white rounded-lg m-10 p-10">
            <div className="flex justify-between">
              <div className="flex items-center">
                <h1 className="font-bold">House 1</h1>
                <Image
                  src="/active.webp"
                  width={200}
                  height={200}
                  alt="active"
                  className="object-contain h-10"
                />
              </div>
              <div className="flex gap-5 items-center">
                <button className="border border-gray-400 rounded-full px-5 py-2">
                  + Add Tenant
                </button>
                <button className="border border-gray-400 rounded-full px-5 py-2">
                  New Rental
                </button>
                <button className="border border-gray-400 rounded-full px-5 py-2">
                  New Unit
                </button>
              </div>
            </div>
            <h1 className="font-bold  mt-5">Lease Renewal</h1>
            <p>November 2023</p>
            <div className="flex mt-10">
              {tabs.map((tab, index) => (
                <button
                  onClick={() => setActiveIndex(index)}
                  key={index}
                  className={`w-[10%] border-b flex justify-center pb-2 ${
                    index === activeIndex
                      ? "border-[#1ED760] text-[#1ED760] border-b-4"
                      : "border-gray-400 text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {activeIndex === 0 && <OverViewSingleProperty />}
            {activeIndex === 1 && <ReportsSingleProperty />}
            {activeIndex === 2 && <UnitsSingleComponent />}
            {activeIndex === 3 && <RentalSingleComponent />}
            {activeIndex === 4 && <TenantSingleComponent />}
            {activeIndex === 5 && <RentApplicationSingleComponent />}
            {activeIndex === 6 && <TasksSingleComponent />}
            {activeIndex === 7 && <NotesSingleComponent />}
            {activeIndex === 8 && <FilesSingleComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}
