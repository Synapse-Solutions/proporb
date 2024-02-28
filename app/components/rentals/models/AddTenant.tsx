"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import ProfileInfoSidebar from "@/app/sharedcomponents/ProfileInfoSidebar";
import { on } from "events";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
}
export default function AddTenant({ onClose }: Props) {
  // ******* States *******
  const [screenName, setScreenName] = useState("");
  const [contactNumbers, setContactNumbers] = useState([
    {
      type: "mobile",
      number: "",
    },
  ]);
  const [emails, setEmails] = useState([
    {
      type: "personal",
      email: "",
    },
  ]);

  // ******* Functions *******
  const onAddNumber = () => {
    setContactNumbers([
      ...contactNumbers,
      {
        type: "mobile",
        number: "",
      },
    ]);
  };

  const onAddEmail = () => {
    setEmails([
      ...emails,
      {
        type: "personal",
        email: "",
      },
    ]);
  };

  const onClickNext = () => {
    if (screenName === "personal") {
      setScreenName("contact");
    } else if (screenName === "contact") {
      setScreenName("address");
    }
  };
  const onClickBack = () => {
    if (screenName === "contact") {
      setScreenName("personal");
    } else if (screenName === "address") {
      setScreenName("contact");
    }
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="w-[90%] 2xl:w-[calc(80vw)] h-[calc(90vh)]  bg-white border border-black  flex ">
        {screenName !== "" && (
          <ProfileInfoSidebar
            activeTab={screenName}
            setActiveTab={setScreenName}
            title="New Tenant"
          />
        )}
        <div className="w-[100%]  relative h-full">
          {screenName === "" && (
            <div className="text-black w-full px-10 pt-10 h-full overflow-auto ">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">
                    Add To Tenant To Rental
                  </h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <div
                  className={`w-[50%] rounded-full border border-gray-400 flex h-12`}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-none w-[90%] px-5 bg-transparent"
                  />
                  <div className="bg-[#1ED760] w-[10%] rounded-r-full flex items-center justify-center">
                    <Image
                      src="/search_icon.webp"
                      alt="searchIcon"
                      height={30}
                      width={30}
                    />
                  </div>
                </div>
                <div className="bg-[#1ED760] rounded-full px-7 py-2 text-white">
                  + New Tenant
                </div>
              </div>
              <EmptyViewComponent
                onClick={() => setScreenName("personal")}
                title="No Property found"
                buttonTitle="New Property"
              />
            </div>
          )}
          {screenName === "personal" && (
            <div className="text-black w-full px-10 pt-10 h-full overflow-auto ">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">New Tenant</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  height={50}
                  className="cursor-pointer object-contain"
                />
              </div>
              <div className="flex gap-5 items-center mt-5">
                <Image
                  src={"/default.webp"}
                  alt="Icon"
                  width={100}
                  height={100}
                />
                <button className="flex gap-3 border-2 border-[#1ED760] rounded-md px-3 py-1 items-center">
                  <Image
                    src={"/icon_image_add.webp"}
                    alt="Icon"
                    height={30}
                    width={30}
                  />
                  <p>Upload image</p>
                </button>
              </div>
              <div className="mt-10 space-y-2">
                <div className="flex justify-between">
                  <div className="w-[47%]">
                    <p>First Name</p>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      required
                      className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                    />
                  </div>
                  <div className="w-[47%]">
                    <p>Last Name</p>
                    <input
                      required
                      type="text"
                      placeholder="Enter your Last Name"
                      className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <div className="w-[47%]">
                  <p>First Name</p>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    required
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
                <div className="w-[47%]">
                  <p>Last Name</p>
                  <input
                    required
                    type="text"
                    placeholder="Enter your Last Name"
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
              </div>
              <div className="h-24" />
            </div>
          )}
          {screenName === "contact" && (
            <div className="text-black w-full px-10 pt-10 overflow-auto h-full">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Contact Information</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
              </div>

              <div className="mt-10 space-y-2">
                <p>Phone Number</p>
                {contactNumbers.map((number, index) => (
                  <div key={index} className="flex justify-between">
                    <select className="border border-black rounded-lg h-10 w-[45%]">
                      <option value="mobile"> Mobile Number</option>

                      <option value="phone"> Phone Number</option>
                    </select>
                    <input
                      required
                      type="number"
                      placeholder="Enter your phone number"
                      className="border border-black rounded-lg h-10 w-[45%] pl-3"
                    />
                  </div>
                ))}
              </div>
              <p
                onClick={onAddNumber}
                className="text-[#1ED760] mt-5 cursor-pointer"
              >
                + Add Another
              </p>
              <div className="mt-10 space-y-2">
                <p>Email</p>
                {emails.map((number, index) => (
                  <div key={index} className="flex justify-between">
                    <select className="border border-black rounded-lg h-10 w-[45%]">
                      <option value="mobile">Primary</option>

                      <option value="phone">Secondary</option>
                    </select>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      required
                      className="border border-black rounded-lg h-10 w-[45%] pl-3"
                    />
                  </div>
                ))}
              </div>
              <p
                onClick={onAddEmail}
                className="text-[#1ED760] mt-5 cursor-pointer"
              >
                + Add Another
              </p>
              <div className="h-24" />
            </div>
          )}
          {screenName === "address" && (
            <div className="text-black w-full px-10 pt-10 relative">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Address</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  className="cursor-pointer"
                  height={50}
                />
              </div>

              <div className="mt-10 space-y-2">
                <p>Street</p>
                <div className="flex justify-between">
                  <input
                    required
                    type="text"
                    placeholder="Enter your street location"
                    className="border border-black rounded-lg h-10 w-[100%] pl-3"
                  />
                </div>
              </div>
              <div className="mt-10 space-y-2">
                <div className="flex justify-between">
                  <div className="w-[45%] space-y-2">
                    <p>City</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                  <div className="w-[45%] space-y-2">
                    <p>Province</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-10 space-y-2">
                <div className="flex justify-between">
                  <div className="w-[45%] space-y-2">
                    <p>Country</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                  <div className="w-[45%] space-y-2">
                    <p>Zip Code</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
          {screenName !== "" && (
            <div className="flex justify-between absolute bottom-0 pb-10 bg-white pt-3 w-[100%] left-0 px-[calc(3vw)] ">
              <button
                onClick={onClickBack}
                className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full"
              >
                Back
              </button>
              <button
                onClick={onClickNext}
                className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full "
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
