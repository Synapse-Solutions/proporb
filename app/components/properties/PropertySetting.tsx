"use client";
import SettingsCard from "@/app/sharedcomponents/SettingsCard";
import React, { useState } from "react";
import PropertyGeneralInfoModal from "./modals/PropertyGeneralInfoModal";

let array = [
  {
    title: "General Information",
    description: "Update your property address, name and description.",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Photos ",
    description: "Upload photos for this property ",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Property Type",
    description: "Let us know which property",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Amenities",
    description: "Specify which amenities are included in this property",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Pet Policy",
    description: "Update the pet policy for this property",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Bank Accounts",
    description: "Select the property bank accounts.",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Reserve Funds",
    description: "Edit the amount of reserve funds.",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Late Fees",
    description: "Set the late fees for these leases.",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Tenant Portal",
    description:
      "Resident portal access settings Edit the tenant portal settings.",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Notifications",
    description: "Send email and text notifications to your tenants.",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Payment Instructions",
    description:
      "Specify instructions for tenants on how they should pay their rent.",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Tenant Requests",
    description: "Get notified and automatically assign new tenant requests.",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Rental Applications",
    description: "Edit the property rental applications",
    icon: "/personalInfoIcon.webp",
  },
  {
    title: "Payment Allocation",
    description:
      "Edit how payments are automatically received, either by custom priority or date.",
    icon: "/personalInfoIcon.webp",
  },
];
export default function PropertySetting() {
  const [selectedModalName, setSelectedModalName] = useState("");

  return (
    <div className="mt-5">
      <div className="flex flex-wrap gap-10">
        {array.map((item, index) => (
          <SettingsCard
            key={index}
            onClick={() => setSelectedModalName(item.title)}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
      {selectedModalName === "General Information" && (
        <PropertyGeneralInfoModal />
      )}
    </div>
  );
}
