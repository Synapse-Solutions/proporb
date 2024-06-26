"use client";
import Loading from "@/app/loading";
import EmptyView from "@/app/sharedcomponents/EmptyView";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const nestedMenuItems = [
  "All Properties",
  "Resedential ",
  "Commercial ",
  "Community ",
];

interface Props {
  array: any[];
  isLoading: boolean;
  tabs: any;
  selectedSidebarTab: number;
  setSelectedSidebarTab: any;
  activeTab: string;
  setActiveTab: any;
}
export default function AllPropertiesComponent(props: Props) {
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar
        selectedSidebarTab={props.selectedSidebarTab}
        setSelectedSidebarTab={props.setSelectedSidebarTab}
        activeTab="Properties"
        nestedMenuItems={nestedMenuItems}
      />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar />
          <div className="flex items-center w-full justify-between mt-10">
            <h1 className="text-black text-[26px] 2xl:text-[32px]">
              Properties
            </h1>
            <Link
              href={"/newproperty"}
              className="bg-[#1ED760] rounded-full px-7 py-2 text-white hover:bg-[#418a5a]"
            >
              + New Property
            </Link>
          </div>
          <div className="h-[1px] w-full bg-gray-400 mt-5" />

          {props.selectedSidebarTab !== 0 && (
            <div className="flex justify-between items-center">
              {props.tabs.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() => props.setActiveTab(item)}
                  className={`flex items-center justify-center pb-3 mt-5 w-1/3 border-b ${
                    props.activeTab === item
                      ? "border-[#1ED760] text-[#1ED760]"
                      : "border-gray-400 text-black"
                  }`}
                >
                  <h1 className=" text-[18px] 2xl:text-[20px] ">{item}</h1>
                </button>
              ))}
            </div>
          )}
          {props.isLoading ? (
            <Loading />
          ) : (
            <>
              {props.array.length === 0 && <EmptyView />}
              {props.array.map((item, index) => (
                <Link
                  href={{
                    pathname: `/singleproperty`,
                    query: {
                      property_id: item.id,
                    },
                  }}
                >
                  <div
                    key={index}
                    className="flex justify-between p-5 w-full bg-white rounded-2xl border border-gray-400 mt-5"
                  >
                    <div className="flex space-x-2 gap-5">
                      <Image
                        src="/house.webp"
                        alt="house"
                        width={400}
                        height={400}
                      />
                      <div className="flex flex-col justify-between">
                        <div>
                          <h1 className="text-[#1ED760] text-[26px] 2xl:text-[32px] font-bold ">
                            PKR {item.Units[0]?.rent}
                          </h1>
                          <p className="text-black text-[18px] 2xl:text-[20px] ">
                            {item.street}
                          </p>
                          <div className="flex items-center">
                            <Image
                              src="/location_icon.webp"
                              alt="rupee"
                              width={25}
                              height={25}
                              style={{ filter: "invert(1)" }}
                            />
                            <p className="text-black text-[18px] 2xl:text-[20px] ml-2">
                              {item.city +
                                "," +
                                item.state +
                                "," +
                                item.country}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div className="flex space-x-3">
                            <Image
                              src={"/bed.webp"}
                              alt="bed"
                              width={25}
                              height={25}
                            />
                            <p className="text-black text-[18px] 2xl:text-[20px] ml-2">
                              {item?.Units[0]?.rooms || 0}
                            </p>
                          </div>
                          <div className="flex space-x-3">
                            <Image
                              src={"/toilet.webp"}
                              alt="bed"
                              width={25}
                              height={25}
                            />
                            <p className="text-black text-[18px] 2xl:text-[20px] ml-2">
                              {item?.Units[0]?.bathroom || 0}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <Link href={"/singleproperty"}>
                      <div className="flex gap-2 p-3 border border-gray-400 rounded-2xl h-12  cursor-pointer">
                        <Image
                          src={"/notepencil.webp"}
                          alt="heart"
                          width={25}
                          height={25}
                          className="object-contain"
                        />
                        <p>Edit Property</p>
                      </div>
                    </Link>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
