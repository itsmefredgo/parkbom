import facility_1 from "@/../public/assets/images/facilitiesImages/facility_1.jpeg";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { FaCheck } from "react-icons/fa";

export default function AboutUs() {
  const temp = [
    "독서토론회",
    "독서 발표회",
    "체육대회",
    "스포츠 클럽",
    "영어 노래 부르기",
  ];

  return (
    <div
      className=" pt-[8rem] pb-[3rem] max-w-[60rem] mx-auto min-h-[100vh]
      text-[#000000] dark:text-[#F5F5F5] duration-300"
    >
      {/* Page Title */}
      <div
        className="lg:max-w-[70rem] mx-auto py-[5rem]
        "
      >
        <h1 className="text-[#045329] dark:text-[#BFD6D1] text-[3rem] font-bold">
          CLUBS
        </h1>
        <h2>정규 수업 외 다양한 클럽 활동</h2>
      </div>
      <section>
        <ul>
          {temp.map((club, index) => (
            <h2
              key={index}
              className=" text-[2rem] font-bold pb-6 border-black flex items-center gap-4
              dark:border-[#BFD6D1] text-[#000000] dark:text-[#BFD6D1]"
            >
              <FaCheck />
              <span>{club}</span>
            </h2>
          ))}
        </ul>
      </section>
      {/* <SectionTitle title="CLUBS" /> */}
      {/* <section className=" max-w-[60rem] sm:w-[80%] sm:mx-auto laptop:w-[100%] mb-12">
        <h2
          className=" text-[2.5rem] font-bold pb-6 border-black 
        dark:border-[#BFD6D1] text-[#045329] dark:text-[#BFD6D1]"
        >
          독서토론회
        </h2>
      </section>
      <section className=" max-w-[60rem] sm:w-[80%] sm:mx-auto laptop:w-[100%]">
        <h2
          className=" text-[2.5rem] font-bold pb-6 border-black 
        dark:border-[#BFD6D1] text-[#045329] dark:text-[#BFD6D1]"
        >
          체육대회
        </h2>
      </section> */}
    </div>
  );
}
