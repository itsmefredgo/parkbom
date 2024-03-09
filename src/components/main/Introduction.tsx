import Image from "next/image";

// Parkbom Logo with transparent background
import parkbom_logo from "@/assets/images/parkbom-logo-tpbg.png";

export default function Introduction() {
  return (
    <section className="h-screen relative">
      <div className="pt-[15%] pl-[15%]">
        <Image
          src={parkbom_logo}
          alt="Parkbom"
          height={100}
          className=" dark: brightness-200"
        ></Image>
        <p className=" pl-6 text-parkbom19 dark:text-parkbom00">
          학문의 시작부터 끝까지, <br />
          수학과 영어의 핵심을 강화하는 특별한 학습 경험을 만나보세요. <br />
          초, 중, 고 학년 모두에게 적합한 최고의 교육을 제공합니다.
        </p>
      </div>
      <div
        className="bg-[url('/../../assets/images/main-bg.jpeg')] 
        absolute inset-0 -z-10 bg-cover bg-top opacity-50 
        dark:brightness-50 dark:opacity-80"
      ></div>
    </section>
  );
}
