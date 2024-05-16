"use client";
import AllPropertiesComponent from "@/app/components/properties/AllPropertiesComponent";
import { getApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function page() {
  const [propertiesArray, setPropertiesArray] = useState([]);
  console.log("🚀 ~ page ~ propertiesArray:", propertiesArray);

  useEffect(() => {
    getAllProperties();
  }, []);
  async function getAllProperties() {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    try {
      const response = await getApiWithToken("/v1/property", token);
      setPropertiesArray(response.data.result);
    } catch (error) {
      console.log("🚀 ~ getAllProperties ~ error:", error);
    }
  }
  return <AllPropertiesComponent array={propertiesArray} />;
}
