import { FaCaretRight } from "react-icons/fa6";
import { PiMathOperationsFill } from "react-icons/pi";
import { TbMessageLanguage } from "react-icons/tb";
import SectionTitle from "./helpers/SectionTitle";

export default function HomeClasses() {
  const mathTableItems = [
    "초등 (1~6)",
    "중등 (1~3)",
    "고등 (1~3)",
    "경시대회 준비",
  ];

  const englishTableItems = ["초등 (1~6)", "중등 (1~3)", "고등 (1~3)"];

  return (
    <section
      className=" px-[calc((100vw-60rem)/2)] h-[30rem] pt-28 
      bg-parkbom04 dark:bg-[#010408]
      text-parkbom19 dark:text-[#c9d1d9]"
    >
      <SectionTitle sectionTitle={"Classes"} hrefLink="/classes"></SectionTitle>

      <div className=" flex my-12">
        <div className=" flex-[1] flex">
          <div className=" flex-[1] text-2xl flex items-start">
            <div className="flex items-center">
              <PiMathOperationsFill />
              <h1 className="underline ml-1">수학</h1>
            </div>
          </div>
          <ul className=" flex-[2] text-xl">
            {mathTableItems.map((mathTableItems, index) => (
              <li className="flex items-center" key={index}>
                <FaCaretRight />
                {mathTableItems}
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex-[1] flex">
          <div className=" flex-[1] text-2xl flex items-start">
            <div className="flex items-center">
              <TbMessageLanguage />
              <h1 className="underline ml-1">영어</h1>
            </div>
          </div>
          <ul className=" flex-[2] text-xl">
            {englishTableItems.map((englishTableItems, index) => (
              <li className="flex items-center" key={index}>
                <FaCaretRight />
                {englishTableItems}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
