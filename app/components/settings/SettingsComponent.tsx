"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import SettingsCard from "@/app/sharedcomponents/SettingsCard";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React, { useState } from "react";

interface Props {}
export default function SettingsComponent(props: Props) {
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);

  return (
    <div>
      <Sidebar />
      <div className="w-[calc(85vw)] ml-[calc(15vw)] h-[calc(100vh)] p-[4%] overflow-x-hidden">
        <Navbar />

        <div className="flex w-full justify-start my-16">
          <p className="text-black text-3xl font-bold">General Settings</p>
        </div>
        <div>
          <span className="text-black text-2xl font-bold green-underline w-auto">
            Personal
          </span>
          <div className="flex gap-10 my-8">
            <SettingsCard
              title="Personal Information"
              description="Change your name, picture, phone, email, & mailing address."
              icon="/personalInfoIcon.webp"
            />
            <SettingsCard
              title="Login & Password"
              description="Change your email and password"
              icon="/loginSettingIcon.webp"
            />
          </div>
        </div>
        <div>
          <span className="text-black text-2xl font-bold green-underline w-auto">
            Company
          </span>
          <div className="flex gap-10 my-8">
            <SettingsCard
              title="Company Information"
              description="Change your company name, logo, address, login URL, and account owner."
              icon="/company.webp"
            />
            <SettingsCard
              title="Region & Currency"
              description="Change your country, date formats, and currency settings."
              icon="/globe.webp"
            />
            <SettingsCard
              title="Default Accounts"
              description="Change your default bank accounts and chart of accounts."
              icon="/accounts.webp"
            />
          </div>
          <div className="flex gap-10 my-8">
            <SettingsCard
              title="Users "
              description="Add or Edit Users"
              icon="/add_user.webp"
            />
            <SettingsCard
              title="Subscription"
              description="Change your Subscription Plan."
              icon="/subscription.webp"
            />
            <SettingsCard
              title="Company Start Date"
              description="Your company start date is when we should start charging your tenants rent."
              icon="/start_date.webp"
            />
          </div>
        </div>
        <div>
          <span className="text-black text-2xl font-bold green-underline w-auto">
            Property Settings
          </span>
        </div>
      </div>
    </div>
  );
}
