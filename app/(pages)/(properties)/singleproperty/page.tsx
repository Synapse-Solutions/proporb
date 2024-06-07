"use client";
import SinglePropertyComponents from "@/app/components/properties/SinglePropertyComponents";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  const searchParams = useSearchParams();

  console.log("data=========", searchParams.get("property_id"));
  return <SinglePropertyComponents />;
}
