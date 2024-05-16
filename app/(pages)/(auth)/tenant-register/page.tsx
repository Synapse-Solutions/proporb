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
import TenantRegister from "@/app/components/auth/TenantRegister";

export default function Register() {
  const router = useRouter();
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
      onAddTenant();
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
    }
  };
  return (
    <>
      <TenantRegister
        user={user}
        setUser={setuser}
        onClickRegister={onClickRegister}
        userErrors={userErrors}
      />
    </>
  );
}
