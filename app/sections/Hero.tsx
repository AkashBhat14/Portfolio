"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "@/app/lib/data";
import { TextScramble } from "@/app/components/ui/TextScramble";
import { GlitchText } from "@/app/components/ui/GlitchText";
import { Avatar } from "@/app/components/ui/Avatar";
import { Scene3D } from "@/app/components/three/Scene3D";

export function Hero() {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/50 to-[#0a192f] z-10" />

      {/* Content */}
      <div className="relative z-20 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Pre-title */}
            <motion.p
              className="font-mono text-[#64ffda] text-sm md:text-base mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TextScramble text="> Initializing secure connection..." delay={500} duration={1500} />
            </motion.p>

            {/* Main Title - Now with hover-only glitch! */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlitchText text={personalInfo.name} className="text-[#ccd6f6]" />
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="text-xl md:text-2xl text-[#8892b0] mb-6 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-[#64ffda]">Blue Team</span> Security Engineer &{" "}
              <span className="text-[#bd34fe]">AI Automation</span> Specialist
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-[#8892b0] max-w-xl mx-auto lg:mx-0 mb-8 text-base leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={handleScrollDown}
                className="btn-primary rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Experience
              </motion.button>

              <motion.a
                href="#contact"
                className="px-6 py-3 border border-[#8892b0] text-[#8892b0] rounded font-mono text-sm hover:border-[#64ffda] hover:text-[#64ffda] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Avatar */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Avatar />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={handleScrollDown}
          className="text-[#64ffda] animate-bounce"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
}
