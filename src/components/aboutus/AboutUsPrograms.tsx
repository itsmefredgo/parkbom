// Importing a list of program characteristics and descriptions
import programItems from "@/assets/data/programs";

// Importing necessary react icons
import { CiImageOn } from "react-icons/ci";

function AboutUsPrograms() {
  // Second part of parkbom's ABOUT US page
  return (
    <div className="my-20 px-[5vw] laptop:max-w-[80rem] laptop:mx-auto">
      {/* Heading of the section */}
      <h2
        className=" text-[2rem] pb-2 pl-2 border-b-2 
        border-black dark:border-[#BFD6D1] border-solid"
      >
        수업방식
      </h2>

      {/* List of program characteristics */}
      <div className=" grid grid-cols-1 tablet:grid-cols-2">
        {/* Looping through the list */}
        {programItems.map(({ programAttribute, description }, index) => (
          <div
            key={index}
            className={` border-b-2 border-black border-solid
            dark:border-[#BFD6D1]
            p-8 relative ${
              index % 2 === 0
                ? " tablet:border-r-2" // Even
                : "" // Odd
            }`}
          >
            <div className=" flex sm:h-[8rem] tablet:h-auto">
              <div className=" text-[1.25rem]">
                <span className=" font-bold text-[2rem]">{index + 1}.</span>{" "}
                {programAttribute}
              </div>
            </div>
            <div
              className=" mt-4 flex justify-center
              sm:mt-0 sm:w-[calc(100%-4rem)] sm:absolute sm:top-8
              tablet:relative tablet:top-0 tablet:w-auto tablet:mt-2"
            >
              <CiImageOn className=" h-[8rem] w-[8rem]"></CiImageOn>
            </div>
            <div className=" p-4">{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsPrograms;
