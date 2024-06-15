import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  setIsPropertyAddedModal: (value: boolean) => void;
  title: string;
}
export default function PropertyAddedSuccessModal(props: Props) {
  return (
    <div
      className="h-full w-full fixed top-0 right-0 flex items-center justify-center text-black"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="bg-white w-[50%] p-10 py-[50px] justify-center rounded-xl flex flex-col gap-5 items-center ">
        <Image src={"/checkcircle.webp"} width={100} height={100} alt="tick" />
        <p className="font-bold">{props.title}</p>
        <div className="bg-gray-200 w-[calc(100%-40px)] h-[1px] mt-5" />
        <Link href={"/allproperties"}>
          <p className="font-bold underline">Property List</p>
        </Link>
        <button
          onClick={() => props.setIsPropertyAddedModal(false)}
          className="border bg-[#1ED760] px-10 py-3 rounded-full text-white mt-10"
        >
          Ok
        </button>
      </div>
    </div>
  );
}
