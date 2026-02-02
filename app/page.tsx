import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Experience } from "@/app/sections/Experience";
import { Skills } from "@/app/sections/Skills";
import { Projects } from "@/app/sections/Projects";
import { Contact } from "@/app/sections/Contact";
import { Navigation } from "@/app/components/ui/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f]">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#233554]">
        <p className="text-[#8892b0] text-sm font-mono">
          Designed & Built by Akash Bhat
        </p>
        <p className="text-[#5a6a8a] text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </main>
  );
}
