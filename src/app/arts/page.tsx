import ClassIntroduction from "@/components/aboutus/AboutUsIntroduction";
import ClassDelivery from "@/components/aboutus/AboutUsDelivery";
import ClassMethods from "@/components/aboutus/AboutUsPrograms";
import ClassGallary from "@/components/aboutus/AboutUsFacility";

export default function AboutUs() {
  return (
    <div
      className=" pt-[10rem] pb-[3rem]
      bg-[#efefec] dark:bg-[#2D2D2D] 
      text-[#000000] dark:text-[#F5F5F5] duration-300"
    >
      {/* Page Title */}
      <div
        className=" px-[1rem] sm:px-[5rem] lg:max-w-[70rem] mx-auto py-[5rem]
        text-[#045329] dark:text-[#BFD6D1] text-[3rem] font-bold"
      >
        <h1>ARTS</h1>
        <h2>독서반</h2>
        <h2>체육대회</h2>
      </div>
    </div>
  );
}
