import AuthButton from "@/app/sharedcomponents/AuthButton";
import AuthInput from "@/app/sharedcomponents/AuthInput";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import React from "react";

interface Props {
  setScreenName: React.Dispatch<React.SetStateAction<any>>;
  subscriptionPayload: any;
  setSubscriptionPayload: any;
  onBuySubscription: () => void;
}
export default function PaymentDetails(props: Props) {
  const handlePlan = (e: any) => {
    props.setSubscriptionPayload({
      ...props.subscriptionPayload,
      subcription_type: e.target.value,
    });
    if (e.target.value === "weekly") {
      props.setSubscriptionPayload({
        ...props.subscriptionPayload,
        subcription_price: "15",
      });
    } else if (e.target.value === "monthly") {
      props.setSubscriptionPayload({
        ...props.subscriptionPayload,
        subcription_price: "30",
      });
    } else {
      props.setSubscriptionPayload({
        ...props.subscriptionPayload,
        subcription_price: "100",
      });
    }
  };
  return (
    <div className="flex justify-between p-10 h-screen">
      <AuthLeftSide />
      <div className="w-[calc(50vw)] px-10 overflow-auto pb-10">
        <h1 className="text-[12px] 2xl:text-[40px] font-bold ">
          Subscription Details
        </h1>
        <p className="text-[10px] 2xl:text-[20px]">
          Get started by entering your details
        </p>
        <div className="w-[90%] pl-[3%]">
          <div className="mt-2 2xl:mt-5 ">
            <div>
              <p className="">Plan Details</p>
              <select
                onChange={(e) => {
                  handlePlan(e);
                }}
                className="border-[1px] border-[#d0d5dd] rounded  h-10 2xl:h-14 w-[100%] px-3 hover:border-[#1ED760]"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="mt-2 2xl:mt-5">
              <p>Billing Number</p>
              <AuthInput
                type="number"
                value={props.subscriptionPayload.billing_no}
                onChange={(e) => {
                  props.setSubscriptionPayload({
                    ...props.subscriptionPayload,
                    billing_no: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-2 2xl:mt-5">
              <p>Name on card</p>
              <AuthInput
                type="text"
                value={props.subscriptionPayload.card_holder_name}
                onChange={(e) => {
                  props.setSubscriptionPayload({
                    ...props.subscriptionPayload,
                    card_holder_name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-2 2xl:mt-5">
              <p>Card Number</p>
              <AuthInput
                type="number"
                value={props.subscriptionPayload.card_no}
                onChange={(e) => {
                  props.setSubscriptionPayload({
                    ...props.subscriptionPayload,
                    card_no: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex justify-between">
              <div className="mt-2 2xl:mt-5 w-[45%]">
                <p>Expiration Date (MM/YY)</p>
                <AuthInput
                  type="date"
                  value={props.subscriptionPayload.expiration_date}
                  onChange={(e) => {
                    props.setSubscriptionPayload({
                      ...props.subscriptionPayload,
                      expiration_date: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mt-2 2xl:mt-5 w-[45%]">
                <p>CVC</p>
                <AuthInput
                  type="text"
                  value={props.subscriptionPayload.cvc}
                  onChange={(e) => {
                    props.setSubscriptionPayload({
                      ...props.subscriptionPayload,
                      cvc: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="mt-2 2xl:mt-5">
              <p>Discount Code</p>
              <div className="border-[1px] border-[#d0d5dd] rounded h-10 2xl:h-14 w-[100%] px-3 flex hover:border-[#1ED760]">
                <input
                  type="text"
                  className="outline-none w-[100%] bg-transparent"
                  value={props.subscriptionPayload.discount_code}
                  onChange={(e) => {
                    props.setSubscriptionPayload({
                      ...props.subscriptionPayload,
                      discount_code: e.target.value,
                    });
                  }}
                />

                <Image
                  src={"/spinner.webp"}
                  width={20}
                  height={20}
                  alt="spinner"
                  className=" object-contain"
                />
              </div>
            </div>
            {/* <div className="mt-2 2xl:mt-5">
              <p>Plan Name</p>

              <AuthInput
                type="text"
                value={props.subscriptionPayload.billing_no}
                onChange={(e) => {
                  props.setSubscriptionPayload({
                    ...props.subscriptionPayload,
                    billing_no: e.target.value,
                  });
                }}
              />
            </div> */}
            <div className="flex justify-between">
              <h1 className="text-[15px]  2xl:text-[30px] font-bold mt-5 2xl:mt-10">
                Total Price
              </h1>
              <h1 className="text-[15px]  2xl:text-[30px] font-bold mt-5 2xl:mt-10">
                ${props.subscriptionPayload.subcription_price}
              </h1>
            </div>
            <div className="mt-0">
              <AuthButton
                onClick={() => props.onBuySubscription()}
                text="Buy Subscription"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
