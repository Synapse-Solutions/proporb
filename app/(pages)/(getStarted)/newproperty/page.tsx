"use client";
import NewPropertyComponent from "@/app/components/getStarted/NewPropertyComponent";
import { getApiWithToken, postApi, postApiWithToken } from "@/app/utils/AppApi";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const [banksArray, setBanksArray] = useState<any>([]);
  const [ownersArray, setOwnersArray] = useState([]);
  const [payload, setPayload] = useState({
    type: "Residential Property",
    subtype: "",
    street: "",
    city: "",
    state: "KpK",
    address: "",
    zip_code: "",
    country: "Pakistan",
    house_no: "",
    owner_id: "",
  });
  const [unitPayload, setUnitPayload] = useState({
    rooms: "",
    floor_no: "",
    area: "",
    unit_no: "",
    rent: "",
    bathroom: "",
    property_id: "",
    owner_id: "",
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
  const [selectedBank, setSelectedBank] = useState<any>(null);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);

  useEffect(() => {
    getAllBankAccounts();
    getAllOwners();
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

  const handleChangeBankAccount = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    let item = banksArray[selectedBank];
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
      console.log("DATA=========", response);
      if (response.success === true) {
        toast.success(response.message);
        setIsSuccessModalShow(true);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again");
      console.log("🚀 ~ onAddBankDetails ~ error:", error);
    }
  };

  const getAllOwners = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;

    const response = await getApiWithToken("/v1/owner", token);
    setOwnersArray(response.data.result);
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
      ownersAray={ownersArray}
      setSelectedBank={setSelectedBank}
      selectedBank={selectedBank}
      isSuccessModalShow={isSuccessModalShow}
      setIsSuccessModalShow={setIsSuccessModalShow}
    />
  );
}
