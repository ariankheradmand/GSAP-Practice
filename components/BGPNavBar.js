"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Codesandbox } from "lucide-react";
import React from "react";

function BGPNavBar() {
  useGSAP(() => {
    gsap.fromTo(
      ".main",
      {
        borderRadius: "100%",
        rotate: 0,
        top: 0,
        height: "0px",
        width: "0px",
      },
      {
        borderRadius: "0%",
        duration: 1.3,
        rotate: 360,
        top: "30%",
        height: "30px",
        width: "30px",
        ease: "elastic",
      }
    );
    gsap.to(".main", { scale: 90, delay: 1.3, duration: 0.6 });

    gsap.to([".logo", ".buttons"], { opacity: 1, delay: 1.6 , stagger: 0.4 });
    gsap.to(".logo", { rotate: 360, delay: 1.8, repeat: -1, duration: 10 });
  }, []);

  return (
    <div className="w-[80%] h-[10%]  fixed flex justify-center items-center z-10 top-0 overflow-hidden">
      <div className="main  bg-white absolute"></div>
      <Codesandbox className="logo opacity-0 color-black z-11 size-16 left-8 absolute" />
      <div className=" absolute right-8 flex items-center justify-center gap-8 font-Anton ">
        <button className="buttons opacity-0 text-2xl cursor-pointer z-10 group flex items-center justify-start relative">
          <span className="w-0 group-hover:w-full h-px bg-one absolute -bottom-1 transition-all duration-300"></span>
          LOGIN
        </button>
        <button className="buttons opacity-0 text-2xl cursor-pointer z-10 group flex items-center justify-start relative">
          <span className="w-0 group-hover:w-full h-px bg-one absolute -bottom-1 transition-all duration-300"></span>
          SIGNUP
        </button>
        <button className="buttons opacity-0 text-2xl cursor-pointer z-10 group flex items-center justify-start relative">
          <span className="w-0 group-hover:w-full h-px bg-one absolute -bottom-1 transition-all duration-300"></span>
          CONTACT
        </button>
      </div>
    </div>
  );
}

export default BGPNavBar;
