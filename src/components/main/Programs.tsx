"use client";

import React, { useState } from "react";
import { ProgramItem } from "../data/programs";
import programItems from "../data/programs";
import { FaSitemap } from "react-icons/fa6";

export default function HomeMethods() {
  // State to track the selected item and its description
  const [selectedItem, setSelectedItem] = useState<ProgramItem>({
    programAttribute: "수업 방향",
    description:
      "저희 박봄수학영어에서는 학생들의 수준, 특성, 학습 스타일에 맞추어 수업들이 진행됩니다. ",
  });

  // Function to handle item selection
  const handleItemSelected = (
    programAttribute: string,
    description: string
  ) => {
    // Toggle between selecting and unselecting
    setSelectedItem((selectedItem) =>
      selectedItem?.programAttribute === programAttribute
        ? {
            programAttribute: "수업 방향",
            description:
              "저희 박봄수학영어에서는 학생들의 수준, 특성, 학습 스타일에 맞추어 수업들이 진행됩니다. ",
          }
        : { programAttribute, description }
    );
  };
  return (
    <section className=" h-[55rem] px-[calc((100vw-60rem)/2)] bg-[#efeeed] pt-28 dark:bg-[#565855] ">
      <div className=" border-b-2 border-b-[#56595d] dark:border-b-[#EFE7E1] text-[#56595d] dark:text-[#EFE7E1] flex justify-between pb-1">
        <div className=" text-xl">
          <h1>About Us</h1>
        </div>
        <div className=" text-xs flex flex-col">
          <button className=" mb-0 mt-auto">자세히보기</button>
        </div>
      </div>
      <div className=" flex flex-row mt-4 text-[#0e1a24] dark:text-[#e7e7e7ec]">
        <div className=" flex-[1] flex flex-col bg-[#c7c7c773] rounded-lg dark:bg-[#3f3f3f]">
          <div className=" h-[5rem] border-l border-r border-black rounded-2xl m-[2rem] mt-[4rem] flex justify-center items-center">
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
              className={` bg-[#c7c7c773] dark:bg-[#3f3f3f] h-[10rem] flex items-center justify-center my-0 ml-0 mr-0 rounded-2xl text-[1.5rem] hover:text-[2rem] ${
                selectedItem?.programAttribute === programAttribute
                  ? " border-2 border-emerald-900 dark:border-[#d3d3d3]"
                  : ""
              }`}
              onClick={() => handleItemSelected(programAttribute, description)}
            >
              {programAttribute}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
