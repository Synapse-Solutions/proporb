"use client";
import LandingPageFooter from "@/app/sharedcomponents/LandingPageFooter";
import LandingPageNavbar from "@/app/sharedcomponents/LandingPageNavbar";
import Image from "next/image";
import React, { useState } from "react";

const pricePlans = [
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
const pricesArray = [
  {
    title: "Standard",
    description: "For those with more sophisticated scheduling needs",
    price: "$12",
    planPrice: "$59.00 /month",
  },
  {
    title: "Premium",
    description: "For those with more sophisticated scheduling needs",
    price: "$12",
    planPrice: "$59.00 /month",
  },
  {
    title: "Enterprise",
    description: "For those with more sophisticated scheduling needs",
    price: "$12",
    planPrice: "$59.00 /month",
  },
];
const FAQs = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isOpen: false,
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isOpen: false,
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isOpen: false,
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isOpen: false,
  },
];
export default function page() {
  const [isMonthlyPayment, setIsMonthlyPayment] = useState(true);
  const [FAQsArray, setFAQsArray] = useState(FAQs);
  return (
    <div className="w-full overflow-hidden bg-[#ffffff]">
      <LandingPageNavbar />
      <div className="h-36" />
      <div className=" text-black px-[5%]">
        <div className="flex flex-col items-center mt-[7vh]">
          <h2 className="text-[30px] 2xl:text-[40px] font-bold text-center">
            Pick the perfect <br /> plan for your team
          </h2>
          <p className="text-[#797979] text-center w-[30%] mt-10">
            Choose The perfect Plan of your needs. Always Flexible to grow
          </p>

          <div className="bg-[#d5f7e2] flex items-center rounded-full px-5 py-3 w-[400px] mt-10">
            <button
              onClick={() => setIsMonthlyPayment(false)}
              className={`${
                isMonthlyPayment
                  ? "bg-transparent hover:text-[#1ED760]"
                  : "bg-[#1ED760] rounded-full text-white"
              } w-1/2 py-2 `}
            >
              Billed Annualy
            </button>
            <button
              onClick={() => setIsMonthlyPayment(true)}
              className={`${
                !isMonthlyPayment
                  ? "bg-transparent hover:text-[#1ED760]"
                  : "bg-[#1ED760] rounded-full text-white"
              } w-1/2 py-2 `}
            >
              Billed Monthly
            </button>
          </div>
        </div>
        <div className="flex w-full justify-evenly mt-10">
          {pricePlans.map((item, index) => (
            <div
              key={index}
              className="bg-[#000000] border-[#1ED760] border p-10 2xl:p-14 rounded-2xl flex flex-col items-center w-[25%] text-center"
            >
              <p className="text-[#797979] mt-10">
                For those with more sophisticated scheduling needs
              </p>
              <p className="text-[#797979] mt-4 text-start w-full">
                <span className="text-[#1ED760] font-bold text-[40px]">
                  $12
                </span>{" "}
                Plan Price $59.00 /month
              </p>
              <div className="w-full">
                <Image
                  src={"/landingpage/checks.webp"}
                  width={50}
                  height={50}
                  alt="checks"
                  className="mt-5 h-[30px] 2xl:h-[50px] w-auto object-contain"
                />
                <Image
                  src={"/landingpage/checks.webp"}
                  width={50}
                  height={50}
                  alt="checks"
                  className="mt-5 h-[30px] 2xl:h-[50px] w-auto object-contain"
                />
                <Image
                  src={"/landingpage/checks.webp"}
                  width={50}
                  height={50}
                  alt="checks"
                  className="mt-5 h-[30px] 2xl:h-[50px] w-auto object-contain"
                />
                <Image
                  src={"/landingpage/checks.webp"}
                  width={50}
                  height={50}
                  alt="checks"
                  className="mt-5 h-[30px] 2xl:h-[50px] w-auto object-contain"
                />
              </div>
              <Image
                src={"/landingpage/arrowright_green.webp"}
                width={50}
                height={50}
                alt="arrow"
                className="mt-5 h-[30px] 2xl:h-[50px] w-auto object-contain cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

        <div className="mt-[5vh]">
          <div className=" text-center">
            <h2 className="text-[30px] 2xl:text-[40px] font-bold text-center">
              Features by plan
            </h2>
            <p>
              Find the subscription that makes <br />
              the most sense for you or your team
            </p>
          </div>
          <div className="flex w-full justify-evenly mt-10 ">
            {pricesArray.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9fbf0] border-[#1ED760] border p-10 2xl:p-14 rounded-2xl flex flex-col items-center w-[25%] text-center"
              >
                <h1 className="font-bold text-[30px] 2xl:text-[40px]">
                  Standard
                </h1>
                <p className="text-[#797979] text-[16px] mt-5">
                  For those with more sophisticated scheduling needs
                </p>
                <p className="text-[#797979] mt-4 text-[12px] 2xl:text-[16px]">
                  <span className="text-[#1ED760] font-bold text-[30px] 2xl:text-[40px]">
                    $12
                  </span>{" "}
                  Plan Price $59.00 /month
                </p>
                <button className=" w-[80%] mt-5 items-center gap-2 bg-[#1ED760] text-white px-5 py-2 rounded hover:bg-[#69af84]">
                  <p>Get Started</p>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1ED760] text-white px-20 py-10 rounded-xl w-full flex justify-between my-[5vh]">
          <h1 className="font-bold text-[30px] 2xl:text-[40px] w-[40%]">
            Frequently Asked <br /> Questions
          </h1>
          <div className="text-white px-5 py-3 w-[50%]">
            {FAQsArray.map((item, index) => (
              <div
                onClick={() => {
                  const newArray = [...FAQsArray];
                  newArray[index].isOpen = !newArray[index].isOpen;
                  setFAQsArray(newArray);
                }}
                key={index}
                className=" border-b border-white pb-3 mt-5"
              >
                <div className="flex gap-3 items-center cursor-pointer">
                  <Image
                    src={"/landingpage/caretright.webp"}
                    width={25}
                    style={{ transform: item.isOpen ? "rotate(90deg)" : "" }}
                    height={25}
                    className="object-contain"
                    alt="arrow"
                  />
                  <p>What Happens to the end of my trail?</p>
                </div>
                {item.isOpen && (
                  <p className="mt-5 ml-[30px]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                    veniam exercitationem dolorem. Officiis eligendi fuga
                    explicabo, provident dolorum ullam aspernatur.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <LandingPageFooter />
      </div>
    </div>
  );
}
