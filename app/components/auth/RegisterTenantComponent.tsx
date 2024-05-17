"use client"
import AuthButton from "@/app/sharedcomponents/AuthButton";
import AuthInput from "@/app/sharedcomponents/AuthInput";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import { postApi } from "@/app/utils/AppApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  setScreenName: any;
  user: {
    firstName: string;
    lastName : string
    email: string;
    mobile: string;
    password: string;
  };
  setUser: any;
  onClickRegister: any;
  userErrors: any;
}
export default function RegisterTenantComponent(props: Props) {
  const router = useRouter()
  return (
    <div className="flex justify-between p-10 h-screen">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] flex flex-col pl-[calc(5vw)] 2xl:pt-[calc(5vh)] px-[calc(5vw)]">
        <h1 className="text-[30px] font-bold">Sign up!</h1>
        <div className="mt-10 2xl:mt-5">
          <div>
            <p>First Name</p>
            <AuthInput
              value={props.user.firstName}
              isError={props.userErrors.name === true ? true : false}
              placeholder="Enter your first Name"
              onChange={(e) =>
                props.setUser({ ...props.user, firstName: e.target.value })
              }
              type="text"
            />
          </div>
          <div>
            <p>Last Name</p>
            <AuthInput
              value={props.user.lastName}
              isError={props.userErrors.name === true ? true : false}
              placeholder="Enter your Last Name"
              onChange={(e) =>
                props.setUser({ ...props.user, lastName: e.target.value })
              }
              type="text"
            />
          </div>
          <div className="mt-2 2xl:mt-5">
            <p>Email Address</p>
            <AuthInput
              value={props.user.email}
              isError={props.userErrors.email === true ? true : false}
              placeholder="Enter your Email Address"
              onChange={(e) =>
                props.setUser({ ...props.user, email: e.target.value })
              }
              type="email"
            />
          </div>
          <div className="mt-2 2xl:mt-5">
            <p>Mobile Number</p>
            <AuthInput
              value={props.user.mobile}
              isError={props.userErrors.mobile === true ? true : false}
              placeholder="Enter your Mobile Number"
              onChange={(e) =>
                props.setUser({ ...props.user, mobile: e.target.value })
              }
              type="number"
            />
          </div>
          <div className="mt-2 2xl:mt-5">
            <p>Password</p>

            <AuthInput
              value={props.user.password}
              isError={props.userErrors.password === true ? true : false}
              placeholder="Enter your Password"
              onChange={(e) =>
                props.setUser({ ...props.user, password: e.target.value })
              }
              type="password"
            />
          </div>
          <div className="mt-0 2xl:mt-5">
            <AuthButton
              onClick={props.onClickRegister}
              text="Sign Up"
            />
          </div>
          <div className="flex items-center mt-2 2xl:mt-5">
            <div className="h-[1px] w-[45%] bg-black" />
            <p className="w-[10%] text-center">OR</p>
            <div className="h-[1px] w-[45%] bg-black" />
          </div>
          <div className="flex justify-between mt-5 2xl:mt-10">
            <div className="border border-gray-500 rounded w-[45%] flex items-center justify-center space-x-3 h-12 hover:border-[#1ED760] hover:text-[#1ED760] font-bold">
              <Image
                src={"/google.webp"}
                width={70}
                height={70}
                alt="dashboard"
                className="object-contain p-0 w-[30px] "
              />
              <p>Google</p>
            </div>
            <div className="border border-gray-500 rounded w-[45%] flex items-center justify-center space-x-3 h-12 hover:border-[#1ED760] hover:text-[#1ED760] font-bold">
              <Image
                src={"/facebook.webp"}
                width={70}
                height={70}
                alt="dashboard"
                className="object-contain p-0 w-[30px]"
              />
              <p>Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}