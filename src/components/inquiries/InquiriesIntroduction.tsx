import parkbom_logo from "@/../public/assets/images/mainImages/parkbom-logo-tpbg.png";
import Image from "next/image";

function InquiriesIntroduction() {
  return (
    <section
      className=" mb-8 px-6 max-w-[60rem] flex flex-col items-start
                text-[#045329] dark:text-[#BFD6D1] 
                sm:flex-row sm:items-center 
                sm:w-[80%] laptop:w-[60%] mx-auto
                sm:mx-auto sm:px-0
                "
    >
      <Image
        src={parkbom_logo}
        alt="Parkbom"
        height={100}
        className=" ml-[-1.5rem] dark:brightness-200 sm:pb-2 mr-4
                  "
      ></Image>
      <h1 className=" font-bold text-[2rem]">INQUIRIES</h1>
    </section>
  );
}

export default InquiriesIntroduction;
