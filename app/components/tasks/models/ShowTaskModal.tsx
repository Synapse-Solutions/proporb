import moment from "moment";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function ShowTaskModal({
  onClose,
  selectedTask,
}: {
  onClose: any;
  selectedTask: any;
}) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="w-[40%]  bg-white border border-gray-400 rounded-xl  p-10 ">
        <div className="flex justify-between ">
          <div>
            <h1 className="text-[32px] font-bold">Note</h1>
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
        <div className="flex justify-between  w-full mt-10">
          <p className="text-[14px] text-[#808191]">
            {" "}
            {/* {moment(selectedTask.createdAt).format("DD MMMM, YYYY")} */}
            27 June, 2017
          </p>
          <div className="flex gap-5 items-center">
            {/* <Image
              src="/tag.webp"
              alt="Edit"
              width={20}
              height={20}
              className="h-[30px] w-auto object-contain"
            />
            <p>Tags</p> */}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 bg-[#1ED760] rounded-full"></div>
          <p>Go to Town Hall</p>
        </div>
        <p className="text-[15px] text-[#808191]">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry'sLorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry'sLorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry'sLorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's
        </p>
        <div className="flex justify-center gap-5 mb-5">
          {selectedTask?.file && (
            <Image
              src={selectedTask?.file}
              alt="File"
              width={1000}
              height={1000}
              className="w-[250px] h-auto mt-10"
            />
          )}
          {/* <Image
            src="/house.webp"
            alt="File"
            width={1000}
            height={1000}
            className="w-[250px] h-auto mt-10"
          /> */}
        </div>
      </div>
    </div>
  );
}
