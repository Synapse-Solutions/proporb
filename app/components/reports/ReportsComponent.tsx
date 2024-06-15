"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React from "react";

const SingleRow = ({ title, isFavourite, onClick }: any) => {
  return (
    <div className="flex w-[48%] justify-between border-b border-gray-400 text-black pb-3 mt-5">
      <h1 className="text-black">{title}</h1>
      <Image
        src={isFavourite ? "/filled_star.webp" : "/empty_star.webp"}
        width={25}
        onClick={onClick}
        height={25}
        alt="star"
        className="cursor-pointer"
      />
    </div>
  );
};

interface Props {
  maintenanceRequestArr: any;
  tenantsArr: any;
  rentalCollectionArr: any;
  handleMaintenanceRequestClick: (index: number) => void;
  handleRentalCollectionClick: (index: number) => void;
}
export default function ReportsComponent(props: Props) {
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar />
      <div className="flex text-black">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-20 mt-10">
          <Navbar />
          <h1 className="font-bold text-[24px] mt-10">Reports</h1>
          <div className="bg-white rounded-lg mb-10 p-10 mt-5">
            <div>
              <div className="mt-5">
                <h1 className="font-bold text-[24px]">Rental Collection</h1>
                <div className="h-[2px] bg-[#1ED760] w-[70px]" />
                <div className="flex mt-5 justify-between flex-wrap">
                  {props.rentalCollectionArr.map(
                    (favourite: any, index: number) => (
                      <SingleRow
                        key={index}
                        onClick={() => props.handleRentalCollectionClick(index)}
                        title={favourite.title}
                        isFavourite={favourite.isFavourite}
                      />
                    )
                  )}
                </div>
              </div>

              <div className="mt-20">
                <h1 className="font-bold text-[24px]">Maintenance Requests</h1>
                <div className="h-[2px] bg-[#1ED760] w-[70px]" />
                <div className="flex mt-5 justify-between flex-wrap">
                  {props.maintenanceRequestArr.map(
                    (favourite: any, index: number) => (
                      <SingleRow
                        key={index}
                        onClick={() =>
                          props.handleMaintenanceRequestClick(index)
                        }
                        title={favourite.title}
                        isFavourite={favourite.isFavourite}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
