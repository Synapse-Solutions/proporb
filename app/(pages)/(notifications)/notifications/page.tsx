"use client";
import NotificationsComponent from "@/app/components/notifications/NotificationsComponent";
import React, { useState } from "react";

const notifications = [1, 2, 3, 4, 5, 6];
export default function page() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <NotificationsComponent
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      notifications={notifications}
    />
  );
}
