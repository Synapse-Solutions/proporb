"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CreateNewPopup from "../components/CreateNewPopup";

const muneItems = [
  {
    icon: "/dashBoardIcon.webp",
    name: "Dashboard",
    link: "/generalSettings",
  },
  {
    icon: "/propertiesIcon.webp",
    name: "Properties",
    link: "/allproperties",
  },
  {
    icon: "/rentalsIcon.webp",
    name: "Rentals",
    link: "/rentals",
  },
  {
    icon: "/peopleIcon.webp",
    name: "People",
    link: "/people",
  },
  {
    icon: "/tasksIcon.webp",
    name: "Tasks & Maintenance",
    link: "/tasks",
  },
  {
    icon: "/accountingIcon.webp",
    name: "Accounting",
    link: "/accounting",
  },
  {
    icon: "/communicationIcon.webp",
    name: "Communication",
    link: "/communication",
  },
  {
    icon: "/notesIcon.webp",
    name: "Notes",
    link: "/notes",
  },
  {
    icon: "/filesIcon.webp",
    name: "Files",
    link: "/files",
  },
  {
    icon: "/reportsIcon.webp",
    name: "Reports",
    link: "/reports",
  },
];
interface Props {
  activeTab?: string;
}
export default function Sidebar(props: Props) {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const nestedMenuItems = [
    "All Properties",
    "Resedential Properties",
    "Commercial Properties",
  ];
  return (
    <div
      className={`w-[calc(15vw)] h-[calc(100vh)] bg-[#191414] text-[#A9ACB2]  ${
        !props.activeTab ? "px-5 py-10" : "pl-5"
      } fixed top-0 left-0`}
    >
      {!props.activeTab ? (
        <>
          <div className="flex w-full justify-start my-10">
            <Image src="/logo.webp" alt="Logo" width={80} height={80} />
          </div>
          <div className="flex w-full justify-center my-10">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-[#1ED760] text-white text-bold rounded-3xl py-2 w-[90%] flex justify-center items-center"
            >
              + Create
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {muneItems.map((item, index) => (
              <Link href={item.link}>
                <button key={index} className="flex gap-3 items-center">
                  <Image src={item.icon} alt="Icon" width={25} height={25} />
                  <p>{item.name}</p>
                </button>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 fixed bottom-0 pb-20">
            <div className="flex gap-2 items-center text-[#ffffff]">
              <Image
                src="/getStartedIcon.webp"
                alt="Icon"
                width={20}
                height={20}
              />
              <p>Get Started</p>
              <div className="flex gap-1 items-center text-[#ffffff] ml-1">
                <Image
                  src="/completePercentIcon.webp"
                  alt="Icon"
                  width={15}
                  height={15}
                />
                <p className="text-xs">33% Complete</p>
              </div>
            </div>
            <div className="flex gap-2 items-center text-[#ffffff]">
              <Image
                src="/settingIcon.webp"
                alt="Icon"
                width={20}
                height={20}
              />
              <p>Setting</p>
            </div>
            <div className="flex gap-2 items-center text-[#ffffff]">
              <Image src="/logoutIcon.webp" alt="Icon" width={20} height={20} />
              <p>Logout</p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex">
          <div className="w-[20%]">
            <div className="mr-5 my-10">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={80}
                height={80}
                className="rounded "
              />
            </div>
            <div className="flex w-full justify-center my-10 mr-5">
              <button className="bg-[#1ED760] text-white text-bold rounded-3xl py-2 w-[100%] flex justify-center items-center mr-2">
                +
              </button>
            </div>
            <div className="flex flex-col gap-5">
              {muneItems.map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <Image src={item.icon} alt="Icon" width={25} height={25} />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 absolute bottom-0 pb-20">
              <div className="flex gap-2 items-center text-[#ffffff]">
                <Image
                  src="/getStartedIcon.webp"
                  alt="Icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex gap-2 items-center text-[#ffffff]">
                <Image
                  src="/settingIcon.webp"
                  alt="Icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex gap-2 items-center text-[#ffffff]">
                <Image
                  src="/logoutIcon.webp"
                  alt="Icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#302b2b] w-[85%] h-[calc(100vh)] z-10 pt-20 px-5 text-white">
            <button onClick={() => router.back()}> ← {props.activeTab}</button>

            {nestedMenuItems.map((item, index) => (
              <div key={index} className="flex gap-3 items-center mt-5">
                <p className="text-[13px]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {isPopupOpen && <CreateNewPopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
}
