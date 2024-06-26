"use client";
import ProfileInfoSidebar from "@/app/sharedcomponents/ProfileInfoSidebar";
import { putAPi, uploadImageToS3 } from "@/app/utils/AppApi";
import { on } from "events";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  onClose: () => void;
}
export default function PersonaInformation({ onClose }: Props) {
  // ******* States *******
  const [screenName, setScreenName] = useState("personal");
  const [userPayload, setUserPayload] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    address: "",
    image: "",
  });

  const uploadFileRef = useRef<any>(null);

  const uploadFile = () => {
    if (uploadFileRef.current) {
      uploadFileRef.current?.click();
    }
  };

  useEffect(() => {
    getCurrent();
  }, []);
  console.log("🚀 ~ PersonaInformation ~ userPayload:", userPayload);

  const getCurrent = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    let userDATa = user.Owner ? user.Owner : user.Tenant;
    setUserPayload({
      first_name: userDATa.first_name,
      last_name: userDATa.last_name,
      email: userDATa.email,
      mobile: userDATa.mobile,
      address: userDATa.address,
      image: userDATa.image,
    });
  };

  const handlefile = async (file: any) => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    const response = await uploadImageToS3(file, token);
    setUserPayload((prev) => {
      return {
        ...prev,
        image: response,
      };
    });
  };
  const onclicBack = () => {
    if (screenName === "contact") {
      setScreenName("personal");
    } else if (screenName === "address") {
      setScreenName("contact");
    }
  };

  const onClickNext = async () => {
    if (screenName === "personal") {
      setScreenName("contact");
    } else if (screenName === "contact") {
      setScreenName("address");
    } else {
      const user = JSON.parse(localStorage.getItem("user") || "");
      let token = user.authToken;
      let path = user.Owner ? "/v1/owner/" : "/v1/tenant/";
      let id = user.Owner ? user.Owner.id : user.Tenant.id;
      const response = await putAPi(path + id, userPayload, token);
      if (response.success) {
        toast.success("Profile Updated successfully");
        updateLocalUser();
        onClose();
      } else {
        toast.error("Error updating profile");
      }
    }
  };

  const updateLocalUser = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    let newUser = user;
    newUser.Owner.first_name = userPayload.first_name;
    newUser.Owner.last_name = userPayload.last_name;
    newUser.Owner.email = userPayload.email;
    newUser.Owner.mobile = userPayload.mobile;
    newUser.Owner.address = userPayload.address;
    newUser.Owner.image = userPayload.image;
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed top-0 left-0 z-10 flex items-center justify-center"
    >
      <div className="w-[90%] 2xl:w-[calc(80vw)] h-[calc(90vh)]  bg-white border border-black  flex ">
        <ProfileInfoSidebar
          activeTab={screenName}
          setActiveTab={setScreenName}
        />
        <div className="w-[75%] 2xl:w-[80%]  relative h-full">
          {screenName === "personal" && (
            <div className="text-black w-full px-10 pt-10 h-full overflow-auto ">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">
                    Personal Information
                  </h1>
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
                  src={
                    userPayload?.image?.includes("http")
                      ? userPayload.image
                      : "/default.webp"
                  }
                  alt="Icon"
                  width={100}
                  height={100}
                  className="rounded-full object-cover bg-black"
                  onClick={uploadFile}
                />
                <button
                  onClick={uploadFile}
                  className="flex gap-3 border-2 border-[#1ED760] rounded-md px-3 py-1 items-center"
                >
                  <Image
                    src={"/icon_image_add.webp"}
                    alt="Icon"
                    height={30}
                    width={30}
                  />
                  <p>Upload image</p>
                  <input
                    ref={uploadFileRef}
                    type="file"
                    className="hidden"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      if (e.target.files) {
                        handlefile(e.target.files[0]);
                      }
                    }}
                  />
                </button>
              </div>

              <div className="flex justify-between mt-5">
                <div className="w-[47%]">
                  <p>First Name</p>
                  <input
                    type="text"
                    value={userPayload.first_name}
                    onChange={(e) => {
                      setUserPayload({
                        ...userPayload,
                        first_name: e.target.value,
                      });
                    }}
                    placeholder="Enter your First Name"
                    required
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
                </div>
                <div className="w-[47%]">
                  <p>Last Name</p>
                  <input
                    required
                    value={userPayload.last_name}
                    onChange={(e) => {
                      setUserPayload({
                        ...userPayload,
                        last_name: e.target.value,
                      });
                    }}
                    type="text"
                    placeholder="Enter your Last Name"
                    className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                  />
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
                  <select className="border border-black rounded-lg h-10 w-[45%]">
                    <option value="mobile"> Mobile Number</option>

                    <option value="phone"> Phone Number</option>
                  </select>
                  <input
                    required
                    type="number"
                    value={userPayload.mobile}
                    onChange={(e) => {
                      setUserPayload({
                        ...userPayload,
                        mobile: e.target.value,
                      });
                    }}
                    placeholder="Enter your phone number"
                    className="border border-black rounded-lg h-10 w-[45%] pl-3"
                  />
                </div>
              </div>

              <div className="mt-10 space-y-2">
                <p>Email</p>

                <div className="flex justify-between">
                  <select className="border border-black rounded-lg h-10 w-[45%]">
                    <option value="mobile">Primary</option>

                    <option value="phone">Secondary</option>
                  </select>
                  <input
                    type="email"
                    value={userPayload.email}
                    onChange={(e) => {
                      setUserPayload({
                        ...userPayload,
                        email: e.target.value,
                      });
                    }}
                    placeholder="Enter your Email"
                    required
                    className="border border-black rounded-lg h-10 w-[45%] pl-3"
                  />
                </div>
              </div>

              <div className="h-24" />
            </div>
          )}
          {screenName === "address" && (
            <div className="text-black w-full px-10 pt-10 relative">
              <div className="flex justify-between ">
                <div>
                  <h1 className="text-[32px] font-bold">Address</h1>
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
                <p>Address</p>
                <div className="flex justify-between">
                  <input
                    required
                    type="text"
                    value={userPayload.address}
                    onChange={(e) => {
                      setUserPayload({
                        ...userPayload,
                        address: e.target.value,
                      });
                    }}
                    placeholder="Enter your street location"
                    className="border border-black rounded-lg h-10 w-[100%] pl-3"
                  />
                </div>
              </div>
              <div className="mt-10 space-y-2">
                <div className="flex justify-between">
                  <div className="w-[45%] space-y-2">
                    <p>City</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                  <div className="w-[45%] space-y-2">
                    <p>Province</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-10 space-y-2">
                <div className="flex justify-between">
                  <div className="w-[45%] space-y-2">
                    <p>Country</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                  <div className="w-[45%] space-y-2">
                    <p>Zip Code</p>
                    <select className="border border-black rounded-lg h-10 w-[100%]">
                      <option value="mobile">Islamabad</option>
                      <option value="phone">Rawalpindi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between absolute bottom-0 pb-10 bg-white pt-3 w-[100%] left-0 px-[calc(3vw)] ">
            <button
              onClick={onclicBack}
              className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full"
            >
              Back
            </button>
            <button
              onClick={() => onClickNext()}
              className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
