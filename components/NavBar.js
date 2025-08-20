"use client"

import React, { useState, useEffect, useRef } from "react";
import "../app/globals.css";
import { AlignRight, Info, Mail, LogIn, UserPlus } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

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
          ease: "power3.in",
        });
      } else if (window.scrollY <= 50 && scrolled) {
        setScrolled(false);
        gsap.to(barRef.current, {
          top: 0,
          height: 62,
          width: "100%",
          borderRadius: "0 0 0.75rem 0.75rem",
          ease: "power3.out",
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
        { opacity: 1, y: 0, borderBottom: "1px solid white", stagger: 0.2, duration: 0.5, ease: "power1.inOut" },
      )
      gsap.fromTo(
        ".contanier",
        { color : "white" },
        { color: "black", delay:0.2 , stagger: 0.2 , ease: "power1.inOut" },
      )
      gsap.to(
        ".contanier",
        { borderBottom: "1px solid black" , delay : 2 , stagger: 0.2 , ease: "power1.inOut" },
      )
    } else {
      gsap.fromTo(
        ".contanier",
        { opacity: 1, y: 0 },
        { opacity: 0, y: 20, duration: 0.5 }
      )
    }
  }, [openHam])

  useEffect(() => {
    if (openHam) {
      gsap.fromTo(
        ".icon",
        { opacity: 0 , color: "white" },
        { opacity: 1 , color: "black" ,delay: 0.5, stagger: 0.2 }
      )
    }
  }, [openHam])

  useEffect(() => {
    if (openHam) {
      gsap.fromTo(menuRef.current,
        { y: -20, opacity: 0, scaleX: 0, width: "60%", width: "90%", transformOrigin: "center" },
        { y: 0, top: "80", opacity: 1, height: "80%", scaleX: 1, width: "91.68%", ease: "power3.out", display: "block" }

      );
    } else {
      gsap.to(menuRef.current, {
        y: -20,
        opacity: 0,
        scaleX: 0,
        ease: "power3.in",
        onComplete: () => gsap.set(menuRef.current, { display: "none" }),
      });
    }
  }, [openHam])

  useEffect(() => {
       if (openHam) {
         gsap.fromTo(".ham-icon1" , {
          width: "18px", 
          backgroundColor : "white"
        } ,{
          width: "20px", 
          rotate: 25, 
          backgroundColor : "black"
        } )
        gsap.fromTo(".ham-icon2" , {
          width: "8px", 
          backgroundColor : "white"
        } ,{
          width: "20px", 
          delay: .3 , 
          rotate: 25, 
          backgroundColor : "black"
        } )
        gsap.fromTo(".ham-icon3" , {
          width: "12px", 
          backgroundColor : "white"
        } ,{
          width: "20px", 
          delay: 0.6 , 
          rotate: 25, 
          backgroundColor : "black"
        } )
       } else {
        gsap.to(".ham-icon1" , {
          width: "18px", 
          rotate: 0, 
          backgroundColor : "white"
        })
        gsap.to(".ham-icon2" , {
          width: "8px", 
          rotate: 0, 
          delay : 0.2 ,
          backgroundColor : "white"
        })
        gsap.to(".ham-icon3" , {
          width: "12px", 
          rotate: 0, 
          delay : 0.4 ,
          backgroundColor : "white"
        })
       }
       
  }, [openHam])

  useEffect(() => {
    if (scrolled) {
      gsap.to(menuRef.current, { width: "91.68%", ease: "power3.in" });
    } else {
      gsap.to(menuRef.current, { width: "100%", ease: "power3.out" });
    }
  }, [scrolled])

  useEffect(() => {
    gsap.to(".text" , {
         opacity: 1,
         ease: "power1.in"
    })
  }, [])

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center relative z-20">
      <div
        ref={barRef}
        className="h-[62px] w-full shadow-xl bg-white/10 backdrop-blur-md top-0 rounded-b-xl fixed py-6 flex items-center justify-center"
      >
        <div className="flex justify-start w-6/12 px-4m">
          <span className="text opacity-0">Practice</span>
        </div>
        <div className="flex justify-end w-6/12 px-4m">
          <div onClick={() => setOpenHam(!openHam)} className="w-5 h-4 flex flex-col justify-between items-center">
            <div className=" bg-white h-[2px] ham-icon1 rounded-full"></div>
            <div className=" bg-white h-[2px] ham-icon2 rounded-full"></div>
            <div className=" bg-white h-[2px] ham-icon3 rounded-full"></div>
          </div>

        </div>
      </div>

      <div
        ref={menuRef}
        className={`bg-white/10 backdrop-blur-md rounded-xl fixed shadow-xl ${openHam ? "" : "hidden"} `}

      >
        <div className="h-full w-full flex flex-col items-center justify-center text-2xl gap-6">
          <Link href="/Navbars" className="py-2 contanier opacity-0 flex items-center gap-2">
            <Info  className="icon" size={22} />  Other Designs
          </Link>
          <span className="py-2 contanier opacity-0 flex items-center gap-2">
            <Mail className="icon" size={22} /> Contact Us
          </span>
          <span className="py-2 contanier opacity-0 flex items-center gap-2">
            <LogIn className="icon" size={22} /> Login
          </span>
          <span className="py-2 contanier opacity-0 flex items-center gap-2">
            <UserPlus className="icon" size={22} /> SignUp
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
