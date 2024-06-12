import AuthButton from "@/app/sharedcomponents/AuthButton";
import AuthInput from "@/app/sharedcomponents/AuthInput";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Props {
  user: {
    email: string;
    password: string;
  };
  setUser?: any;
  onClickLogin?: any;
  isOwner: string;
}
export default function SigninComponent(props: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLoginClick = async () => {
    setIsLoggingIn(true);
    try {
      await props.onClickLogin();
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="flex justify-between p-10 h-screen">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] flex flex-col justify-center pl-[calc(5vw)] px-[calc(5vw)]">
        <h1 className="text-[40px] font-bold">Welcome Back!</h1>
        <p className=" text-[#645D5D] mt-3">
          Don't have an accont?{" "}
          <Link
            href={props.isOwner === "tenant" ? "/tenant-register" : "/register"}
          >
            {" "}
            <span className="text-[#1ED760] pl-5 cursor-pointer">Sign Up</span>
          </Link>
        </p>
        <div className="mt-10">
          <div>
            <p>Email Address</p>
            <AuthInput
              value={props.user.email}
              onChange={(e) =>
                props.setUser({ ...props.user, email: e.target.value })
              }
              type="email"
            />
          </div>
          <div className="mt-6">
            <p>Password</p>
            <div
              className={`border-[1px] ${"border-[#d0d5dd]"} rounded h-10 2xl:h-14 w-[100%] px-3 hover:border-[#1ED760] flex items-center justify-between`}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={props.user.password}
                onChange={(e) =>
                  props.setUser({ ...props.user, password: e.target.value })
                }
                placeholder={"Password"}
                className="bg-transparent w-[90%] h-10 2xl:h-14 outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className=" text-sm text-gray-600"
              >
                {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              </button>
            </div>
          </div>
          <div className="">
            <AuthButton
              onClick={handleLoginClick}
              text="Log in"
              disabled={isLoggingIn}
            />

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
            <div
              onClick={() => signIn("google")}
              className="border cursor-pointer border-gray-500 rounded w-[45%] flex items-center justify-center space-x-3 h-12"
            >
              <Image
                src={"/google.webp"}
                width={70}
                height={70}
                alt="dashboard"
                className="object-contain p-0 w-[30px]"
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
