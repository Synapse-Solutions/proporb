"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TenantDetailsModal from "./modals/TenantDetailsModal";
import AddTenant from "../rentals/models/AddTenant";

interface Props {
  tenantsArray: any;
}

export default function PeoplesComponent(props: Props) {
  const [isTenantShow, setIsTenantShow] = useState(false);
  const [addTenantModal, setAddTenantModal] = useState(false);
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
            <h1 className="text-black text-[30px]">People</h1>
            <div className="flex items-center gap-5">
              <Link href="/newrental">
                <div className="bg-[#1ED760] rounded-full px-7 py-2 text-white hover:bg-[#418a5a]">
                  + New Rentals
                </div>
              </Link>
              <div
                onClick={() => setAddTenantModal(true)}
                className="bg-[#1ED760] rounded-full px-7 py-2 text-white cursor-pointer hover:bg-[#418a5a]"
              >
                + New Tenant
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-400 mt-5" />
          {props.tenantsArray.length === 0 ? (
            <>
              <SearchView />
              <div className="mt-10">
                <EmptyViewComponent
                  title="No Tenant found"
                  buttonTitle="New Tenant"
                />
              </div>
            </>
          ) : (
            <div className="flex flex-wrap gap-5 2xl:gap-10 mt-10">
              {props.tenantsArray.map((item: any, index: number) => (
                <div
                  key={index}
                  className="border border-gray-600 p-5 w-[23%] 2xl:w-[20%] rounded-md flex flex-col items-center text-center"
                >
                  <Image
                    src="/black_suit.webp"
                    alt="properties"
                    height={150}
                    width={150}
                  />
                  <p className="text-[#000] text-[16px] mt-3">
                    {item.first_name + item.last_name}
                  </p>
                  <p className="text-[#000] text-[15px]">{item.address}</p>

                  <p className="text-[#1ED760] text-[14px] mt-3">
                    {item.mobile}
                  </p>
                  <p className="text-[#1ED760] text-[12px] mt-3">
                    {item.email}
                  </p>
                  <button
                    onClick={() => setIsTenantShow(item)}
                    className="bg-[#1ED760] rounded-full px-7 py-2 text-white mt-5 hover:bg-[#418a5a]"
                  >
                    View Tenant
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {isTenantShow && (
        <TenantDetailsModal
          isTenantShow={isTenantShow}
          onClose={() => setIsTenantShow(false)}
        />
      )}
      {addTenantModal && <AddTenant onClose={() => setAddTenantModal(false)} />}
    </div>
  );
}
