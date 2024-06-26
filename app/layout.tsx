import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import "swiper/swiper-bundle.css";

import localFont from "next/font/local";

const myFont = localFont({ src: "./PPNeueMontreal-Medium.woff2" });

export const metadata: Metadata = {
  title: "Custo",
  description: "Custo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
