"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=80%",
        scrub: 1,
        pin: true,
      },
    });

    // Scale up the text massively so the viewer "falls through" it
    tl.to(textRef.current, {
      scale: 100,
      opacity: 0,
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-base"
    >
      {/* Background Gradient / Video placeholder behind mask */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-base to-sage opacity-20"></div>

      {/* The Text Mask */}
      <h1 
        ref={textRef}
        className="text-fluid-h1 font-black text-center mix-blend-difference tracking-tighter"
        style={{ transformOrigin: "50% 50%" }}
      >
        DILIP SAHU<br/>
        <span className="text-3xl md:text-5xl lg:text-7xl font-normal text-sage/80 italic tracking-wide block mt-2">SOFTWARE ENGINEER & EDGE SYSTEMS</span>
      </h1>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 mix-blend-difference">
        <span className="text-xs tracking-widest uppercase font-mono">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-ink/50 origin-top animate-pulse"></div>
      </div>
    </section>
  );
}
