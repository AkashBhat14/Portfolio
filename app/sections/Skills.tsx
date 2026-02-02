"use client";

import { motion } from "framer-motion";
import { skills } from "@/app/lib/data";
import { useInView } from "@/app/hooks/useInView";
import { useState } from "react";
import { Shield, Cloud, Brain, ChevronRight } from "lucide-react";

const categoryIcons = {
  security: Shield,
  cloud: Cloud,
  ai: Brain,
};

const categoryNames = {
  security: "security",
  cloud: "cloud",
  ai: "ai",
} as const;

interface SkillOrbProps {
  skill: { name: string; proficiency: number };
  color: string;
  index: number;
  total: number;
  isInView: boolean;
}

function SkillOrb({ skill, color, index, total, isInView }: SkillOrbProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate position in a circle
  const angle = (index / total) * Math.PI * 2;
  const radius = 120;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={
        isInView
          ? {
              opacity: 1,
              scale: 1,
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
            }
          : {}
      }
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        x: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative cursor-pointer"
        animate={{
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl"
          style={{ backgroundColor: color }}
          animate={{
            opacity: isHovered ? 0.6 : 0.3,
            scale: isHovered ? 1.5 : 1,
          }}
        />

        {/* Orb */}
        <div
          className="relative w-20 h-20 rounded-full border-2 flex items-center justify-center backdrop-blur-sm"
          style={{
            borderColor: color,
            backgroundColor: `${color}20`,
          }}
        >
          {/* Inner Circle with Progress */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeOpacity="0.2"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: skill.proficiency / 100 } : {}}
              transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
              style={{
                strokeDasharray: "226",
                strokeDashoffset: "0",
              }}
            />
          </svg>

          {/* Skill Name */}
          <span className="text-xs font-medium text-center text-[#ccd6f6] px-1 z-10">
            {skill.name}
          </span>
        </div>

        {/* Hover Detail */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
        >
          <div className="bg-[#112240] border border-[#233554] rounded px-3 py-1">
            <span className="text-[#64ffda] font-mono text-sm">
              {skill.proficiency}%
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

interface CategoryOrbitProps {
  category: (typeof skills)["security"];
  categoryKey: keyof typeof skills;
  isInView: boolean;
}

function CategoryOrbit({ category, categoryKey, isInView }: CategoryOrbitProps) {
  const Icon = categoryIcons[categoryKey];
  const safeCategoryKey = categoryNames[categoryKey];
  const [ref, orbitInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative h-[400px] md:h-[500px]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Category Center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div
            className="p-4 rounded-2xl border-2"
            style={{
              borderColor: category.color,
              backgroundColor: `${category.color}20`,
            }}
          >
            <Icon className="w-8 h-8" style={{ color: category.color }} />
          </div>
          <h3 className="text-[#ccd6f6] font-semibold text-center">{category.category}</h3>
        </motion.div>
      </div>

      {/* Orbit Ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-dashed border-[#233554]/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Skills */}
      {category.items.map((skill, index) => (
        <SkillOrb
          key={skill.name}
          skill={skill}
          color={category.color}
          index={index}
          total={category.items.length}
          isInView={orbitInView}
        />
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {category.items.map((_, index) => {
          const angle = (index / category.items.length) * Math.PI * 2;
          const radius = 120;
          const x1 = 50 + (Math.cos(angle) * radius) / 4; // % position
          const y1 = 50 + (Math.sin(angle) * radius) / 5; // % position
          return (
            <motion.line
              key={index}
              x1="50%"
              y1="50%"
              x2={`${x1}%`}
              y2={`${y1}%`}
              stroke={category.color}
              strokeWidth="1"
              strokeOpacity="0.3"
              initial={{ pathLength: 0 }}
              animate={orbitInView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

export function Skills() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div className="mb-16 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-display text-[#ccd6f6] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="text-[#64ffda] font-mono text-xl mr-2">03.</span>
            Security Arsenal
          </motion.h2>
          <motion.p
            className="text-[#8892b0] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Technologies and tools I wield to defend against cyber threats
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((key) => (
            <CategoryOrbit
              key={key}
              category={skills[key]}
              categoryKey={key}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { color: "#ff6b6b", label: "Security Tools" },
            { color: "#3b82f6", label: "Cloud & DevOps" },
            { color: "#bd34fe", label: "AI & Automation" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-[#8892b0]">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
