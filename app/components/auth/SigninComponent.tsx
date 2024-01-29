import AuthButton from "@/app/sharedcomponents/AuthButton";
import AuthInput from "@/app/sharedcomponents/AuthInput";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SigninComponent() {
  return (
    <div className="flex justify-between p-10 h-screen">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] flex flex-col justify-center pl-[calc(5vw)] px-[calc(5vw)]">
        <h1 className="text-[40px] font-bold">Welcome Back!</h1>
        <p className=" text-[#645D5D] mt-3">
          Don't have an accont?{" "}
          <Link href={"/register"}>
            {" "}
            <span className="text-[#1ED760] pl-5 cursor-pointer">Sign Up</span>
          </Link>
        </p>
        <div className="mt-10">
          <div>
            <p>Email Address</p>
            <AuthInput type="email" />
          </div>
          <div className="mt-6">
            <p>Password</p>
            <AuthInput type="password" />
          </div>
          <div className="">
            <Link href={"/getStarted1"}>
              <AuthButton text="Log in" />
            </Link>
            <p className="text-[#645D5D] text-center mt-5 2xl:mt-10">
              Forgot Password?
              <Link href={"/forgotpassword"}>
                <span className="text-[#1ED760] pl-5 cursor-pointer">
                  Recover
                </span>
              </Link>
            </p>
          </div>
          <div className="flex items-center mt-5 2xl:mt-10">
            <div className="h-[1px] w-[45%] bg-[#645D5D]" />
            <p className="w-[10%] text-center">OR</p>
            <div className="h-[1px] w-[45%] bg-[#645D5D]" />
          </div>
          <div className="flex justify-between mt-5 2xl:mt-10">
            <div className="border border-gray-500 rounded w-[45%] flex items-center justify-center space-x-3 h-12">
              <Image
                src={"/google.webp"}
                width={70}
                height={70}
                alt="dashboard"
                className="object-contain p-0 w-[30px] "
              />
              <p>Google</p>
            </div>
            <div className="border border-gray-500 rounded w-[45%] flex items-center justify-center space-x-3 h-12">
              <Image
                src={"/facebook.webp"}
                width={70}
                height={70}
                alt="dashboard"
                className="object-contain p-0 w-[30px] "
              />
              <p>Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
