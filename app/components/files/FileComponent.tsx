"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import React, { useState } from "react";
import AddFileModal from "./modals/AddFileModal";
import ShowFileModal from "./modals/ShowFileModal";
import Image from "next/image";

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
              <div className="flex flex-col gap-5 py-5">
                {array.map((item, index) => (
                  <div className="bg-[#D9F4E5] w-full flex py-3 rounded-lg justify-between px-5">
                    <div className="flex">
                      <Image
                        src={"/file_icon.webp"}
                        width={50}
                        height={50}
                        alt="file icon"
                      />
                      <div>
                        <p>MyProperty.mp4</p>
                        <p className="text-[#797979] text-[12px]">
                          March 11, 2012 at 12;42pm
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-7 items-center">
                      <button className="bg-[#1ED760] rounded-md px-7 py-2 text-white">
                        View
                      </button>
                      <button className="bg-[#FBEFEC] rounded-md px-7 py-2 text-[#CF5D65] flex gap-2 items-center">
                        <Image
                          src={"/trash.webp"}
                          width={20}
                          height={20}
                          alt="delete"
                        />
                        <p>Delete</p>
                      </button>
                    </div>
                  </div>
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
