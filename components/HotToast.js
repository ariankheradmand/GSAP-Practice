"use client";

import { CheckCircle, X, AlertCircle, Info, BadgeInfo } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

export default function HotToast({ timer, content, type }) {
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
  const Test = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-info-icon lucide-badge-info"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>`;
  const current = forms.find((f) => f.name === type) || forms[0];
  const Icon = current.icon;

  const [active, setActive] = useState(true);

  useGSAP(() => {
    if (active) {
      gsap.fromTo(
        ".main",
        { bottom: -90, opacity: 0 },
        { bottom: 28, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
     

      gsap.fromTo(
        ".shine",
        { left: "-120px", top: "-120px" },
        { left: "350px", top: "10px", delay: 0.3, duration: 0.9, yoyo: true }
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
      });
    }
  }, [active]);

  if (timer) {
    useEffect(() => {
      const t = setTimeout(() => setActive(false), 10000);
      return () => clearTimeout(t);
    }, []);
  }

  return (
    <div className="main w-full h-auto fixed bottom-[-90px] flex items-center justify-center z-50">
      {/* Force Tailwind to load colors */}
      <div className="opacity-0 pointer-events-none absolute bg-green-400 bg-red-400 bg-yellow-400 bg-blue-400">
        Colors Loader for Tailwind
      </div>

      <div
        className={`bg-gradient-to-r ${current.bg} w-80 rounded-2xl shadow-xl flex items-start gap-3 p-4 overflow-hidden relative transition-all box`}
      >
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          <Icon className={`w-6 h-6 ${current.iconColor}`} />
        </div>

        {/* Texts */}
        <div className="flex flex-col text-sm text-white pr-6">
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
          className="absolute top-2 right-2 text-white/70 hover:text-white hover:scale-110 transition-transform duration-150"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Shining effect */}
        <div className="shine absolute -top-20 left-[-100px] h-64 w-24 rotate-45 bg-gradient-to-r from-white/45 to-white/20" />

        {/* Timer bar */}
        {timer && (
          <span className="w-full h-1 absolute bottom-0 left-0 flex items-center justify-start">
            <span
              className={`${current.bar} h-1 timer rounded-r bg-white/70`}
            />
          </span>
        )}
      </div>
    </div>
  );
}
