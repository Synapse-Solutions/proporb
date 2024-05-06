"use client";
import React, { useEffect } from "react";
import "./loading.css";
import { useRouter } from "next/navigation";
export default function LoaderScreen() {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : null;
    if (!user) {
      router.push("/signin");
    }
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}
