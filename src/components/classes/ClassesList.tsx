"use client";

import ClassesListDisplay from "./helper/ClassesListDisplay";

import { useState } from "react";

function ClassesList() {
  const [selectedSubject, setSelectedSubject] = useState("Math");
  const subjectList: string[] = ["수학 수업", "영어 수업"];

  return (
    <section className="max-w-[60rem] mx-auto">
      <div className=" flex w-[80%] mx-auto font-bold text-xl">
        <div className=" w-[8rem]">
          <button className="" onClick={() => setSelectedSubject("Math")}>
            <div className="">수학 수업</div>
            <div
              className={` border-b-2 border-[#045329] dark:border-[#a6ccb8]
            ${
              selectedSubject === "English"
                ? "translate-x-[8rem] duration-150"
                : "translate-x-[0rem] duration-150"
            }
            `}
            ></div>
          </button>
        </div>
        <div className="">
          <button className="" onClick={() => setSelectedSubject("English")}>
            <div className="">영어 수업</div>
          </button>
        </div>
      </div>
      <div className=" w-[80%] mx-auto my-8">
        <ClassesListDisplay selectedSubject={selectedSubject} />
      </div>
    </section>
  );
}

export default ClassesList;
