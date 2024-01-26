import AuthButton from "@/app/sharedcomponents/AuthButton";
import AuthInput from "@/app/sharedcomponents/AuthInput";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import React from "react";

interface Props {
  setScreenName: React.Dispatch<React.SetStateAction<any>>;
}
export default function RegisterComponent(props: Props) {
  return (
    <div className="flex justify-between p-10 h-screen">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] flex flex-col pl-[calc(5vw)] pt-[calc(5vh)] px-[calc(5vw)]">
        <h1 className="text-[30px] font-bold">Sign up!</h1>
        <p className="mt-5">Get started by entering your details</p>
        <div className="mt-5">
          <div>
            <p>Full Name</p>
            <AuthInput type="text" />
          </div>
          <div className="mt-5">
            <p>Email Address</p>
            <AuthInput type="email" />
          </div>
          <div className="mt-5">
            <p>Mobile Number</p>
            <AuthInput type="number" />
          </div>
          <div className="mt-5">
            <p>Password</p>

            <AuthInput type="password" />
          </div>
          <div className="mt-5">
            <AuthButton
              onClick={() => props.setScreenName("subscriptiondetails")}
              text="Buy Subscription"
            />
          </div>
          <div className="flex items-center mt-5">
            <div className="h-[1px] w-[45%] bg-black" />
            <p className="w-[10%] text-center">OR</p>
            <div className="h-[1px] w-[45%] bg-black" />
          </div>
          <div className="flex justify-between mt-10">
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
