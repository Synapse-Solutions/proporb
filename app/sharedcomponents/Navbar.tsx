import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  isSearchBarVisible?: boolean;
}
export default function Navbar(props: NavbarProps) {
  return (
    <div className="flex w-full items-center">
      <div className="w-[50%]">
        <p className="text-black text-[20px] font-bold">Welcome, Ahsan👋</p>
      </div>
      <div className="w-[50%] flex justify-evenly text-[15px]">
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
            <div className="flex justify-between bg-white mx-5 py-2 px-5 rounded-lg ">
              <p className="text-black">Filter 1</p>
              <Image
                src="/dropDownArrowBlack.webp"
                alt="Icon"
                height={5}
                width={20}
              />
            </div>

            <div className="flex justify-between bg-white mx-5 py-2 px-5 rounded-lg">
              <p className="text-black">Filter 2</p>
              <Image
                src="/dropDownArrowBlack.webp"
                alt="Icon"
                height={5}
                width={20}
              />
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
          <Image src="/profileIcon.webp" alt="Icon" height={40} width={40} />
        </div>
      </div>
    </div>
  );
}
