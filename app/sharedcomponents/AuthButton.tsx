import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
}
export default function AuthButton(props: Props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-[#1ED760] text-white rounded h-10 2xl:h-14 w-[100%] mt-10"
    >
      {props.text}
    </button>
  );
}