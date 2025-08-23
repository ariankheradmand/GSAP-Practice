"use client";

import BackGroundPath from "@/components/BackGroundPath";
import BGPNavBar from "@/components/BGPNavBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function page() {
  useGSAP(() => {
    gsap.fromTo(
      ".BackGroundOpening",
      {
        scale: 0,
      },
      {
        scale: 1500,
        duration: 0.8,
        ease: "power1.in",
      }
    );
    gsap.fromTo(
      ".OpeningText",
      {
        opacity: 0,
        width: "0px",
      },
      {
        stagger: 0.5,
        opacity: 1,
        duration: 1,
        delay: 0.9,
        width: "100%",
      }
    );
  });

  return (
    <div
      suppressHydrationWarning={true}
      className="flex items-center justify-center mb-600 "
    >
      <BackGroundPath />
      <BGPNavBar />
      <div className="text-white h-screen w-full flex items-center justify-center fixed top-0 ">
        <div className="w-[80%] h-[80%] overflow-hidden relative flex items-center justify-center ">
          <div className="BackGroundOpening bg-gradient-to-br from-60% from-white to-white/20 absolute top-0 left-0  w-1 h-1 rounded-full"></div>
          <div className="w-full h-full py-8 px-8 ">
            <div className="text-black opacity-0 z-20 absolute text-6xl md:text-9xl mask-r-from-white  font-Anton OpeningText overflow-hidden">
              WELCOME
            </div>
            <div className="text-black/50 opacity-0 z-20 top-10 absolute text-6xl md:text-9xl mask-r-from-white  font-Anton OpeningText overflow-hidden">
              WELCOME
            </div>
            <div className="text-black opacity-0 z-20 absolute top-40 text-6xl md:text-9xl mask-r-from-white  font-Anton OpeningText overflow-hidden">
              To
            </div>
            <div className="text-black/50 opacity-0 z-20  top-42 absolute text-6xl md:text-9xl mask-r-from-white  font-Anton OpeningText overflow-hidden">
              To
            </div>
            <div className="text-black opacity-0 left-46 z-20 absolute top-40 text-6xl md:text-9xl mask-r-from-white  font-Anton OpeningText overflow-hidden">
              My
            </div>
            <div className="text-black/50 opacity-0 left-46 z-20  top-42 absolute text-6xl md:text-9xl mask-r-from-white  font-Anton OpeningText overflow-hidden">
              My
            </div>
            <div className="text-black opacity-0 z-20 absolute top-75 text-6xl md:text-9xl mask-r-from-white  font-Anton OpeningText overflow-hidden">
              World
            </div>
            <div className="text-black/50 opacity-0 z-20  top-77 absolute text-6xl md:text-9xl mask-r-from-white  font-Anton OpeningText overflow-hidden">
              World
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
