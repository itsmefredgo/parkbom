import ClassIntroduction from "@/components/aboutus/AboutUsIntroduction";
import ClassDelivery from "@/components/aboutus/AboutUsDelivery";
import ClassMethods from "@/components/aboutus/AboutUsPrograms";
import ClassGallary from "@/components/aboutus/AboutUsFacility";
import AboutUsClubs from "@/components/aboutus/AboutUsClubs";

export default function AboutUs() {
  return (
    <div
      className=" pt-[7rem] pb-[3rem]
      bg-[#efefec] dark:bg-[#2D2D2D] 
      text-[#000000] dark:text-[#F5F5F5] duration-300"
    >
      {/* Page Title */}

      {/* Introduction Section */}
      <ClassIntroduction></ClassIntroduction>

      {/* Class Methods Section */}
      <ClassMethods></ClassMethods>

      {/* Class Progress Steps Section */}
      <ClassDelivery></ClassDelivery>

      {/* Class Gallary Section */}
      <AboutUsClubs></AboutUsClubs>
      <ClassGallary></ClassGallary>
    </div>
  );
}
