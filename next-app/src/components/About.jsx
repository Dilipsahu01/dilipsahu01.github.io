"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const words = textRef.current.querySelectorAll(".word");
    
    gsap.fromTo(
      words,
      { opacity: 0.1, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const paragraph = "Software Engineer specializing in scalable distributed systems, edge AI, and high-throughput backend architecture. Experienced in designing robust financial reconciliation engines and deploying offline LLM inference pipelines. Proven track record of optimizing system resilience and delivering impact-first technical solutions.";
  
  return (
    <section 
      ref={containerRef}
      className="min-h-[120vh] w-full flex items-center justify-center bg-base px-6 md:px-20 py-32 relative"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Photo Column */}
        <motion.div 
          className="lg:col-span-4 flex justify-center lg:justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full animated-gradient-border p-[3px]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-surface">
              <Image 
                src="/photos/dilip.jpeg"
                alt="Dilip Sahu"
                fill
                sizes="(max-width: 768px) 16rem, 20rem"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Text Column */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <h2 className="text-sage text-sm md:text-lg font-mono uppercase tracking-widest mb-8">
            (01) The Architect
          </h2>
          <p 
            ref={textRef} 
            className="text-fluid-p md:text-5xl font-medium leading-[1.3] text-ink mb-12"
          >
            {paragraph.split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-[0.25em]">
                {word}
              </span>
            ))}
          </p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex flex-col gap-1 border-l border-sage/30 pl-4">
              <span className="text-xs font-mono text-sage uppercase">Current</span>
              <span className="text-sm font-medium">SDE Intern @ Zetheta Algorithms</span>
            </div>
            <div className="flex flex-col gap-1 border-l border-sage/30 pl-4">
              <span className="text-xs font-mono text-sage uppercase">Education</span>
              <span className="text-sm font-medium">B.Tech CSE @ NIT Mizoram</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
