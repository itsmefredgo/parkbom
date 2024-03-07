"use client";

import type { RootState } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../Redux/Features/darkModeSlice";

import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";
import Introduction from "@/components/main/Introduction";
import Methods from "@/components/main/Methods";
import Classes from "@/components/main/Classes";
import Inquiries from "@/components/main/Inquiries";
import { log } from "console";
import { text } from "stream/consumers";

export default function Home() {
  const darkMode = useSelector(
    (state: RootState) => state.darkMode.darkModeState
  );

  // localStorage.setItem("darkMode", darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
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
