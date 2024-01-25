import React from "react";
import SearchView from "./SearchView";
import EmptyViewComponent from "./EmptyViewComponent";

export default function FilesSingleComponent() {
  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <SearchView />
        <div className="bg-[#1ED760] px-4 py-2 rounded-full text-white h-12 flex items-center">
          + New Files
        </div>
      </div>
      <EmptyViewComponent title="Not Files Found" buttonTitle="Add Files" />
    </div>
  );
}
