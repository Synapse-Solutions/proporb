import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React from "react";

interface Props {
  notifications: any;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
export default function NotificationsComponent(props: Props) {
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 pt-10">
          <Navbar />
          <div className="flex w-[100%] justify-between mt-10 items-center">
            <div>
              <h1 className="text-[32px]">Notifications</h1>
              <p>You’ve 3 Unread Notifications</p>
            </div>
            <div className="bg-[#E8FAF0] text-[#1ED760] py-3 px-5 rounded">
              Mark all as read
            </div>
          </div>
          <div className="mt-10">
            <div className="flex space-x-3">
              <div
                style={{
                  color: props.activeTab === "all" ? "#1ED760" : "#000000",
                }}
                onClick={() => props.setActiveTab("all")}
                className="cursor-pointer relative"
              >
                All
                {props.activeTab === "all" && (
                  <div className="bg-[#1ED760] absolute bottom-[-10px] w-[50px] h-[2px] z-10" />
                )}
              </div>
              <div
                style={{
                  color: props.activeTab === "new" ? "#1ED760" : "#000000",
                }}
                onClick={() => props.setActiveTab("new")}
                className="cursor-pointer relative"
              >
                New
                {props.activeTab === "new" && (
                  <div className="bg-[#1ED760] absolute bottom-[-10px] w-[50px] h-[2px] z-10" />
                )}
              </div>
              <div
                style={{
                  color: props.activeTab === "unread" ? "#1ED760" : "#000000",
                }}
                onClick={() => props.setActiveTab("unread")}
                className="cursor-pointer relative"
              >
                Unread
                {props.activeTab === "unread" && (
                  <div className="bg-[#1ED760] absolute bottom-[-10px] w-[50px] h-[2px] z-10" />
                )}
              </div>
            </div>
            <div className="h-[2px] w-[100%] bg-gray-400 rounded mt-[8px] " />
            <div className="">
              {props.notifications.map((notification: any, index: number) => (
                <div
                  key={index}
                  className="flex bg-[#E8FAF0] p-3 items-center justify-between mt-3"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={"/calendar.webp"}
                      width={60}
                      height={60}
                      alt="check"
                    />
                    <div>
                      <p className="text-black">Subscription Renewal</p>
                      <p className="text-[#797979]">
                        Your subscription will renew in 3 days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="bg-[#1ED760] text-[#fff] p-2 rounded">New</p>
                    <div className="flex bg-[#FBEFEC] text-[#CF5D65] p-2 rounded">
                      <Image
                        src={"/trash.webp"}
                        width={20}
                        height={20}
                        alt="check"
                      />
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
