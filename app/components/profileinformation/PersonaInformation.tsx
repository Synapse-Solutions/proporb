import ProfileInfoSidebar from "@/app/sharedcomponents/ProfileInfoSidebar";
import React from "react";

export default function PersonaInformation() {
  return (
    <div className="w-[calc(90vw)] h-[calc(90vh)] fixed bg-black px-[calc(5vw)] py-[calc(5vh)] top-0">
      <ProfileInfoSidebar />
    </div>
  );
}
