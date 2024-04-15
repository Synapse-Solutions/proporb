"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logout, PersonOutline, Settings } from "@mui/icons-material";

interface NavbarProps {
  isSearchBarVisible?: boolean;
}
export default function Navbar(props: NavbarProps) {
  const [isprofileClicked, setIsprofileClicked] = useState(false);
  return (
    <div className="flex w-full items-center">
      <div className="w-[50%]">
        <p className="text-black text-[20px] font-bold">Welcome, Ahsan👋</p>
      </div>
      <div className="w-[50%] flex justify-end gap-10 text-[15px]">
        {props.isSearchBarVisible ? (
          <div className="bg-white border border-gray-300 rounded-lg px-2 h-12 flex items-center justify-between w-[calc(20vw)]">
            <input
              type="text"
              placeholder="Search"
              className=" outline-none w-full"
            />
            <Image src="/searchIcon.webp" alt="Icon" height={40} width={40} />
          </div>
        ) : (
          <>
            <div className="flex items-center">
              <div className="flex justify-between bg-white mx-5 py-2 px-2 rounded-lg">
                <select name="" id="" className="outline-none px-2">
                  <option value="option1">Filter 1</option>
                  <option value="option1">Option 1</option>
                  <option value="option1">Option 1</option>
                </select>
              </div>
              <div className="flex justify-between bg-white mx-5 py-2 px-2 rounded-lg">
                <select name="" id="" className="outline-none px-2">
                  <option value="option1">Filter 1</option>
                  <option value="option1">Option 1</option>
                  <option value="option1">Option 1</option>
                </select>
              </div>
            </div>
            <div>
              <Image src="/searchIcon.webp" alt="Icon" height={40} width={40} />
            </div>
          </>
        )}
        <div>
          <Link href="/notifications">
            <Image
              src="/notificationIcon.webp"
              alt="Icon"
              height={40}
              width={40}
            />
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-black font-semibold">Ahsan</p>
          <div className="relative">
            <Image
              onClick={() => setIsprofileClicked(!isprofileClicked)}
              src="/profileIcon.webp"
              alt="Icon"
              height={40}
              width={40}
            />
            {isprofileClicked && (
              <div className="bg-black rounded-2xl py-5 px-5 absolute top-full right-0 w-[200px] text-white">
                <div className="flex gap-2 items-center text-base cursor-pointer">
                  <PersonOutline fontSize={"medium"} />
                  <p>Profile</p>
                </div>
                <Link href="/generalSettings">
                  <div className="flex gap-2 items-center text-base mt-3 cursor-pointer">
                    <Settings />
                    <p>Settings</p>
                  </div>
                </Link>
                <Link href="/ ">
                  <div className="flex gap-2 items-center text-base mt-3 cursor-pointer">
                    <Logout />
                    <p>Logout</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
