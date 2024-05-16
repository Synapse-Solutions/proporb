"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getApiWithToken, postApiWithToken } from "@/app/utils/AppApi";

interface Props {
  onClose: () => void;
}
export default function NewTaskModal({ onClose }: Props) {
  const [unitsArray, setUnitsArray] = useState<any>([]);
  const [taskPayload, setTaskPayload] = useState({
    subject: "",
    request: "",
    unit_id: "",
    image: "jkdfgj",
  });

  const uploadPhotoRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    getAllUnits();
  }, []);

  const onClickuploadPhoto = () => {
    uploadPhotoRef.current?.click();
  };

  const getAllUnits = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    const response = await getApiWithToken("/v1/unit", token);
    setUnitsArray(response.data.result);
  };

  const onAddTask = async () => {
    if (taskPayload.unit_id === "") {
      taskPayload.unit_id = unitsArray[0]?.id;
    }
    if (taskPayload.subject === "" || taskPayload.request === "") {
      return toast.error("Please fill all the fields");
    }
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    const response = await postApiWithToken(
      "/v1/maintenance",
      taskPayload,
      token
    );
    if (response.success === true) {
      toast.success("Task Added Successfully");
      onClose();
    } else {
      toast.error("Something went wrong. Please try again");
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
        <div className="w-[100%]  relative h-full">
          <div className="text-black w-full px-10 py-10 h-full overflow-auto ">
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[32px] font-bold">New Maintenance</h1>
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

            <div className="mt-10 space-y-2">
              <div className="w-[100%]">
                <p>Subject*</p>
                <input
                  type="text"
                  value={taskPayload.subject}
                  onChange={(e) =>
                    setTaskPayload({ ...taskPayload, subject: e.target.value })
                  }
                  placeholder="Enter Subject"
                  required
                  className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                />
              </div>
              <div className="w-[100%]">
                <p>Request</p>
                <textarea
                  name=""
                  id=""
                  value={taskPayload.request}
                  onChange={(e) =>
                    setTaskPayload({ ...taskPayload, request: e.target.value })
                  }
                  rows={10}
                  className="border border-black rounded-lg  w-full p-3 mt-4"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-between mt-5">
              <div className="w-[100%]">
                <p>Unit</p>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setTaskPayload({ ...taskPayload, unit_id: e.target.value });
                  }}
                  className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                >
                  {unitsArray.map((unit: any, index: number) => (
                    <option key={index} value={unit.id}>
                      {unit.type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={onClickuploadPhoto}
              className="flex gap-3 border-2 border-[#1ED760] rounded-md px-3 py-1 items-center mt-10"
            >
              <Image
                src={"/icon_image_add.webp"}
                alt="Icon"
                height={30}
                width={30}
              />
              <p>Upload image</p>
              <input
                type="file"
                className="hidden"
                ref={uploadPhotoRef}
                accept="image/*"
              />
            </button>
            <div className="flex justify-between my-10 bg-white pt-3 w-[100%]">
              <button
                onClick={onClose}
                className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full"
              >
                Cancel
              </button>
              <button
                onClick={onAddTask}
                className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
