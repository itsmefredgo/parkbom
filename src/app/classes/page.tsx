import ClassIntroduction from "@/components/classes/ClassIntroduction";
import ClassesList from "@/components/classes/ClassesList";
import TestingColours from "@/components/classes/TestingColours";

export default function Classes() {
  return (
    <main
      className=" pt-[8rem] pb-[3rem] duration-300
                min-h-screen 
                bg-[#efefec] dark:bg-[#2D2D2D] 
                text-[#2D2D2D] dark:text-[#F5F5F5]"
    >
      <ClassIntroduction></ClassIntroduction>
      <ClassesList></ClassesList>
      {/* <TestingColours></TestingColours> */}
    </main>
  );
}
