"use client";
import PaymentDetails from "@/app/components/auth/PaymentDetails";
import PaymentFail from "@/app/components/auth/PaymentFail";
import PaymentSuccessfull from "@/app/components/auth/PaymentSuccessfull";
import RegisterComponent from "@/app/components/auth/RegisterComponent";
import SubscriptionDetails from "@/app/components/auth/SubscriptionDetails";
import React, { useState } from "react";

export default function Register() {
  const [screenName, setScreenName] = useState("paymentfail");

  return (
    <>
      {screenName === "singup" ? (
        <RegisterComponent />
      ) : screenName === "subscriptiondetails" ? (
        <SubscriptionDetails />
      ) : screenName === "paymentdetails" ? (
        <PaymentDetails />
      ) : screenName === "paymentsuccessful" ? (
        <PaymentSuccessfull />
      ) : screenName === "paymentfail" ? (
        <PaymentFail />
      ) : (
        ""
      )}
    </>
  );
}
