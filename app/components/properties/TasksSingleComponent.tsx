import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import SearchView from "@/app/sharedcomponents/SearchView";
import React from "react";

export default function TasksSingleComponent() {
  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <SearchView width="w-[calc(35vw)]" />
        <div className="flex items-center gap-5">
          <div className="bg-[#1ED760] px-4 py-2 rounded-full text-white h-12 flex items-center">
            + New Task
          </div>
          <div className="bg-[#1ED760] px-4 py-2 rounded-full text-white h-12 flex items-center">
            + New Tenant Request
          </div>
        </div>
      </div>
      <EmptyViewComponent title="Not Tasks Found" buttonTitle="New Task" />
    </div>
  );
}
