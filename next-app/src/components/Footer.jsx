export default function Footer() {
  return (
    <footer className="relative w-full min-h-[70vh] bg-surface flex flex-col items-center justify-center p-6 md:p-20 border-t border-ink/5 z-10 mt-20">
      <h2 className="text-fluid-h2 font-display text-ink text-center max-w-4xl leading-tight mb-12">
        Let's build something <br/> <span className="italic text-sage">extraordinary.</span>
      </h2>

      <div className="flex flex-col items-center gap-4">
        <a 
          href="mailto:bt24cs028@nitmz.ac.in"
          className="text-xl md:text-4xl font-mono text-ink hover:text-sage transition-colors duration-300 relative group cursor-pointer"
        >
          bt24cs028@nitmz.ac.in
          <div className="absolute -bottom-1 left-0 w-0 h-1 bg-sage group-hover:w-full transition-all duration-500 ease-out"></div>
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-20 relative z-20 items-center">
        <a href="https://github.com/Dilipsahu01" target="_blank" rel="noopener noreferrer" className="font-mono text-ink/70 hover:text-sage uppercase text-lg md:text-2xl relative group overflow-hidden cursor-pointer">
          GitHub
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sage transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        </a>
        <a href="https://linkedin.com/in/dilip-sahu-7b8789324" target="_blank" rel="noopener noreferrer" className="font-mono text-ink/70 hover:text-sage uppercase text-lg md:text-2xl relative group overflow-hidden cursor-pointer">
          LinkedIn
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sage transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        </a>
        <a href="https://leetcode.com/u/dilip_sahu01" target="_blank" rel="noopener noreferrer" className="font-mono text-ink/70 hover:text-sage uppercase text-lg md:text-2xl relative group overflow-hidden cursor-pointer">
          LeetCode
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sage transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        </a>
      </div>

      <div className="absolute bottom-10 text-ink/40 font-mono text-xs text-center w-full">
        <p>© 2026 Dilip Sahu — Brutalist Elegance Edition</p>
      </div>
    </footer>
  );
}
