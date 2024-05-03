"use client";
import ReportsComponent from "@/app/components/reports/ReportsComponent";
import React, { useState } from "react";

const tenantsArray = [
  {
    title: "Current Tenants",
    isFavourite: false,
  },
  {
    title: "Previous Tenants",
    isFavourite: false,
  },
];
const RentalCollectionArray = [
  {
    title: "Current Rent",
    isFavourite: false,
  },
  {
    title: "Previous Rent",
    isFavourite: false,
  },
];
const maintenanceRequestArray = [
  {
    title: "Current Request",
    isFavourite: false,
  },
  {
    title: "Previous Request",
    isFavourite: false,
  },
];
export default function page() {
  const [tenantsArr, setTenantsArr] = useState(tenantsArray);
  const [rentalCollectionArr, setRentalCollectionArr] = useState(
    RentalCollectionArray
  );
  const [maintenanceRequestArr, setMaintenanceRequestArr] = useState(
    maintenanceRequestArray
  );

  const handleTenantClick = (index: number) => {
    let copy = [...tenantsArr];
    copy[index].isFavourite = !copy[index].isFavourite;
    setTenantsArr(copy);
  };
  const handleMaintenanceRequestClick = (index: number) => {
    let copy = [...maintenanceRequestArray];
    copy[index].isFavourite = !copy[index].isFavourite;
    setMaintenanceRequestArr(copy);
  };
  const handleRentalCollectionClick = (index: number) => {
    let copy = [...rentalCollectionArr];
    copy[index].isFavourite = !copy[index].isFavourite;
    setRentalCollectionArr(copy);
  };

  return (
    <ReportsComponent
      tenantsArr={tenantsArr}
      rentalCollectionArr={rentalCollectionArr}
      maintenanceRequestArr={maintenanceRequestArr}
      handleTenantClick={handleTenantClick}
      handleMaintenanceRequestClick={handleMaintenanceRequestClick}
      handleRentalCollectionClick={handleRentalCollectionClick}
    />
  );
}
