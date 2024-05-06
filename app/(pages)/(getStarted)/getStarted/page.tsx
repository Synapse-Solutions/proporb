"use client";
import GetStartedComponent from "@/app/components/getStarted/GetStartedComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import React, { useEffect, useState } from "react";

export default function GetStarted() {
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1000);
  }, []);
  if (isLoadingScreen) {
    return <LoaderScreen />;
  }
  return <GetStartedComponent />;
}
