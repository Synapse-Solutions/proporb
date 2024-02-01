import Image from "next/image";
import React from "react";

interface Props {
  setIsPropertyAddedModal: (value: boolean) => void;
  title: string;
}
export default function PropertyAddedModal(props: Props) {
  return (
    <div
      className="h-full w-full fixed top-0 right-0 flex items-center justify-center text-black"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="bg-white p-10 rounded-xl flex flex-col items-center ">
        <Image src={"/checkcircle.webp"} width={100} height={100} alt="tick" />
        <p className="font-bold">{props.title}</p>
        <p className="text-[#AAAAAA] text-center">
          {" "}
          This record can not be restore. <br /> Do you want to edit?
        </p>
        <div className="flex justify-between items-center w-full mt-5 px-5 gap-7">
          <button className="border border-[#1ED760] px-10 py-3 rounded-full">
            Edit
          </button>
          <button
            onClick={() => props.setIsPropertyAddedModal(false)}
            className="border bg-[#1ED760] px-10 py-3 rounded-full text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
