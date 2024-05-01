"use client";
import NewPropertyComponent from "@/app/components/getStarted/NewPropertyComponent";
import { postApi, postApiWithToken } from "@/app/utils/AppApi";
import React, { useState } from "react";

export default function page() {
  const [payload, setPayload] = useState({
    type: "Residential Property",
    subtype: "",
    street: "",
    city: "",
    state: "",
    address: "",
    zip_code: "",
    country: "",
    house_no: "",
  });
  const [unitPayload, setUnitPayload] = useState({
    rooms: "",
    floor_no: "",
    area: "",
    unit_no: "",
    rent: "",
    bathroom: "",
    property_id: "",
  });
  const [bankDetails, setBankDetails] = useState({
    property_id: "",
    receipt_type: "",
    email: "",
    account_holder_name: "",
    account_number: "",
    bank_name: "",
    account_type: "",
  });

  const addPropertyFunction = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    console.log("🚀 ~ addPropertyFunction ~ token:", token);

    try {
      const response = await postApiWithToken("/v1/property", payload, token);
      console.log("🚀 ~ addPropertyFunction ~ response:", response);
      if (response.success === true) {
        setUnitPayload({
          ...unitPayload,
          property_id: response.data.result.id,
        });
        setBankDetails({
          ...bankDetails,
          property_id: response.data.result.id,
        });
      }
    } catch (error) {
      console.log("🚀 ~ addPropertyFunction ~ error:", error);
    }
  };
  const addUnitFunction = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    console.log("🚀 ~ addPropertyFunction ~ token:", token);

    try {
      const response = await postApiWithToken("/v1/unit", unitPayload, token);
      console.log("🚀 ~ addPropertyFunction ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ addPropertyFunction ~ error:", error);
    }
  };

  return (
    <NewPropertyComponent
      payload={payload}
      setPayload={setPayload}
      addPropertyFunction={addPropertyFunction}
      unitPayload={unitPayload}
      setUnitPayload={setUnitPayload}
      addUnitFunction={addUnitFunction}
      bankDetails={bankDetails}
      setBankDetails={setBankDetails}
    />
  );
}
