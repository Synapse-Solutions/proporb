import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}
export default function AuthButton(props: Props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="bg-[#1ED760] text-white rounded h-10 2xl:h-14 w-[100%] mt-10 hover:bg-[#4f9e6a]"
    >
      {props.text}
    </button>
  );
}
