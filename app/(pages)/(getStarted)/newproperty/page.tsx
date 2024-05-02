"use client";
import NewPropertyComponent from "@/app/components/getStarted/NewPropertyComponent";
import { getApiWithToken, postApi, postApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const [banksArray, setBanksArray] = useState<any>([]);

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

  useEffect(() => {
    getAllBankAccounts();
  }, []);

  const addPropertyFunction = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;

    try {
      const response = await postApiWithToken("/v1/property", payload, token);
      if (response.success === true) {
        toast.success("Property Added Successfully");
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

    try {
      const response = await postApiWithToken("/v1/unit", unitPayload, token);
      if (response.success === true) {
        toast.success("Unit Added Successfully");
      }
    } catch (error) {
      console.log("🚀 ~ addPropertyFunction ~ error:", error);
    }
  };

  const getAllBankAccounts = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;

    try {
      const response = await getApiWithToken("/v1/bank", token);
      setBanksArray(response.data.result);
    } catch (error) {
      console.log("🚀 ~ addPropertyFunction ~ error:", error);
    }
  };

  const handleChangeBankAccount = async (index: number) => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    let item = banksArray[index];
    let payload = {
      ...bankDetails,
      receipt_type: item?.receipt_type || "",
      email: item.email,
      account_holder_name: item.account_holder_name,
      account_number: item.account_number,
      bank_name: item.bank_name,
      account_type: item.account_type,
    };
    try {
      const response = await postApiWithToken("/v1/bank", payload, token);
      if (response.success === true) {
        toast.success("Bank Account Added Successfully");
      }
    } catch (error) {
      console.log("🚀 ~ onAddBankDetails ~ error:", error);
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
      banksArray={banksArray}
      handleChangeBankAccount={handleChangeBankAccount}
    />
  );
}
