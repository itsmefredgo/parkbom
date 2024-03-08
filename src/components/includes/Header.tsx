"use client";

import Link from "next/link";
import { IoMoon } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { toggleDarkMode } from "@/Redux/Features/darkModeSlice";

export default function Header() {
  const pages: [string, string][] = [
    ["학원 소개", "/aboutus"],
    ["수업", "/classes"],
    ["문의 및 위치", "/inquiries"],
  ];
  const dispatch = useDispatch();

  return (
    <header
      className="flex justify-around items-center shadow-lg text-xl fixed w-screen h-20 z-10
      bg-opacity-60 bg-white 
      dark:bg-opacity-60 dark:bg-black dark:text-white "
    >
      <div className=" flex">
        <Link href={"/"}>박봄 수학 영어</Link>
        <div className="ml-12">|</div>
        {/* Header Navigation Links Generation */}
        {pages.map(([displayText, route], index) => (
          <Link key={index} href={route} className=" ml-12">
            {displayText}
          </Link>
        ))}
      </div>
      {/* Functions in Nav Bar */}
      <div className="">
        {/* Funtion toggling Language change */}
        <button onClick={() => dispatch(toggleDarkMode())}>
          <IoMoon />
        </button>
      </div>
    </header>
  );
}
