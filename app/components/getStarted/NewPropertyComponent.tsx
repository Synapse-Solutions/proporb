"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React, { useState } from "react";
import CreateAccountModal from "./modals/CreateAccountModal";
import AddMultipleProModal from "./modals/AddMultipleProModal";
import PropertyAddedSuccessModal from "../properties/modals/PropertyAddedSuccessModal";
import AssociationBasisModal from "./modals/AssociationBasisModal";
import CommunityRulesModal from "./modals/CommunityRulesModal";
import BasicInfoModal from "./modals/BasicInfoModal";
import UnitConfigurationModal from "./modals/UnitConfigurationModal";
import OwnerShipModal from "./modals/OwnerShipModal";
import LeasingInfoModal from "./modals/LeasingInfoModal";
import AddOwnerEmailModal from "./modals/AddOwnerEmailModal";

let tabs = [
  {
    number: 1,
    name: "Type",
  },
  {
    number: 2,
    name: "Owner Information",
  },
  {
    number: 3,
    name: "Address",
  },
  {
    number: 4,
    name: "Units",
  },
  {
    number: 5,
    name: "Bank Accounts",
  },
];

let properties = [
  {
    name: "House",
    icon: "/mdi_house.webp",
  },
  {
    name: "Apartment",
    icon: "/apartment_icon.webp",
  },
  {
    name: "Farm House",
    icon: "/farmhouse_inactive.webp",
  },
];
let propertyTypes = [
  {
    name: "Residential Property",
    ActiveIcon: "/residential_active.webp",
    InactiveIcon: "/residential_inactive.webp",
  },
  {
    name: "Commercial Property",
    ActiveIcon: "/commercial_active.webp",
    InactiveIcon: "/commercial_inactive.webp",
  },
  {
    name: "Student Housing",
    ActiveIcon: "/property_green.webp",
    InactiveIcon: "/studenthousing_inactive.webp",
    isDisabled: true,
  },
  {
    name: "Vocational Rentals",
    ActiveIcon: "/property_green.webp",
    InactiveIcon: "/vocational_inactive.webp",
    isDisabled: true,
  },
  {
    name: "Community association",
    ActiveIcon: "/community_active.webp",
    InactiveIcon: "/community_inactive.webp",
  },
];
let commercialProperties = [
  {
    name: "Office",
    iocn: "/office_hzdyaatvs2w9 1.png",
  },
  {
    name: "Rental Space",
    icon: "/mdi_house.webp",
  },
  {
    name: "Buildings",
    icon: "/apartment_icon.webp",
  },
  {
    name: "Warehouse",
    icon: "/mdi_house.webp",
  },
  {
    name: "Factory",
    icon: "/mdi_house.webp",
  },
  {
    name: "Restaurant",
    icon: "/cafe_0wbcefac4yhc 1.png",
  },
];
const studentProperties = [
  {
    name: "Dormitories",
    icon: "/mdi_house.webp",
  },
  {
    name: "Apartment",
    icon: "/mdi_house.webp",
  },
  {
    name: "Housing",
    icon: "/mdi_house.webp",
  },
  {
    name: "Private House",
    icon: "/mdi_house.webp",
  },
  {
    name: "Single Room",
    icon: "/mdi_house.webp",
  },
  {
    name: "Others",
    icon: "/mdi_house.webp",
  },
];
const vocationalProperties = [
  {
    name: "Resorts",
    icon: "/mdi_house.webp",
  },
  {
    name: "Vocation Homes",
    icon: "/mdi_house.webp",
  },
  {
    name: "Bed & Breakfast",
    icon: "/mdi_house.webp",
  },
  {
    name: "Others",
    icon: "/mdi_house.webp",
  },
];
const communityProperties = [
  {
    name: "Residential Homes",
    isDisabled: true,
    icon: "/mdi_house.webp",
  },
  {
    name: "Apartments",
    isDisabled: false,
    icon: "/apartment_icon.webp",
  },
  {
    name: "Villas",
    isDisabled: true,
    icon: "/mdi_house.webp",
  },
  {
    name: "Others",
    isDisabled: true,
    icon: "/mdi_house.webp",
  },
];
const bankDetails = [
  {
    name: "Company default account",
    ActiveIcon: "/bank_active.webp",
    InactiveIcon: "/bank_inactive.webp",
  },
  {
    name: "Specify Bank Account",
    ActiveIcon: "/bank_active.webp",
    InactiveIcon: "/bank_inactive.webp",
  },
];
const reserveFunds = [
  {
    name: "Set Property Reserve",
    ActiveIcon: "/dollar_active.webp",
    InactiveIcon: "/dollar_inactive.webp",
  },
  {
    name: "Don’t Set Property Reserve",
    ActiveIcon: "/dollar_active.webp",
    InactiveIcon: "/dollar_inactive.webp",
  },
];

const questionForOwner = [
  {
    name: "Yes",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
  {
    name: "No",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
];

interface Props {
  payload: {
    type: string;
    subtype: string;
    street: string;
    city: string;
    state: string;
    address: string;
    zip_code: string;
    country: string;
    house_no: string;
    owner_id: string;
  };
  setPayload: any;
  addPropertyFunction: any;
  unitPayload: {
    rooms: string;
    floor_no: string;
    area: string;
    unit_no: string;
    rent: string;
    bathroom: string;
  };
  setUnitPayload: any;
  addUnitFunction: any;
  bankDetails: any;
  setBankDetails: any;
  banksArray: any;
  handleChangeBankAccount: any;
  ownersAray: any;
}
export default function NewPropertyComponent(props: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [propertyType, setPropertyType] = useState(0);
  const [selectedPropertyName, setSelectedPropertyName] = useState("Home");
  const [unitsArray, setUnitsArray] = useState([{ beds: 0 }]);
  const [createAccountModal, setCreateAccountModal] = useState(false);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
  const [multipleUnitsModal, setMultipleUnitsModal] = useState(false);
  const [communityModal, setCommunityModal] = useState(0);
  const [selectedOwnerType, setSelectedOwnerType] = useState(0);
  const [isOwenerEmailModalShow, setIsOwenerEmailModalShow] = useState(false);
  const [ownerEmail, setOwnerEmail] = useState("");

  const onAddSingleUnit = () => {
    setUnitsArray((prev) => [...prev, { beds: 0 }]);
  };

  const onAddMultipleUnits = () => {
    setMultipleUnitsModal(true);
  };
  const onPressNext = () => {
    if (activeTab === 0) {
      if (!props.payload.type || !props.payload.subtype) {
        return;
      }
    }
    if (activeTab === 1) {
      if (selectedOwnerType === 1) {
        if (!ownerEmail) {
          return;
        }
      }
    }
    if (activeTab === 2) {
      if (
        !props.payload.street ||
        !props.payload.city ||
        !props.payload.state ||
        !props.payload.country ||
        !props.payload.zip_code
      ) {
        return;
      }
      props.addPropertyFunction();
    }

    if (activeTab === 3) {
      if (
        !props.unitPayload.rooms ||
        !props.unitPayload.bathroom ||
        !props.unitPayload.floor_no ||
        !props.unitPayload.area ||
        !props.unitPayload.unit_no ||
        !props.unitPayload.rent
      ) {
        return;
      }
      props.addUnitFunction();
    }

    if (activeTab === 4) {
      return;
      // if (selectedPropertyName === "Apartments") {
      //   setCommunityModal(1);
      // } else {
      //   setIsSuccessModalShow(true);
      // }
    } else {
      setActiveTab(activeTab + 1);
    }
  };
  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar />

          <div className="mt-10">
            <p className="text-[25px] font-bold">New Property</p>
            <div className="bg-white rounded-xl p-6 mt-5">
              <div className="flex items-center">
                {tabs.map((item, index) => (
                  <div className="text-start">
                    <div key={index} className="flex items-center">
                      {activeTab === index ? (
                        <Image
                          src={"/active_green.webp"}
                          alt="Icon"
                          width={100}
                          height={100}
                          className="h-12 w-12"
                        />
                      ) : (
                        <button
                          // onClick={() => setActiveTab(index)}
                          className="rounded-full border border-black h-12 w-12 flex items-center justify-center"
                        >
                          <p className="text-black font-bold">{item.number}</p>
                        </button>
                      )}
                      {item.number !== 5 && (
                        <div className="h-[1px] border border-dashed border-[gray] w-[calc(10vw)]" />
                      )}
                    </div>
                    <div className="w-[150px] text-center -ml-[45px] ">
                      <p className="text-black text-sm mt-2 ">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              {activeTab === 0 && (
                <>
                  <div className="mt-5">
                    <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                      Property Type
                    </p>
                    <div className="flex gap-5 mt-5">
                      {propertyTypes.map((item, index) => (
                        <button
                          key={index}
                          disabled={item.isDisabled}
                          onClick={() => {
                            setPropertyType(index);
                            props.setPayload({
                              ...props.payload,
                              type: item.name,
                            });
                          }}
                          className={`border ${
                            propertyType === index
                              ? "border-[#1ED760]"
                              : "border-gray-400"
                          } p-5 flex flex-col items-center justify-center rounded-lg w-[17%] 
                          ${
                            item.isDisabled
                              ? "cursor-not-allowed opacity-50"
                              : ""
                          }
                          `}
                        >
                          <Image
                            alt={item.name}
                            src={
                              propertyType === index
                                ? item.ActiveIcon
                                : item.InactiveIcon
                            }
                            height={100}
                            width={100}
                          />
                          <p className="mt-3 text-black">{item.name}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-10">
                    <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                      What best describes your Property
                    </p>
                    <div className="flex flex-wrap items-center gap-5 mt-5">
                      {(propertyType === 0
                        ? properties
                        : propertyType === 1
                        ? commercialProperties
                        : propertyType === 2
                        ? studentProperties
                        : propertyType === 3
                        ? vocationalProperties
                        : communityProperties
                      )?.map((item, index) => (
                        <button
                          key={index}
                          disabled={
                            (item as { name: string; isDisabled?: boolean })
                              ?.isDisabled
                          }
                          style={{
                            backgroundColor:
                              item.name === selectedPropertyName
                                ? "#E8FBEF"
                                : "white",
                          }}
                          onClick={() => {
                            setSelectedPropertyName(item.name);
                            props.setPayload({
                              ...props.payload,
                              subtype: item.name,
                            });
                          }}
                          className={`border ${
                            item.name === selectedPropertyName
                              ? "border-[#1ED760]"
                              : "border-gray-500"
                          } ${
                            (item as { name: string; isDisabled?: boolean })
                              .isDisabled
                              ? "cursor-not-allowed opacity-50"
                              : ""
                          } px-4 p-2 rounded-xl flex gap-3 items-center`}
                        >
                          <Image
                            src={item?.icon ?? "/mdi_house.webp"}
                            alt="Icon"
                            width={30}
                            height={30}
                          />
                          <p className="text-black">{item.name}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {activeTab === 1 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Property owner information
                  </p>

                  <div className="flex gap-7 justify-start mt-12 w-full">
                    {questionForOwner.map((item: any, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedOwnerType(index);
                          if (index === 1) setIsOwenerEmailModalShow(true);
                        }}
                        className={`border ${
                          selectedOwnerType === index
                            ? "border-[#1ED760]"
                            : "border-gray-400"
                        } p-5 flex flex-col items-center justify-center rounded-lg  px-20 relative`}
                      >
                        {selectedOwnerType === index && (
                          <Image
                            src={"/completedIcon.webp"}
                            alt="tick"
                            height={100}
                            width={100}
                            className="absolute top-3 right-[15px] h-[40px] object-contain w-[30px]"
                          />
                        )}
                        <div
                          className={`h-[50px] w-[50px] flex items-center justify-center rounded-full ${
                            selectedOwnerType === index
                              ? "bg-[#e8fbef]"
                              : "bg-[#eaeaea]"
                          }`}
                        >
                          {index === 0 ? <p> ✔ </p> : <p>✕</p>}
                        </div>
                        <p className="mt-3 text-black font-bold">{item.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Property Property Address
                  </p>
                  {propertyType === 0 && (
                    <div className="mt-5">
                      <p>House No</p>
                      <input
                        type="text"
                        value={props.payload.house_no}
                        onChange={(e) =>
                          props.setPayload({
                            ...props.payload,
                            house_no: e.target.value,
                          })
                        }
                        placeholder="Enter House No"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                  )}
                  <div className="mt-5">
                    <p>Street</p>
                    <input
                      value={props.payload.street}
                      onChange={(e) =>
                        props.setPayload({
                          ...props.payload,
                          street: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Enter street name"
                      className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                    />
                  </div>
                  <div className="mt-5 flex gap-5 w-full justify-between">
                    <div className="w-[47%]">
                      <p>City</p>
                      <input
                        type="text"
                        value={props.payload.city}
                        onChange={(e) =>
                          props.setPayload({
                            ...props.payload,
                            city: e.target.value,
                          })
                        }
                        placeholder="Enter city name"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                    <div className="w-[47%]">
                      <p>Province</p>

                      <select
                        value={props.payload.state}
                        onChange={(e) =>
                          props.setPayload({
                            ...props.payload,
                            state: e.target.value,
                          })
                        }
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      >
                        <option value="KpK">Kpk</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Sindh">Sindh</option>
                        <option value="Balochistan">Balochistan</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-5 w-full justify-between">
                    <div className="w-[47%]">
                      <p>Country</p>
                      <input
                        type="text"
                        value={props.payload.country}
                        onChange={(e) =>
                          props.setPayload({
                            ...props.payload,
                            country: e.target.value,
                          })
                        }
                        placeholder="Enter Country name"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                    <div className="w-[47%]">
                      <p>ZIP Code</p>
                      <input
                        type="number"
                        value={props.payload.zip_code}
                        onChange={(e) =>
                          props.setPayload({
                            ...props.payload,
                            zip_code: e.target.value,
                          })
                        }
                        placeholder="ZIP Code"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                  </div>
                  <button className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl mt-10 self-center">
                    + Add Images
                  </button>
                </div>
              )}
              {activeTab === 3 && (
                <div className="mt-10">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                      Add units of property
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="bg-[#1ED760] rounded-full px-5 text-white py-2">
                        Submit CSV file
                      </button>
                      <button
                        onClick={onAddMultipleUnits}
                        className="border border-[#1ED760] rounded-full px-5 text-black py-2"
                      >
                        + Add multiple units
                      </button>
                      <button
                        onClick={onAddSingleUnit}
                        className="border border-[#1ED760] rounded-full px-5 text-black py-2"
                      >
                        + Add unit
                      </button>
                    </div>
                  </div>
                  {/* {unitsArray.map((item, index) => ( */}
                  <div className="flex items-center justify-between w-full mt-10">
                    <div className="w-[15%]">
                      <p>No of Beds</p>
                      <input
                        type="number"
                        value={props.unitPayload.rooms}
                        onChange={(e) => {
                          props.setUnitPayload({
                            ...props.unitPayload,
                            rooms: e.target.value,
                          });
                        }}
                        className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                      />
                    </div>
                    <div className="w-[15%]">
                      <p>No of Bathrooms</p>
                      <input
                        type="number"
                        value={props.unitPayload.bathroom}
                        onChange={(e) => {
                          props.setUnitPayload({
                            ...props.unitPayload,
                            bathroom: e.target.value,
                          });
                        }}
                        className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                      />
                    </div>
                    <div className="w-[15%]">
                      <p>Floor number</p>
                      <input
                        type="number"
                        value={props.unitPayload.floor_no}
                        onChange={(e) => {
                          props.setUnitPayload({
                            ...props.unitPayload,
                            floor_no: e.target.value,
                          });
                        }}
                        className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                      />
                    </div>
                    <div className="w-[15%]">
                      <p>Area (sq feet)</p>
                      <input
                        type="number"
                        value={props.unitPayload.area}
                        onChange={(e) => {
                          props.setUnitPayload({
                            ...props.unitPayload,
                            area: e.target.value,
                          });
                        }}
                        className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                      />
                    </div>
                    <div className="w-[15%]">
                      <p>Unit No</p>
                      <input
                        type="number"
                        value={props.unitPayload.unit_no}
                        onChange={(e) => {
                          props.setUnitPayload({
                            ...props.unitPayload,
                            unit_no: e.target.value,
                          });
                        }}
                        className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                      />
                    </div>
                    <div className="w-[15%]">
                      <p>Market Rent</p>
                      <input
                        type="number"
                        value={props.unitPayload.rent}
                        onChange={(e) => {
                          props.setUnitPayload({
                            ...props.unitPayload,
                            rent: e.target.value,
                          });
                        }}
                        className="rounded-xl w-[100%] border border-gray-400 px-3 h-12 mt-3"
                      />
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              )}
              {activeTab === 4 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Add Property Bank Accounts
                  </p>
                  <div className="flex gap-7 justify-center mt-10">
                    {bankDetails.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setPropertyType(index)}
                        className={`border ${
                          propertyType === index
                            ? "border-[#1ED760]"
                            : "border-gray-400"
                        } p-5 flex flex-col items-center justify-center rounded-lg w-[17%] relative`}
                      >
                        {propertyType === index && (
                          <Image
                            src={"/completedIcon.webp"}
                            alt="tick"
                            height={100}
                            width={100}
                            className="absolute top-3 -right-[15px] h-[40px] object-contain w-[40px]"
                          />
                        )}
                        <Image
                          alt={item.name}
                          src={
                            propertyType === index
                              ? item.ActiveIcon
                              : item.InactiveIcon
                          }
                          height={100}
                          width={100}
                        />
                        <p className="mt-3 text-black">{item.name}</p>
                      </button>
                    ))}
                  </div>
                  {propertyType === 0 && (
                    <div className="w-full items-center flex justify-center mt-10">
                      <div className="border border-[#1ED760] rounded-xl w-[50%] p-3 flex items-center justify-between px-5">
                        <div className="flex gap-5 items-center">
                          <Image
                            src={"/bank_active.webp"}
                            alt="bank"
                            height={100}
                            width={100}
                            className="h-[60px] object-contain w-[60px] "
                          />
                          <p className="text-black text-[20px] ">
                            Operating Account
                          </p>
                        </div>
                        <div className="bg-[#EAFAE5] rounded-full text-[#1Ed760] px-5 h-10 flex items-center gap-4">
                          <Image
                            src={"/completedIcon.webp"}
                            alt="tick"
                            height={25}
                            width={25}
                          />
                          <p>Default account</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {propertyType === 1 && (
                    <div className="w-full items-center flex flex-col justify-center mt-10">
                      <p className="text-black font-bold">
                        Which account should we use as the main account for this
                        property
                      </p>
                      {props.banksArray.length > 0 && (
                        <select
                          onChange={(e) => {
                            if (
                              (e.target as HTMLSelectElement).value ===
                              "newaccount"
                            ) {
                              setCreateAccountModal(true);
                            } else {
                              console.log(e.target.value);
                              props.handleChangeBankAccount(e.target.value);
                            }
                          }}
                          name="account"
                          className="border border-[gray] rounded-xl w-[50%] p-3 flex items-center justify-between px-5 mt-7 h-12"
                        >
                          <option value="select">Select bank</option>
                          {props.banksArray.map((item: any, index: number) => (
                            <option key={index} value={index}>
                              {item.bank_name} - {item.account_number}
                            </option>
                          ))}
                        </select>
                      )}
                      <button
                        onClick={() => setCreateAccountModal(true)}
                        className="bg-[#1ED760] text-white py-2 px-5 rounded-xl mt-3"
                      >
                        + Create new account
                      </button>
                    </div>
                  )}
                </div>
              )}
              {activeTab === 5 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Add Reserve funds
                  </p>
                  <div className="flex gap-7 justify-center mt-10">
                    {reserveFunds.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setPropertyType(index)}
                        className={`border ${
                          propertyType === index
                            ? "border-[#1ED760]"
                            : "border-gray-400"
                        } p-5 flex flex-col items-center justify-center rounded-lg w-[17%] relative`}
                      >
                        {propertyType === index && (
                          <Image
                            src={"/completedIcon.webp"}
                            alt="tick"
                            height={100}
                            width={100}
                            className="absolute top-3 -right-[15px] h-[40px] object-contain w-[40px]"
                          />
                        )}
                        <Image
                          alt={item.name}
                          src={
                            propertyType === index
                              ? item.ActiveIcon
                              : item.InactiveIcon
                          }
                          height={100}
                          width={100}
                        />
                        <p className="mt-3 text-black">{item.name}</p>
                      </button>
                    ))}
                  </div>
                  {/* {propertyType === 0 && (
                    <div className="w-full items-center flex justify-center mt-10">
                      <div className="border border-[#1ED760] rounded-xl w-[50%] p-3 flex items-center justify-between px-5">
                        <div className="flex gap-5 items-center">
                          <Image
                            src={"/bank_active.webp"}
                            alt="bank"
                            height={100}
                            width={100}
                            className="h-[60px] object-contain w-[60px] "
                          />
                          <p className="text-black text-[20px] ">
                            Operating Account
                          </p>
                        </div>
                        <div className="bg-[#EAFAE5] rounded-full text-[#1Ed760] px-5 h-10 flex items-center gap-4">
                          <Image
                            src={"/completedIcon.webp"}
                            alt="tick"
                            height={25}
                            width={25}
                          />
                          <p>Default account</p>
                        </div>
                      </div>
                    </div>
                  )} */}
                  {propertyType === 1 && (
                    <div className="w-full items-center flex flex-col justify-center mt-10">
                      <p className="text-black font-bold text-start w-[50%]">
                        Reserve Funds Amount
                      </p>
                      <select
                        name="account"
                        id=""
                        className="border border-[gray] rounded-xl w-[50%] p-3 flex items-center justify-between px-5 mt-3 h-12"
                      >
                        <option value="option1">20000 $</option>
                        <option value="option1">20000 $</option>
                        <option value="option1">20000 $</option>
                      </select>
                    </div>
                  )}
                </div>
              )}
              <div className="w-full flex justify-between mt-10">
                {activeTab === 0 ? (
                  <div />
                ) : (
                  <button
                    onClick={() => setActiveTab(activeTab - 1)}
                    className="border-[#1ED760] border text-black text-base font-semibold px-8 py-2 rounded-3xl"
                  >
                    Back
                  </button>
                )}
                {activeTab === 4 ? (
                  <button
                    onClick={onPressNext}
                    className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    onClick={onPressNext}
                    className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOwenerEmailModalShow && (
        <AddOwnerEmailModal
          setIsOwenerEmailModalShow={setIsOwenerEmailModalShow}
          ownerEmail={ownerEmail}
          setOwnerEmail={setOwnerEmail}
        />
      )}
      {createAccountModal && (
        <CreateAccountModal
          setIsCreateAccountModal={setCreateAccountModal}
          bankDetails={props.bankDetails}
          setBankDetails={props.setBankDetails}
        />
      )}
      {isSuccessModalShow && (
        <PropertyAddedSuccessModal
          setIsPropertyAddedModal={setIsSuccessModalShow}
          title="Property Added Successfully"
        />
      )}
      {multipleUnitsModal && (
        <AddMultipleProModal onClose={() => setMultipleUnitsModal(false)} />
      )}
      {communityModal === 1 && (
        <AssociationBasisModal setCommunityModal={setCommunityModal} />
      )}
      {communityModal === 2 && (
        <CommunityRulesModal
          setCommunityModal={setCommunityModal}
          setIsSuccessModalShow={setIsSuccessModalShow}
        />
      )}
      {communityModal === 3 && (
        <BasicInfoModal setCommunityModal={setCommunityModal} />
      )}
      {communityModal === 4 && (
        <UnitConfigurationModal setCommunityModal={setCommunityModal} />
      )}
      {communityModal === 5 && (
        <OwnerShipModal setCommunityModal={setCommunityModal} />
      )}
      {communityModal === 6 && (
        <LeasingInfoModal setCommunityModal={setCommunityModal} />
      )}
    </div>
  );
}
