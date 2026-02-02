"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState } from "react";
import { experiences } from "@/app/lib/data";
import { useInView } from "@/app/hooks/useInView";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

function TimelineCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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
    <motion.div
      ref={ref}
      className="relative pl-8 md:pl-0"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline Connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#233554] md:left-1/2 md:-translate-x-px">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
          style={{ backgroundColor: experience.color }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
        />
      </div>

      {/* Card */}
      <div
        className={`md:w-[calc(50%-40px)] ${
          index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <motion.div
          className="bg-[#112240]/80 border border-[#233554] rounded-xl p-6 backdrop-blur-sm cursor-pointer"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ borderColor: experience.color }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg"
                style={{ backgroundColor: `${experience.color}20` }}
              >
                <Briefcase className="w-5 h-5" style={{ color: experience.color }} />
              </div>
              <div>
                <h3 className="text-[#ccd6f6] font-semibold text-lg">
                  {experience.role}
                </h3>
                <p className="text-[#64ffda] font-mono text-sm">{experience.company}</p>
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-[#8892b0] mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
            {experience.current && (
              <span className="px-2 py-0.5 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-xs">
                Current
              </span>
            )}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {experience.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="bg-[#0a192f] rounded-lg p-3 border border-[#233554]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + i * 0.1 + 0.4 }}
              >
                <p className="text-2xl font-bold" style={{ color: experience.color }}>
                  {metric.value}
                </p>
                <p className="text-xs text-[#8892b0]">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Expand Button */}
          <motion.button
            className="flex items-center gap-1 text-[#64ffda] text-sm font-mono hover:gap-2 transition-all group"
          >
            <span>Details</span>
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.button>

          {/* Expanded Content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2 text-[#8892b0] text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-[#64ffda] mt-1">▹</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div className="mb-16 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-display text-[#ccd6f6] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="text-[#64ffda] font-mono text-xl mr-2">02.</span>
            Mission Log
          </motion.h2>
          <motion.p
            className="text-[#8892b0] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            My professional journey through the cybersecurity landscape
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {experiences.map((experience, index) => (
            <TimelineCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
