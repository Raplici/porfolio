import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";

import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafli Ferdian · Front-End Developer",
  description: "A website that provides information about myself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${plusJakarta.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
        dark:bg-slate-950 dark:text-slate-300 
        `}
      >
        <div className="bg-[#fbe2e3] absolute -top-24 -z-10 right-44 h-[500px] w-[500px] rounded-full blur-[160px] sm:w-[1100px] dark:invisible" />
        <div className="bg-[#dbd7fb] absolute -top-4 -z-10 -left-[560px] h-[500px] w-[800px] rounded-full blur-[160px] sm:w-[1100px] md:-left-[520px] lg:-left-[448px] xl:-left-60 2xl:-left-20 dark:invisible" />
        <div className="invisible absolute top-0 -z-10 h-screen w-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:visible" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Toaster position="top-right" />
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
