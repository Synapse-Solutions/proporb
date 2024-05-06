"use client";
import NotificationsComponent from "@/app/components/notifications/NotificationsComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import React, { useEffect, useState } from "react";

const notifications = [1, 2, 3, 4, 5, 6];
export default function page() {
  const [activeTab, setActiveTab] = useState("all");
  const [notificationsArray, setNotificationsArray] = useState(notifications);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1000);
  }, []);

  const onDelete = (index: number) => {
    const newNotifications = notificationsArray.filter((_, i) => i !== index);
    setNotificationsArray(newNotifications);
    console.log(newNotifications);
  };
  if (isLoadingScreen) {
    return <LoaderScreen />;
  }
  return (
    <NotificationsComponent
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      notifications={notificationsArray}
      onDelete={onDelete}
    />
  );
}
