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
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [screenName, setScreenName] = useState("signup");
  const [token, setToken] = useState("");
  const [userErrors, setUserErrors] = useState({
    name: false,
    email: false,
    mobile: false,
    password: false,
  });
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
    subcription_price: "15",
  });

  const onClickRegister = async () => {
    if (user.name === "") {
      setUserErrors({ ...userErrors, name: true });
    } else {
      setUserErrors({ ...userErrors, name: false });
    }
    if (user.email === "") {
      setUserErrors({ ...userErrors, email: true });
    } else {
      setUserErrors({ ...userErrors, email: false });
    }
    if (user.mobile === "") {
      setUserErrors({ ...userErrors, mobile: true });
    } else {
      setUserErrors({ ...userErrors, mobile: false });
    }
    if (user.password === "") {
      setUserErrors({ ...userErrors, password: true });
    } else {
      setUserErrors({ ...userErrors, password: false });
    }
    if (user.name && user.email && user.mobile && user.password) {
      setScreenName("subscriptiondetails");
    }
  };

  const onBuySubscription = async () => {
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
    const res = await postApi("/v1/owner", payload);

    if (res.success) {
      setToken(res.data.authToken);
      const response = await postApiWithToken(
        "/v1/owner/subcription",
        subscriptionPayload,
        res.data.authToken
      );
      if (response.success) {
        setScreenName("paymentsuccessful");
      } else {
        setScreenName("paymentfail");
      }
    } else {
      toast.error(res.data.message);
    }
  };

  const onAddTenant = async () => {
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
    const res = await postApi("/v1/tenet", payload);
    if (res.success) {
      toast.success("Tenant Added Successfully");
      router.push("/signin");
    } else {
      toast.error(res.data.message);
      setScreenName("signup");
    }
  };
  return (
    <>
      {screenName === "signup" ? (
        <RegisterComponent
          user={user}
          setUser={setuser}
          setScreenName={setScreenName}
          onClickRegister={onClickRegister}
          userErrors={userErrors}
        />
      ) : screenName === "subscriptiondetails" ? (
        <SubscriptionDetails
          setScreenName={setScreenName}
          setSubscriptionPayload={setSubscriptionPayload}
          subscriptionPayload={subscriptionPayload}
          onAddTenant={onAddTenant}
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
