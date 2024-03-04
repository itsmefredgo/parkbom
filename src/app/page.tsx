import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";
import Introduction from "@/components/main/Introduction";
import Classes from "@/components/main/Classes";

export default function Home() {
  return (
    <div className="as">
      <Header />
      <main>
        <Introduction />
        <Classes />
      </main>
      <Footer />
    </div>
  );
}
