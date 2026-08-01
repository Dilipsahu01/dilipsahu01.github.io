import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative w-full z-10 bg-base rounded-b-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Stats />
        <Credentials />
      </main>
      <Footer />
    </>
  );
}
