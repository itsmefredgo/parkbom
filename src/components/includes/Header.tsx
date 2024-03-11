import Link from "next/link";
import ToggleDarkMode from "../helpers/ToggleDarkMode";

export default function Header() {
  const pages: [string, string][] = [
    ["학원 소개", "/aboutus"],
    ["수업", "/classes"],
    ["문의 및 위치", "/inquiries"],
  ];

  return (
    <header
      className=" flex justify-around items-center shadow-lg text-xl fixed w-screen h-20 z-10 font-semibold 
      text-parkbomDarkText dark:text-parkbomLightText
      bg-parkbomLightBg02 dark:bg-parkbomDarkBg02
        bg-opacity-60 dark:bg-opacity-60"
    >
      <div className=" flex">
        <Link href={"/"}>박봄 수학 영어</Link>
        <div className="ml-12">|</div>
        {pages.map(([pageName, route], index) => (
          <Link key={index} href={route} className=" ml-12">
            {pageName}
          </Link>
        ))}
      </div>
      <div className="">
        <ToggleDarkMode></ToggleDarkMode>
      </div>
    </header>
  );
}
