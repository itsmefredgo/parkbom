import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../Redux/provider";

import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";
import "./globals.css";
import "./animation.css";

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
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Providers>{children}</Providers>
        <Footer></Footer>
      </body>
    </html>
  );
}
