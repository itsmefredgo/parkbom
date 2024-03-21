// Importing necessary react icons
import { CiImageOn } from "react-icons/ci";
import PlaceHolder from "@/assets/images/temp.jpg";
import Image from "next/image";

function AboutUsFacility() {
  const facilitiesGridClasses = `[&>*:nth-child(2)]:sm:col-start-2 
  [&>*:nth-child(2)]:sm:col-end-4 [&>*:nth-child(2)]:sm:row-start-1 
  [&>*:nth-child(2)]:sm:row-end-2 [&>*:nth-child(5)]:sm:col-start-2 
  [&>*:nth-child(5)]:sm:col-end-4 [&>*:nth-child(5)]:sm:row-start-2 
  [&>*:nth-child(5)]:sm:row-end-4 [&>*:nth-child(7)]:sm:col-start-2 
  [&>*:nth-child(7)]:sm:col-end-4 [&>*:nth-child(7)]:sm:row-start-4 
  [&>*:nth-child(7)]:sm:row-end-5`;

  // Fourth part of parkbom's ABOUT US page
  return (
    <div
      className=" px-[1rem] sm:px-[5rem] md:w-[90%] lg:w-[60rem] xl:w-[65rem] 
      my-[10rem] mx-[1rem] sm:mx-auto"
    >
      {/* Heading of the section */}
      <h2
        className=" text-[2.5rem] font-bold pb-16 pl-2 border-black 
        dark:border-[#BFD6D1] text-[#045329] dark:text-[#BFD6D1]"
      >
        시설
      </h2>
      <div
        className={` grid grid-cols-1 grid-rows-[repeat(7,1fr)] ${facilitiesGridClasses}
        sm:grid-cols-3 sm:grid-rows-[repeat(4,1fr)] gap-2 w-full h-auto `}
      >
        <div className=" w-full relative h-[80vw] sm:h-[20vw] sm:max-h-[18rem]">
          <Image
            src={PlaceHolder}
            alt="Parkbom"
            objectFit="cover"
            layout="fill"
            className=" "
          ></Image>
        </div>
        <div className=" w-full h-full relative">
          <Image
            src={PlaceHolder}
            alt="Parkbom"
            objectFit="cover"
            layout="fill"
            className=" "
          ></Image>
        </div>
        <div className=" w-full h-full relative">
          <Image
            src={PlaceHolder}
            alt="Parkbom"
            objectFit="cover"
            layout="fill"
            className=" "
          ></Image>
        </div>
        <div className=" w-full h-full relative">
          <Image
            src={PlaceHolder}
            alt="Parkbom"
            objectFit="cover"
            layout="fill"
            className=" "
          ></Image>
        </div>
        <div className=" w-full h-full relative">
          <Image
            src={PlaceHolder}
            alt="Parkbom"
            objectFit="cover"
            layout="fill"
            className=" "
          ></Image>
        </div>
        <div className=" w-full h-full relative">
          <Image
            src={PlaceHolder}
            alt="Parkbom"
            objectFit="cover"
            layout="fill"
            className=" "
          ></Image>
        </div>
        <div className=" w-full h-full relative">
          <Image
            src={PlaceHolder}
            alt="Parkbom"
            objectFit="cover"
            layout="fill"
            className=" "
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default AboutUsFacility;
