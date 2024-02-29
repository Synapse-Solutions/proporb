"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const nestedMenuItems = ["Communications Logs"];
export default function CommunicationLogsComponent() {
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar activeTab="Communication" nestedMenuItems={nestedMenuItems} />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />
          <div className="flex items-center w-full justify-between mt-10">
            <h1 className="text-black text-[30px]">Communications Logs</h1>
          </div>
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
        </div>
      </div>
    </div>
  );
}
