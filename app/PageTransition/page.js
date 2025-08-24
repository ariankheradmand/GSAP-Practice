"use client";

import Intro from "@/components/Intro";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

function Page() {
  const [login, setLogin] = useState(true);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".liness", {
      y: "100%",
      stagger: { amount: gsap.utils.random(0.2, 0.4), from: "random" },
      ease: "power1",
    });
  }, [login]);

  return (
    <div className="w-full h-screen flex items-center justify-center font-Anton">
      <Intro />
      {login ? (
        <div className="w-[360px] h-[335px] flex items-center justify-center relative overflow-hidden rounded-sm">
          <div
            key={login}
            className=" absolute left-0 top-0 w-full h-full flex items-center z-20 pointer-events-none "
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="liness h-full w-[10%] border-t border-black bg-white  "
              />
            ))}
          </div>
          <form className=" bg-white px-5 py-3  flex flex-col items-start justify-between gap-7 w-[360px] h-[335px]">
            <h3 className="px-1 text-4xl border-b-4 ">WELCOME</h3>
            <div className="relative w-full">
              <input
                className="w-12/12 h-10 px-1 text-xl border-b-2"
                placeholder="EMAIL"
              />
              <div ref={emailRef} className="absolute right-0">
                EMAIL
              </div>
            </div>
            <div className="relative w-full">
              <input
                className="w-12/12 h-10 px-1 text-xl border-b-2"
                placeholder="PASSWORD"
              />
              <div ref={passwordRef} className="absolute right-0">
                PASSWORD
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-7">
              <button
                onClick={() => {
                  setLogin(false);
                }}
                className="text-xl bg-white text-black cursor-pointer px-3 py-1 rounded-sm hover:scale-105 transition-all"
              >
                SIGNUP ?
              </button>
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                }}
                className="text-xl bg-black text-white px-3 py-1 cursor-pointer rounded-sm hover:scale-105 transition-all "
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-[360px] h-[335px] flex items-center justify-center relative overflow-hidden rounded-sm">
          <div
            key={login}
            className=" absolute left-0 top-0 w-full h-full flex items-center z-20 pointer-events-none "
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="liness h-full w-[10%] border-t border-black bg-white  "
              />
            ))}
          </div>
          <form className=" bg-white px-5 py-3 flex flex-col items-start justify-center gap-7 w-[360px] h-[335px]">
            <h3 className="px-1 text-4xl border-b-4 ">WELCOME BACK</h3>
            <div className="relative w-full">
              <input
                className="w-12/12 h-10 px-1 text-xl border-b-2"
                placeholder="EMAIL"
              />
              <div ref={emailRef} className="absolute right-0">
                EMAIL
              </div>
            </div>
            <div className="relative w-full">
              <input
                className="w-12/12 h-10 px-1 text-xl border-b-2"
                placeholder="USERNAME"
              />
              <div ref={usernameRef} className="absolute right-0">
                USERNAME
              </div>
            </div>
            <div className="relative w-full">
              <input
                type="password"
                className="w-12/12 h-10 px-1 text-xl border-b-2"
                placeholder="PASSWORD"
              />
              <div ref={passwordRef} className="absolute right-0">
                PASSWORD
              </div>
            </div>
            <div className="flex items-center justify-center w-full gap-7">
              <button className="text-xl bg-black text-white px-3 py-1 cursor-pointer rounded-sm hover:scale-105 transition-all">
                SIGNUP
              </button>
              <button
                onClick={() => {
                  setLogin(true);
                }}
                className="text-xl bg-white text-black px-3 py-1 cursor-pointer rounded-sm hover:scale-105 transition-all"
              >
                LOGIN ?
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Page;
