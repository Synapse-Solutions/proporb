import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import React from "react";

export default function AllPropertiesComponent() {
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar activeTab="properties" />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10">
          <Navbar />
          AllPropertiesComponent
        </div>
      </div>
    </div>
  );
}
