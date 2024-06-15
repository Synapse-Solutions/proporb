"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import Navbar from "@/app/sharedcomponents/Navbar";
import SearchView from "@/app/sharedcomponents/SearchView";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import NewTaskModal from "./models/NewTaskModal";
import Image from "next/image";
import ShowTaskModal from "./models/ShowTaskModal";

const nestedMenuItems = [
  "All Tasks",
  "Tenant Requests",
  "My Tasks",
  "Unassigned Tasks",
];
const array = [1, 23, 3, 4, 5, 6, 7, 8, 9];
interface Props {
  tabs: any;
  activeTab: any;
  setActiveTab: any;
  tasksArray: any;
}
export default function AllTasksComponent(props: Props) {
  const [isTaskModalShow, setisTaskModalShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar activeTab="Tasks" nestedMenuItems={nestedMenuItems} />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />
          <div className="flex items-center w-full justify-between mt-10">
            <h1 className="text-black text-[30px]">All Tasks</h1>
            <div className="flex items-center gap-5">
              <div
                onClick={() => setisTaskModalShow(true)}
                className="bg-[#1ED760] rounded-full px-7 py-2 text-white cursor-pointer hover:bg-[#418a5a]"
              >
                + New Task
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-400 mt-5" />
          {array.length > 0 ? (
            <div className="flex flex-col items-start mt-10 w-full">
              <div className="bg-[#E4E7EC] rounded-md w-full">
                <div className="flex w-full justify-center">
                  <div className="bg-[#bce4d0] flex flex-col items-center px-[50px] py-[20px] mt-5 rounded-md">
                    <Image
                      src={"/default.webp"}
                      height={40}
                      width={40}
                      alt="default"
                    />
                    <p>Ahsan</p>
                    <p className="font-semibold">My Tasks</p>
                  </div>
                </div>
                <div className="flex border-b border-gray-400 gap-10 pl-5 items-center">
                  {props.tabs.map((item: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => props.setActiveTab(item)}
                      className={`flex items-center justify-center pb-3 mt-5 border-b ${
                        props.activeTab === item
                          ? "border-[#1ED760] text-[#1ED760]"
                          : "border-gray-400 text-black"
                      }`}
                    >
                      <h1 className=" text-[13px] 2xl:text-[15px] ">{item}</h1>
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#E4E7EC] rounded-md w-full mt-10 p-5">
                <h4 className="text-[22px]">Service History</h4>
                <div className="flex gap-10 mt-5 items-start">
                  <p className="pb-3 border-b border-[#1ED760]">
                    Past Tasks & Services
                  </p>
                  <select
                    name=""
                    id=""
                    className="border-none outline-none bg-transparent text-[#1ED760]"
                  >
                    <option value="manage">Manage</option>
                  </select>
                </div>
                <div>
                  <div className="border-b mt-5 border-[#bce4d0] flex w-full pb-2 justify-between text-[12px]">
                    <p className="flex-1 flex justify-center">Status</p>
                    <p className="flex-1 flex justify-center">Subject</p>
                    <p className="flex-1 flex justify-center">
                      One Time / Recurring Task
                    </p>
                    <p className="flex-1 flex justify-center">Priority</p>
                    <p className="flex-1 flex justify-center">Due Date</p>
                    <p className="flex-1 flex justify-center">Assignee</p>
                    <p className="flex-1 flex justify-center">Related to</p>
                    <p className="flex-1 flex justify-center "></p>
                  </div>
                  {props.tasksArray.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white flex justify-between w-full rounded-full items-center p-3 mt-4 text-[12px]"
                    >
                      <div className="flex-1 flex justify-center gap-2">
                        <input type="checkbox" />
                        <div className="flex rounded-full px-2 bg-[#bce4d0] py-1 gap-1">
                          <Image
                            src={"/ClockCountdown.png"}
                            height={15}
                            width={15}
                            alt="clock"
                          />
                          <p>In Progress</p>
                        </div>
                      </div>
                      <div className="flex-1 flex justify-center">
                        Lorum Ispum is simply
                      </div>
                      <div className="flex-1 flex justify-center">One Time</div>
                      <div className="flex-1 flex justify-center">High</div>
                      <div className="flex-1 flex justify-center">
                        27 June, 2017
                      </div>
                      <div className="flex-1 flex justify-center">Tenant</div>
                      <div className="flex-1 flex justify-center"></div>
                      <div className="flex-1 flex justify-center">
                        <button
                          onClick={() => setSelectedTask(item)}
                          className="bg-[#1ED760] rounded-full px-3 py-2 text-white"
                        >
                          View Description
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <SearchView />
              <div className="mt-10">
                <EmptyViewComponent
                  onClick={() => setisTaskModalShow(true)}
                  title="No Request found"
                  buttonTitle="New Request"
                />
              </div>
            </>
          )}
        </div>
      </div>
      {isTaskModalShow && (
        <NewTaskModal onClose={() => setisTaskModalShow(false)} />
      )}
      {selectedTask && (
        <ShowTaskModal
          onClose={() => setSelectedTask(null)}
          selectedTask={selectedTask}
        />
      )}
    </div>
  );
}
