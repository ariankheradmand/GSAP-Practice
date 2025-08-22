"use client";

import { CheckCircle, X, AlertCircle, Info, BadgeInfo } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

export default function HotToast({ timer, content, type, onClose }) {
  const forms = [
    {
      name: "success",
      iconColor: "text-green-700",
      bar: "bg-green-300",
      bg: "from-green-400 to-green-500",
      icon: CheckCircle,
    },
    {
      name: "error",
      iconColor: "text-red-700",
      bar: "bg-red-300",
      bg: "from-red-400 to-red-500",
      icon: BadgeInfo,
    },
    {
      name: "warning",
      iconColor: "text-yellow-700",
      bar: "bg-yellow-300",
      bg: "from-yellow-400 to-yellow-500",
      icon: AlertCircle,
    },
    {
      name: "info",
      iconColor: "text-blue-700",
      bar: "bg-blue-300",
      bg: "from-blue-400 to-blue-500",
      icon: Info,
    },
  ];

  const current = forms.find((f) => f.name === type) || forms[0];
  const Icon = current.icon;

  const [active, setActive] = useState(true);

  // GSAP animations
  useGSAP(() => {
    if (active) {
      gsap.fromTo(
        ".main",
        { bottom: -90, opacity: 0 },
        { bottom: 28, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(
        ".box",
        { width: "10", height: "10", borderRadius: "100%", rotate: 0 },
        { width: "30", height: "30", borderRadius: "12px", rotate: 360 }
      );
      gsap.fromTo(
        ".box",
        { width: "20px", height: "20px" },
        { width: "320px", height: "80px", delay: 0.5 }
      );
      gsap.fromTo(
        ".icon",
        { left: 4, top: 4 },
        { left: 10, top: 10, delay: 0.7 }
      );
      gsap.fromTo(".items", { opacity: 0 }, { opacity: 1, delay: 1 });
      gsap.fromTo(
        ".shine",
        { left: "-120px", top: "-120px" },
        { left: "350px", top: "10px", delay: 2.3, duration: 0.9, yoyo: true }
      );

      if (timer) {
        gsap.fromTo(
          ".timer",
          { width: "0%" },
          { width: "100%", duration: 10, ease: "linear" }
        );
      }
    } else {
      gsap.to(".main", {
        bottom: 0,
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power1.inOut",
        onComplete: () => {
          if (onClose) onClose(); // notify parent when fully hidden
        },
      });
    }
  }, [active]);

  // Auto-close if timer is enabled
  useEffect(() => {
    if (timer) {
      const t = setTimeout(() => setActive(false), 10000);
      return () => clearTimeout(t);
    }
  }, [timer]);

  return (
    <div className="main w-full h-auto fixed bottom-[-90px] flex items-center justify-center z-50">
      <div className="opacity-0 pointer-events-none absolute bg-green-400 bg-red-400 bg-yellow-400 bg-blue-400">
        {/* force Tailwind to generate colors */}
      </div>

      <div
        className={`bg-gradient-to-r ${current.bg} flex items-start gap-3 p-4 overflow-hidden relative box`}
      >
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5 w-6">
          <Icon className={`w-6 h-6 icon ${current.iconColor} absolute`} />
        </div>

        {/* Texts */}
        <div className="flex flex-col text-sm text-white pr-6 items">
          <span className="font-semibold text-base capitalize">
            {current.name}
          </span>
          <span className="text-gray-100/90 text-xs leading-snug">
            {content}
          </span>
        </div>

        {/* Close button */}
        <button
          onClick={() => setActive(false)}
          className="absolute top-2 right-2 text-white/70 hover:text-white hover:scale-110 transition-transform duration-150 items"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Shine effect */}
        <div className="shine absolute -top-20 left-[-100px] h-64 w-24 rotate-45 bg-gradient-to-r from-white/45 to-white/20" />

        {/* Timer bar */}
        {timer && (
          <span className="w-full h-1 absolute bottom-0 left-0 flex items-center justify-start items">
            <span
              className={`${current.bar} h-1 timer rounded-r bg-white/70`}
            />
          </span>
        )}
      </div>
    </div>
  );
}
