// Imports
import Link from "next/link";

// Importing necessary react icons
import { FaCaretRight } from "react-icons/fa6";
import { PiMathOperationsFill } from "react-icons/pi";
import { TbMessageLanguage } from "react-icons/tb";
import { BsListCheck } from "react-icons/bs";

// Importing lists of classes to display
import { mathTableItems, englishTableItems } from "@/assets/data/classesList";

function MainClasses() {
  // Third part of parkbom's main webpage: CLASSES
  return (
    <section
      className=" m-auto px-[5%] 
      bg-[#F7F6F0] dark:bg-[#302f2f]
      text-parkbom19 dark:text-[#c9d1d9]"
    >
      <div className=" max-w-[60rem] mx-auto pb-[15rem] pt-[5rem]">
        {/* Section heading for ABOUT US */}
        <div
          className=" text-[3rem] text-[#045329] 
                  dark:text-[#BFD6D1] font-bold
                  mb-16"
        >
          CLASSES{" "}
          <Link
            href={"/classes"}
            className=" text-[0.75rem] font-normal underline"
          >
            자세히보기
          </Link>
        </div>

        {/* Section contents for CLASSES */}
        <div>
          <h2 className=" text-[1.5rem] flex flex-row">
            <BsListCheck className=" text-[2rem] mr-[0.5rem] mt-[0.125rem]" />
            <p>
              저희 박봄수학영어는 전 학년의 학생들의{" "}
              <span className=" font-bold text-[#5F747C] dark:text-[#acd0de]">
                수학/영어
              </span>
              를 지도하고 있습니다.
            </p>
          </h2>
          <div className=" flex my-12 flex-col gap-12 md:flex-row">
            {/* Math classes section */}
            <div className=" flex-[1] flex">
              <div className=" flex-[1] text-2xl flex items-start">
                <div className="flex items-center">
                  <PiMathOperationsFill />
                  <h1 className="underline ml-1">수학</h1>
                </div>
              </div>
              <ul className=" flex-[2] text-xl">
                {mathTableItems.map((mathTableItems, index) => (
                  <li className="flex items-center" key={index}>
                    <FaCaretRight />
                    {mathTableItems}
                  </li>
                ))}
              </ul>
            </div>
            {/* English classes section */}
            <div className=" flex-[1] flex">
              <div className=" flex-[1] text-2xl flex items-start">
                <div className="flex items-center">
                  <TbMessageLanguage />
                  <h1 className="underline ml-1">영어</h1>
                </div>
              </div>
              <ul className=" flex-[2] text-xl">
                {englishTableItems.map((englishTableItems, index) => (
                  <li className="flex items-center" key={index}>
                    <FaCaretRight />
                    {englishTableItems}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainClasses;
