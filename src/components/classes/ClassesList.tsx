"use client";

import MathClassList from "./helper/MathClassList";
import EnglishClassList from "./helper/EnglishClassList";

import { useState } from "react";

function ClassesList() {
  const [selectedSubject, setSelectedSubject] = useState("math");

  return (
    <div className="max-w-[80rem] mx-auto">
      <div
        className=" flex  justify-center w-[80%] mx-auto 
                    divide-x-4 divide-[#dfe4ea] dark:divide-[#2D2D2D]"
      >
        <button
          className=" p-4 flex justify-center flex-1 rounded-l-2xl
                    bg-[#a4c7cf] dark:bg-[#7db1bd] font-bold
                    hover:bg-[#8fafb5] dark:hover:bg-[#a2c7cd]"
          onClick={() => setSelectedSubject("math")}
        >
          <div
            className={` px-1 ${
              selectedSubject === "math" && " border-b-4 border-[#2D2D2D]"
            }`}
          >
            MATH
          </div>
        </button>
        <button
          className=" p-4 flex justify-center flex-1 rounded-r-2xl
                    bg-[#a4c7cf] dark:bg-[#7db1bd] font-bold
                    hover:bg-[#8fafb5] dark:hover:bg-[#a2c7cd]"
          onClick={() => setSelectedSubject("english")}
        >
          <div
            className={` px-1 ${
              selectedSubject === "english" && " border-b-4 border-[#2D2D2D]"
            }`}
          >
            ENGLISH
          </div>
        </button>
      </div>
      <div className=" w-[80%] mx-auto my-8 px-4">
        {selectedSubject === "math" ? <MathClassList /> : <EnglishClassList />}
      </div>
    </div>
  );
}

export default ClassesList;
