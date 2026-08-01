"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C/C++", "Java", "Go", "Kotlin", "TypeScript", "SQL", "Bash"]
  },
  {
    title: "Backend & Systems",
    skills: ["FastAPI", "Flask", "Django", "REST APIs", "SQLAlchemy", "JWT", "Apache Kafka", "Event-Driven Systems"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "CockroachDB", "Redis", "ChromaDB", "Supabase", "H2 Database"]
  },
  {
    title: "AI & ML",
    skills: ["ONNX Runtime", "Prophet", "Whisper", "Sentence Transformers", "BM25", "Anthropic SDK", "Pandas", "Scikit-learn", "RAG"]
  },
  {
    title: "Edge AI & Hardware",
    skills: ["Model Quantization (1-bit, 4-bit, 8-bit)", "On-Device Inference", "ESP32", "JNI", "Verilog", "IoT Telemetry"]
  },
  {
    title: "Security & Crypto",
    skills: ["Post-Quantum Cryptography", "AES/DES/RSA", "SHA-256", "PKI", "Firmware Security"]
  }
];

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-20 bg-surface w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sage text-sm md:text-lg font-mono uppercase tracking-widest mb-16">
          Technical Arsenal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-display text-[#F2EFE9] mb-6 border-b border-[#F2EFE9]/10 pb-4">
                {category.title}
              </h3>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={item}
                    className="px-3 py-1.5 bg-[#121110] border border-[#F2EFE9]/5 text-sm font-mono hover:border-[#7A8B76]/50 hover:text-[#F2EFE9] transition-colors cursor-default text-[#F2EFE9]"
                    style={{ opacity: 0.9 }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
