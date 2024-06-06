import SearchView from "@/app/sharedcomponents/SearchView";
import Image from "next/image";
import React from "react";

const array = [1, 2, 3, 4, 5, 6];
export default function UnitsSingleComponent() {
  return (
    <div>
      <div className="flex justify-between w-full items-center">
        <SearchView />
        <div className="bg-[#1ED760] px-4 py-2 rounded-full text-white h-12 flex items-center mt-5">
          + New Unit
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <p style={{ flex: 4 }}>Unit</p>
        <p style={{ flex: 2 }}>Current State</p>
        <p style={{ flex: 2 }}>Future State</p>
        <p style={{ flex: 2 }}>Listing Status</p>
        <div style={{ flex: 1 }} />
      </div>
      <div className="h-[1px] w-full bg-gray-400 rounded-full mt-3" />
      {array.map((item, index) => (
        <div key={index} className="flex justify-between items-center mt-10">
          <div style={{ flex: 4 }} className="flex gap-3">
            <Image
              src={"/home_icon.webp"}
              height={50}
              width={50}
              alt="homeIcon"
            />
            <div>
              <p>Unit 1</p>
              <p>2 Bedroom, 1 Bathroom</p>
            </div>
          </div>
          <p style={{ flex: 2 }}>Not listed</p>
          <p style={{ flex: 2 }}>Vacant</p>
          <p style={{ flex: 2 }}>Not rented</p>
          <button style={{ flex: 1 }}>
            <Image
              src={"/white_option.webp"}
              height={40}
              width={40}
              alt="editIcon"
            />{" "}
          </button>
        </div>
      ))}
    </div>
  );
}
