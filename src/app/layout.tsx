import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "../Redux/provider";

const inter = Inter({ subsets: ["latin"] });
import { toggleDarkMode } from "@/Redux/Features/darkModeSlice";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
