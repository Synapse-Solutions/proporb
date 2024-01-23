import Image from "next/image";
import React from "react";
import SearchView from "./SearchView";

export default function EmptyView() {
  return (
    <div>
      <SearchView />
      <div className="flex flex-col justify-center items-center space-y-4 mt-28">
        <Image
          src="/empty_state.webp"
          alt="properties"
          height={150}
          width={150}
        />
        <p>No Properties found</p>
        <button className="bg-[#1ED760] rounded-full px-7 py-3 text-white">
          + New Property
        </button>
      </div>
    </div>
  );
}
