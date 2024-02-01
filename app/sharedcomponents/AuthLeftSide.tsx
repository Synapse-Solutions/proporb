import Image from "next/image";
import React from "react";

export default function AuthLeftSide() {
  return (
    <div className="w-[calc(50vw)] bg-black text-white rounded-2xl px-10 pt-10 pb-0 overflow-hidden">
      <h1 className="text-[25px] 2xl:text-[47px] px-10 font-bold">
        Your smart <span className="text-[#1ED760]"> Property Management </span>{" "}
        <br /> System
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
          className="object-contain p-0 w-[100%] h-[calc(70vh)] mt-14 absolute -top-20 "
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
  );
}
