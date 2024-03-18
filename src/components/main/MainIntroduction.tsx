// Parkbom Logo Imports
import Image from "next/image";
import parkbom_logo from "@/assets/images/parkbom-logo-tpbg.png";

function MainIntroduction() {
  // First part of parkbom's main webpage
  return (
    <section
      className=" h-screen relative flex items-center 
                bg-[#F7F6F0] dark:bg-[#302f2f]"
    >
      {/* Title and introduction to the website */}
      <div
        className="h-[calc(100%-1rem)] w-[calc(100%-1rem)] m-auto 
                  rounded-2xl relative  overflow-hidden"
      >
        <div className="pt-[15%] ml-[5%] absolute z-10">
          <Image
            src={parkbom_logo}
            alt="Parkbom"
            height={100}
            className=" dark:brightness-200 z-10"
          ></Image>
          <p
            className=" pl-6 opacity-100 z-10 
                      text-parkbomDarkText dark:text-parkbomLightText "
          >
            학문의 시작부터 끝까지, <br />
            수학과 영어의 핵심을 강화하는 특별한 학습 경험을 만나보세요. <br />
            초, 중, 고 학년 모두에게 적합한 최고의 교육을 제공합니다.
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
