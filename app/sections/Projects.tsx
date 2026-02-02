"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState } from "react";
import { projects } from "@/app/lib/data";
import { useInView } from "@/app/hooks/useInView";
import { ExternalLink, Github, ChevronRight, Star, X } from "lucide-react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <motion.div
          className={`bg-[#112240]/80 border border-[#233554] rounded-xl overflow-hidden cursor-pointer h-full ${
            project.featured ? "md:col-span-2" : ""
          }`}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsExpanded(true)}
          whileHover={{ borderColor: project.color, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Card Header */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-xs flex items-center gap-1">
                      <Star size={10} />
                      Featured
                    </span>
                  )}
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">{project.title}</h3>
                <p className="text-[#64ffda] font-mono text-sm">{project.subtitle}</p>
              </div>
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${project.color}20` }}
              >
                <ChevronRight
                  className="w-5 h-5 transition-transform"
                  style={{ color: project.color }}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-[#8892b0] text-sm mb-4 line-clamp-3">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#0a192f] border border-[#233554] rounded text-xs text-[#8892b0]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 text-xs text-[#64ffda]">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Decorative Bottom Border */}
          <div
            className="h-1"
            style={{
              background: `linear-gradient(90deg, ${project.color}40, ${project.color})`,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Expanded Modal */}
      {isExpanded && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a192f]/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsExpanded(false)}
        >
          <motion.div
            className="bg-[#112240] border border-[#233554] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#112240] border-b border-[#233554] p-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#ccd6f6]">{project.title}</h3>
                <p className="text-[#64ffda] font-mono">{project.subtitle}</p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-[#233554] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#8892b0]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <p className="text-[#8892b0] leading-relaxed">{project.description}</p>

              {/* Details */}
              <div>
                <h4 className="text-[#ccd6f6] font-semibold mb-3 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#64ffda]" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-[#8892b0]"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* All Technologies */}
              <div>
                <h4 className="text-[#ccd6f6] font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#0a192f] border border-[#233554] rounded-full text-sm text-[#8892b0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export function Projects() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div className="mb-16 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-display text-[#ccd6f6] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="text-[#64ffda] font-mono text-xl mr-2">04.</span>
            Operation Showcase
          </motion.h2>
          <motion.p
            className="text-[#8892b0] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Key projects demonstrating my cybersecurity and automation expertise
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
