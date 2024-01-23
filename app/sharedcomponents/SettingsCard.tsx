import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}
export default function SettingsCard(props: Props) {
  return (
    <div
      className="flex w-[30%] shadow rounded-2xl overflow-hidden"
      onClick={props.onClick}
    >
      <div className="w-[25%] bg-[#ECEEF5] flex h-full justify-center items-center px-5 py-8">
        <Image src={props.icon} alt="Icon" height={40} width={40} />
      </div>
      <div className="w-[75%] bg-white flex flex-col gap-2 justify-center items-start px-5 py-8">
        <p className="text-black text-2xl">{props.title}</p>
        <p className="text-[#797979] text-base">{props.description}</p>
      </div>
    </div>
  );
}
