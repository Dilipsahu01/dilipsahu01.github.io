import { Geist, Geist_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dilip Sahu | Software Engineer",
  description: "God-Level Portfolio of Dilip Sahu - Backend, AI, & UI/UX",
};

import Preloader from "@/components/Preloader";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} antialiased`}
    >
      <body className="bg-base text-ink min-h-screen flex flex-col selection:bg-sage/30 selection:text-ink">
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
