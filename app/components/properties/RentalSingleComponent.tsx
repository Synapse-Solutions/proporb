import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import SearchView from "@/app/sharedcomponents/SearchView";
import Image from "next/image";
import React from "react";

export default function RentalSingleComponent() {
  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <SearchView />
        <div className="bg-[#1ED760] px-4 py-2 rounded-full text-white h-12 flex items-center">
          + New Unit
        </div>
      </div>
      <EmptyViewComponent title="No Rental found" buttonTitle="New Rental" />
    </div>
  );
}
