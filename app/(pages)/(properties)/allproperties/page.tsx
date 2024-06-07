"use client";
import AllPropertiesComponent from "@/app/components/properties/AllPropertiesComponent";
import { getApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

const residentialProperties = ["House", "Apartment", "Farm House"];
let commercialProperties = [
  "Office",
  "Rental Space",
  "Buildings",
  "Warehouse",
  "Factory",
  "Restaurant",
];
const communityProperties = [
  "Residential Homes",
  "Apartments",
  "Villas",
  "Others",
];

const nestedMenuItems = [
  "All Properties",
  "Resedential ",
  "Commercial ",
  "Community ",
];
export default function page() {
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All Properties");
  const [selectedSidebarTab, setSelectedSidebarTab] = useState(0);

  useEffect(() => {
    getAllProperties();
  }, []);
  async function getAllProperties() {
    setIsLoading(true);
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    try {
      const response = await getApiWithToken("/v1/property", token);
      setPropertiesArray(response.data.result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("🚀 ~ getAllProperties ~ error:", error);
    }
  }

  const tabs =
    selectedSidebarTab === 0
      ? residentialProperties
      : selectedSidebarTab === 1
      ? commercialProperties
      : communityProperties;

  let filterData = () => {
    if (propertiesArray.length > 0) {
      if (selectedSidebarTab === 1) {
        return propertiesArray.filter(
          (item: any) => item.type === "Residential Property"
        );
      }
      return propertiesArray;
    } else {
      return propertiesArray;
    }
  };
  return (
    <AllPropertiesComponent
      tabs={tabs}
      array={filterData()}
      isLoading={isLoading}
      selectedSidebarTab={selectedSidebarTab}
      setSelectedSidebarTab={setSelectedSidebarTab}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
}
