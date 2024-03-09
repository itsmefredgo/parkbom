import { FaCaretRight } from "react-icons/fa6";
import { PiMathOperationsFill } from "react-icons/pi";
import { TbMessageLanguage } from "react-icons/tb";

export default function HomeClasses() {
  return (
    <section className=" h-[30rem] px-[calc((100vw-60rem)/2)] bg-[#aaaaaadd] pt-28 dark:bg-[#4d4e4c] text-[#56595d] dark:text-[#EFE7E1]">
      <div className=" border-b-2 border-b-[#56595d] dark:border-b-[#EFE7E1]  flex justify-between pb-1">
        <div className=" text-xl">
          <h1>Classes</h1>
        </div>
        <div className=" text-xs flex flex-col">
          <button className=" mb-0 mt-auto">자세히보기</button>
        </div>
      </div>

      <div className=" flex my-12">
        <div className=" flex-[1] flex">
          <div className=" flex-[1] text-2xl flex items-start">
            <div className="flex items-center">
              <PiMathOperationsFill />
              <h1 className="underline ml-1">수학</h1>
            </div>
          </div>
          <ul className=" flex-[2] text-xl">
            <li className="flex items-center">
              <FaCaretRight />
              초등 (1~6)
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              중등 (1~3)
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              고등 (1~3)
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              경시대회 준비
            </li>
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
            <li className="flex items-center">
              <FaCaretRight />
              초등 (1~6)
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              중등 (1~3)
            </li>
            <li className="flex items-center">
              <FaCaretRight />
              고등 (1~3)
            </li>
          </ul>
          <ul className="">
            <li>&nbsp;</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
