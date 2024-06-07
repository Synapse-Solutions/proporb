"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  getApiWithToken,
  postApiWithToken,
  uploadImageToS3,
} from "@/app/utils/AppApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  onClose: () => void;
}
export default function AddNoteModal({ onClose }: Props) {
  const [notePayload, setNotePayload] = useState({
    title: "",
    note: "",
    image: "",
    unit_id: "",
  });
  const [unitsArray, setUnitsArray] = useState<any>([]);
  const uploadPhotoRef = React.useRef<HTMLInputElement>(null);
  const onClickuploadPhoto = () => {
    uploadPhotoRef.current?.click();
  };
  useEffect(() => {
    getAllUnits();
  }, []);

  const getAllUnits = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    const response = await getApiWithToken("/v1/unit", token);
    setUnitsArray(response.data.result);
  };
  const onSave = async () => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;

    try {
      const response = await postApiWithToken("/v1/notes", notePayload, token);
      if (response.success === true) {
        toast.success("Note added successfully");
        onClose();
      }
    } catch (error) {
      console.log("🚀 ~ onSave ~ error:", error);
    }
  };

  const handleChangeNote = async (file: any) => {
    const user = localStorage.getItem("user") || "";
    let token = JSON.parse(user).authToken;
    const url = await uploadImageToS3(file, token);
    setNotePayload({
      ...notePayload,
      image: url,
    });
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
                <h1 className="text-[32px] font-bold">New Note</h1>
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
                <p>Title*</p>
                <input
                  type="text"
                  value={notePayload.title}
                  onChange={(e) =>
                    setNotePayload({ ...notePayload, title: e.target.value })
                  }
                  placeholder="Enter title"
                  required
                  className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                />
              </div>
              <div className="w-[100%]">
                <select
                  name=""
                  id=""
                  onChange={(e) =>
                    setNotePayload({ ...notePayload, unit_id: e.target.value })
                  }
                  className="w-full rouned border border-gray-400 px-3 rounded-xl h-12 mt-3"
                >
                  <option value="">Select Unit</option>
                  {unitsArray.map((unit: any, index: number) => (
                    <option key={index} value={unit.id}>
                      {unit.unit_no}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[100%]">
                <p>Note*</p>
                <textarea
                  name=""
                  id=""
                  value={notePayload.note}
                  onChange={(e) =>
                    setNotePayload({ ...notePayload, note: e.target.value })
                  }
                  rows={10}
                  className="border border-black rounded-lg  w-full  mt-4 p-3"
                ></textarea>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <div
                onClick={onClickuploadPhoto}
                className="flex border border-[#98A2B3] border-dashed rounded-xl items-center px-5 py-3"
              >
                <Image
                  src={"/file_upload.webp"}
                  alt="upload"
                  height={50}
                  width={50}
                  className="h-[50px] object-contain w-[50px]"
                />
                <div>
                  <p className="text-black font-bold">Tap to upload</p>
                  <p className="text-[#98A2B3] text-[12px]">
                    DOC or PDF | 10MB max
                  </p>
                </div>
                <input
                  onChange={(e) => {
                    if (e.target.files) {
                      handleChangeNote(e.target.files[0]);
                    }
                  }}
                  type="file"
                  className="hidden"
                  ref={uploadPhotoRef}
                />
                <button className="bg-[#1ED760] rounded text-white px-5 py-2 ml-7">
                  Upload
                </button>
              </div>
            </div>

            <div className="flex justify-between my-10 bg-white pt-3 w-[100%]">
              <button
                onClick={onClose}
                className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full"
              >
                Cancel
              </button>
              <button
                onClick={onSave}
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
