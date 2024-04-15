import Image from "next/image";
import React from "react";

interface Tab {
  name: string;
  icon: string;
}

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  title?: string;
}

const tabs: Tab[] = [
  { name: "General Information", icon: "/contact_icon.webp" },
  { name: "Photos", icon: "/call_icon.webp" },
  { name: "Property Type", icon: "/location_icon.webp" },
  { name: "Amenities", icon: "/location_icon.webp" },
  { name: "Pet Policy", icon: "/location_icon.webp" },
];

export default function GeneralInfoSidebar(props: Props) {
  return (
    <div className="w-[25%] h-[100%] bg-[#191414] text-[#A9ACB2] py-10 px-5 ">
      <div className="flex flex-col gap-5">
        <div className="flex items-center space-x-2">
          <Image
            src="/user_icon.webp"
            alt="Icon"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1>{props.title || "Edit Property"}</h1>
        </div>
        <div className="px-5 space-y-5 text-base">
          {tabs.map((tab, index: any) => (
            <div
              key={index}
              onClick={() => props.setActiveTab(index)}
              style={{
                backgroundColor:
                  props.activeTab === index ? "#5e5a5a" : "#191414",
                padding: "10px",
              }}
              className="flex gap-3 items-center rounded-lg"
            >
              <Image src={tab.icon} alt="Icon" width={25} height={25} />
              <p>{tab.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
