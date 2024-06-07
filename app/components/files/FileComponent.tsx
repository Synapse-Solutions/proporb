"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import React, { useState } from "react";
import AddFileModal from "./modals/AddFileModal";
import ShowFileModal from "./modals/ShowFileModal";
import Image from "next/image";
import moment from "moment";
import Loading from "@/app/loading";

interface Props {
  filesArray: any;
  isLoading: boolean;
}
export default function FileComponent(props: Props) {
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
          {props.isLoading ? (
            <Loading />
          ) : (
            <>
              {props.filesArray.length === 0 ? (
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
                    className="bg-[#1ED760] rounded-full px-7 py-3 text-white hover:bg-[#418a5a]"
                  >
                    + Add File
                  </button>
                  <div className="flex flex-col gap-5 py-5">
                    {props.filesArray.map((item: any, index: number) => (
                      <div className="bg-[#D9F4E5] w-full flex py-3 rounded-lg justify-between px-5">
                        <div className="flex">
                          <Image
                            src={"/file_icon.webp"}
                            width={50}
                            height={50}
                            alt="file icon"
                          />
                          <div>
                            <p>{item.file_name}</p>
                            <p className="text-[#797979] text-[12px]">
                              {moment(item.createdAt).format(
                                "MMMM D, YYYY [at] h:mmA"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-7 items-center">
                          <button
                            onClick={() => setSelectedfile(item)}
                            className="bg-[#1ED760] rounded-md px-7 py-2 text-white"
                          >
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
            </>
          )}
        </div>
      </div>
      {selectedfile && (
        <ShowFileModal
          selectedfile={selectedfile}
          onClose={() => setSelectedfile(null)}
        />
      )}
      {isTenantShow && <AddFileModal onClose={() => setIsTenantShow(false)} />}
    </div>
  );
}
