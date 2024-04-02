// Parkbom Logo Imports
import Image from "next/image";
import parkbom_logo from "@/../public/assets/images/mainImages/parkbom-logo-tpbg.png";

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
        수학을 잘 하는 왕도는 따로 없다. <br />
        재능이나 기술이 필요한 것도 아니다. <br />
        느려도 뒤로 돌아가 놓친 것을 찾고 <br />
        계단을 오르다 보면 누구나 할 수 있다. <br />
        피하지 말고 부딪혀봐야 인생은 짜릿해진다.
      </div>
    </section>
  );
}

export default AboutUsIntroduction;
