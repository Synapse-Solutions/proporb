import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React from "react";

interface Props {}
export default function GetStartedComponent(props: Props) {
  return (
    <div>
      <Sidebar />
      <div className="flex"></div>
    </div>
  );
}
