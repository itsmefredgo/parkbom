// Parkbom Logo Imports
import Image from "next/image";
import parkbom_logo from "@/../public/assets/images/mainImages/parkbom-logo-tpbg.png";
import data from "@/../public/data/data.json";

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
        rounded-2xl relative overflow-hidden"
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
              {data.main.title}
            </p>
          </div>

          <p
            className=" pl-6 opacity-100 z-10 text-[1rem] mt-[2rem]
            text-parkbomDarkText dark:text-parkbomLightText "
          >
            {data.main.introduction.map((line: string, index: number) => (
              <>
                {line}
                <br />
              </>
            ))}
          </p>
        </div>
        {/* Background image of the introduction */}
        <div
          className=" h-full w-full absolute 
          bg-[url('/assets/images/mainImages/main-bg.jpeg')]
          bg-cover bg-top opacity-50 overflow-hidden
          dark:brightness-50 dark:opacity-80"
        ></div>
      </div>
    </section>
  );
}

export default MainIntroduction;
