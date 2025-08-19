"use client"
import gsap from 'gsap'
import React, { useEffect } from 'react'

function Loading() {
    useEffect(() => {
        gsap.fromTo(".circle", {
            border: "none",
            outline: "1px solid inherit",
            outlineOffset: "-25px",
        }, {
            border: "1px solid white",
            outline: "1px solid white",
            outlineOffset: "5px",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "elastic"
        })
        gsap.fromTo(".circle2", {
            width: 3,
            height: 3,
            scale: 1
        },
            {
                width: 28,
                height: 28,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "elastic"
            })
        gsap.fromTo(".circle3", {
            width: 0,
            height: 0,
            scale: 1,
            outline: "1px solid inherit",
        },
            {
                width: 15,
                height: 15,
                duration: 1.5,
                yoyo: true,
                repeat: -1,
                ease: "elastic"
            })

    }, [])

    return (
        <div className='w-full flex flex-col items-center justify-center gap-6 mt-32'>
            <div>
                <div className='w-12 h-12 rounded-full bg-black/55 circle flex items-center justify-center'>
                    <div className=' bg-white rounded-full circle2 flex items-center justify-center'>
                        <div className='bg-black rounded-full circle3'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading