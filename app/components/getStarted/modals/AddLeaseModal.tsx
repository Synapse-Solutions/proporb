"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  onClose?: () => void;
}
export default function AddLeaseModal(props: Props) {
  const [landLordDetails, setLandLordDetails] = useState([
    {
      title: "Full Name",
      fullname: "",
    },

    {
      title: "Email",
      email: "",
    },
    {
      title: "Full Address",
      fullAddress: "",
    },
    {
      title: "City",
      city: "",
    },
    {
      title: "Postal Code",
      postalCode: "",
    },
    {
      title: "Country",
      country: "",
    },
    {
      title: "Phone",
      phone: "",
    },
  ]);

  const [tenantDetails, setTenantDetails] = useState([
    {
      title: "Full Name",
      fullname: "",
    },
    {
      title: "Email",
      email: "",
    },
    {
      title: "Full Address",
      fullAddress: "",
    },
    {
      title: "City",
      city: "",
    },
    {
      title: "Postal Code",
      postalCode: "",
    },
    {
      title: "Country",
      country: "",
    },
    {
      title: "Phone",
      phone: "",
    },
  ]);
  return (
    <div
      className="h-full w-full flex items-center justify-center fixed top-0 right-0"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="w-[calc(80vw)] bg-white p-10 text-black overflow-auto h-screen">
        <div className="flex w-full justify-between items-center">
          <div>
            <p className="text-[25px] font-bold text-black">Add Your Lease</p>
            <div className="bg-[#1ED760] h-1 w-[60px]" />
          </div>
          <Image
            onClick={props.onClose}
            src="/cross_icon.webp"
            width={40}
            height={40}
            alt="cross icon"
            className="cursor-pointer"
          />
        </div>
        <p className="font-semibold text-center mt-10">Rental Agreement</p>
        <div className="flex w-full justify-center gap-7">
          <div className="w-1/2 flex flex-col">
            <p className="text-center">LandLord Details</p>

            {landLordDetails.map((landLord, index) => (
              <div key={index} className="mt-3">
                <p>{landLord.title}</p>
                <input
                  type="text"
                  className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
                />
              </div>
            ))}
          </div>
          <div className="w-1/2 flex flex-col">
            <p className="text-center">Tenant Details</p>
            {tenantDetails.map((tenant, index) => (
              <div key={index} className="mt-3">
                <p>{tenant.title}</p>
                <input
                  type="text"
                  className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="font-semibold text-center mt-10">
          Leased Property Details
        </p>
        <div className="flex w-full justify-center gap-7">
          <div className="w-1/2 flex flex-col">
            <div className="mt-3">
              <p>Leased Property</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="mt-3">
              <p>Full Address</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="mt-3">
              <p>City/State</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="mt-3">
              <p>Postal Code</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="mt-3">
              <p>Country</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="mt-3">
              <p>Rent Start Date</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="mt-3">
              <p>Rent End Date</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
            <div className="mt-3">
              <p>Monthly Rent</p>
              <input
                type="text"
                className="border border-[gray] rounded-xl w-full h-12 px-3 mt-3"
              />
            </div>
          </div>
        </div>
        <p className="font-semibold text-center mt-10">Terms & Conditions</p>
        <div>
          <p>1. Description of the permises</p>
          <p>
            This Rental agreement has been signed by the parties for the purpose
            of leasing the property at the address stated above. The leased
            property under this agreement can only be used for residential
            purposes.
          </p>
        </div>
        <div className="flex justify-between  pb-10 bg-white pt-3 w-[100%] mt-10 ">
          <button
            onClick={props.onClose}
            className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={() => {}}
            className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
