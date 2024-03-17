import parkbom_logo from "@/assets/images/parkbom-logo-tpbg.png";
import Image from "next/image";

function InquiriesIntroduction() {
  return (
    <div
      className=" mb-8 ml-6 mx-auto max-w-[60rem] flex flex-col items-start
                text-[#045329] dark:text-[#BFD6D1] 
                sm:flex-row sm:items-center tablet:w-[80%] laptop:w-[60%]
                laptop:mx-auto
                "
    >
      <Image
        src={parkbom_logo}
        alt="Parkbom"
        height={100}
        className=" ml-[-1.5rem] dark:brightness-200 sm:pb-2 mr-4
                  sm:ml-0"
      ></Image>
      <h1 className=" font-bold text-[2rem]">INQUIRIES</h1>
    </div>
  );
}

export default InquiriesIntroduction;
