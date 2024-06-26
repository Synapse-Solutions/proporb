"use client";
import SigninComponent from "@/app/components/auth/SigninComponent";
import SignUpComponent from "@/app/components/auth/SignUpComponent";
import { postApi } from "@/app/utils/AppApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const router = useRouter();
  const [isOwner, setIsOwner] = useState("");
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    let isOwner = localStorage.getItem("isOwner")
    if(isOwner){
      setIsOwner(isOwner)
    }
  },[])
  const onClickLogin = async () => {
    if (!user.email || !user.password)
      return toast.error("Please fill all the fields");
    try {
      const payload = {
        email: user.email,
        password: user.password,
      };
      let path = isOwner === "tenant" ? "/v1/tenet/login" : "/v1/owner/login";
      const response = await postApi(path, payload);

      if (response.success === true) {
        toast.success("Login Successful");
        localStorage.setItem("isOwner", isOwner);
        localStorage.setItem("user", JSON.stringify(response.data));
        if (isOwner === "tenant") {
          router.push("/rentals");
        } else {
          router.push("/getStarted");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("🚀 ~ onClickLogin ~ error:", error);
    }
  };
  const handleChangeOwner = (owner: string) => {
    localStorage.setItem("isOwner", owner);
    setIsOwner(owner);
  };
  return (
    <>
      {!isOwner ? (
        <SignUpComponent handleChangeOwner={handleChangeOwner} />
      ) : (
        <SigninComponent
          user={user}
          setUser={setuser}
          isOwner={isOwner}
          onClickLogin={onClickLogin}
        />
      )}
    </>
  );
}
