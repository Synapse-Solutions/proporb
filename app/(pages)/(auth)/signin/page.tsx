"use client";
import SigninComponent from "@/app/components/auth/SigninComponent";
import SignUpComponent from "@/app/components/auth/SignUpComponent";
import { postApi } from "@/app/utils/AppApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const router = useRouter();
  const [isOwner,setIsOwner]=useState("")
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const onClickLogin = async () => {
    if (!user.email || !user.password)
      return toast.error("Please fill all the fields");
    try {
      const payload = {
        email: user.email,
        password: user.password,
      };
      let path = isOwner ==="tenant" ?  "/v1/tenet/login":"/v1/owner/login"
      const response = await postApi(path, payload);

      if (response.success === true) {
        toast.success("Login Successful");
        localStorage.setItem("user", JSON.stringify(response.data));
        router.push("/getStarted");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("🚀 ~ onClickLogin ~ error:", error);
    }
  };
  return (
    <>
    {!isOwner  ? <SignUpComponent setIsOwner={setIsOwner}/>:
    <SigninComponent
      user={user}
      setUser={setuser}
      onClickLogin={onClickLogin}
    />}</>
  );
}
