"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SubscriptionModal from "./modals/SubscriptionModal";
import PremiumPlanModal from "./modals/PremiumPlanModal";
import CustomizeTenantModal from "./modals/CustomizeTenantModal";
import AddLeaseModal from "./modals/AddLeaseModal";
import AskUsAnythingModal from "./modals/AskUsAnythingModal";

interface Props {}
export default function GetStartedComponent(props: Props) {
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [premiumModalShow, setPremiumModalShow] = useState(false);
  const [leaseModal, setLeaseModal] = useState(false);
  const [scheduleCall, setScheduleCall] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [customizeTenantPortalModal, setCustomizeTenantPortalModal] =
    useState(false);

  return (
    <div>
      <Sidebar />
      <div className="w-[calc(85vw)] ml-[calc(15vw)] h-[calc(100vh)] p-8 px-12 overflow-x-hidden">
        <Navbar />

        <div className="flex gap-5 w-full my-7">
          <div className="w-[70%] py-8">
            <p className="text-black text-[18px] 2xl:text-[25px] font-bold">
              Get Started
            </p>
            <p className="text-[#797979] text-[13px] 2xl:text-[20px] my-5">
              We're thrilled to have you join our property management family.
              Let's kick off this exciting journey together. With just a few
              simple steps, you'll be well on your way to becoming a property
              management pro!
            </p>
            <div className="flex justify-start items-center gap-3 my-4">
              <div className="bg-[#DDDDDD] rounded-3xl h-4 w-[50%]">
                <div className="bg-[#1ED760] rounded-3xl w-[18%] h-full"></div>
              </div>
              <p className="text-black">18%</p>
            </div>
          </div>
          <div className="w-[30%] bg-white rounded-xl px-6 py-6">
            <div className="flex gap-4 items-center">
              <p className="text-4xl">👋</p>
              <p className="text-[15px]  2xl:text-[20px] text-black font-bold">
                Welcome to Property Management system
              </p>
            </div>
            <p className="text-[#797979] text-[11px]  2xl:text-[17px] my-4">
              If you need any help, we’re here to help you!
            </p>
            <button
              onClick={() => setContactModal(true)}
              className="bg-[#1ED760] text-white text-[12px]  2xl:text-[20px] text-bold rounded-3xl py-2 w-full flex justify-center items-center mt-5"
            >
              Ask us anything
            </button>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl overflow-hidden mt-5">
            <div className="flex justify-between p-5">
              <div className="w-[50%] flex gap-8 items-center justify-start">
                <Image
                  src="/thumbsUpIconGreen.webp"
                  alt="Icon"
                  height={50}
                  width={50}
                />
                <p className="text-black font-bold text-[14px]  2xl:text-[20px]">
                  Subscribe to Property Management System
                </p>
                <Image
                  src="/dropDownArrowBlack.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                />
              </div>
              <div className="w-[50%] flex gap-3 justify-end items-center">
                <Image
                  src="/completedIcon.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                />
                <p className="text-[#1ED760] font-medium text-[14px] 2xl:text-[20px]">
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => setScheduleCall(!scheduleCall)}
            className="bg-white rounded-xl overflow-hidden mt-5"
          >
            <div className="flex justify-between p-5">
              <div className="w-[50%] flex gap-8 items-center justify-start">
                <Image
                  src="/scheduleIconGreen.webp"
                  alt="Icon"
                  height={50}
                  width={50}
                />
                <p className="text-black font-bold text-[14px] 2xl:text-[20px]">
                  Schedule an Onboarding session
                </p>
                <Image
                  src="/dropDownArrowBlack.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                />
              </div>
              <div className="w-[50%] flex gap-5 justify-end items-center"></div>
            </div>
            {scheduleCall && (
              <div className="p-6">
                <div className="bg-[#D8D8D8] w-full h-[1px]"></div>
                <div className="flex justify-between items-center pt-5">
                  <div className="w-[50%]">
                    <p className="text-[#797979] max-w-[500px]">
                      Get a free training on Zoom and learn the best tips and
                      tricks to get the most of it.
                    </p>

                    <button className="bg-[#1ED760] text-white text-bold rounded-3xl py-3 px-2 w-52 flex justify-center items-center mt-5">
                      Schedule a Call
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <Image
                      src="/schedulcall.webp"
                      alt="Image"
                      height={150}
                      width={280}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="bg-white rounded-xl overflow-hidden mt-5"
            onClick={() => {
              setIsCompanyInfoOpen(!isCompanyInfoOpen);
            }}
          >
            <div className="flex justify-between p-5">
              <div className="w-[50%] flex gap-8 items-center justify-start">
                <Image
                  src="/companyInfoIconGreen.webp"
                  alt="Icon"
                  height={50}
                  width={50}
                />
                <p className="text-black font-bold text-[14px] 2xl:text-[20px]">
                  Add Company Information
                </p>
                <Image
                  src="/dropDownArrowBlack.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                  style={
                    isCompanyInfoOpen
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                />
              </div>
              <div className="w-[50%] flex gap-5 justify-end items-center"></div>
            </div>
            {isCompanyInfoOpen && (
              <div className="p-6">
                <div className="bg-[#D8D8D8] w-full h-[1px]"></div>
                <div className="flex justify-between items-center pt-5">
                  <div className="w-[50%]">
                    <p className="text-[#797979] max-w-[500px]">
                      Customize your company settings and add your company name,
                      contact into, and more
                    </p>
                    <button className="bg-[#1ED760] text-white text-bold rounded-3xl py-3 px-2 w-52 flex justify-center items-center mt-5">
                      Add Company info
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <Image
                      src="/youtubeThumbnail.webp"
                      alt="Image"
                      height={150}
                      width={280}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="bg-white rounded-xl overflow-hidden mt-5"
            onClick={() => {
              setIsAddPropertyOpen(!isAddPropertyOpen);
            }}
          >
            <div className="flex justify-between p-5">
              <div className="w-[50%] flex gap-8 items-center justify-start">
                <Image
                  src="/propertyIconGreen.webp"
                  alt="Icon"
                  height={50}
                  width={50}
                />
                <p className="text-black font-bold text-[14px] 2xl:text-[20px]">
                  Add Properties
                </p>
                <Image
                  src="/dropDownArrowBlack.webp"
                  alt="Icon"
                  height={25}
                  width={25}
                  style={
                    isAddPropertyOpen
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                />
              </div>
              <div className="w-[50%] flex gap-5 justify-end items-center"></div>
            </div>
            {isAddPropertyOpen && (
              <div className="p-6">
                <div className="bg-[#D8D8D8] w-full h-[1px]"></div>
                <div className="flex justify-between items-center pt-5">
                  <div className="w-[50%]">
                    <p className="text-[#797979] max-w-[500px]">
                      Creating your properties is the first step towards
                      managing them better. Soon you’ll be automating rent
                      collection and managing your tenant.
                    </p>
                    <Link href="/newproperty">
                      <button className="bg-[#1ED760] text-white text-bold rounded-3xl py-3 px-2 w-52 flex justify-center items-center mt-5">
                        Add Property
                      </button>
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <Image
                      src="/youtubeThumbnail.webp"
                      alt="Image"
                      height={150}
                      width={280}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 
       modals
       */}
      {isSubscriptionModalOpen && (
        <SubscriptionModal
          setPremiumModalShow={setPremiumModalShow}
          onClose={() => setIsSubscriptionModalOpen(false)}
        />
      )}
      {premiumModalShow && (
        <PremiumPlanModal onClose={() => setPremiumModalShow(false)} />
      )}
      {customizeTenantPortalModal && (
        <CustomizeTenantModal
          onClose={() => setCustomizeTenantPortalModal(false)}
        />
      )}
      {leaseModal && <AddLeaseModal onClose={() => setLeaseModal(false)} />}
      {contactModal && (
        <AskUsAnythingModal onClose={() => setContactModal(false)} />
      )}
    </div>
  );
}
