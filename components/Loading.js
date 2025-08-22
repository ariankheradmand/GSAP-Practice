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
    useEffect(() => {
        gsap.fromTo(".firstCube", {
            left: 0,
        }, {
            left: 204,
            rotate: 360,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "circ"
        })
        gsap.fromTo(".secondCube", {
            left: 0,
        }, {
            left: 152,
            rotate: 360,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "circ"
        })
        gsap.fromTo(".thirdCube", {
            left: 0,
        }, {
            left: 100,
            rotate: 360,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "circ"
        })
        gsap.fromTo(".forthCube", {
            left: 0,
        }, {
            left: 48,
            rotate: 360,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: "circ"
        })
        gsap.fromTo(".innerCube" , {
            width: 12,
            height: 12,
        } , {
            duration: 2,
            yoyo: true,
            repeat: -1,
            width: 48,
            height: 48,
            ease: "sine"
        })
    }, [])

    return (
        <div className='w-full flex flex-col items-center justify-center gap-15 mt-32'>
            <h1 className=' border-b-2 border-black text-2xl'> Loading Animations </h1>
            <div>
                <div className='w-12 h-12 rounded-full bg-black/55 circle flex items-center justify-center'>
                    <div className=' bg-white rounded-full circle2 flex items-center justify-center'>
                        <div className='bg-black rounded-full circle3'></div>
                    </div>
                </div>
            </div>
            <div>
                <div className=' relative w-56 h-56'>
                    <div className='w-12 h-12 bg-black  absolute left-30 rounded-md firstCube border-2 border-white flex items-center justify-center'>
                        <div className='w-6 h-6 bg-white rounded-sm innerCube' ></div>
                    </div>
                    <div className='w-12 h-12 bg-white absolute left-30 rounded-md secondCube border-2 border-black  flex items-center justify-center'>
                        <div className='w-6 h-6 bg-black rounded-sm innerCube' ></div>
                    </div>
                    <div className='w-12 h-12 bg-black absolute left-30 rounded-md thirdCube border-2 border-white  flex items-center justify-center'>
                        <div className='w-6 h-6 bg-white rounded-sm innerCube' ></div>
                    </div>
                    <div className='w-12 h-12 bg-white absolute left-30 rounded-md forthCube border-2 border-black  flex items-center justify-center'>
                        <div className='w-6 h-6 bg-black rounded-sm innerCube' ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading