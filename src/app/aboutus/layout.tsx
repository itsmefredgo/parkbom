import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";

export default function Location({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
