"use client"
import React, { useEffect } from "react";
import gsap from "gsap";

function Background() {
    // یه آرایه 1000 تایی درست می‌کنیم
    const dots = Array.from({ length: 550 });

    useEffect(() => {
        gsap.to(".dots", {
            backgroundColor: "white", 
            duration: .02,
            stagger: { each: 0.01, from: "random" }, 
            repeat: -1,
            yoyo: true,
        })
        gsap.to(".dots", {
            scale: 1.1 ,
            delay: 1,
            duration: .02,
            stagger: { each: 0.01, from: "random" }, 
            repeat: -1,
            yoyo: true,
        })
    }, [])
    return (
        <div className="w-full h-[600px]  overflow-hidden mt-20 flex items-center justify-center">
            <div className="grid grid-cols-15 gap-2">
                {dots.map((_, i) => (
                    <span
                        key={i}
                        className="w-4 h-4 bg-black rounded-full dots"
                    ></span>
                ))}
            </div>
        </div>

    );
}

export default Background;
