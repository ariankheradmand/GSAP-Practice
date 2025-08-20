"use client"

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Codesandbox, Logs } from 'lucide-react'

function page() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(".main", {
      rotate: 0,
      backgroundColor: "#2c2739",
      boxShadow: "",
    }, {
      backgroundColor: " #bebdc1 ",
      rotate: 360,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
      duration: 2,
      borderRadius: "16px",
    })

    gsap.fromTo(".main", {
      width: 82,
      height: 82,
      borderRadius: "100%",
    }, {
      width: "80%",
      height: 82,
      delay: 2,
      ease: "circle",
      borderRadius: "16px",
    })

    gsap.to(".menu", { delay: 2, opacity: 1 })

    gsap.to(".logo", {
      left: 20,
      delay: 2.1,
    })

    gsap.fromTo(".buttons", {
      translateY: -25,
      boxShadow: ""
    }, {
      delay: 2.5,
      translateY: 0,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.4)",
      stagger: 0.2,
      opacity: "100%",
    })

    gsap.fromTo(".big-circle", {
      width: 180,
      height: 180,
      opacity: 0,
      left: 0
    }, {
      opacity: 1,
      duration: 3,
      left: "150px",
      delay: 2.5,
    })

    gsap.to(".big-circle", {
      left: "45%",
      width: 90,
      height: 90,
      duration: 5,
      delay: 6,
      ease: "bounce.Out",
      yoyo: true,
      repeat: -1
    })
  }, [])


  useEffect(() => {
    if (hoveredButton) {
      const effectElement = `.effect-${hoveredButton}`;

      // Shine effect animation
      gsap.fromTo(effectElement, {
        opacity: 0,
        left: "-100%",
        top: -15
      }, {
        opacity: 0.8,
        left: "100%",
        top: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          setHoveredButton(null);
          gsap.set(effectElement, { opacity: 0, left: "-100%" });
        }
      });
    }
  }, [hoveredButton]);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(".mobile",
        {
          display: "block",
          opacity: 0,
          width: "80%",
          height: 0,

        },
        {
          width: "80%",
          height: 480,
          opacity: 1
        })
    } else {
      gsap.fromTo(".mobile", {
        opacity: 1,
        width: "80%",
        height: 480,
      },
        {
          width: "80%",
          height: 0,
          opacity: 0
        })
    }
  }, [menuOpen])
  
  useEffect(() => {
       if (menuOpen) {
         gsap.fromTo(".ham-icon1" , {
          width: "22px", 
          backgroundColor : "white"
        } ,{
          width: "24px", 
          rotate: 30, 
          backgroundColor : "#2c2739"
        } )
        gsap.fromTo(".ham-icon2" , {
          width: "15px", 
          backgroundColor : "white"
        } ,{
          width: "24px", 
          delay: .3 , 
          rotate: 30, 
          backgroundColor : "#2c2739"
        } )
        gsap.fromTo(".ham-icon3" , {
          width: "19px", 
          backgroundColor : "white"
        } ,{
          width: "24px", 
          delay: 0.6 , 
          rotate: 30, 
          backgroundColor : "#2c2739"
        } )
       } else {
        gsap.to(".ham-icon1" , {
          width: "24px", 
          rotate: 0, 
          backgroundColor : "white"
        })
        gsap.to(".ham-icon2" , {
          width: "15px", 
          rotate: 0, 
          delay : 0.2 ,
          backgroundColor : "#2c2739"
        })
        gsap.to(".ham-icon3" , {
          width: "19px", 
          rotate: 0, 
          delay : 0.4,
          backgroundColor : "white"
        })
       }
       
  }, [menuOpen])

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='main absolute w-20 h-20 top-4 flex items-center justify-center overflow-hidden'>
        <div className='rounded-full bg-[#2c2739] big-circle absolute'></div>
        <div className='logo absolute'><Codesandbox size={36} /></div>
        <div className='w-3/6'></div>
        {/* Mobile View */}
        <div className='w-3/6 flex items-center justify-end mr-4 lg:hidden'>
          <div onClick={() => setMenuOpen(!menuOpen)} className="w-5 h-4 flex flex-col justify-between items-center">
            <div className=" bg-[#2c2739]  h-[3px] ham-icon1 rounded-full"></div>
            <div className=" bg-[#2c2739]  h-[3px] ham-icon2 rounded-full"></div>
            <div className=" bg-[#2c2739]  h-[3px] ham-icon3 rounded-full"></div>
          </div>
        </div>
        {/* Desktop View */}
        <div className='w-3/6  items-center justify-end gap-4 mr-4 hidden lg:flex'>

          {/* About Me Button */}
          <button
            onMouseEnter={() => setHoveredButton('about')}
            className='buttons button-about relative opacity-0 bg-[#2c2739] text-white rounded-md min-w-24 px-3 py-2 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25'
          >
            <span className='effect-about opacity-0 absolute bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 w-6 h-20 -skew-x-12' />
            About Me
          </button>

          {/* Contact Button */}
          <button
            onMouseEnter={() => setHoveredButton('contact')}
            className='buttons button-contact relative opacity-0 bg-[#2c2739] text-white rounded-md px-3 py-2 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25'
          >
            <span className='effect-contact opacity-0 absolute bg-gradient-to-r from-transparent via-blue-300/50 to-transparent rotate-12 w-6 h-20 -skew-x-12' />
            Contact
          </button>

          {/* Login Button */}
          <button
            onMouseEnter={() => setHoveredButton('login')}
            className='buttons button-login relative opacity-0 bg-[#2c2739] text-white rounded-md px-3 py-2 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25'
          >
            <span className='effect-login opacity-0 absolute bg-gradient-to-r from-transparent via-gray-300/50 to-transparent rotate-12 w-6 h-20 -skew-x-12' />
            Login
          </button>

          {/* Signup Button */}
          <button
            onMouseEnter={() => setHoveredButton('signup')}
            className='buttons button-signup relative opacity-0 bg-[#00a986] text-white rounded-md px-3 py-2 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25'
          >
            <span className='effect-signup opacity-0 absolute bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent rotate-12 w-6 h-20 -skew-x-12' />
            Signup
          </button>

        </div>
      </div>
      {/* Mobile View */}
      <div className=' opacity-0 hidden absolute top-28 rounded-md bg-[#bebdc1] mobile'>


      </div>
    </div>
  )
}

export default page