import facility_1 from "@/../public/assets/images/facilitiesImages/facility_1.jpeg";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div
      className=" pt-[8rem] pb-[3rem]
      bg-[#efefec] dark:bg-[#2D2D2D] 
      text-[#000000] dark:text-[#F5F5F5] duration-300"
    >
      {/* Page Title */}
      <div
        className=" px-[1rem] sm:px-[5rem] lg:max-w-[70rem] mx-auto py-[5rem]
        text-[#045329] dark:text-[#BFD6D1] text-[3rem] font-bold"
      >
        <h1 className=" pl-4">ARTS</h1>
      </div>
      <section className=" mx-6 max-w-[60rem] sm:w-[80%] sm:mx-auto laptop:w-[60%] px-2 mb-12">
        <h2
          className=" text-[2.5rem] font-bold pb-6 border-black 
        dark:border-[#BFD6D1] text-[#045329] dark:text-[#BFD6D1]"
        >
          독서반
        </h2>
        <p>독서반 독서반 독서반 독서반 독서반 독서반</p>
        <Image
          src={facility_1}
          alt="Parkbom1"
          // layout="fill"
          // className=" object-cover"
          priority={true}
        ></Image>
      </section>
      <section className=" mx-6 max-w-[60rem] sm:w-[80%] sm:mx-auto laptop:w-[60%] px-2">
        <h2
          className=" text-[2.5rem] font-bold pb-6 border-black 
        dark:border-[#BFD6D1] text-[#045329] dark:text-[#BFD6D1]"
        >
          체육대회
        </h2>
        <p>체육대회 체육대회 체육대회 체육대회 체육대회 체육대회</p>
      </section>
    </div>
  );
}
