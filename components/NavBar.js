"use client"

import React, { useState, useEffect, useRef } from "react";
import "../app/globals.css";
import { AlignRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [openHam, setOpenHam] = useState(false);

  const barRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) {
        setScrolled(true);
        gsap.to(barRef.current, {
          top: 10,
          height: 62,
          width: "92%",
          borderRadius: "1rem",
          duration: 0.5,
          ease: "power3.out",
        });
      } else if (window.scrollY <= 50 && scrolled) {
        setScrolled(false);
        gsap.to(barRef.current, {
          top: 0,
          height: 62,
          width: "100%",
          borderRadius: "0 0 0.75rem 0.75rem",
          duration: 0.5,
          ease: "power3.inOut",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (openHam) {
      gsap.fromTo(
        ".contanier",
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5 , ease: "power1.inOut"} 
      )
    } else {
      gsap.fromTo(
        ".contanier",
        { opacity: 1, y: 0 }, 
        { opacity: 0, y: 20, duration: 0.5 } 
      )
    }
  }, [openHam])

  // animate menu open/close
  useEffect(() => {
    if (openHam) {
      gsap.fromTo(menuRef.current,
        { y: -20, opacity: 0, scaleX: 0, width: "60%", width: "90%", transformOrigin: "center" },
        { y: 0, top: "80", opacity: 1, height: "80%", scaleX: 1, duration: 0.4, width: "91.68%", ease: "power3.out", display: "block" }
      );
    } else {
      gsap.to(menuRef.current, {
        y: -20,
        opacity: 0,
        scaleX: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => gsap.set(menuRef.current, { display: "none" }),
      });
    }
    if (scrolled) {
      gsap.to(menuRef.current, { width: "91.63%", ease: "power3.out" });
    } else {
      gsap.to(menuRef.current, { width: "100%", ease: "power3.in" });
    }
  }, [openHam, scrolled])


  return (
    <div className="w-full h-auto flex flex-col items-center justify-center relative">
      <div
        ref={barRef}
        className="h-[62px] w-full bg-white/40 top-0 rounded-b-xl fixed py-6 flex items-center justify-center"
      >
        <div className="flex justify-start w-6/12 px-4m">
          <span>Welcome</span>
        </div>
        <div className="flex justify-end w-6/12 px-4m">
          <AlignRight onClick={() => setOpenHam(!openHam)} />

        </div>
      </div>

      <div
        ref={menuRef}
        className={`bg-white/40 rounded-xl fixed  ${openHam ? "" : "hidden"} `}

      >
        <div className="h-full w-full flex flex-col items-center justify-center text-2xl">
          <span className="py-7m contanier opacity-0">About</span>
          <span className="py-7m contanier opacity-0">Contact Us</span>
          <span className="py-7m contanier opacity-0">Login</span>
          <span className="py-7m contanier opacity-0">SignUp</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
