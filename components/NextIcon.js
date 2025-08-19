"use client"

import React, { useEffect, useState } from 'react'
import gsap from "gsap";

function NextIcon() {
    const [center, setCenter] = useState(1);
    const [plus, setPlus] = useState(false);
    const [minus, setMinus] = useState(false);

    useEffect(() => {
        if (plus) {
            if (center === 3) {
                gsap.to(".item-1", {
                    width: "128px",
                    height: "152px",
                    z: "5",
                    translateX: "144px",
                    onComplete: () => setPlus(false)
                })
                gsap.to(".item-2", {
                    width: "128px",
                    height: "152px",
                    z: "0",
                    translateX: "-144px",
                    onComplete: () => setPlus(false)
                })
                gsap.to(".item-3", {
                    width: "144px",
                    height: "168px",
                    z: "10",
                    translateX: "0px",
                    onComplete: () => setPlus(false)
                })
            } else if (center === 2) {
                gsap.to(".item-1", {
                    width: "128px",
                    height: "152px",
                    z: "0",
                    translateX: "-144px",
                    onComplete: () => setPlus(false)
                })
                gsap.to(".item-2", {
                    width: "144px",
                    height: "168px",
                    z: "10",
                    translateX: "0px",
                    onComplete: () => setPlus(false)
                })
                gsap.to(".item-3", {
                    width: "128px",
                    height: "152px",
                    z: "5",
                    translateX: "144px",
                    onComplete: () => setPlus(false)
                })
            } else if (center === 1) {
                gsap.to(".item-1", {
                    width: "144px",
                    height: "168px",
                    z: "10",
                    translateX: "0px",
                    onComplete: () => setPlus(false)
                })
                gsap.to(".item-2", {
                    width: "128px",
                    height: "152px",
                    z: "5",
                    translateX: "144px",
                    onComplete: () => setPlus(false)
                })
                gsap.to(".item-3", {
                    width: "128px",
                    height: "152px",
                    z: "0",
                    translateX: "-144px",
                    onComplete: () => setPlus(false)
                })
            }
        }

        if (minus) {
            if (center === 1) {
                gsap.to(".item-1", {
                    width: "144px",
                    height: "168px",
                    translateX: "0px",
                    onComplete: () => setMinus(false)
                })
                gsap.to(".item-2", {
                    width: "128px",
                    height: "152px",
                    translateX: "144px",
                    onComplete: () => setMinus(false)
                })
                gsap.to(".item-3", {
                    width: "128px",
                    height: "152px",
                    translateX: "-144px",
                    onComplete: () => setMinus(false)
                })
            } else if (center === 2) {
                gsap.to(".item-1", {
                    width: "128px",
                    height: "152px",
                    translateX: "-144px",
                    onComplete: () => setMinus(false)
                })
                gsap.to(".item-2", {
                    width: "144px",
                    height: "168px",
                    translateX: "0px",
                    onComplete: () => setMinus(false)
                })
                gsap.to(".item-3", {
                    width: "128px",
                    height: "152px",
                    translateX: "144px",
                    onComplete: () => setMinus(false)
                })
            } else if (center === 3) {
                gsap.to(".item-1", {
                    width: "128px",
                    height: "152px",
                    translateX: "144px",
                    onComplete: () => setMinus(false)
                })
                gsap.to(".item-2", {
                    width: "128px",
                    height: "152px",
                    translateX: "-144px",
                    onComplete: () => setMinus(false)
                })
                gsap.to(".item-3", {
                    width: "144px",
                    height: "168px",
                    translateX: "0px",
                    onComplete: () => setMinus(false)
                })
            }
        }
    }, [center, plus, minus])

    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-9'>
            <div className='w-full h-full flex items-center justify-center gap-5'>
                <div className='w-32 h-38 item-3 absolute translate-x-36 bg-black'>3</div>
                <div className='w-36 h-42 item-2 absolute bg-black'>2</div>
                <div className='w-32 h-38 item-1 absolute -translate-x-36 bg-black'>1</div>
            </div>

            <div className='w-full h-full flex items-center justify-center gap-9 mt-30'>
                <button onClick={() => {
                    if (center === 3) {
                        setCenter(1)
                    } else {
                        setCenter(center + 1)
                    }
                    setPlus(true)
                }}>Next</button>

                <button onClick={() => {
                    if (center === 1) {
                        setCenter(3)
                    } else {
                        setCenter(center - 1)
                    }
                    setMinus(true)
                }}>Prev</button>
            </div>
        </div>
    )
}

export default NextIcon
