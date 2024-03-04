import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";
import Introduction from "@/components/main/Introduction";
import Methods from "@/components/main/Methods";
import Classes from "@/components/main/Classes";
import Inquiries from "@/components/main/Inquiries";

export default function Home() {
  return (
    <div className="as">
      <Header />
      <main>
        <Introduction />
        <Methods />
        <Classes />
        <Inquiries />
      </main>
      <Footer />
    </div>
  );
}
