import Image from "next/image";
import React from "react";

export default function SigninComponent() {
  return (
    <div className="flex justify-between p-10">
      <div className="w-[calc(50vw)] bg-black h-screen text-white rounded-2xl p-10">
        <h1 className="text-[50px] px-10">
          Your smart{" "}
          <span className="text-[#1ED760]"> Property Management </span> <br />{" "}
          System
        </h1>
        <div className="flex px-10">
          <p className="space-x-5">
            Our comprehensive design system offers you an unparalleled range of
            components, sparking creativity and boosting efficiency.
          </p>
          <Image
            src={"/curly_line.webp"}
            width={200}
            height={200}
            alt="dashboard"
            className="object-contain h-[calc(15vh)] w-[40%]"
          />
        </div>
        <div className="w-[100%] relative mt-[calc(10vh)]">
          <Image
            src={"/singin_image.webp"}
            width={1000}
            height={1000}
            alt="dashboard"
            className="object-cover p-0 w-[100%] "
          />
          <Image
            src={"/dashboard_singin.webp"}
            width={500}
            height={500}
            alt="dashboard"
            className="absolute top-[calc(-18vh)] right-0 object-cover p-0 w-[50%] "
          />
        </div>
      </div>
      <div className="w-[calc(50vw)] flex flex-col items-center justify-center">
        <h1>Welcome Back!</h1>
        <p>
          Dont't have an accont? <span>Sign Up</span>
        </p>
        <form action="submit">
          <div>
            <p>Email Address</p>
            <input type="email" />
          </div>
          <div>
            <p>Password</p>
            <input type="password" />
          </div>
        </form>
      </div>
    </div>
  );
}
