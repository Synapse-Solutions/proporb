import Image from "next/image";
import React from "react";

export default function OverViewSingleProperty() {
  return (
    <div>
      <div className="flex gap-6 mt-5">
        <div className="border border-gray-400 rounded-2xl p-3 px-5">
          Property Type{"   "}
          <span className="font-bold text-black">Office</span>
        </div>
        <div className="border border-gray-400 rounded-2xl p-3 px-5">
          Active Units <span className="font-bold text-black">23</span>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="font-bold">Images</h1>
        <div className="flex flex-col justify-center items-center space-y-4 mt-5">
          <Image
            src="/empty_state_images.webp"
            alt="properties"
            height={150}
            width={150}
          />
          <p className="font-bold text-black">No Images found</p>
          <p className="text-[14px] text-[#344054]">
            Kindly upload professional images
          </p>
          <button className="bg-[#1ED760] rounded-full px-7 py-3 text-white">
            + Add Images
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-gray-500 w-[100%] mt-5" />
      <div className="mt-7">
        <h1 className="font-bold">Owners</h1>
        <div className="flex flex-col justify-center items-center space-y-4 mt-5">
          <Image
            src="/empty_state_owners.webp"
            alt="properties"
            height={150}
            width={150}
          />
          <p className="font-bold text-black">No Owners found</p>
          <p className="text-[14px] text-[#344054]">
            Add owners to this property
          </p>
          <button className="bg-[#1ED760] rounded-full px-7 py-3 text-white">
            + Add Owners
          </button>
        </div>
      </div>
    </div>
  );
}
