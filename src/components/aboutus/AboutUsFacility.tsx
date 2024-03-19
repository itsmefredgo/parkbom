// Importing necessary react icons
import { CiImageOn } from "react-icons/ci";

function AboutUsFacility() {
  // Fourth part of parkbom's ABOUT US page
  return (
    <div className="px-[12vw] pb-[10rem] pt-[10rem] laptop:max-w-[80rem] laptop:mx-auto">
      {/* Heading of the section */}
      <h2
        className=" text-[2.5rem] font-bold pb-16 pl-2 border-black 
        dark:border-[#BFD6D1] text-[#045329] dark:text-[#BFD6D1]"
      >
        시설
      </h2>
      <div
        // className=" sm:grid sm:grid-cols-2 laptop:grid-cols-3 gap-4 "
        className=" grid  "
      >
        <div>
          <CiImageOn></CiImageOn>
          <CiImageOn></CiImageOn>
          <CiImageOn></CiImageOn>
          <CiImageOn></CiImageOn>
        </div>
        {/* <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn>
        <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn>
        <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn>
        <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn> */}
        {/* <div className=" mt-4">
          <div className="ml-2 mb-2"></div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn>
        </div>
        <div className=" mt-4">
          <div className="ml-2 mb-2"></div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn>
        </div>
        <div className=" mt-4 sm:mt-8 laptop:mt-4">
          <div className="ml-2 mb-2"></div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn>
        </div>
        <div className=" mt-4 sm:mt-8">
          <div className="ml-2 mb-2"></div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn>
        </div>
        <div className=" mt-4 sm:mt-8">
          <div className="ml-2 mb-2"></div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn>
        </div>
        <div className=" mt-4 sm:mt-8">
          <div className="ml-2 mb-2"></div>
          <CiImageOn className="w-[100%] h-[auto] border-2 border-parkbomDarkBg02"></CiImageOn>
        </div> */}
      </div>
    </div>
  );
}

export default AboutUsFacility;
