"use client";

import { useState } from "react";

import Link from "next/link";
import Logo from "./Logo";
import { navLinks } from "./constants";
import { AlignJustify } from "lucide-react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <header className="container max-w-[1355px] mx-auto pt-[36px] pb-9">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex gap-8 text-[max(5.3333333333vw, 20px)]">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-xl">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Link
            href="/collection"
            className="px-8 py-4 transition-all bg-[#a7aaad] hover:bg-[#fff] rounded-full hover:text-[#222] text-xl"
          >
            Order now
          </Link>
          <div className="hidden">
            <AlignJustify />
          </div>
        </div>
      </nav>
    </header>
  );
}
