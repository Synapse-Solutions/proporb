"use client";
import PeoplesComponent from "@/app/components/peoples/PeoplesComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import { getApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

export default function page() {
  const [tenantsArray, setTenantsArray] = useState([]);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  useEffect(() => {
    getAllTenants();
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1000);
  }, []);

  const getAllTenants = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;

    try {
      const response = await getApiWithToken("/v1/tenet", token);
      setTenantsArray(response.data.result);
    } catch (error) {
      console.log("🚀 ~ getAllTenants ~ error:", error);
    }
  };

  if (isLoadingScreen) {
    return <LoaderScreen />;
  }

  return <PeoplesComponent tenantsArray={tenantsArray} />;
}
