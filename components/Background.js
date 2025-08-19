"use client"
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Fingerprint  } from "lucide-react";

function Background() {
const [repeat, setRepeat] = useState(true);

useEffect(() => {
  if (repeat) {
    gsap.to(".mask", {
      height: "46px",
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => setRepeat(false),
    });
    gsap.to(".line", {
      top: "45px",
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => setRepeat(false),
    });
  } else {
    gsap.to(".mask", {
      height: "5px",
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => setRepeat(true),
    });
    gsap.to(".line", {
      top: "2px",
      duration: 3,
      ease: "power2.inOut",
      onComplete: () => setRepeat(true),
    });
  }
}, [repeat]);


    return (
        <div className="w-full h-[400px] overflow-hidden mt-20 flex items-center justify-center relative">
            <div className="border-2 border-black/20 outline-1 outline-black outline-offset-2 rounded-full h-16 w-16 flex items-center justify-center relative">
                <Fingerprint size={46} />
                <div className="mask absolute w-[46px] h-[5px] flex items-start justify-center overflow-hidden top-[7px]">
                    <div className="line absolute top-1 w-18 h-px rounded-full shadow shadow-white  bg-white z-10"></div>
                    <div className="  w-[46px] h-[46px]">
                        <Fingerprint className="absolute text-black/50 size-[46px] top-0" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Background;
