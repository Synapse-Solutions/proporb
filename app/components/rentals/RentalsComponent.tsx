"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddTenant from "./models/AddTenant";

const nestedMenuItems = ["Tenants", "Vendors", "Prospects"];
export default function () {
  const [isTenantShow, setIsTenantShow] = useState(false);
  const router = useRouter();

  const onClickNewRental = () => {
    router.push("/newtenant");
  };
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />
          <div className="flex items-center w-full justify-between mt-10">
            <h1 className="text-black text-[30px]">Properties</h1>
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
          <SearchView />
          <div className="mt-10">
            <EmptyViewComponent
              onClick={() => setIsTenantShow(true)}
              title="No Tenant found"
              buttonTitle="New Tenant"
            />
          </div>
        </div>
      </div>
      {isTenantShow && <AddTenant onClose={() => setIsTenantShow(false)} />}
    </div>
  );
}
