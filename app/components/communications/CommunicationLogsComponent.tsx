"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const array = [1, 23, 3, 4, 5, 6, 7, 8, 9];
const nestedMenuItems = ["Communications Logs"];
const tabs = ["All", "New", "Unread"];
export default function CommunicationLogsComponent() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar activeTab="Communication" nestedMenuItems={nestedMenuItems} />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />
          <div className="flex items-center w-full justify-between mt-10">
            <h1 className="text-black text-[30px]">Communications Logs</h1>
            {array.length !== 0 && (
              <button className="bg-[#E8FAF0] rounded-lg px-3 py-2 text-[#1ED760]">
                Mark All as Read
              </button>
            )}
          </div>
          {array.length === 0 ? (
            <>
              <div className="h-[1px] w-full bg-gray-400 mt-5" />
              <SearchView />
              <div className="mt-10">
                <div className="flex flex-col justify-center items-center space-y-4 my-28">
                  <Image
                    src="/empty_state.webp"
                    alt="properties"
                    height={150}
                    width={150}
                  />
                  <p>No communications found</p>
                </div>
              </div>
            </>
          ) : (
            <div className=" mt-5">
              <div className="flex w-full border-b border-gray-600">
                {tabs.map((tab, index) => (
                  <div key={index}>
                    <button
                      key={index}
                      onClick={() => setSelectedTab(index)}
                      className={`${
                        index === selectedTab ? "text-[#1ED760]" : "text-black"
                      } rounded-full px-7 py-3 relative`}
                    >
                      {tab}
                      {selectedTab === index && (
                        <div className="h-[1px] w-full bg-[#1ED760] mt-2 absolute -bottom-[1px] left-0" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div>
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#D9F4E5] w-full flex py-3 rounded-lg justify-between px-5 mt-3"
                  >
                    <div className="flex gap-5">
                      <Image
                        src={"/avatar.webp"}
                        width={50}
                        height={50}
                        alt="file icon"
                      />
                      <div>
                        <p className="font-bold">Ahsan Sent a PDF.</p>
                        <p className="text-[#1ED760] text-[12px]">
                          5 minutes ago
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-7 items-center">
                      <button className="bg-[#1ED760] h-4 w-4 rounded-full text-white"></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
