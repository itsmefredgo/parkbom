"use client";

import ClassesListDisplay from "./helper/ClassesListDisplay";

import { useState } from "react";

function ClassesList() {
  const [selectedSubject, setSelectedSubject] = useState("Math");
  const subjectList: string[] = ["Math", "English"];

  return (
    <div className="max-w-[80rem] mx-auto">
      <div
        className=" flex  justify-center w-[80%] mx-auto rounded-2xl overflow-hidden h-16
                    divide-x-4 divide-[#dfe4ea] dark:divide-[#2D2D2D]"
      >
        {/* <div
          className=" flex justify-center flex-1 h-14
                    bg-[#a4c7cf] dark:bg-[#7db1bd] overflow-hidden
                    hover:bg-[#8fafb5] dark:hover:bg-[#a2c7cd]"
        >
          <button
            className={` px-1 w-full h-full font-bold flex justify-center items-center`}
            onClick={() => setSelectedSubject("math")}
          >
            <div
              className={` w-fit h-fit ${
                selectedSubject === "math" && " border-b-4 border-[#2D2D2D]"
              }`}
            >
              MATH
            </div>
          </button>
        </div>

        <div
          className=" flex justify-center flex-1 
                    bg-[#a4c7cf] dark:bg-[#7db1bd] overflow-hidden
                    hover:bg-[#8fafb5] dark:hover:bg-[#a2c7cd]"
        >
          <button
            className={` px-1 w-full h-full font-bold flex justify-center items-center`}
            onClick={() => setSelectedSubject("english")}
          >
            <div
              className={` w-fit h-fit ${
                selectedSubject === "english" && " border-b-4 border-[#2D2D2D]"
              }`}
            >
              English
            </div>
          </button>
        </div> */}
        {subjectList.map((subjectForButton, inedx) => (
          <div
            className=" flex justify-center flex-1 
                    bg-[#a4c7cf] dark:bg-[#7db1bd] overflow-hidden
                    hover:bg-[#8fafb5] dark:hover:bg-[#a2c7cd]"
          >
            <button
              className={` px-1 w-full h-full font-bold flex justify-center items-center`}
              onClick={() => setSelectedSubject(subjectForButton)}
            >
              <div
                className={` w-fit h-fit ${
                  selectedSubject === subjectForButton &&
                  " border-b-4 border-[#2D2D2D]"
                }`}
              >
                {subjectForButton}
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className=" w-[80%] mx-auto my-8 px-4">
        <ClassesListDisplay selectedSubject={selectedSubject} />
      </div>
    </div>
  );
}

export default ClassesList;
