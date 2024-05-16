"use client"
import RegisterTenantComponent from "@/app/components/auth/RegisterTenantComponent";
import { useRouter } from "next/navigation";
import { postApi, postApiWithToken } from "@/app/utils/AppApi";
import React, { useState } from "react";
import { toast } from "react-toastify";


export default function page() {
    const router = useRouter();
    const [screenName, setScreenName] = useState("signin");
    const [token, setToken] = useState("");

    const [userErrors, setUserErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        mobile: false,
        password: false,
    });
    const [user, setuser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
    });
    const onClickRegister = async () => {
        try {

            if (user.firstName === "") {
                setUserErrors({ ...userErrors, firstName: true });
            } else {
                setUserErrors({ ...userErrors, firstName: false });
            }
            if (user.lastName === "") {
                setUserErrors({ ...userErrors, lastName: true });
            } else {
                setUserErrors({ ...userErrors, lastName: false });
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
            if (user.firstName && user.lastName && user.email && user.mobile && user.password) {
                setScreenName("signin");
            }
            const payload = {
                first_name: user.firstName.split(" ")[0],
                last_name: user.lastName.split(" ")[1],
                email: user.email,
                mobile: user.mobile,
                password: user.password,
                address: "",
                image: "",
              };
        const res = await postApi("/v1/tenet", payload);
        if (res.success) {
            console.warn("login success")
            toast.success("Login Successful");
            localStorage.setItem("user", JSON.stringify(res.data));
            setScreenName("getStarted");
        }
        else {
            toast.error(res.data.message);
            setScreenName("signup");
          }
    }
        catch (e) {
            return e
        }

    }


    return (
        <RegisterTenantComponent
            user={user}
            setUser={setuser}
            setScreenName={setScreenName}
            onClickRegister={onClickRegister}
            userErrors={userErrors}
        />
    )

} 