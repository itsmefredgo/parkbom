// Parkbom Logo Imports
import Image from "next/image";
import parkbom_logo from "@/assets/images/parkbom-logo-tpbg.png";

function AboutUsIntroduction() {
  // First part of parkbom's ABOUT US page
  return (
    // Title and introduction to the website
    <section
      // className="px-[5vw] laptop:max-w-[70rem] laptop:mx-auto"
      className=" px-[1rem] sm:px-[5rem] lg:max-w-[70rem] mx-auto"
    >
      <Image
        src={parkbom_logo}
        alt="Parkbom"
        height={100}
        className=" ml-[-1rem] dark: brightness-200"
      ></Image>
      <div className=" w-[20rem] break-keep ml-2">
        조용한 공원 길을 따라 걷다 보면 시원한 가을 바람이 스쳐 지나가고 마음이
        편안해집니다. 이맘때 따뜻한 커피 한 잔과 함께 가을의 아름다움을 만끽하는
        것은 정말 즐거운 일입니다.
      </div>
    </section>
  );
}

export default AboutUsIntroduction;
