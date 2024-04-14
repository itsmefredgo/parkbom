import Introduction from "@/components/main/MainIntroduction";
import Methods from "@/components/main/MainAboutUs";
import Classes from "@/components/main/MainClasses";
import Inquiries from "@/components/main/MainInquiries";
import NewAlert from "@/components/ui/NewAlert";

export default function Home() {
  return (
    <main>

      <Introduction />
      <Methods />
      <Classes />
      <Inquiries />
    </main>
  );
}
