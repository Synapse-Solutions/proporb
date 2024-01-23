import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import React from "react";

interface Props {
  screenName: string;
  setScreenName: React.Dispatch<React.SetStateAction<string>>;
  otpOneRef: React.RefObject<HTMLInputElement>;
  otpTwoRef: React.RefObject<HTMLInputElement>;
  otpThreeRef: React.RefObject<HTMLInputElement>;
  otpFourRef: React.RefObject<HTMLInputElement>;
  onKeyDown: (e: any, ref: string) => void;
}
export default function ForgotpasswordComponent(props: Props) {
  return (
    <div className="flex justify-between p-10 h-screen overflow-hidden">
      <AuthLeftSide />
      {props.screenName === "enteremail" ? (
        <div className="w-[calc(50vw)] flex flex-col pl-[calc(5vw)] px-[calc(5vw)] h-screen justify-center">
          <h1 className="text-[30px] font-bold text-[#1ED760]">
            Forgot Password
          </h1>
          <p className="font-bold">Enter your email</p>
          <form action="submit" className="mt-10">
            <div>
              <p>Email Address</p>
              <input
                type="email"
                className="border border-black rounded h-10 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <p>Back to sign-in</p>
            </div>
            <div className="">
              <button className="bg-[#1ED760] text-white rounded h-10 w-[100%] mt-10">
                Send Code
              </button>
            </div>
          </form>
        </div>
      ) : props.screenName === "enternewpassword" ? (
        <div className="w-[calc(50vw)] flex flex-col pl-[calc(5vw)] px-[calc(5vw)] h-screen justify-center">
          <h1 className="text-[30px] font-bold text-[#1ED760]">
            Forgot Password
          </h1>
          <p className="font-bold">Enter new password</p>
          <form action="submit" className="mt-10">
            <div>
              <p>Enter New password</p>
              <input
                type="email"
                className="border border-black rounded h-10 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <p>Confirm New password</p>
              <input
                type="email"
                className="border border-black rounded h-10 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <p>Back to sign-in</p>
            </div>
            <div className="">
              <button className="bg-[#1ED760] text-white rounded h-10 w-[100%] mt-10">
                Confirm
              </button>
            </div>
          </form>
        </div>
      ) : props.screenName === "otp" ? (
        <div className="w-[calc(50vw)] flex flex-col pl-[calc(5vw)] px-[calc(5vw)] h-screen justify-center">
          <h1 className="text-[30px] font-bold text-[#1ED760]">
            Forgot Password
          </h1>
          <p className="font-bold">Enter verification code</p>
          <form action="submit" className="mt-10">
            <div>
              <p>Email the 4 digit code</p>
              <div className="flex space-x-3 mt-5">
                <input
                  ref={props.otpOneRef}
                  onKeyDown={(e) => props.onKeyDown(e, "otpOne")}
                  type="number"
                  className="border border-black rounded-full h-16 w-16 flex items-center justify-center text-[40px]"
                />
                <input
                  onKeyDown={(e) => {
                    if (e.key === "Backspace") {
                      props.otpOneRef.current?.focus();
                    }
                  }}
                  type="number"
                  className="border border-black rounded-full h-16 w-16 flex items-center justify-center text-[40px]"
                />
                <input
                  type="number"
                  className="border border-black rounded-full h-16 w-16 flex items-center justify-center text-[40px]"
                />
                <input
                  type="number"
                  className="border border-black rounded-full h-16 w-16 flex items-center justify-center text-[40px]"
                />
              </div>
            </div>
            <div className="mt-5">
              <p>Back to sign-in</p>
            </div>
            <div className="">
              <button className="bg-[#1ED760] text-white rounded h-10 w-[100%] mt-10">
                Confirm
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-[calc(50vw)] flex flex-col items-center space-y-5 pl-[calc(5vw)] px-[calc(5vw)] h-screen justify-center">
          <Image src={"/checkcircle.webp"} width={60} height={60} alt="check" />
          <h1 className="text-[20px] font-bold text-[#1ED760]">
            Account password successfully changed
          </h1>
          <div className="bg-[#1ED760] rounded-full py-2 px-5 text-white">
            Continue
          </div>
        </div>
      )}
    </div>
  );
}
