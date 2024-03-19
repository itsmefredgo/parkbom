// Importing a list of program characteristics and descriptions
import programItems from "@/assets/data/programs";

// Importing necessary react icons
import { CiImageOn } from "react-icons/ci";
const test = "Test";
function AboutUsPrograms() {
  // Second part of parkbom's ABOUT US page
  return (
    <section className=" px-[1rem] sm:px-[5rem] lg:max-w-[70rem] mx-auto py-[10rem]">
      {/* Heading of the section */}
      <h2
        className=" text-[2.5rem] font-bold pb-16 pl-2 border-black 
        dark:border-[#BFD6D1] text-[#045329] dark:text-[#BFD6D1]"
      >
        수업방식
      </h2>

      {/* List of program characteristics */}
      <div className=" grid grid-cols-1 tablet:grid-cols-2">
        {/* Looping through the list */}
        {programItems.map(({ programAttribute, description }, index) => (
          <div
            key={index}
            className={` border-b-2 border-black border-dashed
            dark:border-[#BFD6D1]
            p-8 relative ${
              index % 2 === 0
                ? " tablet:border-r-2" // Even
                : "" // Odd
            } ${
              index === 0 || index === 1
                ? " tablet:border-t-2" // Even
                : "" // Odd
            }`}
          >
            <div className=" flex sm:h-[8rem] tablet:h-auto">
              <div className=" text-[1.25rem]">
                <span className=" font-bold text-[2rem]">{index + 1}.</span>
                {" " + programAttribute}
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
    </section>
  );
}

export default AboutUsPrograms;
