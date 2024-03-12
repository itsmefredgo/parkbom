import ClassIntroduction from "@/components/aboutus/ClassIntroduction";
import ClassDelivery from "@/components/aboutus/ClassDelivery";
import ClassMethods from "@/components/aboutus/ClassMethods";
import ClassGallary from "@/components/aboutus/ClassGallary";

export default function AboutUs() {
  return (
    <div
      className=" bg-[#efefec]
      px-[5vw] laptop:bg-blue-500 pt-[6rem] "
    >
      <div className="text-[3rem] mb-8 text-[#045329] font-bold">
        <h1>ABOUT US</h1>
      </div>

      <ClassIntroduction></ClassIntroduction>
      <ClassMethods></ClassMethods>
      <ClassDelivery></ClassDelivery>
      <ClassGallary></ClassGallary>
    </div>
  );
}
