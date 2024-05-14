"use client";
import { postApiWithToken } from "@/app/utils/AppApi";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  onClose: () => void;
}
export default function LoginAndPasswordModal(props: Props) {
  const [activeScreen, setActiveScreen] = useState(1);
  let [payload, setPayload] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const onSave = async () => {
    if (payload.newPassword !== payload.confirmPassword)
      return toast.error("Password does not match");
    if (!payload.newPassword || !payload.email)
      return toast.error("Please fill all the fields");
    let user = JSON.parse(localStorage.getItem("user") || "{}");
    let isOwner = localStorage.getItem("isOwner") || "{}";
    let token = user.authToken;

    let object = {
      email: payload.email,
      oldPassword: payload.oldPassword,
      newPassword: payload.newPassword,
    };
    let path =
      isOwner === "tenant"
        ? "/v1/tenet/change-password"
        : "/v1/owner/change-password";
    const response = await postApiWithToken(path, object, token);
    if (response.success) {
      toast.success(response.data.message);
      props.onClose();
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      className="w-[calc(100vw)] h-[calc(100vh)] fixed left-0 top-0 text-black z-10 flex items-center justify-center"
    >
      <div className="w-[calc(60vw)] h-[calc(90vh)] 2xl:h-[calc(80vh)] bg-white top-0 text-black z-10 p-10 flex flex-col items-center relative">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-[32px] font-bold">
              Login and Password Settings
            </h1>
            <div className="h-[2px] bg-[#1ED760] w-[100px]" />
          </div>
          <Image
            className="cursor-pointer h-[50px] object-contain"
            src="/cross_icon.webp"
            alt="Icon"
            width={50}
            height={50}
            onClick={props.onClose}
          />
        </div>
        {activeScreen === 1 && (
          <div className="flex flex-col items-center w-[60%] mt-10">
            <Image
              src="/password.webp"
              alt="Icon"
              width={100}
              height={100}
              className="h-[80px] 2xl:h-[100px] object-contain"
            />
            <h1 className="font-bold text-[30px]">Unlock Settings</h1>
            <p className="text-center mt-5">
              To enter the login and password settings, <br /> please provide
              your current password.
            </p>
            <div className="w-full mt-5">
              <p className="my-3 2xl:my-5 ">* Current Password</p>
              <input
                required
                value={payload.oldPassword}
                onChange={(e) =>
                  setPayload({ ...payload, oldPassword: e.target.value })
                }
                type="password"
                placeholder="Enter your password"
                className="border border-black rounded-lg h-10 w-[100%] pl-3"
              />
            </div>
          </div>
        )}
        {activeScreen === 2 && (
          <>
            <div className="w-full mt-5">
              <p className="my-3 2xl:my-5 "> *Email</p>
              <input
                required
                value={payload.email}
                onChange={(e) =>
                  setPayload({ ...payload, email: e.target.value })
                }
                type="email"
                placeholder="Enter your email"
                className="border border-black rounded-lg h-10 w-[100%] pl-3"
              />
            </div>

            <div className="w-full mt-5">
              <p className="my-3 2xl:my-5 "> *New Password</p>
              <input
                required
                value={payload.newPassword}
                onChange={(e) =>
                  setPayload({ ...payload, newPassword: e.target.value })
                }
                type="password"
                placeholder="Enter your new password"
                className="border border-black rounded-lg h-10 w-[100%] pl-3"
              />
            </div>

            <div className="w-full mt-5">
              <p className="my-3 2xl:my-5 "> *Confirm New Password</p>
              <input
                required
                value={payload.confirmPassword}
                onChange={(e) =>
                  setPayload({ ...payload, confirmPassword: e.target.value })
                }
                type="password"
                placeholder="Enter your new password"
                className="border border-black rounded-lg h-10 w-[100%] pl-3"
              />
            </div>
          </>
        )}
        <div className="flex justify-between absolute bottom-10 w-[100%] left-0 px-[calc(3vw)] bg-white">
          <button className="border-[#1ED760] text-black border h-10 px-8 py-1 rounded-full">
            Cancel
          </button>
          <button
            onClick={() =>
              activeScreen === 1 ? setActiveScreen(activeScreen + 1) : onSave()
            }
            className="bg-[#1ED760] text-white h-10 px-8 py-1 rounded-full"
          >
            {activeScreen === 1 ? "Next" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
