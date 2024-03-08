"use client";

import type { RootState } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";

import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";
import Introduction from "@/components/main/Introduction";
import Methods from "@/components/main/Programs";
import Classes from "@/components/main/Classes";
import Inquiries from "@/components/main/Inquiries";

export default function Home() {
  const darkMode = useSelector(
    (state: RootState) => state.darkMode.darkModeState
  );

  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
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
