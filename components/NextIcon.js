"use client"

import React, { useEffect, useState } from 'react'
import gsap from "gsap";

function NextIcon() {
  const [center, setCenter] = useState(1);
  const [plus, setPlus] = useState(false);
  const [minus, setMinus] = useState(false);

  // Base size configuration - change these values to scale everything
  const BASE_SIZE = 12; // Base unit in pixels
  const SIZE_MULTIPLIER = 1; // Overall scale multiplier

  // Calculated dimensions
  const dimensions = {
    center: {
      width: BASE_SIZE * 9 * SIZE_MULTIPLIER, // 144px at base
      height: BASE_SIZE * 10.5 * SIZE_MULTIPLIER, // 168px at base
      z: 10
    },
    side: {
      width: BASE_SIZE * 8 * SIZE_MULTIPLIER, // 128px at base
      height: BASE_SIZE * 9.5 * SIZE_MULTIPLIER, // 152px at base
      z: 5
    },
    back: {
      width: BASE_SIZE * 8 * SIZE_MULTIPLIER, // 128px at base
      height: BASE_SIZE * 9.5 * SIZE_MULTIPLIER, // 152px at base
      z: 0
    },
    positions: {
      center: 0,
      right: BASE_SIZE * 9 * SIZE_MULTIPLIER, // 144px at base
      left: -(BASE_SIZE * 9 * SIZE_MULTIPLIER) // -144px at base
    }
  };

  // Animation configurations for each center state
  const animationConfigs = {
    1: {
      item1: { ...dimensions.center, translateX: dimensions.positions.center },
      item2: { ...dimensions.side, translateX: dimensions.positions.right },
      item3: { ...dimensions.back, translateX: dimensions.positions.left }
    },
    2: {
      item1: { ...dimensions.back, translateX: dimensions.positions.left },
      item2: { ...dimensions.center, translateX: dimensions.positions.center },
      item3: { ...dimensions.side, translateX: dimensions.positions.right }
    },
    3: {
      item1: { ...dimensions.side, translateX: dimensions.positions.right },
      item2: { ...dimensions.back, translateX: dimensions.positions.left },
      item3: { ...dimensions.center, translateX: dimensions.positions.center }
    }
  };

  const animateItems = (config, isPlus = true) => {
    const onCompleteCallback = isPlus ? () => setPlus(false) : () => setMinus(false);

    gsap.to(".item-1", {
      width: `${config.item1.width}px`,
      height: `${config.item1.height}px`,
      z: config.item1.z,
      translateX: `${config.item1.translateX}px`,
      onComplete: onCompleteCallback
    });

    gsap.to(".item-2", {
      width: `${config.item2.width}px`,
      height: `${config.item2.height}px`,
      z: config.item2.z,
      translateX: `${config.item2.translateX}px`,
      onComplete: onCompleteCallback
    });

    gsap.to(".item-3", {
      width: `${config.item3.width}px`,
      height: `${config.item3.height}px`,
      z: config.item3.z,
      translateX: `${config.item3.translateX}px`,
      onComplete: onCompleteCallback
    });
  };

  useEffect(() => {
    if (plus && animationConfigs[center]) {
      animateItems(animationConfigs[center], true);
    }
    
    if (minus && animationConfigs[center]) {
      animateItems(animationConfigs[center], false);
    }
  }, [center, plus, minus]);

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-9'>
        <h1 className=' border-b-2 border-black text-2xl mb-20'> Loding Animations </h1>
      <div className='w-full h-full flex items-center justify-center gap-5'>
        <div 
          className='item-3 absolute bg-white rounded-lg text-3xl text-black'
          style={{
            width: `${BASE_SIZE * 8 * SIZE_MULTIPLIER}px`,
            height: `${BASE_SIZE * 9.5 * SIZE_MULTIPLIER}px`,
            transform: `translateX(${BASE_SIZE * 9 * SIZE_MULTIPLIER}px)`
          }}
        > 3 </div>
        <div 
          className='item-2 absolute bg-black rounded-lg text-3xl text-white'
          style={{
            width: `${BASE_SIZE * 9 * SIZE_MULTIPLIER}px`,
            height: `${BASE_SIZE * 10.5 * SIZE_MULTIPLIER}px`
          }}
        > 2 </div>
        <div 
          className='item-1 absolute bg-red-300 rounded-lg text-3xl text-teal-400'
          style={{
            width: `${BASE_SIZE * 8 * SIZE_MULTIPLIER}px`,
            height: `${BASE_SIZE * 9.5 * SIZE_MULTIPLIER}px`,
            transform: `translateX(${-(BASE_SIZE * 9 * SIZE_MULTIPLIER)}px)`
          }}
        > 1 </div>
      </div>

      <div className='w-full h-full flex items-center justify-center mt-36 gap-4'>
        <button 
          className='border border-black rounded-lg px-4 py-2 cursor-pointer' 
          onClick={() => {
            if (center === 3) {
              setCenter(1)
            } else {
              setCenter(center + 1)
            }
            setPlus(true)
          }}
        >
          Next
        </button>

        <button 
          className='border border-black rounded-lg px-4 py-2 cursor-pointer' 
          onClick={() => {
            if (center === 1) {
              setCenter(3)
            } else {
              setCenter(center - 1)
            }
            setMinus(true)
          }}
        >
          Prev
        </button>
      </div>
    </div>
  )
}

export default NextIcon