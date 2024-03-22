import ClassIntroduction from "@/components/classes/ClassIntroduction";
import ClassesList from "@/components/classes/ClassesList";

export default function Classes() {
  return (
    <section
      className=" pt-[10rem] pb-[3rem]
      bg-[#efefec] dark:bg-[#2D2D2D] 
      text-[#000000] dark:text-[#F5F5F5] duration-300"
    >
      <ClassIntroduction></ClassIntroduction>
      <ClassesList></ClassesList>
    </section>
  );
}
