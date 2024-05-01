"use client";
import NewRentalsComponent from "@/app/components/rentals/NewRentalsComponent";
import { getApiWithToken, postApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";

export default function page() {
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [rentalPayload, setRentalPayload] = useState({
    property_id: "",
    unit_id: 1,
    rent_start_date: "",
    tenet_id: 1,
    rent_amount: "",
    is_security_deposit: true,
    rental_aggrement: "",
    security_deposit_amount: "",
  });

  useEffect(() => {
    getAllProperties();
  }, []);

  async function getAllProperties() {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    console.log("🚀 ~ getAllProperties ~ token:", token);
    try {
      const response = await getApiWithToken("/v1/property", token);
      console.log("🚀 ~ getAllProperties ~ response:", response);
      setPropertiesArray(response.data.result);
    } catch (error) {
      console.log("🚀 ~ getAllProperties ~ error:", error);
    }
  }

  const addRentalFunction = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    console.log("🚀 ~ addRentalFunction ~ token:", token);

    try {
      const response = await postApiWithToken(
        "/v1/rental",
        rentalPayload,
        token
      );
      console.log("🚀 ~ addRentalFunction ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ addRentalFunction ~ error:", error);
    }
  };
  return (
    <NewRentalsComponent
      propertiesArray={propertiesArray}
      rentalPayload={rentalPayload}
      setRentalPayload={setRentalPayload}
      addRentalFunction={addRentalFunction}
    />
  );
}
