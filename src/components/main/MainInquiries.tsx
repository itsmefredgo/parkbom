// Imports
import Link from "next/link";

// Map component import
import KakaoMap from "./helpers/KakaoMap";

// Importing necessary react icons
import { FaPhone, FaLocationDot, FaCaretRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function MainInquiries() {
  // Fourth part of parkbom's main webpage: INQUIRIES
  return (
    <section
      className=" m-auto px-[5%]
                bg-[#F7F6F0] dark:bg-[#302f2f]
                text-parkbom19 dark:text-[#c9d1d9]"
    >
      <div className=" max-w-[60rem] mx-auto pb-[15rem] pt-[5rem]">
        {/* Section heading for ABOUT US */}
        <div
          className=" text-[3rem] text-[#045329] 
                  dark:text-[#BFD6D1] font-bold
                  mb-16"
        >
          INQUIRIES{" "}
          <Link
            href={"/inquiries"}
            className=" text-[0.75rem] font-normal underline"
          >
            자세히보기
          </Link>
        </div>

        {/* Section contents for CLASSES */}
        <div className="flex my-8 flex-col md:flex-row">
          {/* Text information */}
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

          {/* Mapping */}
          <div className="flex-[2.5]">
            <KakaoMap></KakaoMap>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainInquiries;
