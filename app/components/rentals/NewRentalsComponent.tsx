"use client";
import Navbar from "@/app/sharedcomponents/Navbar";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React, { useState } from "react";
import AddTenant from "./models/AddTenant";

let tabs = [
  {
    number: 1,
    name: "Overview",
  },
  {
    number: 2,
    name: "Tenants",
  },
  {
    number: 3,
    name: "Rent",
  },
  {
    number: 4,
    name: "Deposit",
  },
];

const depositArray = [
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
const statusArray = [
  {
    name: "Signed",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
  {
    name: "Unsigned",
    ActiveIcon: "/term_active.webp",
    InactiveIcon: "/term_inactive.webp",
  },
];

const options = [
  { label: "Use Property Late Fees", value: "option1" },
  { label: "Specify a late fees Policy", value: "option2" },
];

interface Props {
  propertiesArray: any;
  rentalPayload: any;
  setRentalPayload: any;
  addRentalFunction: any;
  tenantsArray: any;
  unitsArray: any;
}

export default function NewRentalsComponent(props: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [propertyType, setPropertyType] = useState(0);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [addTenantModal, setAddTenantModal] = useState(false);
  const uploadPhotoRef = React.createRef<HTMLInputElement>();

  const onClickuploadPhoto = () => {
    if (uploadPhotoRef.current) {
      uploadPhotoRef.current?.click();
    }
  };

  const handleOptionChange = (event: any) => {
    const value = event.target.value;
    setSelectedOption(value);
    handleOptionSelect(value);
  };

  const handleOptionSelect = (value: any) => {
    setSelectedOption(value);
  };

  const onChangeTab = (index: number) => {};

  const onClickNext = () => {
    if (activeTab === 3) {
      props.addRentalFunction();
    }

    activeTab === 3 ? setIsSuccessModalShow(true) : setActiveTab(activeTab + 1);
  };

  return (
    <div className="h-screen overflow-y-scroll">
      <Sidebar />
      <div className="flex">
        <div className="w-[calc(15vw)]" />
        <div className="w-[calc(85vw)] px-10 mt-10">
          <Navbar isSearchBarVisible={true} />

          <div className="mt-10">
            <p className="text-[25px] font-bold">New Rental</p>
            <div className="bg-white rounded-xl p-6 mt-5">
              <div className="flex items-center">
                {tabs.map((item, index) => (
                  <div>
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
                          onClick={() => onChangeTab(index)}
                          className="rounded-full border border-black h-12 w-12 flex items-center justify-center"
                        >
                          <p className="text-black font-bold">{item.number}</p>
                        </button>
                      )}
                      {item.number !== 4 && (
                        <div className="h-[1px] border border-dashed border-[gray] w-[calc(10vw)]" />
                      )}
                    </div>

                    <p className="text-black text-sm mt-2 ">{item.name}</p>
                  </div>
                ))}
              </div>
              {activeTab === 0 && (
                <>
                  <div className="mt-5">
                    <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                      Property
                    </p>
                    <div className="mt-5 flex gap-5 w-full justify-between">
                      <div className="w-[47%]">
                        <p>Which property is the lease for?</p>
                        <select
                          name=""
                          id=""
                          onChange={(e) =>
                            props.setRentalPayload({
                              ...props.rentalPayload,
                              property_id: e.target.value,
                            })
                          }
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        >
                          {props.propertiesArray.map(
                            (item: any, index: number) => (
                              <option key={index} value={item.id}>
                                {item.type}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="mt-5 flex gap-5 w-full justify-between">
                      <div className="w-[47%]">
                        <p>Select the unit of property</p>
                        <select
                          name=""
                          id=""
                          onChange={(e) =>
                            props.setRentalPayload({
                              ...props.rentalPayload,
                              unit_id: e.target.value,
                            })
                          }
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        >
                          {props.unitsArray.map((item: any, index: number) => (
                            <option key={index} value={item.id}>
                              {item.type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === 1 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Rental Tenants
                  </p>
                  {props.tenantsArray.length === 0 ? (
                    <div className="flex justify-center mt-10">
                      <div
                        className="border-2 border-[#1ED760] border-dashed p-10 flex flex-col items-center rounded-lg cursor-pointer"
                        onClick={() => setAddTenantModal(true)}
                      >
                        <p className="text-[30px] text-[#1ED760]">+</p>
                        <p>Add Tenant</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-5 2xl:gap-10 mt-10">
                      {props.tenantsArray.map((item: any, index: number) => (
                        <div
                          key={index}
                          className="border border-gray-600 p-5 w-[23%] 2xl:w-[20%] rounded-md flex flex-col items-center text-center"
                        >
                          <Image
                            src="/black_suit.webp"
                            alt="properties"
                            height={150}
                            width={150}
                          />
                          <p className="text-[#000] text-[16px] mt-3">
                            {item.first_name + item.last_name}
                          </p>
                          <p className="text-[#000] text-[15px]">
                            {item.address}
                          </p>

                          <p className="text-[#1ED760] text-[14px] mt-3">
                            {item.mobile}
                          </p>
                          <p className="text-[#1ED760] text-[12px] mt-3">
                            {item.email}
                          </p>
                          <button
                            onClick={() =>
                              props.setRentalPayload({
                                ...props.rentalPayload,
                                tenet_id: item.id,
                              })
                            }
                            className="bg-[#1ED760] rounded-full px-7 py-2 text-white mt-5"
                          >
                            Select
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {activeTab === 2 && (
                <div className="mt-10">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px]">
                    Rent Charges
                  </p>
                  <div className="flex flex-col items-center w-full">
                    <div className="mt-5 w-[60%]">
                      <p>When should we start charging Rent</p>
                      <input
                        type="date"
                        value={props.rentalPayload.rent_start_date}
                        onChange={(e) =>
                          props.setRentalPayload({
                            ...props.rentalPayload,
                            rent_start_date: e.target.value,
                          })
                        }
                        placeholder="Enter street name"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                    <div className="mt-5 w-[60%]">
                      <p>How often do you charge rent?</p>

                      <select
                        name=""
                        id=""
                        onChange={(e) =>
                          props.setRentalPayload({
                            ...props.rentalPayload,
                            rental_aggrement: e.target.value,
                          })
                        }
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      >
                        <option value="monthly">Monthly</option>
                        <option value="weekly">Weekly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </div>
                    <div className="mt-5 w-[60%]">
                      <p>Enter the Rent Amount</p>
                      <input
                        type="number"
                        value={props.rentalPayload.rent_amount}
                        onChange={(e) =>
                          props.setRentalPayload({
                            ...props.rentalPayload,
                            rent_amount: e.target.value,
                          })
                        }
                        placeholder="Enter Rent Amount"
                        className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="mt-10 flex flex-col">
                  <p className="font-bold text-black text-[18px]  2xl:text-[23px] w-full">
                    Security Deposit
                  </p>
                  <div className="flex gap-7 justify-center mt-12 w-full">
                    {depositArray.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setPropertyType(index);
                          props.setRentalPayload({
                            ...props.rentalPayload,
                            is_security_deposit: index === 0 ? true : false,
                          });
                        }}
                        className={`border ${
                          propertyType === index
                            ? "border-[#1ED760]"
                            : "border-gray-400"
                        } p-5 flex flex-col items-center justify-center rounded-lg  px-20 relative`}
                      >
                        {propertyType === index && (
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
                            propertyType === index
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
                  <div>
                    <div className=" flex justify-center w-full mt-10">
                      <div className="w-[40%]">
                        <p>Security Deposit Amount</p>
                        <input
                          type="number"
                          value={props.rentalPayload.security_deposit_amount}
                          onChange={(e) =>
                            props.setRentalPayload({
                              ...props.rentalPayload,
                              security_deposit_amount: e.target.value,
                            })
                          }
                          placeholder="Enter amount"
                          className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                        />
                      </div>
                    </div>
                  </div>
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
                <button
                  onClick={onClickNext}
                  className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {createAccountModal && (
        <CreateAccountModal setIsCreateAccountModal={setCreateAccountModal} />
      )}
      {isSuccessModalShow && (
        <PropertyAddedModal
          setIsPropertyAddedModal={setIsSuccessModalShow}
          title="Property Added Successfully"
        />
      )} */}
      {addTenantModal && <AddTenant onClose={() => setAddTenantModal(false)} />}
    </div>
  );
}
