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
    title: "Total Rent Collected",
    isFavourite: false,
  },
  {
    title: "Total Rent Collected",
    isFavourite: false,
  },
  {
    title: "Rent Collected By Quarter",
    isFavourite: false,
  },
  {
    title: "Rent Collected By Year",
    isFavourite: false,
  },
  {
    title: "Rent Collected By Tenant",
    isFavourite: false,
  },
  {
    title: "Rent Collected By Property",
    isFavourite: false,
  },
];
const maintenanceRequestArray = [
  {
    title: "All Maintenance Requests",
    isFavourite: false,
  },
  {
    title: "Pending Maintenance Requests",
    isFavourite: false,
  },
  {
    title: "Maintenance Cheque Paid By Month",
    isFavourite: false,
  },
  {
    title: "Maintenance Cheque Paid By Quarter",
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

  const handleMaintenanceRequestClick = (index: number) => {
    let copy = [...maintenanceRequestArr];
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
      handleMaintenanceRequestClick={handleMaintenanceRequestClick}
      handleRentalCollectionClick={handleRentalCollectionClick}
    />
  );
}
