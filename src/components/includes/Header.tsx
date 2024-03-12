"use client";

import Link from "next/link";
import ToggleDarkMode from "../helpers/ToggleDarkMode";
import Image from "next/image";
import parkbom_logo from "@/assets/images/parkbom-logo-tpbg.png";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { useEffect } from "react";

export default function Header() {
  const pages: [string, string][] = [
    ["학원 소개", "/aboutus"],
    ["수업", "/classes"],
    ["문의 및 위치", "/inquiries"],
  ];

  const [initialRun, setInitialRun] = useState(true);
  const [navFolded, setNavFolded] = useState(true);

  function extendNavBar() {
    setNavFolded(!navFolded);
    setInitialRun(false);
  }

  return (
    <header
      className=" shadow-lg text-xl fixed top-0 w-screen h-20 z-10 font-semibold 
      tablet:flex tablet:flex-row  tablet:justify-around
      text-parkbomDarkText dark:text-parkbomLightText
      bg-parkbomLightBg02 dark:bg-parkbomDarkBg02
        bg-opacity-60 dark:bg-opacity-60"
    >
      <div className=" flex-row justify-between h-full items-center pl-8 pr-12 flex">
        <Link href={"/"} className=" ">
          <Image
            src={parkbom_logo}
            alt="Parkbom"
            className=" dark:brightness-200 h-[4rem] w-[auto]"
          ></Image>
        </Link>
        <button onClick={extendNavBar} className=" tablet:hidden">
          <FaBars />
        </button>
        <div className="ml-12 hidden tablet:block">|</div>
        {pages.map(([pageName, route], index) => (
          <Link key={index} href={route} className=" ml-12 hidden tablet:block">
            {pageName}
          </Link>
        ))}
      </div>

      <div className=" tablet:flex items-center hidden">
        <ToggleDarkMode></ToggleDarkMode>
      </div>

      <div
        className={` translate-x-[100%] fixed w-screen h-screen top-0 tablet:hidden
        bg-[#c1d0c1] dark:bg-[#4c524c] z-50 flex flex-col pt-16 pr-16 ${
          !initialRun &&
          (navFolded
            ? " animate-[foldHeaderAnimation_0.5s_ease_forwards]"
            : " animate-[extendHeaderAnimation_0.5s_ease_forwards]")
        }`}
      >
        <button
          className="mr-[-0.5rem] ml-auto h-[2rem] w-[2rem]"
          onClick={extendNavBar}
        >
          <FaTimes className="h-full w-full" />
        </button>
        <Link
          onClick={extendNavBar}
          href={"/"}
          className=" ml-auto mt-4 mr-[-0.5rem]"
        >
          <Image
            src={parkbom_logo}
            alt="Parkbom"
            className=" brightness-[0%] invert-[0] dark:invert-[1] h-[3rem] w-[auto]"
          ></Image>
        </Link>
        {pages.map(([pageName, route], index) => (
          <Link
            key={index}
            href={route}
            onClick={extendNavBar}
            className=" mr-0 ml-auto mt-4"
          >
            {pageName}
          </Link>
        ))}
        <div className="mr-0 ml-auto mt-4">
          <ToggleDarkMode></ToggleDarkMode>
        </div>
      </div>
    </header>
  );
}
