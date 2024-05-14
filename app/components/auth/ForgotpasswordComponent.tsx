import AuthButton from "@/app/sharedcomponents/AuthButton";
import AuthInput from "@/app/sharedcomponents/AuthInput";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  screenName: string;
  setScreenName: React.Dispatch<React.SetStateAction<string>>;
  otpOneRef: React.RefObject<HTMLInputElement>;
  otpTwoRef: React.RefObject<HTMLInputElement>;
  otpThreeRef: React.RefObject<HTMLInputElement>;
  otpFourRef: React.RefObject<HTMLInputElement>;
  onKeyDown: (e: any, ref: string) => void;
  onSendOtp: () => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
}
export default function ForgotpasswordComponent(props: Props) {
  return (
    <div className="flex justify-between p-10 h-screen overflow-hidden">
      <AuthLeftSide />
      {props.screenName === "enteremail" ? (
        <div className="w-[calc(50vw)] flex flex-col pl-[calc(5vw)] px-[calc(5vw)] h-screen justify-center text-black">
          <h1 className="text-[30px] font-bold text-[#1ED760]">
            Forgot Password
          </h1>
          <p className="mt-2">Enter your email</p>
          <div className="mt-10">
            <div>
              <p className="mb-2">Email Address</p>
              <AuthInput
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
                type="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="mt-5">
              <p>Back to sign-in</p>
            </div>
            <div className="">
              <AuthButton onClick={() => props.onSendOtp()} text="Send OTP" />
            </div>
          </div>
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
              <AuthInput type="email" />
            </div>
            <div className="mt-5">
              <p>Confirm New password</p>
              <AuthInput type="email" />
            </div>
            <div className="mt-5">
              <p>Back to sign-in</p>
            </div>
            <div className="">
              <AuthButton
                text="Confirm"
                onClick={() => props.setScreenName("last")}
              />
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
              <AuthButton
                text="Confirm"
                onClick={() => props.setScreenName("enternewpassword")}
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="w-[calc(50vw)] flex flex-col items-center space-y-5 pl-[calc(5vw)] px-[calc(5vw)] h-screen justify-center">
          <Image src={"/checkcircle.webp"} width={60} height={60} alt="check" />
          <h1 className="text-[20px]  text-[#000]">
            Account password successfully changed
          </h1>
          <Link href={"/signin"}>
            <button className="bg-[#1ED760] rounded-full py-2 px-5 text-white">
              Continue
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
