"use client";

import { CheckCircle, X, AlertCircle, Info } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

export default function HotToast() {
  const [active, setActive] = useState(true);

  useGSAP(() => {
    if (active) {
      gsap.fromTo(
        ".main",
        {
          bottom: -90,
          opacity: 0,
        },
        {
          bottom: 28,
          opacity: 1,
          duration: 0.5,
          ease: "power1",
        }
      );
      gsap.fromTo(".timer", {width: "2%"} ,{width: "100%" , duration: 11})
    } else {
      gsap.to(".main", {
        bottom: 0,
        opacity: 0,
        pointerEvents: "none",
      });
    }
  }, [active]);

  useEffect(() => {
    setTimeout(() => {
        setActive(false)
 
        clearTimeout()
    }, 10000);
  }, [])

  return (
    <div className="main w-full h-auto fixed bottom-7 flex items-center justify-center z-50">
      <div className=" bg-three w-72 rounded-xl shadow-lg flex items-start gap-3 p-4 overflow-hidden relative">
        <div className="flex-shrink-0">
          <CheckCircle className="w-6 h-6 text-green-500" />
        </div>

        <div className="flex flex-col text-sm text-white">
          <span className="font-semibold">Success</span>
          <span className="text-gray-300 text-xs ">
            Your changes have been saved successfully.
          </span>
        </div>

        <button
          onClick={() => {
            setActive(false);
          }}
          className="absolute top-2 right-2 text-one hover:text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
        <span className="w-full h-1 absolute bottom-0 left-0 flex items-center justify-start">
          <span className="bg-green-100 w-1 h-1 timer" />
        </span>
      </div>
    </div>
  );
}
