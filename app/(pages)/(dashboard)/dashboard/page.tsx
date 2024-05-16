"use client";
import DashboardComponent from "@/app/components/dashboard/DashboardComponent";
import LoaderScreen from "@/app/sharedcomponents/loader/LoaderScreen";
import React, { useEffect, useState } from "react";

export default function page() {
  return (
    <div>
      <DashboardComponent />
    </div>
  );
}
