"use client";
import PaymentDetails from "@/app/components/auth/PaymentDetails";
import PaymentFail from "@/app/components/auth/PaymentFail";
import PaymentSuccessfull from "@/app/components/auth/PaymentSuccessfull";
import RegisterComponent from "@/app/components/auth/RegisterComponent";
import SubscriptionDetails from "@/app/components/auth/SubscriptionDetails";
import React, { useState } from "react";
import { postApi, postApiWithToken } from "@/app/utils/AppApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [screenName, setScreenName] = useState("paymentdetails");
  const [token, setToken] = useState("");
  const [user, setuser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [subscriptionPayload, setSubscriptionPayload] = useState({
    subcription_type: "weekly",
    card_no: "",
    billing_no: "",
    card_holder_name: "",
    expiration_date: "",
    cvc: "",
    discount_code: "",
    company_image:
      "https://propnob.s3.amazonaws.com/public/undefined/1714739445200_.jpg",
    subcription_price: "15",
    subcription_date: "10-20-2022",
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
        setToken(response.data.authToken);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("🚀 ~ onClickRegister ~ error:", error);
    }
  };

  const onBuySubscription = async () => {
    const response = await postApiWithToken(
      "/v1/owner/subcription",
      subscriptionPayload,
      token
    );
    if (response.success) {
      setScreenName("paymentsuccessful");
    } else {
      setScreenName("paymentfail");
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
        <SubscriptionDetails
          setScreenName={setScreenName}
          setSubscriptionPayload={setSubscriptionPayload}
          subscriptionPayload={subscriptionPayload}
        />
      ) : screenName === "paymentdetails" ? (
        <PaymentDetails
          setScreenName={setScreenName}
          setSubscriptionPayload={setSubscriptionPayload}
          subscriptionPayload={subscriptionPayload}
          onBuySubscription={onBuySubscription}
        />
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
