// Importing necessary react icons
import PlaceHolder from "@/assets/images/temp.jpg";
import Image from "next/image";
import fac1 from "@/assets/images/facilities/fac1.jpeg";
import fac2 from "@/assets/images/facilities/fac2.jpeg";
import fac3 from "@/assets/images/facilities/fac3.jpeg";
import fac4 from "@/assets/images/facilities/fac4.jpeg";

function AboutUsFacility() {
  const facs = [fac1, fac2, fac3, fac4];
  const facilitiesGridClasses = `
  [&>*:nth-child(1)]:sm:col-start-1 [&>*:nth-child(1)]:sm:col-end-2 
  [&>*:nth-child(1)]:sm:row-start-1 [&>*:nth-child(1)]:sm:row-end-2

  [&>*:nth-child(2)]:sm:col-start-1 [&>*:nth-child(2)]:sm:col-end-2 
  [&>*:nth-child(2)]:sm:row-start-2 [&>*:nth-child(2)]:sm:row-end-3

  [&>*:nth-child(3)]:sm:col-start-2 [&>*:nth-child(3)]:sm:col-end-3 
  [&>*:nth-child(3)]:sm:row-start-1 [&>*:nth-child(3)]:sm:row-end-2

  [&>*:nth-child(4)]:sm:col-start-2 [&>*:nth-child(4)]:sm:col-end-3 
  [&>*:nth-child(4)]:sm:row-start-2 [&>*:nth-child(4)]:sm:row-end-3
  `;

  // Fourth part of parkbom's ABOUT US page
  return (
    <div
      className=" px-[1rem] sm:px-[5rem] md:w-[90%] lg:w-[50rem]
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
        className={` grid grid-cols-1 grid-rows-[repeat(4,1fr)] ${facilitiesGridClasses}
        sm:grid-cols-2 sm:grid-rows-[repeat(2,1fr)] gap-2 w-full  `}
      >
        {facs.map((fac, index) => (
          <div
            key={index}
            className=" w-full relative h-[80vw] sm:h-[40vw] sm:max-h-[18rem]"
          >
            <Image
              key={index}
              src={fac}
              alt="Parkbom1"
              layout="fill"
              className=" object-cover"
              priority={true}
              style={{tableLayout: "fill"}}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsFacility;
