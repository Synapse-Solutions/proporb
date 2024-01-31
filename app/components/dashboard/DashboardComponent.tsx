import { CircleProgressBar } from "@/app/sharedcomponents/CircleProgressBar";
import Navbar from "@/app/sharedcomponents/Navbar";
import { RoundChart } from "@/app/sharedcomponents/RoundChart";
import Sidebar from "@/app/sharedcomponents/Sidebar";
import Image from "next/image";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

let propertAndLoss = [
  {
    nameofmonth: "January",
    profit: 1000,
    income: 2000,
    expense: 1500,
  },
  {
    nameofmonth: "Feb",
    profit: 1500,
    income: 2000,
    expense: 1000,
  },
  {
    nameofmonth: "Mar",
    profit: 1000,
    income: 2000,
    expense: 1000,
  },
  {
    nameofmonth: "April",
    profit: 800,
    income: 2000,
    expense: 1200,
  },
  {
    nameofmonth: "May",
    profit: 1500,
    income: 2000,
    expense: 900,
  },
  {
    nameofmonth: "June",
    profit: 1300,
    income: 2000,
    expense: 1300,
  },
];

const propertiesArray = [1, 2, 3, 4, 5];

export default function DashboardComponent() {
  // Calculate percentages
  const dataWithPercentages = propertAndLoss.map((item) => ({
    ...item,
    profitPercentage: (item.profit / item.income) * 100,
    expensePercentage: (item.expense / item.income) * 100,
  }));

  return (
    <div>
      <Sidebar />
      <div className="w-[calc(85vw)] ml-[calc(15vw)] h-[calc(100vh)] p-8 px-12 overflow-x-hidden">
        <Navbar />
        <div className="flex gap-5 w-full mt-10">
          <div className="bg-white rounded-xl p-10 w-[45%] overflow-auto">
            <p>Profit and Loss</p>
            <div className="flex gap-5 mt-10 ">
              {dataWithPercentages.map((item, index) => (
                <div key={index}>
                  <div className="h-32 flex items-end">
                    <div className="bg-[#18D06B] w-3 h-[100%]" />
                    <div
                      className="bg-[#FF4949] w-3 "
                      style={{ height: `${item.expensePercentage}%` }}
                    />
                    <div
                      className="bg-[#FFB120] w-3 "
                      style={{
                        height: `${item.profitPercentage}%`,
                      }}
                    />
                  </div>
                  <p className="text-[15px] text-black">{item.nameofmonth}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-5 items-center mt-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#18D06B]" />
                <p className="text-[13px]">Income</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#FF4949]" />
                <p className="text-[13px]">Expense</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#FFB120]" />
                <p className="text-[13px]">Profit/Loss</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-10 w-[45%] overflow-auto">
            <div className="flex items-center gap-3">
              <p>Maintenance Requests </p>
              <div className="bg-black h-4 w-4 rounded items-center flex justify-center text-[10px] text-white">
                2
              </div>
            </div>
            <div className="flex items-center gap-5 justify-between mt-10">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-3 rounded-full bg-[#FF4949]" />
                  <p>
                    <span>2</span> New requests
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-3 rounded-full bg-[#FFB120]" />

                  <p>
                    <span>8</span> In progress
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-3 rounded-full bg-[#18D06B]" />

                  <p>
                    <span>1</span>Completed
                  </p>
                </div>
              </div>
              <div className="w-32 relative">
                <RoundChart />
                <div className="absolute h-full w-full top-0 flex flex-col font-bold left-0 items-center justify-center">
                  <p>11</p>
                  <p className="text-[12px]"> Total requests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-5 items-center mt-5">
          <div className="bg-white rounded-xl p-10 w-[45%] overflow-auto h-[calc(40vh)]">
            <p>Properties</p>
            <div className="mt-5">
              <div className="flex items-center text-[12px] border border-gray-400 rounded-lg p-2">
                <p style={{ flex: 1 }}>Properties</p>
                <p style={{ flex: 1 }}>Tenant</p>
                <p style={{ flex: 1 }}>Payment Details</p>
              </div>

              {propertiesArray.map((item, index) => (
                <div key={index} className="flex items-center mt-3">
                  <div
                    style={{ flex: 1 }}
                    className="flex items-center gap-3 text-[12px]"
                  >
                    <Image
                      src={"/house_1.webp"}
                      width={30}
                      alt="house"
                      height={30}
                    />
                    <p>House 1</p>
                  </div>
                  <div
                    style={{ flex: 1 }}
                    className="flex items-center gap-3 text-[12px]"
                  >
                    <Image
                      src={"/house_1.webp"}
                      width={30}
                      alt="house"
                      height={30}
                    />
                    <p>House 1</p>
                  </div>
                  <div
                    style={{ flex: 1 }}
                    className="flex flex-col gap-1 text-[12px]"
                  >
                    <p>November 20 , 2023</p>
                    <p>55,000 Rs</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-10 w-[45%] overflow-auto h-[calc(40vh)]">
            <p className="text-[15px] font-bold">Rent amount</p>
            <div className="mt-10">
              <div className="h-10 flex gap-3 items-center">
                <div style={{ width: 40, height: 40 }}>
                  <CircleProgressBar color="#18D06B" />
                </div>
                <div>
                  <p>Amount collected</p>
                  <p className="font-bold text-[15px]">41,000,000 Rs total</p>
                </div>
              </div>
              <div className="h-10 flex gap-3 items-center mt-5">
                <div style={{ width: 40, height: 40 }}>
                  <CircleProgressBar color="#FF4949" />
                </div>
                <div>
                  <p>Amount collected</p>
                  <p className="font-bold text-[15px]">41,000,000 Rs total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-5 items-center mt-5">
          <div className="bg-white rounded-xl p-10 w-[45%] overflow-auto h-[calc(40vh)]">
            <p>Properties</p>
            <div className="mt-5">
              <div className="flex items-center text-[12px] border border-gray-400 rounded-lg p-2">
                <p style={{ flex: 1 }}>Tenant</p>
                <p style={{ flex: 1 }}>Date</p>
                <p style={{ flex: 1 }}>Amount</p>
                <p style={{ flex: 1 }}>Status</p>
              </div>

              {propertiesArray.map((item, index) => (
                <div key={index} className="flex items-center mt-3">
                  <div
                    style={{ flex: 1 }}
                    className="flex items-center gap-3 text-[12px]"
                  >
                    <Image
                      src={"/house_1.webp"}
                      width={30}
                      alt="house"
                      height={30}
                    />
                    <p>House 1</p>
                  </div>
                  <div style={{ flex: 1 }} className=" gap-3 text-[8px]">
                    <p className="font-bold text-black">October 20 , 2022</p>
                    <p>House 1</p>
                  </div>
                  <div
                    style={{ flex: 1 }}
                    className="flex flex-col gap-1 text-[12px]"
                  >
                    <p>55,000 Rs</p>
                  </div>
                  <div
                    style={{ flex: 1 }}
                    className="text-[12px] flex items-center justify-center"
                  >
                    <p className="text-[12px] bg-[#EAFAE5] text-[#18D06B] px-3 py-1 rounded-lg">
                      Paid
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-10 w-[45%] overflow-auto">
            <div className="flex items-center gap-3">
              <p>Occupancy Rate </p>
            </div>
            <div className="flex items-center gap-5 justify-between mt-10">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-3 rounded-full bg-[#FF4949]" />
                  <div>
                    <p>
                      <span className="font-bold">2 Units </span> {"  "}Vacant
                    </p>
                    <p>20%</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="h-3 w-3 rounded-full bg-[#FFB120]" />
                  <div>
                    <p>
                      <span className="font-bold">8 Units</span> Occupied
                    </p>
                    <p>80%</p>
                  </div>
                </div>
              </div>
              <div className="w-32 relative">
                <RoundChart />

                <div className="absolute h-full w-full top-0 flex flex-col font-bold left-0 items-center justify-center">
                  <p>11</p>
                  <p className="text-[12px]"> Total requests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
