"use client";

import React, { useState } from "react";
import programItems, { ProgramItem } from "../data/programs";

export default function HomeMethods() {
  // State to track the selected item and its description

  const defaultProgram: ProgramItem = {
    programAttribute: "수업 방향",
    description:
      "저희 박봄수학영어에서는 학생들의 수준, 특성, 학습 스타일에 맞추어 수업들이 진행됩니다. ",
  };

  const [selectedItem, setSelectedItem] = useState<ProgramItem>(defaultProgram);
  const [expandedItem, setExpandedItem] = useState<number>(-1);

  const expandHideItem = (input: number) => {
    if (expandedItem === input) {
      setExpandedItem(-1);
    } else {
      setExpandedItem(input);
    }
  };

  // Function to handle item selection
  const handleItemSelected = (
    programAttribute: string,
    description: string
  ) => {
    // Toggle between selecting and unselecting
    setSelectedItem((selectedItem) =>
      selectedItem?.programAttribute === programAttribute
        ? defaultProgram
        : { programAttribute, description }
    );
  };
  return (
    <section
      className=" min-h-screen m-auto px-[5%] pt-8
                bg-[#F7F6F0] dark:bg-[#302f2f]"
    >
      <div
        className=" text-[3rem] text-[#045329] 
                  dark:text-[#BFD6D1] font-bold
                  mt-12 mb-16"
      >
        ABOUT US <span className=" text-[0.75rem] font-normal">자세히보기</span>
      </div>

      <div className=" flex flex-col sm:flex-row gap-4 text-[#5F747C] font-semibold">
        <div className=" flex-[7] sm:flex sm:items-end">
          <span>
            매일 운동을 하면 건강에도 좋고 스트레스 해소에도 도움이 된다고 해요.
          </span>
        </div>
        <ol className=" flex-[10] mt-8">
          {programItems.map(({ programAttribute, description }, index) => (
            <li
              onClick={() => expandHideItem(index)}
              className=" flex flex-row justify-between gap-8
                        border-b-2 border-[#5F747C] py-4"
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

      {/* <div
        className=" border-b-2 border-b-parkbomDarkBg04 flex justify-between
                dark:border-b-parkbomDarkBg00 
                text-parkbomDarkBg04 dark:text-parkbomDarkBg00 pb-1"
      >
        <div className=" text-xl">
          <h1>About Us</h1>
        </div>
        <div className=" text-xs flex flex-col">
          <button className=" mb-0 mt-auto">자세히보기</button>
        </div>
      </div>
      <div className=" flex flex-row mt-4 text-parkbomDarkText dark:text-parkbomLightText">
        <div className=" flex-[1] flex flex-col bg-parkbomLightBg00 rounded-lg dark:bg-[#21262d]">
          <div
            className=" h-[5rem] border-l border-r border-black dark:border-parkbomLightText rounded-2xl 
          m-[2rem] mt-[4rem] flex justify-center items-center"
          >
            <div className=" text-2xl">{selectedItem.programAttribute}</div>
          </div>
          <div className=" my-8 mx-12 break-keep">
            {selectedItem.description}
          </div>
        </div>
        <div className=" flex-[1.5] grid grid-cols-2 ml-4 gap-[1rem]">
          {programItems.map(({ programAttribute, description }, index) => (
            <div
              key={index}
              className={` bg-parkbomLightBg00 dark:bg-[#21262d] h-[10rem] flex items-center 
              justify-center my-0 ml-0 mr-0 rounded-2xl text-[1.5rem] hover:text-[2rem] ${
                selectedItem?.programAttribute === programAttribute
                  ? " border-2 border-parkbomDarkBg00 dark:border-parkbom02"
                  : ""
              }`}
              onClick={() => handleItemSelected(programAttribute, description)}
            >
              {programAttribute}
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
