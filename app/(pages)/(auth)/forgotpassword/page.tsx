"use client";
import ForgotpasswordComponent from "@/app/components/auth/ForgotpasswordComponent";
import { postApi } from "@/app/utils/AppApi";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function page() {
  const [screenName, setScreenName] = useState("enteremail");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");

  const onSendOtp = async () => {
    let data = {
      email: email,
    };
    console.log("🚀 ~ onSendOtp ~ data:", data);
    const response = await postApi("/v1/owner/send-email", data);
    console.log("🚀 ~ onSendOtp ~ response:", response);
    if (response.success) {
      toast.success("OTP sent successfully");
      setScreenName("otp");
    }
  };

  const onVerifyOtp = async () => {
    let data = {
      email: email,
      otpCode: otp,
    };

    console.log("🚀 ~ onVerifyOtp ~ data:", data);
    const response = await postApi("/v1/owner/verify-otp", data); 
    if (response.success) {
      toast.success("OTP verified successfully");
      setScreenName("enternewpassword");
    }
  };

  const updatePassword = async () => {
    let isOwner = localStorage.getItem("isOwner") || "owner";
    console.log("🚀 ~ updatePassword ~ isOwner:", isOwner);

    if (password !== Cpassword) {
      toast.error("Password does not match");
      return;
    }
    let data = {
      email: email,
      newPassword: password,
    };
    let path =
      isOwner !== "tenant"
        ? "/v1/owner/update-password"
        : "/v1/tenet/update-password";
    console.log("🚀 ~ updatePassword ~ data:", data);
    const response = await postApi(path, data);
    if (response.success) {
      toast.success("Password updated successfully");
      setScreenName("last");
    }
  };
  return (
    <div>
      <ForgotpasswordComponent
        screenName={screenName}
        setOtp={setOtp}
        otp={otp}
        setScreenName={setScreenName}
        onSendOtp={onSendOtp}
        setEmail={setEmail}
        email={email}
        onVerifyOtp={onVerifyOtp}
        password={password}
        setPassword={setPassword}
        Cpassword={Cpassword}
        setCpassword={setCpassword}
        updatePassword={updatePassword}
      />
    </div>
  );
}
