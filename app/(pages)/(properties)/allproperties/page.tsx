import AllPropertiesComponent from "@/app/components/properties/AllPropertiesComponent";
import React from "react";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function page() {
  return <AllPropertiesComponent array={array} />;
}
