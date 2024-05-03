"use client";
import AccountCreatedModal from "@/app/sharedcomponents/AccountCreatedModal";
import { putAPi, uploadImageToS3 } from "@/app/utils/AppApi";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  onClose: () => void;
}

export default function CompanyInformationModal(props: Props) {
  const [companypayload, setCompanypayload] = useState({
    company_name: "",
    company_phone_no: "",
    company_address: "",
    company_city: "",
    company_email: "",
    company_zip_code: "",
    company_country: "",
    company_website_url: "",
  });

  const uploadFileRef = useRef<any>(null);

  const uploadFile = () => {
    if (uploadFileRef.current) {
      uploadFileRef.current?.click();
    }
  };

  const onClickBack = () => {
    props.onClose();
  };

  const onClckNext = async () => {
    if (
      companypayload.company_name === "" ||
      companypayload.company_phone_no === "" ||
      companypayload.company_address === "" ||
      companypayload.company_city === "" ||
      companypayload.company_email === "" ||
      companypayload.company_zip_code === "" ||
      companypayload.company_country === "" ||
      companypayload.company_website_url === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;

    let id = JSON.parse(user).Owner.id;
    const response = await putAPi("/v1/owner/" + id, companypayload, token);
    if (response.success === true) {
      toast.success("Company Information Added Successfully");
      props.onClose();
    } else {
      toast.error("Something went wrong. Please try again");
    }
  };

  const handleUploadImageToS3 = async (file: any) => {
    // const user = localStorage.getItem("user") || "";
    // let token = JSON.parse(user).authToken;
    // const response = await uploadImageToS3(file, token);
    // setCompanypayload((prev) => {
    //   return {
    //     ...prev,
    //     company_logo: response.url,
    //   };
    // });
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed left-0 top-0 text-black z-10 flex items-center justify-center"
    >
      <div className="w-[calc(90vw)] 2xl:w-[calc(80vw)] h-[calc(90vh)] bg-white text-black z-10 flex relative">
        <div className="w-[100%] relative h-full">
          <div className="w-full px-8 py-8 overflow-auto h-[100%]">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[25px] 2xl:text-[32px] font-bold">
                  Company Information
                </h1>
                <div className="h-[2px] bg-[#1ED760] w-[100px]" />
              </div>
              <Image
                onClick={props.onClose}
                className="cursor-pointer object-contain"
                src="/cross_icon.webp"
                alt="Icon"
                height={25}
                width={45}
              />
            </div>
            <div className="w-full mt-5">
              <div className="w-[100%] flex items-center gap-6 my-4">
                <div
                  className="rounded-[32px] h-16 w-16 bg-[#EFEFEF] flex justify-center items-center cursor-pointer"
                  onClick={uploadFile}
                >
                  <p className="text-[#656D76] text-5xl font-extralight">+</p>
                </div>

                <div
                  className="border-[#1ED760] border-2 flex gap-2 items-center h-10 px-4 rounded-lg cursor-pointer"
                  onClick={uploadFile}
                >
                  <Image
                    src="/addImageIconGreen.webp"
                    alt="Icon"
                    height={20}
                    width={20}
                  />
                  <p className="text-[#1ED760] text-sm font-semibold">
                    Upload Company Logo
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  ref={uploadFileRef}
                  onChange={(e) => {
                    if (e.target.files) {
                      handleUploadImageToS3(e.target.files[0]);
                    }
                  }}
                />
              </div>
              <div className="w-[100%] my-5">
                <p className="text-black font-medium mb-1">Company Name</p>
                <input
                  type="text"
                  value={companypayload.company_name}
                  onChange={(e) =>
                    setCompanypayload({
                      ...companypayload,
                      company_name: e.target.value,
                    })
                  }
                  placeholder="Enter company name"
                  className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                />
              </div>
              <div className="w-[100%] flex gap-10 my-4">
                <div className="w-[50%]">
                  <p className="text-black font-medium mb-1">Company Email</p>
                  <input
                    type="text"
                    value={companypayload.company_email}
                    onChange={(e) =>
                      setCompanypayload({
                        ...companypayload,
                        company_email: e.target.value,
                      })
                    }
                    placeholder="Enter Company Email Address"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
                <div className="w-[50%]">
                  <p className="text-black font-medium mb-1">
                    Company Phone Number
                  </p>
                  <input
                    type="text"
                    value={companypayload.company_phone_no}
                    onChange={(e) =>
                      setCompanypayload({
                        ...companypayload,
                        company_phone_no: e.target.value,
                      })
                    }
                    placeholder="Enter Company Phone Number"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
              </div>
              <div className="w-[100%] my-4">
                <p className="text-black font-medium mb-1">Address</p>
                <input
                  type="text"
                  value={companypayload.company_address}
                  onChange={(e) =>
                    setCompanypayload({
                      ...companypayload,
                      company_address: e.target.value,
                    })
                  }
                  placeholder="Enter house and street number"
                  className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                />
              </div>
              <div className="w-[100%] flex gap-10 my-4">
                <div className="w-[50%]">
                  <p className="text-black font-medium mb-1">City</p>
                  <input
                    type="text"
                    value={companypayload.company_city}
                    onChange={(e) =>
                      setCompanypayload({
                        ...companypayload,
                        company_city: e.target.value,
                      })
                    }
                    placeholder="Enter City"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
                <div className="w-[50%]">
                  <p className="text-black font-medium mb-1">Zip Code</p>
                  <input
                    type="text"
                    placeholder="Enter Zip Code"
                    value={companypayload.company_zip_code}
                    onChange={(e) =>
                      setCompanypayload({
                        ...companypayload,
                        company_zip_code: e.target.value,
                      })
                    }
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
              </div>
              <div className="w-[100%] flex gap-10 my-4">
                <div className="w-[50%]">
                  <p className="text-black font-medium mb-1">Country</p>
                  <input
                    type="text"
                    value={companypayload.company_country}
                    onChange={(e) =>
                      setCompanypayload({
                        ...companypayload,
                        company_country: e.target.value,
                      })
                    }
                    placeholder="Enter Country"
                    className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                  />
                </div>
              </div>
              <div className="w-[100%] my-4">
                <p className="text-black font-medium mb-1">
                  Company Website URL
                </p>
                <input
                  type="text"
                  value={companypayload.company_website_url}
                  onChange={(e) =>
                    setCompanypayload({
                      ...companypayload,
                      company_website_url: e.target.value,
                    })
                  }
                  placeholder="Enter URL"
                  className="border border-[#cacaca] rounded-lg h-10 w-[100%] px-2"
                />
              </div>
            </div>
            <div className="h-20 w-full" />
          </div>

          <div className="w-full flex justify-between px-8 mb-10 absolute bottom-0 right-0">
            <button
              onClick={onClickBack}
              className="border-[#1ED760] border text-black text-base font-semibold px-8 py-2 rounded-3xl"
            >
              Close
            </button>
            <button
              onClick={onClckNext}
              className="bg-[#1ED760] text-white text-base font-semibold px-8 py-2 rounded-3xl"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
