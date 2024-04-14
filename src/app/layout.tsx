import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/../styles/globals.css";
import "@/../styles/animation.css";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";
import NewAlert from "@/components/ui/NewAlert";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "박봄수학영어",
  description: "Parkbom Educational Institution Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" fred">
      <body className={inter.className}>
        <NewAlert />
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
