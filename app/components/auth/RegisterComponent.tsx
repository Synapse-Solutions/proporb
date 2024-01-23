import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import React from "react";

export default function RegisterComponent() {
  return (
    <div className="flex justify-between p-10 h-screen">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] flex flex-col pl-[calc(5vw)] pt-[calc(5vh)] px-[calc(5vw)]">
        <h1 className="text-[30px] font-bold">Sign up!</h1>
        <p className="mt-5">Get started by entering your details</p>
        <form action="submit" className="mt-5">
          <div>
            <p>Full Name</p>
            <input
              type="text"
              className="border border-black rounded h-10 w-[100%]"
            />
          </div>
          <div className="mt-5">
            <p>Email Address</p>
            <input
              type="email"
              className="border border-black rounded h-10 w-[100%]"
            />
          </div>
          <div className="mt-5">
            <p>Mobile Number</p>
            <input
              type="number"
              className="border border-black rounded h-10 w-[100%]"
            />
          </div>
          <div className="mt-5">
            <p>Password</p>

            <input
              type="password"
              className="border border-black rounded h-10 w-[100%]"
            />
          </div>
          <div className="mt-5">
            <button className="bg-[#1ED760] text-white rounded h-10 w-[100%] mt-7">
              Buy Subscription
            </button>
          </div>
          <div className="flex items-center mt-5">
            <div className="h-1 w-[45%] bg-black" />
            <p className="w-[10%] text-center">OR</p>
            <div className="h-1 w-[45%] bg-black" />
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
        </form>
      </div>
    </div>
  );
}