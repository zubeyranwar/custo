"use client";

import { useState } from "react";

import Link from "next/link";
import Logo from "./Logo";
import { navLinks } from "./constants";
import { AlignJustify } from "lucide-react";

export default function Navbar() {
  const [ show, setShow] = useState(false);
  return (
    <header className="lg:container max-w-[1355px] mx-auto pt-[36px] pb-4 lg:px-16 px-16">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="hidden lg:flex space-x-8 pl-8 text-[max(5.3333333333vw, 20px)]">
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
            className=" flex items-center flex-shrink-0 px-8 py-4 transition-all bg-[#a7aaad] hover:bg-[#fff] rounded-full hover:text-[#222] text-xl"
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
