// Parkbom Logo Imports
import Image from "next/image";
import parkbom_logo from "@/assets/images/parkbom-logo-tpbg.png";

function MainIntroduction() {
  // First part of parkbom's main webpage
  return (
    <section
      className=" h-screen relative flex items-center 
      bg-[#F7F6F0] dark:bg-[#302f2f] duration-300"
    >
      {/* Title and introduction to the website */}
      <div
        className="h-[calc(100%-1rem)] w-[calc(100%-1rem)] m-auto 
        rounded-2xl relative  overflow-hidden"
      >
        <div className="pt-[15%] pl-8 absolute z-10 md:pl-20 lg:pl-28">
          <div className=" flex flex-row items-center">
            <Image
              src={parkbom_logo}
              alt="Parkbom"
              height={100}
              className=" dark:brightness-200 z-10 ml-[0rem]"
            ></Image>
            <p className=" pt-8 font-bold text-[1.1rem] text-[#33532e]">
              초중고 수학 영어 전문학원 <br />
            </p>
          </div>

          <p
            className=" pl-6 opacity-100 z-10 text-[1rem] mt-[2rem]
            text-parkbomDarkText dark:text-parkbomLightText "
          >
            수학을 잘 하는 왕도는 따로 없다. <br />
            재능이나 기술이 필요한 것도 아니다. <br />
            느려도 뒤로 돌아가 놓친 것을 찾고 <br />
            계단을 오르다 보면 누구나 할 수 있다. <br />
            피하지 말고 부딪혀봐야 인생은 짜릿해진다.
          </p>
        </div>
        {/* Background image of the introduction */}
        <div
          className=" h-full w-full absolute
          bg-[url('/../../assets/images/main-bg.jpeg')]
          bg-cover bg-top opacity-50 overflow-hidden
          dark:brightness-50 dark:opacity-80"
        ></div>
      </div>
    </section>
  );
}

export default MainIntroduction;
