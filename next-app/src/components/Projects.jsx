"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CyberGuard-AI",
    summary: "Real-Time Edge AI Scam Detection",
    bullets: [
      "National Finalist (Top 50), DoT 5G Innovation Hackathon & awarded ₹1,00,000 seed funding.",
      "Engineered an offline Android inference pipeline using Kotlin Coroutines, JNI, and ONNX Runtime.",
      "Processed 48K audio samples every 3s at ~17ms inference latency within a strict 145MB memory budget.",
      "Developed a lightweight Go telemetry backend for risk score and metadata synchronization."
    ],
    tech: ["Kotlin", "Go", "ONNX", "Android", "JNI"],
    github: "https://github.com/Dilipsahu01/CyberGuard_AI_Application"
  },
  {
    title: "TourAI",
    summary: "AI Travel & Financial Planning Platform",
    bullets: [
      "Winner, Arthkriti AI Finance Hackathon 2026.",
      "Built a 15-year economic dataset and trained forecasting models achieving below 4% MAPE.",
      "Architected an asynchronous FastAPI backend integrating ML inference (Prophet, Random Forest) and RAG via Claude API.",
      "Deployed full container orchestration stack with MySQL, FastAPI, and React frontend."
    ],
    tech: ["FastAPI", "React", "Docker", "Claude API", "Prophet"],
    github: "https://github.com/Dilipsahu01/tourai_project"
  },
  {
    title: "NIT Mizoram Bus Tracker",
    summary: "Live Campus Transit & Telemetry Platform",
    bullets: [
      "Led end-to-end vehicle tracking platform using ESP32, HTTPS telemetry, and Flask processing 36K+ packets/day.",
      "Engineered C++ embedded GPS telemetry with compact binary payloads and 10-packet circular buffer.",
      "Implemented secure API-key authentication, resilient GSM/Wi-Fi failover, and 1-second GPS updates."
    ],
    tech: ["ESP32", "C++", "Flask", "PostgreSQL", "SIM800L"],
    github: "https://github.com/Dilipsahu01/nitmz-bus-tracker"
  }
];

const highlightText = (text) => {
  const regex = /((?:\d+[,.\d]*[+%KM]?(?:ms|s|hours\/event)?)|FastAPI|React|PostgreSQL|Python|Google Cloud|Apache Kafka|H2 Database|GCP|RAG|SQLAlchemy|SHA-256|Saga orchestration|Outbox Pattern|Circuit Breakers|Bulkheads|FMEA|MT940 SWIFT|ISO 20022 XML|Kotlin|JNI|ONNX|Go|Docker|Claude API|Prophet|Random Forest|ESP32|HTTPS|Flask|C\+\+|SIM800L|Web Workers|PDF\.js|Next\.js|Django|MySQL|ChromaDB|Selenium|JWT|Pandas|SciPy|scikit-learn|Java|MNIST|Swing|MVC|AES|DES|RSA)/g;
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (part && part.match(regex)) {
      return <span key={i} className="font-mono tracking-tight" style={{ color: "#D6C5B3", fontWeight: 700 }}>{part}</span>;
    }
    return part;
  });
};

export default function Projects() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;
    
    // Calculate the exact amount to scroll horizontally
    const getScrollAmount = () => -(slider.scrollWidth - window.innerWidth);

    const tween = gsap.to(slider, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${slider.scrollWidth - window.innerWidth}`, 
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true, 
      },
    });

    // Force a ScrollTrigger refresh after a tiny delay to ensure DOM is fully painted
    // This fixes Next.js HMR bugs where the old scrollWidth from 9 projects was cached
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="h-screen w-full flex items-center bg-surface overflow-hidden relative"
    >
      <div className="absolute top-10 left-10 md:left-20 z-10 mix-blend-difference text-white">
        <h2 className="text-sage text-sm md:text-lg font-mono uppercase tracking-widest">
          (02) Selected Works
        </h2>
      </div>

      <div 
        ref={sliderRef}
        className="flex gap-10 px-[10vw] md:px-[20vw] h-[75vh] w-[max-content] items-center"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="group relative w-[85vw] md:w-[60vw] h-full max-h-[600px] flex flex-col p-8 md:p-12 overflow-hidden bg-base border border-ink/10 transition-all duration-500 hover:border-[#7A8B76]/50 flex-shrink-0"
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Typography Watermark Background */}
            <div className="absolute top-0 right-4 select-none pointer-events-none opacity-5 group-hover:opacity-10 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 ease-out">
              <span className="text-[10rem] md:text-[14rem] font-display leading-none text-white">
                0{index + 1}
              </span>
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl md:text-5xl font-display text-white group-hover:tracking-wide transition-all duration-500">
                    {project.title}
                  </h3>
                  {project.github && (
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-sage"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={28} strokeWidth={1.5} />
                    </motion.a>
                  )}
                </div>
                <p className="font-mono text-sm md:text-base uppercase tracking-wide mb-8" style={{ color: "#7A8B76" }}>
                  {project.summary}
                </p>
                
                <ul className="flex flex-col gap-4 mb-8">
                  {project.bullets.map((bullet, i) => (
                    <li 
                      key={i} 
                      className="text-base md:text-lg lg:text-xl pl-6 relative leading-relaxed font-medium"
                      style={{ color: "white", opacity: 0.95 }}
                    >
                      <span className="absolute left-0 top-2.5 md:top-3 w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "#7A8B76" }}></span>
                      {highlightText(bullet)}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 bg-surface border border-ink/20 text-xs font-mono tracking-wide group-hover:border-[#7A8B76]/50 transition-colors duration-300"
                    style={{ color: "white" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* 4th Card: GitHub CTA */}
        <motion.div 
          className="group relative w-[85vw] md:w-[50vw] h-full max-h-[600px] flex flex-col p-8 md:p-10 overflow-hidden bg-base border border-ink/10 transition-all duration-500 hover:border-[#7A8B76]/50 flex-shrink-0 justify-center items-center text-center cursor-pointer"
          whileHover={{ scale: 1.02, y: -8 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          onClick={() => window.open("https://github.com/Dilipsahu01", "_blank")}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-surface to-base opacity-50 group-hover:opacity-80 transition-opacity"></div>
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <ExternalLink size={48} className="text-[#7A8B76] group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl md:text-5xl font-display text-white group-hover:tracking-wide transition-all duration-500">
              Explore More
            </h3>
            <p className="font-mono text-sm md:text-base text-white/70 max-w-sm leading-relaxed">
              Dive into 15+ more repositories, algorithms, and open-source contributions on my GitHub profile.
            </p>
            <motion.span 
              className="mt-4 px-6 py-3 border border-[#7A8B76] text-[#7A8B76] font-mono uppercase tracking-widest text-sm hover:bg-[#7A8B76] hover:text-base transition-colors duration-300"
            >
              View GitHub
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
