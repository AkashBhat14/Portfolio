"use client";

import { motion } from "framer-motion";
import { personalInfo, education } from "@/app/lib/data";
import { Avatar } from "@/app/components/ui/Avatar";
import { useInView } from "@/app/hooks/useInView";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";

export function About() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative overflow-hidden grid-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-[#0a192f] pointer-events-none" />

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[#ccd6f6] mb-4">
            <span className="text-[#64ffda] font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-[#233554] max-w-md" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            className="flex justify-center order-2 md:order-1"
            variants={itemVariants}
          >
            <Avatar />
          </motion.div>

          {/* Content */}
          <motion.div className="order-1 md:order-2" variants={itemVariants}>
            {/* Bio Text */}
            <div className="space-y-4 mb-8">
              <p className="text-[#8892b0] text-lg leading-relaxed">
                Hello! I&apos;m <span className="text-[#64ffda]">Akash</span>, a cybersecurity
                practitioner passionate about defending digital infrastructure against modern
                threats.
              </p>
              <p className="text-[#8892b0] leading-relaxed">
                My journey in cybersecurity started during my computer science studies at
                PES University, where I discovered my passion for the blue team side of
                security. Since then, I&apos;ve worked on building robust defense mechanisms,
                implementing SIEM solutions, and leveraging AI to automate security operations.
              </p>
              <p className="text-[#8892b0] leading-relaxed">
                I specialize in threat detection, incident response, and security automation,
                with hands-on experience in tools like Wazuh, ELK Stack, and Azure Sentinel.
                I believe in proactive defense and continuous improvement of security posture.
              </p>
            </div>

            {/* Education Card */}
            <motion.div
              className="bg-[#112240]/50 border border-[#233554] rounded-lg p-6 backdrop-blur-sm"
              whileHover={{ borderColor: "#64ffda", scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-[#64ffda]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#ccd6f6] font-semibold text-lg mb-1">
                    {education.school}
                  </h3>
                  <p className="text-[#64ffda] font-mono text-sm mb-2">
                    {education.degree}
                  </p>
                  <div className="flex items-center gap-2 text-[#8892b0] text-sm mb-3">
                    <MapPin size={14} />
                    <span>{education.location}</span>
                    <span className="mx-2">•</span>
                    <span>Graduating {education.graduationDate}</span>
                  </div>

                  {/* Courses */}
                  <div className="flex items-center gap-2 text-[#8892b0] text-sm mb-2">
                    <BookOpen size={14} />
                    <span className="font-mono">Key Courses:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-[#0a192f] border border-[#233554] rounded-full text-xs text-[#8892b0]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
