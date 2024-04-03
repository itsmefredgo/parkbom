import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";

import Script from "next/script";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const NEXT_PUBLIC_KAKAO_APP_JS_KEY = "a20aabb94c06838f84dfedbcff8aede6";
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

function InquiriesAddress() {
  return (
    <section className=" mx-6 max-w-[60rem] sm:w-[80%] sm:mx-auto laptop:w-[60%]">
      <div className=" mx-[0.25rem]">
        <div
          className=" flex flex-row text-[1.25rem] mb-2
          text-[#045329] dark:text-[#BFD6D1] font-bold"
        >
          <PiNotePencilBold className=" text-[1.6rem] mr-2 mb-2" />
          <h2>문의</h2>
        </div>
        <ul className="">
          <li className=" flex flex-row items-center gap-2 text-lg">
            <MdEmail className="" />
            <div className="">parkbom6661@naver.com</div>
          </li>
          <li className=" flex flex-row items-center gap-2 text-lg">
            <FaPhone className=" text-[1rem] ml-[2px] mb-[3px]" />
            <div className="">055-681-6661 (전화)</div>
          </li>
          <li className=" flex flex-row items-center gap-2 text-lg">
            <FaPhone className=" text-[1rem] ml-[2px] mb-[3px]" />
            <div className="">010-4843-6661 (문자만 가능)</div>
          </li>
        </ul>
      </div>

      <div className="mx-[0.25rem]">
        <div
          className=" flex flex-row text-[1.25rem] mb-2 mt-14 
          text-[#045329] dark:text-[#BFD6D1] font-bold"
        >
          <FaLocationDot className=" text-[1.6rem] mr-2" />
          <h2>위치</h2>
        </div>
        <div className="">
          <div className="">
            경남 거제시 아주로 49 (우)53310
            <br />
            지번 | 아주동 298-6
          </div>
          <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
          <Map
            center={{ lat: 34.86461221035521, lng: 128.68959796466123 }}
            className="w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem]"
          >
            <MapMarker
              position={{ lat: 34.86461221035521, lng: 128.68959796466123 }}
            >
              <div style={{ color: "#000000" }}>
                &nbsp;&nbsp;박봄 수학 영어 학원
              </div>
            </MapMarker>
          </Map>
        </div>
      </div>
    </section>
  );
}

export default InquiriesAddress;
