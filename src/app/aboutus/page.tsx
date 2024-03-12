import ClassIntroduction from "@/components/aboutus/ClassIntroduction";
import ClassDelivery from "@/components/aboutus/ClassDelivery";
import ClassMethods from "@/components/aboutus/ClassMethods";
import ClassGallary from "@/components/aboutus/ClassGallary";

export default function AboutUs() {
  return (
    <div className=" bg-[#efefec] pt-[6rem] pb-[3rem]">
      <div className="text-[3rem] mb-8 text-[#045329] font-bold px-[5vw] laptop:max-w-[80rem] laptop:mx-auto">
        <h1>ABOUT US</h1>
      </div>

      <ClassIntroduction></ClassIntroduction>
      <ClassMethods></ClassMethods>
      <div className=" bottom-0 left-0 w-[100%] overflow-hidden rotate-180 leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className=" relative block w-[100%] h-[3rem]"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className=" fill-[#d9ddd1]"
          ></path>
        </svg>
      </div>
      <ClassDelivery></ClassDelivery>
      <div className=" bottom-0 left-0 w-[100%] overflow-hidden rotate-180 leading-[0] bg-[#d9ddd1]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className=" relative block w-[100%] h-[3rem]"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className=" fill-[#efefec]"
          ></path>
        </svg>
      </div>
      <ClassGallary></ClassGallary>
    </div>
  );
}
