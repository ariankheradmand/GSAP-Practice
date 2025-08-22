"use client";

import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function page() {
  return (
    <div className=" flex flex-col items-center justify-center font-Rubik bg-two h-36 w-full fixed top-0">
      <div className="h-4/6 w-11/12"></div>
      <div className="h-px bg-one w-11/12"></div>
      <div className="h-2/6 w-11/12 flex items-center justify-end gap-12">
        <button className="cursor-pointer relative group flex items-center justify-center">
          <span className="w-0 group-hover:w-full h-px bg-one absolute -bottom-1 transition-all duration-300"></span>
          فناوری
        </button>
        <button className="cursor-pointer relative group flex items-center justify-center">
          <span className="w-0 group-hover:w-full h-px bg-one absolute -bottom-1 transition-all duration-300"></span>
          اخبار
        </button>
        <button className="cursor-pointer relative group flex items-center justify-center">
          <span className="w-0 group-hover:w-full h-px bg-one absolute -bottom-1 transition-all duration-300"></span>
          گجت ها
        </button>
        <button className="cursor-pointer relative group flex items-center justify-center">
          <span className="w-0 group-hover:w-full h-px bg-one absolute -bottom-1 transition-all duration-300"></span>
          راهنمای خرید
        </button>
      </div>
    </div>
  );
}

export default page;