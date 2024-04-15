"use client";
import { BorderColor, Delete, MoreVert, Visibility } from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const tenantArray = [1, 2, 3, 4, 5];
interface Props {
  onClose?: () => void;
}

export default function CustomizeTenantModal({ onClose }: Props) {
  const [selectedTenant, setSelectedTenant] = useState<null | number>(null);
  const [deletedItem, setDeletedItem] = useState<null | number>(null);
  const [viewModal, setViewModal] = useState<null | number>(null);
  const [TwoXlSize, setTwoXlSize] = useState(false);

  const onDelete = (index: number) => {
    setDeletedItem(index);
  };

  const onClickOption = (index: number) => {
    if (selectedTenant === index) {
      setSelectedTenant(null);
    } else {
      setSelectedTenant(index);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 1536) {
      setTwoXlSize(true);
    }
  }, []);
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="w-[90%] 2xl:w-[calc(80vw)] h-[calc(90vh)]  bg-white border border-black  flex relative">
        <div className="w-[100%]  relative h-full">
          <div className="text-black w-full px-10 pt-10 h-full overflow-auto ">
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[32px] font-bold">Subscription Details</h1>
                <div className="h-[2px] bg-[#1ED760] w-[100px]" />
              </div>
              <Image
                onClick={onClose}
                src="/cross_icon.webp"
                alt="Icon"
                width={50}
                height={50}
                className="cursor-pointer object-contain"
              />
            </div>
            <div className="flex flex-wrap gap-10 mt-10">
              {tenantArray.map((tenant, index) => (
                <div
                  key={index}
                  className="border border-[#D8D8D8] rounded-xl w-[47%] p-5"
                >
                  <div className="border border-[#D8D8D8] rounded-xl flex justify-between pl-4 py-2">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/profileIcon.webp"
                        width={60}
                        height={60}
                        className="w-[45px] 2xl:w-[60px] h-[45px] 2xl:h-[60px] rounded-full"
                        alt="icon"
                      />
                      <div>
                        <p>Abdullah Dilawar</p>
                        <p className="text-[#AAAAAA] text-[12px]">
                          Example@gmail.com
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onClickOption(index)}
                      className="relative"
                    >
                      <MoreVert
                        style={{
                          fontSize: TwoXlSize ? "60px" : "40px",
                        }}
                      />
                      {selectedTenant === index && (
                        <div className="bg-black rounded-2xl py-5 px-5 absolute top-full right-0 w-[200px] text-white">
                          <div className="flex gap-2 items-center text-base cursor-pointer">
                            <BorderColor fontSize={"medium"} />
                            <p>Edit</p>
                          </div>
                          <div
                            onClick={() => setViewModal(index)}
                            className="flex gap-2 items-center text-base mt-3 cursor-pointer"
                          >
                            <Visibility />
                            <p>View</p>
                          </div>
                          <button
                            onClick={() => onDelete(index)}
                            className="flex gap-2 items-center text-base mt-3 cursor-pointer"
                          >
                            <Delete />
                            <p>Delete</p>
                          </button>
                        </div>
                      )}
                      <div></div>
                    </button>
                  </div>
                  <div className="mt-5">
                    <p>Infomation</p>
                    <p className="text-[#AAAAAA] text-[12px]">
                      13483 lahore, pakistan
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <p>Phone :</p>
                    <p className="text-[#AAAAAA] ">13483 lahore, pakistan</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <p>Family Member :</p>
                    <p className="text-[#AAAAAA] ">5</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <p>Property :</p>
                    <p className="text-[#AAAAAA] ">Heaven Rest house</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <p>Lease Start Date :</p>
                    <p className="text-[#AAAAAA] ">Jul 1, 2024</p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <p>Lease End Date :</p>
                    <p className="text-[#AAAAAA] ">Jul 31, 2024</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-24" />
          </div>
          <div className="flex justify-between absolute bottom-0 pb-10 bg-white pt-3 w-[100%] left-0 px-[calc(3vw)] ">
            <button
              onClick={onClose}
              className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full"
            >
              Cancel
            </button>
            <button
              onClick={() => {}}
              className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full "
            >
              Save
            </button>
          </div>
        </div>
        {deletedItem !== null && (
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
            className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-20 flex items-center justify-center "
          >
            <div className="bg-white p-10 rounded-2xl shadow-md items-center justify-center flex flex-col gap-3">
              <Image src="/info_icon.webp" width={70} height={70} alt="icon" />
              <p>Are you sure you want to delete this record ?</p>
              <div className="flex justify-between  bg-white pt-3 w-[100%] gap-7 ">
                <button
                  onClick={() => setDeletedItem(null)}
                  className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full w-1/2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {}}
                  className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full w-1/2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
        {viewModal !== null && (
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
            className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-20 flex items-center justify-center "
          >
            <div className="bg-white p-10 rounded-2xl shadow-md items-center justify-center flex flex-col w-[40%]">
              <Image
                src="/profileIcon.webp"
                width={70}
                height={70}
                alt="icon"
              />
              <div className="mt-5">
                <p>Abdullah Dilawar</p>
                <p className="text-[#AAAAAA]">abd123@gmail.com</p>
              </div>
              <div className="mt-5">
                <p>Abdullah Dilawar</p>
                <p className="text-[#AAAAAA]">abd123@gmail.com</p>
              </div>
              <div className="flex justify-center  bg-white pt-3 w-[100%] gap-7 ">
                <button
                  onClick={() => setViewModal(null)}
                  className="bg-[#1ED760] text-white border h-10 px-8 mt-5 py-1 rounded-full"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
