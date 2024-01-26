import React from "react";

interface Props {
  type: string;
  placeholder?: string;
}
export default function AuthInput(props: Props) {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="border-[1px] border-[#d0d5dd] rounded h-14 w-[100%] px-3"
      />
    </div>
  );
}
