// Importing necessary react icons
import Image from "next/image";
import facility_1 from "@/../public/assets/images/facilitiesImages/facility_1.jpeg";
import facility_2 from "@/../public/assets/images/facilitiesImages/facility_2.jpeg";
import facility_3 from "@/../public/assets/images/facilitiesImages/facility_3.jpeg";
import facility_4 from "@/../public/assets/images/facilitiesImages/facility_4.jpeg";
import SectionTitle from "../ui/SectionTitle";

function AboutUsFacility() {
  const facs = [facility_1, facility_2, facility_3, facility_4];
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
      <SectionTitle title="시설" />
      <div
        className={` grid grid-cols-1 grid-rows-[repeat(4,1fr)] ${facilitiesGridClasses}
        sm:grid-cols-2 sm:grid-rows-[repeat(2,1fr)] gap-2 w-full  `}
      >
        {facs.map((facility, index) => (
          <div
            key={index}
            className=" w-full relative h-[80vw] sm:h-[40vw] sm:max-h-[18rem]"
          >
            <Image
              key={index}
              src={facility}
              alt="Parkbom1"
              layout="fill"
              className=" object-cover"
              priority={true}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsFacility;
