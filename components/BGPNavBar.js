"use client"

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
        rotate:0,
        top:0,
        height: "0px",
        width: "0px",
      },
      {
        borderRadius: "0%",
        duration: 2,
        rotate:360,
        top: "30%",
        height: "30px",
        width: "30px",
        ease: "elastic"
      }
    );
    gsap.to(".main" , {scale: 60 , delay: 2, duration: .6})

    gsap.to(".logo" , {opacity: 1 , delay:2.5})
    gsap.to(".logo" , {rotate:360 , delay:2.6 , repeat: -1, duration: 10})
  }, []);

  return (
    <div className="w-[80%] h-[10%]  fixed flex justify-center items-center z-10 top-0 overflow-hidden">
      <div className="main  bg-white absolute"></div>
      <Codesandbox className="logo opacity-0 color-black z-11 size-16 left-8 absolute" />
      <div className=" absolute right-8 flex items-center justify-center gap-8 font-Anton ">
             <button className="text-xl">LOGIN</button>
             <button className="text-xl">SIGNUP</button>
             <button className="text-xl">CONTACT</button>
      </div>
    </div>
  );
}

export default BGPNavBar;
