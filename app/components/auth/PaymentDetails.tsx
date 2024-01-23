import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import React from "react";

export default function PaymentDetails() {
  return (
    <div className="flex justify-between p-10 h-screen">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] px-10 ">
        <h1 className="text-[40px] font-bold ">Subscription Details</h1>
        <p>Get started by entering your details</p>
        <div className="w-[90%] pl-[3%]">
          <form action="submit" className="mt-5">
            <div>
              <p>Plan Details</p>
              <select className="border border-black rounded h-10 w-[100%]">
                <option
                  value="plan"
                  className="border border-black rounded h-10 w-[100%]"
                >
                  Plan Name
                </option>

                <option value="planone">Plan one</option>

                <option value="plantwo">Plan two</option>
              </select>
            </div>
            <div className="mt-5">
              <p>Billing Number</p>
              <input
                type="number"
                className="border border-black rounded h-10 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <p>Name on card</p>
              <input
                type="text"
                className="border border-black rounded h-10 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <p>Card Number</p>
              <input
                type="number"
                className="border border-black rounded h-10 w-[100%]"
              />
            </div>
            <div className="flex justify-between">
              <div className="mt-5 w-[45%]">
                <p>Expiration Date (MM/YY)</p>

                <input
                  type="password"
                  className="border border-black rounded h-10 w-[100%]"
                />
              </div>
              <div className="mt-5 w-[45%]">
                <p>CVC</p>

                <input
                  type="password"
                  className="border border-black rounded h-10 w-[100%]"
                />
              </div>
            </div>
            <div className="mt-5">
              <p>Discount Code</p>
              <div className="border border-black rounded h-10 w-[100%] flex px-3">
                <input type="text" className="outline-none w-[100%]" />
                <Image
                  src={"/spinner.webp"}
                  width={30}
                  height={30}
                  alt="spinner"
                  className=" object-contain"
                />
              </div>
            </div>
            <div className="mt-5">
              <p>Plan Name</p>

              <input
                type="text"
                className="border border-black rounded h-10 w-[100%]"
              />
            </div>
            <div className="flex justify-between">
              <h1 className="text-[30px] font-bold mt-10">Total Price</h1>
              <h1 className="text-[30px] font-bold mt-10">$15</h1>
            </div>
            <div className="mt-2">
              <button className="bg-[#1ED760] text-white rounded h-10 w-[100%] mt-2">
                Buy Subscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
