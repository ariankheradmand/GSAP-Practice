"use client";

import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import React from "react";

function BackGroundPath() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".dots").forEach((dot, i) => {
      gsap.to(dot, {
        backgroundColor: "#51a2ff",
        scrollTrigger: {
          trigger: ".scroll-container",
          start: () => `${i * 25}% top`, // 0%, 25%, 50%, 75%
          end: () => `${(i + 1) * 25}% top`,
          toggleActions: "play none none reverse", // turn blue on enter, back to white on reverse
        },
      });
    });
    gsap.fromTo(
      ".vertical",
      {
        height: "-20%",
      },
      {
        stagger: 0.3,
        duration: 1,
        height: "100%",
        ease: "power1",
      }
    );
    gsap.fromTo(
      ".vertical-cover",
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".horizontal-cover",
      { width: "0%" },
      {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".horizontal",
      {
        width: "-20%",
      },
      {
        stagger: 0.3,
        duration: 1,
        width: "100%",
        ease: "power1",
      }
    );
    gsap.fromTo(
      ".dots",
      {
        scale: 0,
      },
      {
        stagger: 0.3,
        duration: 1.5,
        scale: 3,
      }
    );
  }, []);

  return (
  <div className="fixed w-full h-screen top-0 z-20 scroll-container">
      
        <div className="vertical bg-gray-400/30 w-2 absolute left-[10%]"></div>
        <div className="vertical bg-gray-400/30 w-2 absolute right-[10%]"></div>
        <div className="horizontal h-2 bg-gray-400/30 absolute top-[10%]"></div>
        <div className="horizontal h-2 bg-gray-400/30 absolute bottom-[10%]"></div>

        <div className="dots w-2 h-2 scale-300 z-10 bg-white rounded-full left-[10%] top-[10%] absolute"></div>
        <div className="dots w-2 h-2 scale-300 z-10 bg-white rounded-full right-[10%] top-[10%] absolute"></div>
        <div className="dots w-2 h-2 scale-300 z-10 bg-white rounded-full right-[10%] bottom-[10%] absolute"></div>
        <div className="dots w-2 h-2 scale-300 z-10 bg-white rounded-full left-[10%] bottom-[10%] absolute"></div>

        <div className="vertical-cover rounded-full bg-blue-400 w-2 absolute left-[10%] "></div>
        <div className="vertical-cover rounded-full bg-blue-400 w-2 absolute right-[10%] "></div>
        <div className="horizontal-cover h-2 rounded-full bg-blue-400 absolute top-[10%] "></div>
        <div className="horizontal-cover h-2 rounded-full bg-blue-400 absolute bottom-[10%] "></div>
      </div>
  );
}

export default BackGroundPath;
