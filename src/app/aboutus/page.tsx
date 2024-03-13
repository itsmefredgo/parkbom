import ClassIntroduction from "@/components/aboutus/ClassIntroduction";
import ClassDelivery from "@/components/aboutus/ClassDelivery";
import ClassMethods from "@/components/aboutus/ClassMethods";
import ClassGallary from "@/components/aboutus/ClassGallary";

export default function AboutUs() {
  return (
    // <div
    //   className=" pt-[6rem] pb-[3rem]
    // bg-[#efefec] dark:bg-[#203C31]
    // text-[#000000] dark:text-[#FDFFF0]"
    // >
    <div
      className=" pt-[6rem] pb-[3rem]
    bg-[#efefec] dark:bg-[#2D2D2D] 
    text-[#000000] dark:text-[#F5F5F5]"
    >
      {/* Page Title */}
      <div
        className="text-[3rem] mb-8 font-bold px-[5vw] 
        laptop:max-w-[80rem] laptop:mx-auto text-[#045329] dark:text-[#BFD6D1]"
      >
        <h1>ABOUT US</h1>
      </div>

      {/* Introduction Section */}
      <ClassIntroduction></ClassIntroduction>

      {/* Class Methods Section */}
      <ClassMethods></ClassMethods>

      {/* Top Divider of Class Progress Steps Section */}
      {/* <div
        className=" bottom-0 left-0 w-[100%] overflow-hidden 
                  rotate-180 leading-[0]"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className=" relative block w-[100%] h-[3rem]"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className=" fill-[#d9ddd1] dark:fill-[#366247]"
          ></path>
        </svg>
      </div> */}
      {/* Class Progress Steps Section */}
      <ClassDelivery></ClassDelivery>
      {/* Bottom Divider of Class Progress Steps Section */}
      {/* <div
        className=" bottom-0 left-0 w-[100%] overflow-hidden 
                  rotate-180 leading-[0] bg-[#d9ddd1] dark:bg-[#366247]"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className=" relative block w-[100%] h-[3rem]"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className=" fill-[#efefec] dark:fill-[#203C31]"
          ></path>
        </svg>
      </div> */}

      {/* Class Gallary Section */}
      <ClassGallary></ClassGallary>
    </div>
  );
}
