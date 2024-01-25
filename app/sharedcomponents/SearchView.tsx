import Image from "next/image";
import React from "react";

interface Props {
  width?: string;
}
export default function SearchView(props: Props) {
  return (
    <div className="mt-5 flex space-x-5">
      <div
        className={`${
          props.width || "w-[calc(45vw)]"
        } rounded-full border border-gray-400 flex h-12`}
      >
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-[90%] px-5 bg-transparent"
        />
        <div className="bg-[#1ED760] w-[10%] rounded-r-full flex items-center justify-center">
          <Image
            src="/search_icon.webp"
            alt="searchIcon"
            height={30}
            width={30}
          />
        </div>
      </div>
      <Image
        src="/option_icon.webp"
        alt="filterIcon"
        height={50}
        width={50}
        className=" cursor-pointer object-contain"
      />
    </div>
  );
}
