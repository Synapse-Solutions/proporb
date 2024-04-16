"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import NewTaskModal from "./models/NewTaskModal";

const nestedMenuItems = [
  "All Tasks",
  "Tenant Requests",
  "My Tasks",
  "Unassigned Tasks",
];
const array = [1, 23, 3, 4, 5, 6, 7, 8, 9];
export default function AllTasksComponent() {
  const [isTenantShow, setIsTenantShow] = useState(false);

  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar
        activeTab="Tasks & Maintenance"
        nestedMenuItems={nestedMenuItems}
      />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />
          <div className="flex items-center w-full justify-between mt-10">
            <h1 className="text-black text-[30px]">All Tasks</h1>
            <div className="flex items-center gap-5">
              <div className="bg-[#1ED760] rounded-full px-7 py-2 text-white">
                + New Task
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-400 mt-5" />
          {array.length > 0 ? (
            <div className="flex flex-col items-start mt-10">
              <div className="border-[1px] rounded-md p-5 flex flex-col items-center">
                <p>Maintenance Order Status</p>
                <button className="bg-[#1ED760] rounded-full px-7 py-2 text-white mt-5">
                  Done
                </button>
                <button className="border border-[#1ED760] rounded-full px-7 py-2 text-black mt-5">
                  Pending
                </button>
              </div>
              <div className="mt-10 w-full">
                <p>Maintenance Summary</p>
                <div className="flex text-white w-full mt-10">
                  <div className="bg-[#1ED760] rounded-xl py-1 justify-center w-[25%] flex flex-col items-center ">
                    Finished Maintenance
                  </div>
                  <div className="bg-[#1ED760] rounded-xl py-1 justify-center w-[25%] flex flex-col items-center ">
                    <p>Today</p>
                    <p>11/03/2024</p>
                  </div>
                  <div className="bg-[#1ED760] rounded-xl py-1 justify-center w-[25%] flex flex-col items-center ">
                    <p>Week</p>
                    <p>7 Days</p>
                  </div>
                  <div className="bg-[#1ED760] rounded-xl py-1 justify-center w-[25%] flex flex-col items-center ">
                    <p>Month</p>
                    <p>30 Days</p>
                  </div>
                </div>
                <div className="flex text-black w-full justify-between">
                  <div className="bg-[#CCF1DB] rounded-xl py-2 justify-center w-[25%] flex flex-col items-center ">
                    Presentive
                  </div>
                  <div className="border-[1px] mx-2 rounded-xl py-2 justify-center w-[24%] flex flex-col items-center ">
                    0
                  </div>
                  <div className="border-[1px] mx-2 rounded-xl py-2 justify-center w-[24%] flex flex-col items-center ">
                    0
                  </div>
                  <div className="border-[1px] mx-2 rounded-xl py-2 justify-center w-[24%] flex flex-col items-center ">
                    0
                  </div>
                </div>
                <div className="flex text-black w-full justify-between">
                  <div className="bg-[#CCF1DB] rounded-xl py-2 justify-center w-[25%] flex flex-col items-center ">
                    Breakdown
                  </div>
                  <div className="border-[1px] mx-2 rounded-xl py-2 justify-center w-[24%] flex flex-col items-center ">
                    0
                  </div>
                  <div className="border-[1px] mx-2 rounded-xl py-2 justify-center w-[24%] flex flex-col items-center ">
                    0
                  </div>
                  <div className="border-[1px] mx-2 rounded-xl py-2 justify-center w-[24%] flex flex-col items-center ">
                    0
                  </div>
                </div>
                <div className="flex text-black w-full justify-between">
                  <div className="bg-[#CCF1DB] rounded-xl py-2 justify-center w-[25%] flex flex-col items-center ">
                    Corrective
                  </div>
                  <div className="border-[1px] mx-2 rounded-xl py-2 justify-center w-[24%] flex flex-col items-center ">
                    0
                  </div>
                  <div className="border-[1px] mx-2 rounded-xl py-2 justify-center w-[24%] flex flex-col items-center ">
                    0
                  </div>
                  <div className="border-[1px] mx-2 rounded-xl py-2 justify-center w-[24%] flex flex-col items-center ">
                    0
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <SearchView />
              <div className="mt-10">
                <EmptyViewComponent
                  onClick={() => setIsTenantShow(true)}
                  title="No Request found"
                  buttonTitle="New Request"
                />
              </div>
            </>
          )}
        </div>
      </div>
      {isTenantShow && <NewTaskModal onClose={() => setIsTenantShow(false)} />}
    </div>
  );
}
