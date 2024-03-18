"use client";

// Imports
import React, { useState } from "react";
import Link from "next/link";

// Importing a list of program characteristics and descriptions
import programItems from "../../assets/data/programs";

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
    <section className=" m-auto px-[5%] bg-[#F7F6F0] dark:bg-[#302f2f]">
      <div className=" max-w-[60rem] mx-auto py-[15rem]">
        {/* Section heading for ABOUT US */}
        <div
          className=" text-[3rem] text-[#045329] dark:text-[#BFD6D1] 
          font-bold mb-16"
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
          className=" flex flex-col sm:flex-row gap-4 lg:gap-20 
          font-semibold text-[#5F747C] dark:text-[#acd0de]"
        >
          <div className=" flex-[7] sm:flex sm:items-end">
            <span>
              매일 운동을 하면 건강에도 좋고 스트레스 해소에도 도움이 된다고
              해요.
            </span>
          </div>
          <ol className=" flex-[10] mt-8">
            {/* Looping through the list of programs */}
            {programItems.map(({ programAttribute, description }, index) => (
              <li
                key={index}
                onClick={() => expandHideItem(index)}
                className=" flex flex-row justify-between gap-8 
                border-b-2 border-[#acd0de] py-4"
              >
                <div className=" flex flex-col justify-center">
                  <div className=" ">{programAttribute}</div>
                  {index === expandedItem && (
                    <div className=" font-normal my-4">{description}</div>
                  )}
                </div>
                <div>
                  <button className=" text-[1.5rem] w-10">+</button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default MainAboutUs;
