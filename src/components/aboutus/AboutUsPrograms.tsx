// Importing a list of program characteristics and descriptions
import icon1 from "@/../public/assets/icons/programsIcons/program_1.svg";
import icon2 from "@/../public/assets/icons/programsIcons/program_2.svg";
import icon3 from "@/../public/assets/icons/programsIcons/program_3.svg";
import icon4 from "@/../public/assets/icons/programsIcons/program_4.svg";
import icon5 from "@/../public/assets/icons/programsIcons/program_5.svg";
import icon6 from "@/../public/assets/icons/programsIcons/program_6.svg";
import Image from "next/image";
import data from "@/../public/data/data.json";

function AboutUsPrograms() {
  const iconsList = [icon1, icon2, icon3, icon4, icon5, icon6];
  // Second part of parkbom's ABOUT US page
  return (
    <section className=" sm:px-[5rem] lg:max-w-[70rem] mx-auto py-[10rem]">
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
        {data.aboutus.programs.map(({ programTitle, description }, index) => (
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
                {" " + programTitle}
              </div>
            </div>
            <div
              className=" mt-4 flex justify-center
              sm:mt-0 sm:w-[calc(100%-4rem)] sm:absolute sm:top-12
              tablet:relative tablet:top-0 tablet:w-auto tablet:mt-2"
            >
              <Image
                src={iconsList[index]}
                alt="Program Icon"
                className=" h-[6rem] w-[6rem]"
              />
            </div>
            <div className=" p-4">{description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUsPrograms;
