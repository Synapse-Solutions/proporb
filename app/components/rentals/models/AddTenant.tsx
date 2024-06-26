"use client";
import EmptyViewComponent from "@/app/sharedcomponents/EmptyViewComponent";
import ProfileInfoSidebar from "@/app/sharedcomponents/ProfileInfoSidebar";
import { postApiWithToken } from "@/app/utils/AppApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  onClose: () => void;
}
export default function AddTenant({ onClose }: Props) {
  const router = useRouter();
  // ******* States *******
  const [screenName, setScreenName] = useState("personal");
  const [tenantPayload, setTenantPayload] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    image: "",
    mobile: "",
    address: "",
    password: "",
  });
  const [bankPayload, setBankPayload] = useState({
    tenet_id: "",
    account_number: "",
    bank_name: "",
    IBAN: "",
  });

  const onClickNext = () => {
    if (screenName === "personal") {
      setScreenName("contact");
    } else if (screenName === "contact") {
      AddTenant();
    } else {
      AddTenantBank();
    }
  };
  const onClickBack = () => {
    if (screenName === "contact") {
      setScreenName("personal");
    } else if (screenName === "bankaccount") {
      setScreenName("contact");
    }
  };

  const AddTenant = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    tenantPayload.username = tenantPayload.first_name + tenantPayload.last_name;
    const response = await postApiWithToken("/v1/tenet", tenantPayload, token);
    if (response.success === true) {
      toast.success("Tenant added successfully");
      setScreenName("bankaccount");
      setBankPayload((prev) => ({
        ...prev,
        tenet_id: response.data.result.id,
      }));
    } else {
      toast.error(response.data.message);
    }
  };

  const AddTenantBank = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    const response = await postApiWithToken(
      "/v1/tenet/bank",
      bankPayload,
      token
    );
    if (response.success === true) {
      toast.success("Bank added successfully");
      onClose();
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="w-[90%] 2xl:w-[calc(80vw)] h-[calc(90vh)]  bg-white border border-black  flex ">
        {screenName !== "" && (
          <ProfileInfoSidebar
            activeTab={screenName}
            setActiveTab={setScreenName}
            title="New Tenant"
          />
        )}
        <div className="w-[100%]  relative h-full">
          {screenName === "personal" && (
            <div className="text-black w-full px-10 pt-10 h-full overflow-auto ">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">New Tenant</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  height={50}
                  className="cursor-pointer object-contain"
                />
              </div>
              <div className="flex gap-5 items-center mt-5">
                <Image
                  src={"/default.webp"}
                  alt="Icon"
                  width={100}
                  height={100}
                />
                <button className="flex gap-3 border-2 border-[#1ED760] rounded-md px-3 py-1 items-center">
                  <Image
                    src={"/icon_image_add.webp"}
                    alt="Icon"
                    height={30}
                    width={30}
                  />
                  <p>Upload image</p>
                </button>
              </div>
              <div className="mt-10 space-y-2">
                <div className="flex justify-between">
                  <div className="w-[47%]">
                    <p>First Name</p>
                    <input
                      type="text"
                      value={tenantPayload.first_name}
                      onChange={(e) =>
                        setTenantPayload({
                          ...tenantPayload,
                          first_name: e.target.value,
                        })
                      }
                      placeholder="Enter your First Name"
                      required
                      className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                    />
                  </div>
                  <div className="w-[47%]">
                    <p>Last Name</p>
                    <input
                      required
                      value={tenantPayload.last_name}
                      onChange={(e) =>
                        setTenantPayload({
                          ...tenantPayload,
                          last_name: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Enter your Last Name"
                      className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <div className="w-[47%]">
                  <p>Password</p>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={tenantPayload.password}
                    onChange={(e) =>
                      setTenantPayload({
                        ...tenantPayload,
                        password: e.target.value,
                      })
                    }
                    required
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
                <div className="w-[47%]">
                  <p>Address</p>
                  <div className="flex justify-between">
                    <input
                      required
                      value={tenantPayload.address}
                      onChange={(e) =>
                        setTenantPayload({
                          ...tenantPayload,
                          address: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Enter Address"
                      className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                    />
                  </div>
                </div>
              </div>
              <div className="h-24" />
            </div>
          )}
          {screenName === "contact" && (
            <div className="text-black w-full px-10 pt-10 overflow-auto h-full">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Contact Information</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
              </div>

              <div className="mt-10 space-y-2">
                <p>Phone Number</p>

                <div className="flex justify-between">
                  <input
                    required
                    value={tenantPayload.mobile}
                    onChange={(e) =>
                      setTenantPayload({
                        ...tenantPayload,
                        mobile: e.target.value,
                      })
                    }
                    type="number"
                    placeholder="Enter your phone number"
                    className="border border-black rounded-lg h-10 w-[45%] pl-3"
                  />
                </div>
              </div>

              <div className="mt-10 space-y-2">
                <p>Email</p>

                <div className="flex justify-between">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    required
                    value={tenantPayload.email}
                    onChange={(e) =>
                      setTenantPayload({
                        ...tenantPayload,
                        email: e.target.value,
                      })
                    }
                    className="border border-black rounded-lg h-10 w-[45%] pl-3"
                  />
                </div>
              </div>

              <div className="h-24" />
            </div>
          )}
          {screenName === "bankaccount" && (
            <div className="text-black w-full px-10 pt-10 relative">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Bank Account</h1>
                  <div className="h-[2px] bg-[#1ED760] w-[100px]" />
                </div>
                <Image
                  onClick={onClose}
                  src="/cross_icon.webp"
                  alt="Icon"
                  width={50}
                  className="cursor-pointer"
                  height={50}
                />
              </div>
              <div className="mt-10 space-y-2">
                <div className="flex justify-between">
                  <div className="w-[47%]">
                    <p>Account Name</p>
                    <input
                      type="text"
                      value={bankPayload.bank_name}
                      onChange={(e) =>
                        setBankPayload({
                          ...bankPayload,
                          bank_name: e.target.value,
                        })
                      }
                      placeholder="Enter your First Name"
                      required
                      className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                    />
                  </div>
                  <div className="w-[47%]">
                    <p>Account Number</p>
                    <input
                      required
                      value={bankPayload.account_number}
                      onChange={(e) =>
                        setBankPayload({
                          ...bankPayload,
                          account_number: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Enter your Last Name"
                      className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 space-y-2">
                <p>IBAN</p>
                <div className="flex justify-between">
                  <input
                    required
                    value={bankPayload.IBAN}
                    onChange={(e) =>
                      setBankPayload({
                        ...bankPayload,
                        IBAN: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Enter Address"
                    className="border border-black rounded-lg h-10 w-[100%] pl-3"
                  />
                </div>
              </div>
            </div>
          )}
          {screenName !== "" && (
            <div className="flex justify-between absolute bottom-0 pb-10 bg-white pt-3 w-[100%] left-0 px-[calc(3vw)] ">
              <button
                onClick={onClickBack}
                className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full"
              >
                Back
              </button>
              <button
                onClick={onClickNext}
                className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full "
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
