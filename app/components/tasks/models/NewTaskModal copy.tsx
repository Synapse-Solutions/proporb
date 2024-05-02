"use client";

import React, { useState } from "react";
import Image from "next/image";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const options = [
  { label: "One time task", value: "option1" },
  { label: "Recurring Task", value: "option2" },
];

interface Props {
  onClose?: () => void;
}
export default function NewTaskModal({ onClose }: Props) {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [notifyAssignee, setNotifyAssignee] = useState(false);
  const uploadPhotoRef = React.useRef<HTMLInputElement>(null);

  const onClickuploadPhoto = () => {
    uploadPhotoRef.current?.click();
  };

  const handleOptionChange = (changeEvent: any) => {
    setSelectedOption(changeEvent.target.value);
  };

  const handleNotifyChange = (changeEvent: any) => {
    setNotifyAssignee(!notifyAssignee);
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
                <h1 className="text-[32px] font-bold">New Task</h1>
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
                  placeholder="Enter your First Name"
                  required
                  className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                />
              </div>
              <div className="w-[100%]">
                <p>Description</p>
                <textarea
                  name=""
                  id=""
                  rows={10}
                  className="border border-black rounded-lg  w-full pl-3 mt-4"
                ></textarea>
              </div>
              <div className="flex gap-10">
                {options.map((option, index) => (
                  <div key={index} className="gap-2 flex">
                    <input
                      type="radio"
                      id={option.value}
                      name="dynamicRadio"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={handleOptionChange}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[100%] mt-10">
              <p>Due Date*</p>
              <input
                type="date"
                required
                className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
              />
            </div>

            <div className="flex justify-between mt-5">
              <div className="w-[47%]">
                <p>Status</p>
                <select
                  name=""
                  id=""
                  className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>

              <div className="w-[47%]">
                <p>Priority</p>
                <select
                  name=""
                  id=""
                  className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
            <div className="w-[100%] mt-10">
              <p>Assignee*</p>
              <select
                name=""
                id=""
                className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div className="gap-4 flex mt-5">
              <button onClick={handleNotifyChange}>
                {notifyAssignee ? (
                  <CheckBoxIcon color="success" />
                ) : (
                  <CheckBoxOutlineBlankIcon />
                )}
              </button>

              <label htmlFor="option1">Option 1</label>
            </div>
            <div className="w-[100%] mt-10">
              <p>Related to*</p>
              <select
                name=""
                id=""
                className="border border-black rounded-lg h-10 w-full pl-3 mt-4"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
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
                <input type="file" className="hidden" ref={uploadPhotoRef} />
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
                onClick={onClose}
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
