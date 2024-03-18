import "./Inquiries.css";
import KakaoMap from "./Map";
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function HomeInquiries() {
  return (
    <section
      className=" m-auto px-[5%]
                bg-[#F7F6F0] dark:bg-[#302f2f]
                text-parkbom19 dark:text-[#c9d1d9]"
    >
      <div className=" max-w-[60rem] mx-auto pb-[15rem] pt-[5rem]">
        <div
          className=" text-[3rem] text-[#045329] 
                  dark:text-[#BFD6D1] font-bold
                  mb-16"
        >
          INQUIRIES{" "}
          <span className=" text-[0.75rem] font-normal">자세히보기</span>
        </div>
        <div className="flex my-8 flex-col md:flex-row">
          <div className="mr-8">
            <div className="ml-0 text-2xl flex items-center">
              <FaCaretRight className="ml-[-0.25rem] mr-1" />
              <div>위치 및 이메일</div>
            </div>
            <div className=" flex-[1] flex flex-row my-4">
              <FaLocationDot className="mt-1" />
              <div className="ml-2">
                경남 거제시 아주로 49 (우)53310
                <br />
                지번 | 아주동 298-6
              </div>
            </div>
            <div className=" flex-[1] flex flex-row my-4">
              <MdEmail className="mt-1" />
              <div className="ml-2">parkbom@gmail.com</div>
            </div>
            <div className=" flex-[1] flex flex-row my-4">
              <FaPhone className="mt-1" />
              <div className="ml-2">010-1234-5678</div>
            </div>
          </div>
          <div className="flex-[2.5]">
            <KakaoMap></KakaoMap>
          </div>
        </div>
      </div>
    </section>
  );
}
