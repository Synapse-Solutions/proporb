"use client";
import PeoplesComponent from "@/app/components/peoples/PeoplesComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import { getApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

export default function page() {
  const [tenantsArray, setTenantsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllTenants();
  }, []);

  const getAllTenants = async () => {
    setIsLoading(true);
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;

    try {
      const response = await getApiWithToken("/v1/tenet", token);
      setTenantsArray(response.data.result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("🚀 ~ getAllTenants ~ error:", error);
    }
  };

  return <PeoplesComponent tenantsArray={tenantsArray} isLoading={isLoading} />;
}
