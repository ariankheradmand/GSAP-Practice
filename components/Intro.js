"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Intro() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".lines", {
      y: "100%",
      delay: 0.2,
      stagger: { amount: gsap.utils.random(0.2, 0.4), from: "random" },
      ease: "power1"
    })
  }, []);
  return (
    <div className=" fixed top-0 left-0 flex h-full w-full items-end justify-center pointer-events-none z-500 overflow-hidden">
      {Array.from({ length: 11 }).map((_, i) => (
        <div
          key={i}
          className="lines h-full w-[10%] border-t border-black bg-white  "
        />
      ))}
    </div>
  );
}

export default Intro;
