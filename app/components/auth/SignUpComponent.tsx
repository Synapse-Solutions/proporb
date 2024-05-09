import AuthButton from "@/app/sharedcomponents/AuthButton";
import AuthInput from "@/app/sharedcomponents/AuthInput";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  onClickLogin?: any; 
  setIsOwner: any
}
export default function SignUpComponent(props: Props) {
  return (
    <div className="flex justify-between p-10 h-screen">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] flex flex-col pl-[calc(1vw)] px-[calc(2vw)]">
        <h1 className="text-[30px] font-bold">How do u Wish to Proceed</h1>
        <div className="mt-20">
          <div className="flex flex-col items-center">
            <p className="mt-4 mb-0 text-[19px]">Tenant</p>
            <button
              onClick={() => props.setIsOwner("tenant")}
              className="bg-[#1ED760] text-white rounded-full h-10 2xl:h-14 w-[90%] mt-5 hover:bg-[#4f9e6a]"
            >
              Continue as Tenant
            </button>
          </div>
          <div className="mt-0 flex flex-col items-center">
            <p className="mt-10 mb-0 text-[19px]">Property Owner</p>
            <button
              onClick={() => { () => props.setIsOwner("owner") }}
              className="bg-[#1ED760] text-white rounded-full h-10 2xl:h-14 w-[90%] mt-5 hover:bg-[#4f9e6a]"
            >
              Continue as owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
