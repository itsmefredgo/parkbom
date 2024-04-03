// Importing a list of program characteristics and descriptions
import SectionTitle from "../ui/SectionTitle";
import { FaCheck } from "react-icons/fa";

function AboutUsPrograms() {
  const temp = [
    "독서 토론회",
    "독서 발표회",
    "체육대회",
    "스포츠 클럽",
    "영어 노래 부르기",
  ];

  return (
    <section className=" px-[1rem] sm:px-[5rem] lg:max-w-[60rem] mx-auto py-[10rem]">
      {/* List of program characteristics */}
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
    </section>
  );
}

export default AboutUsPrograms;
