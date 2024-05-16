import AuthButton from "@/app/sharedcomponents/AuthButton";
import AuthInput from "@/app/sharedcomponents/AuthInput";
import AuthLeftSide from "@/app/sharedcomponents/AuthLeftSide";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OTPInput from "react-otp-input";

interface Props {
  screenName: string;
  setScreenName: React.Dispatch<React.SetStateAction<string>>;
  onSendOtp: () => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setOtp: any;
  otp: any;
  onVerifyOtp: () => void;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setCpassword: React.Dispatch<React.SetStateAction<string>>;
  Cpassword: string;
  updatePassword: () => void;
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
          <div className="mt-10">
            <div>
              <p>Enter New password</p>
              <AuthInput
                type="email"
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <p>Confirm New password</p>
              <AuthInput
                type="email"
                value={props.Cpassword}
                onChange={(e) => props.setCpassword(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <p>Back to sign-in</p>
            </div>
            <div className="">
              <AuthButton
                text="Confirm"
                onClick={() => props.updatePassword()}
              />
            </div>
          </div>
        </div>
      ) : props.screenName === "otp" ? (
        <div className="w-[calc(50vw)] flex flex-col pl-[calc(5vw)] px-[calc(5vw)] h-screen justify-center">
          <h1 className="text-[30px] font-bold text-[#1ED760]">
            Forgot Password
          </h1>
          <p className="font-bold">Enter verification code</p>
          <div className="mt-10">
            <div>
              <p>Email the 4 digit code</p>
              <div className="flex space-x-3 mt-5">
                <OTPInput
                  value={props.otp}
                  onChange={props.setOtp}
                  numInputs={6}
                  inputStyle={{
                    width: "80px",
                    height: "80px",
                    border: "1px solid #1ED760",
                    borderRadius: "50px",
                  }}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
            </div>
            <div className="mt-5">
              <p>Back to sign-in</p>
            </div>
            <div className="">
              <AuthButton text="Confirm" onClick={() => props.onVerifyOtp()} />
            </div>
          </div>
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
