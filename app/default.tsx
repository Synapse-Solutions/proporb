"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="flex h-screen bg-gradient-to-t from-[] w-full items-center justify-center text-white">
      <div className="bg-[#1ED760] rounded w-[calc(20vw)] h-[calc(20vh)] flex flex-col items-center justify-center">
        <p className="font-bold text-[30px]">Page not found</p>
        <button onClick={goBack} className="font-bold text-[30px] underline">
          Go back
        </button>
      </div>
    </div>
  );
}
