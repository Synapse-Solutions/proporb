import SearchView from "@/app/sharedcomponents/SearchView";
import Image from "next/image";
import React from "react";

const favouritesArray = [
  {
    title: "Balance sheet",
    isFavourite: true,
  },
  {
    title: "Owner Statement",
    isFavourite: true,
  },
  {
    title: "Cash Flow Statement",
    isFavourite: true,
  },
  {
    title: "Profit and Loss",
    isFavourite: true,
  },
];
const balanceSheetArray = [
  {
    title: "Balance sheet",
    isFavourite: true,
  },
  {
    title: "Profit and Loss",
    isFavourite: true,
  },
  {
    title: "Balance Sheet by Month",
    isFavourite: false,
  },
  {
    title: "Profit and Loss by Month",
    isFavourite: false,
  },
  {
    title: "Balance Sheet by Property",
    isFavourite: false,
  },
  {
    title: "Profit and Loss by Property",
    isFavourite: false,
  },
  {
    title: "Balance Sheet by Quarter",
    isFavourite: false,
  },
  {
    title: "Profit and Loss by Quarter",
    isFavourite: false,
  },
  {
    title: "Balance Sheet by Year",
    isFavourite: false,
  },
  {
    title: "Profit and Loss by Year",
    isFavourite: false,
  },
];

const SingleRow = ({ title, isFavourite }: any) => {
  return (
    <div className="flex w-[48%] justify-between border-b border-gray-400 text-black pb-3 mt-5">
      <h1 className="text-black">{title}</h1>
      <Image
        src={isFavourite ? "/filled_star.webp" : "/empty_star.webp"}
        width={25}
        height={25}
        alt="star"
      />
    </div>
  );
};
export default function ReportsSingleProperty() {
  return (
    <div>
      <SearchView />
      <div className="mt-5">
        <h1 className="font-bold text-[24px]">Favourites</h1>
        <div className="h-[2px] bg-[#1ED760] w-[70px]" />
        <div className="flex mt-5 justify-between flex-wrap">
          {favouritesArray.map((favourite, index) => (
            <SingleRow
              key={index}
              title={favourite.title}
              isFavourite={favourite.isFavourite}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-[24px]">Business Overview</h1>
        <div className="h-[2px] bg-[#1ED760] w-[70px]" />
        <div className="flex mt-5 justify-between flex-wrap">
          {balanceSheetArray.map((favourite, index) => (
            <SingleRow
              key={index}
              title={favourite.title}
              isFavourite={favourite.isFavourite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
