"use client";
import { useEffect } from "react";
import Discover from "./Discover";
import Feature from "./Feature";
import Hero from "./Hero";

import Lenis from "lenis";
import Procedure from "./Procedure";
import Showcase from "./Showcase";
import Process from "./Process";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Hero />
      <Discover />
      <Feature />
      <Showcase />
      <Procedure />
      {/* <Process /> */}
    </>
  );
}
