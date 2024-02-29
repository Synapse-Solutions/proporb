"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import React, { useState } from "react";
import AddFileModal from "./modals/AddFileModal";

export default function FileComponent() {
  const [isTenantShow, setIsTenantShow] = useState(false);

  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />
          <div className="flex items-center w-full justify-between mt-10">
            <h1 className="text-black text-[30px]">All Files</h1>
          </div>
          <div className="h-[1px] w-full bg-gray-400 mt-5" />
          <SearchView />
          <div className="mt-10">
            <EmptyViewComponent
              onClick={() => setIsTenantShow(true)}
              title="No Files Found"
              buttonTitle="Add File"
            />
          </div>
        </div>
      </div>
      {isTenantShow && <AddFileModal onClose={() => setIsTenantShow(false)} />}
    </div>
  );
}
