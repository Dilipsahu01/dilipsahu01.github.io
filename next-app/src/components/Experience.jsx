"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const experienceData = [
  {
    title: "Software Engineer Intern",
    company: "Zetheta Algorithms Private Limited",
    date: "Jul 2026 - Present",
    bullets: [
      "Architecting a production-grade financial reconciliation engine processing 100,000+ multi-bank transactions.",
      "Designed canonical ingestion pipelines supporting MT940 SWIFT, ISO 20022 XML, and CSV using FastAPI.",
      "Built tamper-evident audit infrastructure with PostgreSQL, SQLAlchemy, and SHA-256 integrity verification.",
      "Documented an event-driven microservices design using Apache Kafka, Saga orchestration and Outbox Pattern.",
      "Performed FMEA across 25+ production failure scenarios; proposed Circuit Breakers and Bulkheads."
    ]
  },
  {
    title: "Vice-President",
    company: "Coding & AI Club, NIT Mizoram",
    date: "Jul 2026 - Present",
    bullets: [
      "Directing the club's overarching technical strategy and organizing campus-wide programming events.",
      "Mentored 15+ junior students in competitive programming, backend development, and AI projects."
    ]
  },
  {
    title: "Website & Media Coordinator",
    company: "Training & Placement Cell, NIT Mizoram",
    date: "Jun 2026 - Present",
    bullets: [
      "Managing website infrastructure and orchestrating digital media campaigns for the Training & Placement Cell.",
      "Coordinating communication channels between corporate recruiters, alumni, and the student body."
    ]
  },
  {
    title: "Product Development Lead & National Finalist",
    company: "5G Innovation Hackathon (Pragati Phase)",
    date: "Jun 2026 - Sep 2026",
    bullets: [
      "Led end-to-end product development initiatives as a National Finalist during the Pragati Phase of the 5G Innovation Hackathon.",
      "Engineered strategic technical roadmaps and coordinated cross-functional execution to meet strict deadlines."
    ]
  },
  {
    title: "Frontend Developer (Freelance)",
    company: "Mindrift",
    date: "Jun 2026 - Jul 2026",
    bullets: [
      "Developed, optimized, and deployed highly responsive frontend user interfaces for fast-paced client projects.",
      "Ensured pixel-perfect design translation and seamless user experience across multiple device form factors."
    ]
  },
  {
    title: "Member",
    company: "Google Developers Group (GDG), NIT Mizoram",
    date: "Sep 2025 - Present",
    bullets: [
      "Core contributor and active member in the Google Developers Group (GDG) at NIT Mizoram."
    ]
  },
  {
    title: "Campus Ambassador",
    company: "Internshala",
    date: "Jun 2026 - Jul 2026",
    bullets: [
      "Represented Internshala across the campus, driving massive student engagement and promoting technical opportunities."
    ]
  },
  {
    title: "Ex-Team Head (Website & Social Media)",
    company: "Coding & AI Club, NIT Mizoram",
    date: "Feb 2025 - Jul 2026",
    bullets: [
      "Led digital platforms supporting registrations for 500+ participants across major technical events.",
      "Built a serverless event registration workflow using Python and Google Cloud, reducing admin effort by 30 hours/event."
    ]
  },
  {
    title: "Coordinator & Contest Problem Setter",
    company: "Technnox '25-26 Techfest, NIT Mizoram",
    date: "Apr 2026",
    bullets: [
      "Served as the core Coordinator and Contest Problem Setter for the annual technical festival.",
      "Designed rigorous, algorithmic programming challenges to test and evaluate top-tier coding talent."
    ]
  },
  {
    title: "Software Engineering Virtual Experience",
    company: "JPMorgan Chase & Co. (Forage)",
    date: "Mar 2026",
    bullets: [
      "Engineered a real-time data visualizer using Apache Kafka and H2 Database, achieving sub-10ms response latency."
    ]
  },
  {
    title: "Code Quality Assurer",
    company: "Outlier AI",
    date: "Sep 2025 - Dec 2025",
    bullets: [
      "Conducted rigorous code quality assurance, testing, and review processes for complex AI-driven codebases.",
      "Ensured high performance, security compliance, and maintainability across production-grade systems."
    ]
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

export default function Experience() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-20 bg-base w-full border-t border-ink/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sage text-sm md:text-lg font-mono uppercase tracking-widest mb-16">
          Experience & Leadership
        </h2>

        <div className="flex flex-col gap-12 border-l border-ink/20 pl-8 md:pl-16 ml-4">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 rounded-full shadow-[0_0_10px_rgba(122,139,118,0.5)] group-hover:scale-125 transition-transform duration-500" style={{ backgroundColor: "#7A8B76" }}></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-display group-hover:tracking-wide transition-all duration-500" style={{ color: "white" }}>{exp.title}</h3>
                  <h4 className="font-mono text-base md:text-lg mt-1" style={{ color: "#7A8B76" }}>{exp.company}</h4>
                </div>
                <div className="font-mono text-sm md:text-base border px-4 py-1.5 rounded-full self-start md:self-auto border-white/20" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                  {exp.date}
                </div>
              </div>
              
              <ul className="flex flex-col gap-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-base md:text-lg lg:text-xl relative pl-6 leading-relaxed font-medium" style={{ color: "white", opacity: 0.95 }}>
                    <span className="absolute left-0 top-3 md:top-3.5 w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "white" }}></span>
                    {highlightText(bullet)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
