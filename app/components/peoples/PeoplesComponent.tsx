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
const nestedMenuItems = ["Tenants", "Vendors", "Prospects"];
export default function PeoplesComponent() {
  const [isTenantShow, setIsTenantShow] = useState(false);
  const router = useRouter();

  const onClickNewRental = () => {
    router.push("/newtenant");
  };
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar activeTab="People" nestedMenuItems={nestedMenuItems} />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />
          <div className="flex items-center w-full justify-between mt-10">
            <h1 className="text-black text-[30px]">People</h1>
            <div className="flex items-center gap-5">
              <Link href="/newrental">
                <div className="bg-[#1ED760] rounded-full px-7 py-2 text-white">
                  + New Rentals
                </div>
              </Link>
              <div className="bg-[#1ED760] rounded-full px-7 py-2 text-white">
                + New Tenant
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-400 mt-5" />
          {array.length === 0 ? (
            <>
              <SearchView />
              <div className="mt-10">
                <EmptyViewComponent
                  onClick={() => setIsTenantShow(true)}
                  title="No Tenant found"
                  buttonTitle="New Tenant"
                />
              </div>
            </>
          ) : (
            <div>
              <div className="border border-gray-600 p-5 rounded-md flex flex-col items-center">
                <Image
                  src="/black_suit.webp"
                  alt="properties"
                  height={150}
                  width={150}
                />
                <p className="text-[#000] text-[16px] mt-3">Name</p>
                <p className="text-[#000] text-[15px]">
                  100 Southeast Alder Street
                </p>
                <p className="text-[#8D8D8D] text-[13px]">Portland, QR 97724</p>
                <p className="text-[#1ED760] text-[14px] mt-3">
                  (924) 333 6456
                </p>
                <p className="text-[#1ED760] text-[12px] mt-3">
                  Info@Email.com
                </p>
                <button className="bg-[#1ED760] rounded-full px-7 py-2 text-white mt-5">
                  View Tenant
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}