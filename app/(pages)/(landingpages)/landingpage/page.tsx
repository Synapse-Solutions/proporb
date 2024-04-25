import Image from "next/image";
import React from "react";

const benifitsArray = [
  {
    image: "/landingpage/wide_range.webp",
    title: "Wide Range of Properties",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/landingpage/finance.webp",
    title: "Easy Finance Processing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/landingpage/transparency.webp",
    title: "Transparency of Documents",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/landingpage/trust.webp",
    title: "Trusted by Thousands",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
export default function page() {
  return (
    <div className="w-full overflow-hidden bg-white text-black px-[5%]">
      <div className="w-full flex justify-center mt-10">
        <div className="flex justify-between items-center w-full bg-[#e9fbf0] px-10 py-3 rounded-xl">
          <Image
            src={"/landingpage/logo.png"}
            width={100}
            height={100}
            alt="logo"
          />
          <div className="flex items-center gap-5">
            <p>Feature</p>
            <p>Contact Us</p>
            <p>Pricing</p>
          </div>
          <div className="w-[14%]">
            <button className="flex items-center gap-2 bg-[#1ED760] text-white px-5 py-2 rounded-md">
              <Image
                src={"/landingpage/user.webp"}
                width={20}
                height={20}
                alt="user"
              />
              <p>Sign In</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-[15vh]">
        <div className="w-1/2 pt-10">
          <h1 className="text-[42px] font-bold">
            Your smart{" "}
            <span className="text-[#1ED760]">
              {" "}
              Property <br /> Management <br />
            </span>
            System
          </h1>
          <p className="text-[#797979] w-[50%] mt-5 text-[17px]">
            Our comprehensive design system offers you an unparalleled range of
            components, sparking creativity and boosting efficiency.
          </p>
          <div className="flex items-center gap-10 mt-10">
            <button className="flex items-center gap-2 bg-[#1ED760] text-white px-5 py-2 rounded">
              <p>Get Started</p>
              <Image
                src={"/landingpage/arrowright.webp"}
                width={20}
                height={20}
                alt="arrow"
              />
            </button>
            <button className="flex items-center gap-2   px-5 py-2 rounded">
              <Image
                src={"/landingpage/playcircle.webp"}
                width={50}
                height={50}
                alt="arrow"
              />
              <p className="text-[#797979]">How it works?</p>
            </button>
          </div>
        </div>
        <div className="w-1/2 relative flex items-start justify-end ">
          <Image
            src={"/landingpage/dahsboard.webp"}
            height={1000}
            width={1000}
            className="h-[calc(60vh)] w-auto object-contain "
            objectFit="contain"
            alt="hero"
          />
          <Image
            src={"/landingpage/image_44.webp"}
            height={1000}
            width={1000}
            className="h-[40vh] w-auto object-contain absolute -top-[12vh] -right-7 "
            objectFit="contain"
            alt="hero"
          />
          <Image
            src={"/landingpage/curve_arrow.webp"}
            height={1000}
            width={1000}
            className="h-[20vh] w-auto object-contain absolute -top-[20vh] right-0 "
            objectFit="contain"
            alt="hero"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-[#797979] text-center text-[30px]">
            What We Serve
          </h2>
          <h2 className="text-[40px] font-bold text-center">
            The Benefits From <br /> Our Product
          </h2>
          <p className="text-[#797979] text-center w-[30%] mt-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="flex w-full justify-between mt-10">
          {benifitsArray.map((item, index) => (
            <div
              key={index}
              className="bg-[#e9fbf0] border-[#1ED760] border p-14 rounded-2xl flex flex-col items-center w-[20%] text-center"
            >
              <Image
                src={"/landingpage/wide_range.webp"}
                width={100}
                height={100}
                alt="range"
              />
              <h2 className="text-[#000] text-[30px] mt-5">
                Wide Range of Properties
              </h2>
              <p className="text-[#797979] mt-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-[10vh] flex gap-10">
          <div className="w-1/2">
            <Image
              src={"/landingpage/know_about.png"}
              width={1000}
              height={1000}
              className="w-full  object-contain"
              alt="know"
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <h2 className="text-[50px] font-semibold">
              Know About Us In Details
            </h2>
            <p className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s
            </p>
            <div className="flex w-full mt-10 gap-10">
              <div className="bg-[#e9fbf0] rounded-xl flex flex-col h-[50vh] w-[40%] overflow-hidden">
                <div className="h-1/2 bg-[#d5f7e2] flex items-center justify-center">
                  <Image
                    src={"/landingpage/dollar.webp"}
                    width={120}
                    height={120}
                    alt="finance"
                  />
                </div>
                <div className="h-1/2 flex flex-col items-center gap-5 mt-5">
                  <p className="text-[#797979] font-bold text-[30px]">
                    Property Sold
                  </p>
                  <p className="font-bold text-[30px]">127K</p>
                </div>
              </div>
              <div className="bg-[#e9fbf0] rounded-xl flex flex-col h-[50vh] w-[40%] overflow-hidden">
                <div className="h-1/2 bg-[#d5f7e2] flex items-center justify-center">
                  <Image
                    src={"/landingpage/active_projects.webp"}
                    width={120}
                    height={120}
                    alt="finance"
                  />
                </div>
                <div className="h-1/2 flex flex-col items-center gap-5 mt-5">
                  <p className="text-[#797979] font-bold text-[30px]">
                    Active Projects
                  </p>
                  <p className="font-bold text-[30px]">150+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10vh] w-full flex justify-between">
        <div className="w-[30%]">
          <h1 className="text-[50px] font-bold">
            Manage Your <br />
            Properties With <br />
            <span className="text-[#1ED760]"> ProbNob</span>
          </h1>
          <p className="text-[#797979] mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem Ipsum is simply dummy text of the.
          </p>
          <div className="flex items-center gap-10 mt-10">
            <button className="flex items-center gap-2 bg-[#1ED760] text-white px-5 py-2 rounded">
              <Image
                src={"/landingpage/user.webp"}
                width={20}
                height={20}
                alt="arrow"
              />
              <p>Sign In</p>
            </button>
            <button className="flex items-center gap-2   px-5 py-2 rounded">
              <Image
                src={"/landingpage/playcircle.webp"}
                width={50}
                height={50}
                alt="arrow"
              />
              <p className="text-[#797979]">How it works?</p>
            </button>
          </div>
        </div>
        <Image
          src={"/landingpage/propNob.webp"}
          width={1000}
          height={1000}
          alt="image"
          className="w-[60%] h-auto"
        />
      </div>
    </div>
  );
}
