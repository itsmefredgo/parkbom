import "./Inquiries.css";
import KakaoMap from "./Kakaomap";
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function HomeInquiries() {
  return (
    <section className=" h-[40rem] bg-[#f0f1f3] px-[calc((100vw-60rem)/2)]">
      <div className="home-inquiries-title">
        <div className="inquiries-title">
          <h1>Inquiries</h1>
        </div>
        <div className="map"></div>
        <div className="viewmore-link">
          <button>자세히보기</button>
        </div>
      </div>

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
