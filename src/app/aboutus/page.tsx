import ClassIntroduction from "@/components/aboutus/ClassIntroduction";
import ClassDelivery from "@/components/aboutus/ClassDelivery";
import ClassMethods from "@/components/aboutus/ClassMethods";
import ClassGallary from "@/components/aboutus/ClassGallary";

export default function AboutUs() {
  return (
    <div
      className=" pt-[6rem] pb-[3rem]
                bg-[#efefec] dark:bg-[#2D2D2D] 
                text-[#000000] dark:text-[#F5F5F5] duration-300"
    >
      {/* Page Title */}
      <div
        className="text-[3rem] mb-8 font-bold px-[5vw] 
                  laptop:max-w-[80rem] laptop:mx-auto 
                 text-[#045329] dark:text-[#BFD6D1]"
      >
        <h1>ABOUT US</h1>
      </div>

      {/* Introduction Section */}
      <ClassIntroduction></ClassIntroduction>

      {/* Class Methods Section */}
      <ClassMethods></ClassMethods>

      {/* Class Progress Steps Section */}
      <ClassDelivery></ClassDelivery>

      {/* Class Gallary Section */}
      <ClassGallary></ClassGallary>
    </div>
  );
}
