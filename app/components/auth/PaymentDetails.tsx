import AuthButton from "@/app/sharedcomponents/AuthButton";
import AuthInput from "@/app/sharedcomponents/AuthInput";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import React from "react";

interface Props {
  setScreenName: React.Dispatch<React.SetStateAction<any>>;
}
export default function PaymentDetails(props: Props) {
  return (
    <div className="flex justify-between p-10 h-screen">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] px-10 ">
        <h1 className="text-[40px] font-bold ">Subscription Details</h1>
        <p>Get started by entering your details</p>
        <div className="w-[90%] pl-[3%]">
          <div className="mt-5">
            <div>
              <p>Plan Details</p>
              <select className="border-[1px] border-[#d0d5dd] rounded h-14 w-[100%] px-3">
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
              <AuthInput type="number" />
            </div>
            <div className="mt-5">
              <p>Name on card</p>
              <AuthInput type="text" />
            </div>
            <div className="mt-5">
              <p>Card Number</p>
              <AuthInput type="number" />
            </div>
            <div className="flex justify-between">
              <div className="mt-5 w-[45%]">
                <p>Expiration Date (MM/YY)</p>
                <AuthInput type="text" />
              </div>
              <div className="mt-5 w-[45%]">
                <p>CVC</p>
                <AuthInput type="password" />
              </div>
            </div>
            <div className="mt-5">
              <p>Discount Code</p>
              <div className="border-[1px] border-[#d0d5dd] rounded h-14 w-[100%] px-3 flex ">
                <input
                  type="text"
                  className="outline-none w-[100%] bg-transparent"
                />

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

              <AuthInput type="text" />
            </div>
            <div className="flex justify-between">
              <h1 className="text-[30px] font-bold mt-10">Total Price</h1>
              <h1 className="text-[30px] font-bold mt-10">$15</h1>
            </div>
            <div className="mt-2">
              <AuthButton
                onClick={() => props.setScreenName("paymentsuccessful")}
                text="Buy Subscription"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
