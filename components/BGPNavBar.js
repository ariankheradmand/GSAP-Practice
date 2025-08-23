"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
    gsap.to(".main" , {scale: 100 , delay: 2.1,})
  }, []);

  return (
    <div className="w-[80%] h-[10%]  fixed flex justify-center z-10 top-0 overflow-hidden">
      <div className="main  bg-white absolute"></div>
    </div>
  );
}

export default BGPNavBar;
