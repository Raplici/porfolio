"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-[999] bottom-5 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur-[8px] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-150 transition-all dark:bg-gray-950"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
