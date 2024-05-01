"use client";
import PaymentDetails from "@/app/components/auth/PaymentDetails";
import PaymentFail from "@/app/components/auth/PaymentFail";
import PaymentSuccessfull from "@/app/components/auth/PaymentSuccessfull";
import RegisterComponent from "@/app/components/auth/RegisterComponent";
import SubscriptionDetails from "@/app/components/auth/SubscriptionDetails";
import React, { useState } from "react";
import { postApi } from "@/app/utils/AppApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [screenName, setScreenName] = useState("singup");
  const [user, setuser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const onClickRegister = async () => {
    try {
      const payload = {
        first_name: user.name.split(" ")[0],
        last_name: user.name.split(" ")[1],
        username: user.name.replace(" ", ""),
        email: user.email,
        mobile: user.mobile,
        password: user.password,
        address: "",
        image: "",
      };
      const response = await postApi("/v1/owner", payload);

      if (response.success) {
        setScreenName("subscriptiondetails");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("🚀 ~ onClickRegister ~ error:", error);
    }
  };
  return (
    <>
      {screenName === "singup" ? (
        <RegisterComponent
          user={user}
          setUser={setuser}
          setScreenName={setScreenName}
          onClickRegister={onClickRegister}
        />
      ) : screenName === "subscriptiondetails" ? (
        <SubscriptionDetails setScreenName={setScreenName} />
      ) : screenName === "paymentdetails" ? (
        <PaymentDetails setScreenName={setScreenName} />
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
