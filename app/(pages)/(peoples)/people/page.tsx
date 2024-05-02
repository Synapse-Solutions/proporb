"use client";
import PeoplesComponent from "@/app/components/peoples/PeoplesComponent";
import { getApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

export default function page() {
  const [tenantsArray, setTenantsArray] = useState([]);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  useEffect(() => {
    getAllTenants();
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 2000);
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
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Processing...
        </button>
      </div>
    );
  }

  return <PeoplesComponent tenantsArray={tenantsArray} />;
}
