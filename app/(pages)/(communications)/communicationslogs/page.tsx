"use client";
import CommunicationLogsComponent from "@/app/components/communications/CommunicationLogsComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import React, { useEffect, useState } from "react";

export default function page() {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1000);
  }, []);
  if (isLoadingScreen) {
    return <LoaderScreen />;
  }
  return <CommunicationLogsComponent />;
}
