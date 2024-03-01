"use client";
import Image from "next/image";
import React from "react";

export default function UploadPhotoBox() {
  const uploadPhotoRef = React.useRef<HTMLInputElement>(null);

  const onClickuploadPhoto = () => {
    uploadPhotoRef.current?.click();
  };
  return (
    <div
      onClick={onClickuploadPhoto}
      className="flex border border-[#98A2B3] border-dashed rounded-xl items-center px-5 py-3"
    >
      <Image
        src={"/file_upload.webp"}
        alt="upload"
        height={50}
        width={50}
        className="h-[50px] object-contain w-[50px]"
      />
      <div>
        <p className="text-black font-bold">Tap to upload</p>
        <p className="text-[#98A2B3] text-[12px]">DOC or PDF | 10MB max</p>
      </div>
      <input type="file" className="hidden" ref={uploadPhotoRef} />
      <button className="bg-[#1ED760] rounded text-white px-5 py-2 ml-7">
        Upload
      </button>
    </div>
  );
}
