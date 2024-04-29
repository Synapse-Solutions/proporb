"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const tabs = [
  {
    title: "Feature",
    link: "/features",
  },
  {
    title: "Contact Us",
    link: "/contactus",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
];
export default function LandingPageNavbar() {
  const pathname = usePathname();
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset;
      if (st < 10) {
        setIsHeaderShow(false);
      } else if (st > lastScrollTop) {
        setIsHeaderShow(true);
      } else {
        setIsHeaderShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={
        isHeaderShow
          ? {
              opacity: 0,
              transform: "translateY(-100%)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }
          : {
              opacity: 1,
              transform: "translateY(0)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }
      }
      className="fixed top-0 w-full z-20 h-36 flex justify-center items-center"
    >
      <div className="flex justify-center mt-10 w-[90%] z-10">
        <div className="flex justify-between items-center w-full bg-[#e9fbf0] px-10 py-3 rounded-xl">
          <Link href="/">
            <Image
              src={"/landingpage/logo.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-5 text-[18px]">
            {tabs.map((tab, index) => (
              <Link key={index} href={tab.link}>
                <p
                  className={
                    pathname === tab.link
                      ? "text-[#1ED760]"
                      : "hover:text-[#1ED760]"
                  }
                >
                  {tab.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="w-[14%]">
            <Link href="/signin">
              <button className="flex items-center gap-2 bg-[#1ED760] text-white px-5 py-2 rounded-md hover:bg-[#69af84]">
                <Image
                  src={"/landingpage/user.webp"}
                  width={20}
                  height={20}
                  alt="user"
                />
                <p>Sign In</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
