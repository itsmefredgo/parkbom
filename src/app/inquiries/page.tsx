import InquiriesIntroduction from "@/components/inquiries/InquiriesIntroduction";
import InquiriesContactAndLocation from "@/components/inquiries/InquiriesContactAndLocation";
import InquiriesInstruction from "@/components/inquiries/InquiriesInstruction";

export default function Inquiries() {
  return (
    <main
      className=" pt-[6rem] pb-[3rem] duration-300 min-h-screen 
                bg-[#dfe4ea] dark:bg-[#2D2D2D] 
                text-[#2D2D2D] dark:text-[#F5F5F5]"
    >
      <InquiriesIntroduction></InquiriesIntroduction>
      <InquiriesInstruction></InquiriesInstruction>
      <InquiriesContactAndLocation></InquiriesContactAndLocation>
    </main>
  );
}
