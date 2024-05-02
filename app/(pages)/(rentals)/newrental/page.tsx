"use client";
import NewRentalsComponent from "@/app/components/rentals/NewRentalsComponent";
import { getApiWithToken, postApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const [propertiesArray, setPropertiesArray] = useState([]);
  const [tenantsArray, setTenantsArray] = useState([]);
  const [unitsArray, setUnitsArray] = useState([]);
  const [rentalPayload, setRentalPayload] = useState({
    property_id: 1,
    unit_id: 1,
    rent_start_date: "",
    tenet_id: "",
    rent_amount: "",
    is_security_deposit: true,
    rental_aggrement: "",
    security_deposit_amount: "",
  });

  useEffect(() => {
    getAllProperties();
    getAllTenants();
    getAllUnits();
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

  const addRentalFunction = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    try {
      const response = await postApiWithToken(
        "/v1/rental",
        rentalPayload,
        token
      );
      if (response.success === true) {
        toast.success("Rental Added Successfully");
      }
    } catch (error) {
      console.log("🚀 ~ addRentalFunction ~ error:", error);
    }
  };

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
  const getAllUnits = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;

    try {
      const response = await getApiWithToken("/v1/unit", token);
      setUnitsArray(response.data.result);
    } catch (error) {
      console.log("🚀 ~ getAllTenants ~ error:", error);
    }
  };
  return (
    <NewRentalsComponent
      propertiesArray={propertiesArray}
      rentalPayload={rentalPayload}
      setRentalPayload={setRentalPayload}
      addRentalFunction={addRentalFunction}
      tenantsArray={tenantsArray}
      unitsArray={unitsArray}
    />
  );
}
