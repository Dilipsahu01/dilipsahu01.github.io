"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const statsCards = [
    {
      title: "GitHub Contributions",
      link: "https://github.com/Dilipsahu01",
      image: "https://ghchart.rshah.org/3A7D44/Dilipsahu01",
      isGraph: true
    },
    {
      title: "GitHub Streak",
      link: "https://github.com/Dilipsahu01",
      image: "https://streak-stats.demolab.com?user=Dilipsahu01&theme=dark&hide_border=true&background=121110&ring=7A8B76&fire=7A8B76&currStreakLabel=7A8B76",
      isGraph: false
    },
    {
      title: "LeetCode Profile",
      link: "https://leetcode.com/u/dilip_sahu01",
      image: "https://leetcard.jacoblin.cool/dilip_sahu01?theme=dark&font=Fira%20Code&ext=heatmap",
      isGraph: false
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-20 bg-base w-full border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sage text-sm md:text-lg font-mono uppercase tracking-widest mb-10">
          (03) Open Source & Activity
        </h2>

        {/* Trophies & Achievement Badges */}
        <div className="mb-16">
          <h3 className="text-xl font-display text-white mb-6">Platform Achievements</h3>
          <div className="flex flex-wrap gap-6">
            {[
              { platform: "GitHub", title: "Pull Shark", img: "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" },
              { platform: "GitHub", title: "YOLO", img: "https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" },
              { platform: "LeetCode", title: "100 Days 2026", img: "https://assets.leetcode.com/static_assets/others/100_1080_1080.png" },
              { platform: "LeetCode", title: "50 Days 2026", img: "https://assets.leetcode.com/static_assets/others/50_1080_1080.png" },
              { platform: "LeetCode", title: "April Challenge", img: "https://leetcode.com/static/images/badges/dcc-2026-4.png" },
              { platform: "LeetCode", title: "March Challenge", img: "https://leetcode.com/static/images/badges/dcc-2026-3.png" },
              { platform: "Kaggle", title: "Kaggle Top Score", img: "/photos/akkaddiantopscrorescreenshot.png" },
              { platform: "AI", title: "AI Impact Badge", img: "/photos/ai-impact-pledge-badge.png" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_10489106_8235ef48b7e37d36d6e081d112f303de_Badge-62.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_059c9b5e8bad980032971b42cb35cb10_Badge-44.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_08aa345b8928ae96e21ee3586021500e_Badge-8.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_09e1f99bdf3222934ad7769409ec3f6d_Badge-26.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_163e0f27360ae958da99dde2a68f7e00_Badge-46.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_28e0e70842ce6972f4d68f5b6ecd549a_Badge-12.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_2df508502fba7fc8937f3847e46b8ec4_Badge-29.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_4320b13590f043b8c58421eb25f04235_Badge-33.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_4bcf6474cdf3503864419523d22b6019_Badge-15.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_b05e17f63f2eead904a1f04d05bb51a6_Badge.svg" },
              { platform: "Kaggle", title: "Kaggle Achievement", img: "/photos/inbox_1488634_eb028e2f7e6b3e2bef2b3682f6919224_Badge-25.svg" },
            ].map((badge, i) => (
              <motion.div 
                key={i}
                className="group relative flex flex-col items-center justify-center p-4 bg-surface border border-ink/10 rounded-xl hover:border-sage/50 transition-colors duration-500 w-[120px] h-[120px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 10) * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="w-16 h-16 relative flex items-center justify-center mb-2">
                  <img src={badge.img} alt={badge.title} className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(122,139,118,0.4)] transition-all duration-300" loading="lazy" />
                </div>
                <span className="text-[10px] font-mono text-sage text-center uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
                  {badge.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* GitHub Streak */}
          <motion.a 
            href={statsCards[1].link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 md:p-10 bg-surface border border-ink/10 hover:border-sage/50 transition-colors duration-500 overflow-hidden flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="text-sage" size={24} />
            </div>
            
            <h3 className="text-xl font-display mb-8 tracking-wide self-start" style={{ color: "white" }}>
              {statsCards[1].title}
            </h3>
            
            <div className="w-full flex justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <img 
                src={statsCards[1].image} 
                alt="GitHub Streak" 
                className="w-full max-w-[450px] object-contain rounded-md"
                loading="lazy"
              />
            </div>
          </motion.a>

          {/* LeetCode Stats */}
          <motion.a 
            href={statsCards[2].link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 md:p-10 bg-surface border border-ink/10 hover:border-sage/50 transition-colors duration-500 overflow-hidden flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="text-sage" size={24} />
            </div>
            
            <h3 className="text-xl font-display mb-8 tracking-wide self-start" style={{ color: "white" }}>
              {statsCards[2].title}
            </h3>
            
            <div className="w-full flex justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <img 
                src={statsCards[2].image} 
                alt="LeetCode Profile Stats" 
                className="w-full max-w-[450px] object-contain rounded-md"
                loading="lazy"
              />
            </div>
          </motion.a>

          {/* GitHub Graph spans full width */}
          <motion.a 
            href={statsCards[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 md:col-span-2 group relative p-8 md:p-10 bg-surface border border-ink/10 hover:border-sage/50 transition-colors duration-500 overflow-hidden flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="text-sage" size={24} />
            </div>
            
            <h3 className="text-2xl font-display mb-8 tracking-wide self-start" style={{ color: "white" }}>
              {statsCards[0].title}
            </h3>
            
            <div className="w-full overflow-x-auto flex justify-center pb-4 scrollbar-hide opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ filter: "drop-shadow(0 0 10px rgba(122,139,118,0.1))" }}>
              <img 
                src={statsCards[0].image} 
                alt="GitHub Contributions Graph" 
                className="w-full max-w-[650px] object-contain px-4"
                loading="lazy"
              />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
