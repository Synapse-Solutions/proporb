import LandingPageFooter from "@/app/sharedcomponents/LandingPageFooter";
import LandingPageNavbar from "@/app/sharedcomponents/LandingPageNavbar";
import Image from "next/image";
import React from "react";

const contactTypes = [
  {
    image: "/landingpage/contact_support.webp",
    title: "Wide Range of Properties",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/landingpage/contact_team.webp",
    title: "Easy Finance Processing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/landingpage/help_center.webp",
    title: "Transparency of Documents",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const moreWays = [
  {
    image: "/landingpage/join_team.webp",
    title: "Join Our Team",
    description: "For those with more sophisticated scheduling needs",
    button: "Contact Support",
  },
  {
    image: "/landingpage/become_partner.webp",
    title: "Become a Partner",
    description: "For those with more sophisticated scheduling needs",
    button: "Get In touch",
  },
];
export default function page() {
  return (
    <div className="w-full overflow-hidden bg-[#ffffff]">
      <LandingPageNavbar />
      <div className="h-36" />
      <div className=" text-black px-[5%]">
        <div className="mt-[5vh]">
          <div className="flex flex-col items-center">
            <h2 className="text-[40px] font-bold text-center">
              How can we help?
            </h2>
            <p className="text-[#797979] text-center w-[30%] mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex w-full justify-evenly my-10">
            {contactTypes.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9fbf0] border-[#1ED760] border px-14 py-8 rounded-2xl flex flex-col items-center w-[25%] 2xl:w-[23%] text-center"
              >
                <div className="h-[120px] flex items-center">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="range"
                  />
                </div>
                <h2 className="text-[#000] text-[30px] mt-5">
                  Wide Range of Properties
                </h2>
                <p className="text-[#797979] mt-10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <button className="flex items-center gap-2 w-full mt-10 justify-center hover:gap-3 transition-all duration-200">
                  <p className="text-black hover:text-[#1ED760] font-bold text-[15px] 2xl:text-[20px]">
                    Contact Support
                  </p>
                  <Image
                    src={"/landingpage/arrowright_green.webp"}
                    width={30}
                    height={30}
                    alt="arrow"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[5vh]">
          <div className="flex flex-col items-center">
            <h2 className="text-[40px] font-bold text-center">
              More ways to reach us
            </h2>
            <p className="text-[#797979] text-center w-[30%] mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="flex w-full justify-evenly my-10">
            {moreWays.map((item, index) => (
              <div
                key={index}
                className="bg-[#e9fbf0] border-[#1ED760] border px-14 py-8 rounded-2xl flex flex-col items-start w-[40%]"
              >
                <div className="h-[80px] 2xl:h-[120px] flex items-center">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    className="h-[70px] 2xl:h-[100px] w-auto object-contain"
                    alt="range"
                  />
                </div>
                <h2 className="text-[#000] text-[30px] mt-5">{item.title}</h2>
                <p className="text-[#797979] mt-5 2xl:mt-10 text-start">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 w-full mt-10 justify-start hover:gap-3 transition-all duration-200">
                  <p className="text-black hover:text-[#1ED760] font-bold text-[20px]">
                    {item.button}
                  </p>
                  <Image
                    src={"/landingpage/arrowright_green.webp"}
                    width={30}
                    height={30}
                    alt="arrow"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        <LandingPageFooter />
      </div>
    </div>
  );
}
