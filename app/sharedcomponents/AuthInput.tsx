import React from "react";

interface Props {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
}
export default function AuthInput(props: Props) {
  return (
    <div>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`border-[1px] ${
          props.isError ? "border-red-500" : "border-[#d0d5dd]"
        } rounded h-10 2xl:h-14 w-[100%] px-3 hover:border-[#1ED760]`}
      />
    </div>
  );
}
