"use client";
import FileComponent from "@/app/components/files/FileComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import { getApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

export default function page() {
  const [filesArray, setFilesArray] = useState([]);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  useEffect(() => {
    getAllFiles();
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1000);
  }, []);
  const getAllFiles = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    try {
      const response = await getApiWithToken("/v1/file", token);
      if (response.success) {
        setFilesArray(response.data.result);
      }
    } catch (error) {
      console.log("🚀 ~ getAllFiles ~ error", error);
    }
  };
  if (isLoadingScreen) {
    return <LoaderScreen />;
  }
  return (
    <div>
      <FileComponent filesArray={filesArray} />
    </div>
  );
}
