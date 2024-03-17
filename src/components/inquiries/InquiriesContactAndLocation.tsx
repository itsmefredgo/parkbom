import KakaoMap from "../main/Map";
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import MainTitle from "../main/helpers/SectionTitle";

function InquiriesAddress() {
  return (
    <section className=" h-[40rem] px-[calc((100vw-60rem)/2)]">
      <MainTitle sectionTitle="위치 및 상담" hrefLink=""></MainTitle>

      <div className="flex my-8">
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
    </section>
  );
}

export default InquiriesAddress;
