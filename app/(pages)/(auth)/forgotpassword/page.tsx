"use client";
import ForgotpasswordComponent from "@/app/components/auth/ForgotpasswordComponent";
import { postApi } from "@/app/utils/AppApi";
import React, { useState } from "react";

export default function page() {
  const [screenName, setScreenName] = useState("enteremail");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState({
    otpOne: "",
    otpTwo: "",
    otpThree: "",
    otpFour: "",
  });
  const otpOneRef = React.useRef<HTMLInputElement>(null);
  const otpTwoRef = React.useRef<HTMLInputElement>(null);
  const otpThreeRef = React.useRef<HTMLInputElement>(null);
  const otpFourRef = React.useRef<HTMLInputElement>(null);

  const onKeyDown = (e: any, ref: string) => {
    if (ref === "otpOne") {
      if (e.key === "Backspace") {
        otpOneRef.current?.focus();
      } else {
        otpTwoRef.current?.focus();
      }
    } else if (ref === "otpTwo") {
      if (e.key === "Backspace") {
        otpOneRef.current?.focus();
      } else {
        otpThreeRef.current?.focus();
      }
    } else if (ref === "otpThree") {
      if (e.key === "Backspace") {
        otpTwoRef.current?.focus();
      } else {
        otpFourRef.current?.focus();
      }
    } else if (ref === "otpFour") {
      if (e.key === "Backspace") {
        otpThreeRef.current?.focus();
      }
    }
  };

  const onSendOtp = async () => {
    let data = {
      email: email,
    };
    console.log("🚀 ~ onSendOtp ~ data:", data);
    const response = await postApi("/v1/owner/send-email", data);
    console.log("🚀 ~ onSendOtp ~ response:", response);
    if (response.success) {
      setScreenName("enterotp");
    }
  };
  return (
    <div>
      <ForgotpasswordComponent
        screenName={screenName}
        otpOneRef={otpOneRef}
        otpTwoRef={otpTwoRef}
        otpThreeRef={otpThreeRef}
        otpFourRef={otpFourRef}
        setScreenName={setScreenName}
        onKeyDown={onKeyDown}
        onSendOtp={onSendOtp}
        setEmail={setEmail}
        email={email}
      />
    </div>
  );
}
