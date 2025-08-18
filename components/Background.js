"use client"
import React, { useEffect } from "react";
import gsap from "gsap";
import {
  Cpu,
  Server,
  Database,
  Code,
  Laptop,
  Cloud,
  Terminal,
  Wifi,
  HardDrive,
  Monitor
} from "lucide-react";

function Background() {
  const dots = Array.from({ length: 350 }); // 150 icons instead of 550 for performance

  // All icons in an array
  const icons = [
    Cpu,
    Server,
    Database,
    Code,
    Laptop,
    Cloud,
    Terminal,
    Wifi,
    HardDrive,
    Monitor,
  ];

  useEffect(() => {
    gsap.to(".dots", {
      color: "white",
      duration: 0.2,
      stagger: { each: 0.01, from: "random" },
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".dots", {
      scale: 1.2,
      delay: 1,
      duration: 0.2,
      stagger: { each: 0.01, from: "random" },
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden mt-5 flex items-center justify-center relative">
      <div className="grid grid-cols-[repeat(13,1fr)] gap-2 -z-20">
        {dots.map((_, i) => {
          const Icon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <Icon
              key={i}
              size={20}
              className="dots text-black -z-20"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Background;
