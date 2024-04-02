"use client";

// Imports
import React, { useState } from "react";
import Link from "next/link";
import data from "@/../public/data/data.json";

function MainAboutUs() {
  // State managing current selected program to view description
  const [expandedItem, setExpandedItem] = useState<number>(-1);
  const expandHideItem = (input: number) => {
    if (expandedItem === input) {
      setExpandedItem(-1);
    } else {
      setExpandedItem(input);
    }
  };

  // Second part of parkbom's main webpage: ABOUT US
  return (
    <section
      className=" m-auto px-[5%] bg-[#F7F6F0] dark:bg-[#302f2f] 
      duration-300"
    >
      <div className=" max-w-[60rem] mx-auto py-[15rem]">
        {/* Section heading for ABOUT US */}
        <div
          className=" text-[3rem] text-[#045329] dark:text-[#BFD6D1] 
          font-bold "
        >
          ABOUT US{" "}
          <Link
            href={"/aboutus"}
            className=" text-[0.75rem] font-normal underline"
          >
            자세히보기
          </Link>
        </div>

        {/* Section contents for ABOUT US */}
        <div
          className=" font-semibold text-[#5F747C] dark:text-[#acd0de] 
          h-auto md:pl-[30%] lg:pl-[45%]"
        >
          <ol
            className={` ${
              expandedItem === -1
                ? "animate-[foldProgramSection_0.5s_ease_forwards]"
                : "animate-[extendProgramSection_0.5s_ease_forwards]"
            }`}
          >
            {/* Looping through the list of programs */}
            {data.aboutus.programs.map((program, index) => (
              <li
                key={index}
                onClick={() => expandHideItem(index)}
                className={` flex flex-row justify-between gap-8 
                border-b-2 border-[#acd0de] py-4 h-[5rem] 
                ${
                  index === expandedItem
                    ? "animate-[extendMainProgramBox_0.5s_ease_forwards]"
                    : "animate-[foldMainProgramBox_0.5s_ease_forwards]"
                }`}
              >
                <div className=" flex flex-col justify-center">
                  <div>{program.programTitle}</div>
                  {index === expandedItem && (
                    <div
                      className=" font-normal my-4 
                      animate-[extendMainProgramDescription_0.5s_ease_forwards]"
                    >
                      {program.description}
                    </div>
                  )}
                </div>
                <button className=" text-[1.5rem] w-10">
                  {index === expandedItem ? <>-</> : <>+</>}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default MainAboutUs;
