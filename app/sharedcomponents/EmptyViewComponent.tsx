import Image from "next/image";
import React from "react";

interface EmptyViewProps {
  title: string;
  buttonTitle: string;
}
export default function EmptyViewComponent(props: EmptyViewProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 mt-28">
      <Image
        src="/empty_state.webp"
        alt="properties"
        height={150}
        width={150}
      />
      <p>{props.title}</p>
      <button className="bg-[#1ED760] rounded-full px-7 py-3 text-white">
        + {props.buttonTitle}
      </button>
    </div>
  );
}