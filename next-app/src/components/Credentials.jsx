"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Credentials() {
  const credentials = [
    { title: "AI Impact Pledge Badge", desc: "ai-impact-pledge-badge", img: "/photos/ai-impact-pledge-badge.png", span: "md:col-span-2 md:row-span-2" },
    { title: "Akkaddian Top Score", desc: "akkaddiantopscrorescreenshot", img: "/photos/akkaddiantopscrorescreenshot.png", span: "md:col-span-2 md:row-span-1" },
    { title: "Kaggle Top Score", desc: "topscre33.33outof42inkagglecompettionakkadian", img: "/photos/topscre33.33outof42inkagglecompettionakkadian.png", span: "md:col-span-2 md:row-span-1" },
    { title: "1st Position Slogan Writing", desc: "1stposition sloganwritingatNIT mzioram", img: "/photos/1stposition sloganwritingatNIT mzioram.jpeg", span: "md:col-span-2 md:row-span-1" },
    { title: "BIS Certificate 1", desc: "biscertificate1", img: "/photos/biscertificate1.jpeg", span: "md:col-span-1 md:row-span-1" },
    { title: "BIS Certificate 2", desc: "biscerticate2", img: "/photos/biscerticate2.jpeg", span: "md:col-span-1 md:row-span-1" },
    { title: "BIS Certificate 3", desc: "biscertifcate3", img: "/photos/biscertifcate3.jpeg", span: "md:col-span-1 md:row-span-1" },
    { title: "BIS Certificate 4", desc: "biscertifcate4", img: "/photos/biscertifcate4.jpeg", span: "md:col-span-1 md:row-span-1" },
    { title: "Drone Workshop", desc: "droneworkshop", img: "/photos/droneworkshop.jpg", span: "md:col-span-2 md:row-span-1" },
    { title: "Drone Workshop Bootcamp", desc: "droneworkshopbootcamp", img: "/photos/droneworkshopbootcamp.jpg", span: "md:col-span-2 md:row-span-1" },
    { title: "Workshop Bootcamp Cert.", desc: "workshopbootcampcertifcate", img: "/photos/workshopbootcampcertifcate.jpeg", span: "md:col-span-2 md:row-span-1" },
    { title: "National Energy Day", desc: "national energy day particpation cerrtifcate", img: "/photos/national energy day particpation cerrtifcate.jpg", span: "md:col-span-2 md:row-span-1" },
    { title: "PM Modi Welcome", desc: "pmmodiwelcomethinkindia", img: "/photos/pmmodiwelcomethinkindia.jpg", span: "md:col-span-2 md:row-span-1" },
    { title: "Think India Student Help", desc: "thinkindiaStudenthelp", img: "/photos/thinkindiaStudenthelp.jpg", span: "md:col-span-2 md:row-span-1" },
    { title: "Swachhata Hi Seva", desc: "schawta hi seva campagionNIT mizoram", img: "/photos/schawta hi seva campagionNIT mizoram.jpeg", span: "md:col-span-2 md:row-span-1" },
    { title: "Swachhata Participation", desc: "swachtaparticaptecertficate", img: "/photos/swachtaparticaptecertficate.jpeg", span: "md:col-span-2 md:row-span-1" },
    { title: "Deloitte Job Sim", desc: "deloittejob simulation certficate", link: "/photos/deloittejob simulation certficate.pdf", span: "md:col-span-2 md:row-span-1" },
    { title: "JPMorgan Chase", desc: "jpmorganchase", link: "/photos/jpmorganchase.pdf", span: "md:col-span-2 md:row-span-1" },
    { title: "Event Photo 1", desc: "IMG-20250913-WA0026", img: "/photos/IMG-20250913-WA0026.jpg", span: "md:col-span-1 md:row-span-1" },
    { title: "Event Photo 2", desc: "WhatsApp Image 2026-02-24 at 8.03.09 PM (2)", img: "/photos/WhatsApp Image 2026-02-24 at 8.03.09 PM (2).jpeg", span: "md:col-span-1 md:row-span-1" },
    { title: "Event Photo 3", desc: "WhatsApp Image 2026-03-08 at 12.26.59 AM (1)", img: "/photos/WhatsApp Image 2026-03-08 at 12.26.59 AM (1).jpeg", span: "md:col-span-1 md:row-span-1" },
    { title: "Event Photo 4", desc: "WhatsApp Image 2026-03-08 at 12.26.59 AM", img: "/photos/WhatsApp Image 2026-03-08 at 12.26.59 AM.jpeg", span: "md:col-span-1 md:row-span-1" },
    { title: "Event Photo 5", desc: "WhatsApp Image 2026-03-08 at 12.27.00 AM", img: "/photos/WhatsApp Image 2026-03-08 at 12.27.00 AM.jpeg", span: "md:col-span-1 md:row-span-1" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-32 px-6 md:px-20 bg-base w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sage text-sm md:text-lg font-mono uppercase tracking-widest mb-16">
          (04) Credentials & Wins
        </h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {credentials.map((cred, i) => {
            const CardContent = (
              <motion.div 
                variants={item}
                className={`group relative overflow-hidden bg-surface border border-ink/10 h-full w-full ${cred.span}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0">
                  {cred.img ? (
                    <Image
                      src={cred.img}
                      alt={cred.title}
                      fill
                      className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-surface to-base opacity-50 group-hover:opacity-80 transition-opacity"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-base/60 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-1 z-10 w-full">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-xl md:text-2xl font-display text-white">{cred.title}</h3>
                    {cred.link && <ExternalLink size={20} className="text-sage" />}
                  </div>
                </div>
              </motion.div>
            );

            return cred.link ? (
              <a key={i} href={cred.link} target="_blank" rel="noopener noreferrer" className={cred.span}>
                {CardContent}
              </a>
            ) : (
              <div key={i} className={cred.span}>
                {CardContent}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
