"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
  isTenantShow: any;
}
export default function TenantDetailsModal({ onClose, isTenantShow }: Props) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="w-[60%] 2xl:w-[calc(50vw)] h-[calc(90vh)]  bg-white border border-black  flex ">
        <div className="w-[100%]  relative h-full">
          <div className="text-black w-full px-10 pt-10 h-full overflow-auto ">
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[32px] font-bold">Tenant Information</h1>
                <div className="h-[2px] bg-[#1ED760] w-[100px]" />
              </div>
              <Image
                onClick={onClose}
                src="/cross_icon.webp"
                alt="Icon"
                width={50}
                height={50}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={"/black_suit.webp"}
                alt="properties"
                height={150}
                width={150}
                className=" mt-5"
              />
            </div>
            <h1 className="text-[32px] text-[#1ED760] mt-10">
              Basic Information:
            </h1>
            <div className="mt-10">
              <div className="bg-[#EFEFEF] flex items-center py-2 px-7 rounded-lg">
                <p className="w-[65%]">Full Name</p>
                <p className="">Company Name</p>
              </div>
              <div className="bg-[#fff] flex items-center py-2 px-7 rounded-lg">
                <p className="w-[65%]">
                  {isTenantShow.first_name + " " + isTenantShow.last_name}
                </p>
                <p className="">XYZ</p>
              </div>
              <div className="bg-[#EFEFEF] flex items-center py-2 px-7 rounded-lg">
                <p className="w-[65%]">Email</p>
                <p className="">Phone Number</p>
              </div>
              <div className="bg-[#fff] flex items-center py-2 px-7 rounded-lg">
                <p className="w-[65%]">{isTenantShow.email}</p>
                <p className="">{isTenantShow.mobile}</p>
              </div>
              <div className="bg-[#EFEFEF] flex items-center py-2 px-7 rounded-lg">
                <p className="w-[65%]">Address</p>
                <p className="">City</p>
              </div>
              <div className="bg-[#fff] flex items-center py-2 px-7 rounded-lg">
                <p className="w-[65%]">{isTenantShow.address}</p>
                <p className="">XYZ</p>
              </div>
              <div className="bg-[#EFEFEF] flex items-center py-2 px-7 rounded-lg">
                <p className="w-[65%]">Bank Account</p>
                <p className="">Account Title</p>
              </div>
              <div className="bg-[#fff] flex items-center py-2 px-7 rounded-lg">
                <p className="w-[65%]">XYZ</p>
                <p className="">XYZ </p>
              </div>
              <h1 className="text-[32px] text-[#1ED760] mt-10">Note:</h1>
              <div className="bg-[#EFEFEF] flex items-center py-2 px-7 rounded-lg mb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
