"use client";
import FileComponent from "@/app/components/files/FileComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import { getApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

export default function page() {
  const [filesArray, setFilesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getAllFiles();
  }, []);
  const getAllFiles = async () => {
    setIsLoading(true);
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    try {
      const response = await getApiWithToken("/v1/file", token);
      if (response.success) {
        setFilesArray(response.data.result);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("🚀 ~ getAllFiles ~ error", error);
    }
  };

  return (
    <div>
      <FileComponent isLoading={isLoading} filesArray={filesArray} />
    </div>
  );
}
