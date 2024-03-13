"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import React, { useState } from "react";
import AddFileModal from "./modals/AddFileModal";
import ShowFileModal from "./modals/ShowFileModal";

const array = [1, 23, 3, 4, 5, 6, 7, 8, 9];
export default function FileComponent() {
  const [isTenantShow, setIsTenantShow] = useState(false);
  const [selectedfile, setSelectedfile] = useState<any>(null);

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
          {array.length === 0 ? (
            <div className="mt-10">
              <EmptyViewComponent
                onClick={() => setIsTenantShow(true)}
                title="No Files Found"
                buttonTitle="Add File"
              />
            </div>
          ) : (
            <div className="mt-10">
              <button
                onClick={() => setIsTenantShow(true)}
                className="bg-[#1ED760] rounded-full px-7 py-3 text-white"
              >
                + Add File
              </button>
              <div className="flex flex-wrap gap-5 pt-5">
                {array.map((item, index) => (
                  <button
                    onClick={() => setSelectedfile(item)}
                    key={index}
                    className="rounded-xl p-5 flex flex-col gap-5 shadow shadow-black w-[calc(15vw)]"
                  >
                    <p className="text-[12px] text-[#808191]">27 June, 2017</p>
                    <p>Go to Town Hall</p>
                    <p className="text-[15px] text-[#808191] text-start">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedfile && <ShowFileModal onClose={() => setSelectedfile(null)} />}
      {isTenantShow && <AddFileModal onClose={() => setIsTenantShow(false)} />}
    </div>
  );
}
