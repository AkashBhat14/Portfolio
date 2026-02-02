"use client";

import { motion } from "framer-motion";

export function Avatar() {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Outer Glow Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#64ffda] via-[#3b82f6] to-[#bd34fe] opacity-30 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Middle Ring */}
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-[#64ffda]/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#64ffda] rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 45}deg) translateX(130px)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Inner Circuit Pattern */}
      <div className="absolute inset-8 rounded-full bg-[#112240] overflow-hidden border border-[#64ffda]/30">
        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M0 20 L15 20 L20 15 L20 0 M20 40 L20 25 L25 20 L40 20"
                fill="none"
                stroke="#64ffda"
                strokeWidth="1"
              />
              <circle cx="20" cy="20" r="2" fill="#64ffda" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Central Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-6xl md:text-7xl font-bold font-display text-[#64ffda]"
            animate={{
              textShadow: [
                "0 0 10px rgba(100, 255, 218, 0.5)",
                "0 0 30px rgba(100, 255, 218, 0.8)",
                "0 0 10px rgba(100, 255, 218, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            AB
          </motion.div>
        </div>

        {/* Scanning Line */}
        <motion.div
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#64ffda] to-transparent"
          animate={{
            top: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      {[
        { icon: "🔒", angle: 0, distance: 180 },
        { icon: "🛡️", angle: 90, distance: 180 },
        { icon: "🔐", angle: 180, distance: 180 },
        { icon: "🔑", angle: 270, distance: 180 },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: [
              Math.cos((item.angle * Math.PI) / 180) * item.distance - 16,
              Math.cos(((item.angle + 10) * Math.PI) / 180) * item.distance - 16,
              Math.cos((item.angle * Math.PI) / 180) * item.distance - 16,
            ],
            y: [
              Math.sin((item.angle * Math.PI) / 180) * item.distance - 16,
              Math.sin(((item.angle + 10) * Math.PI) / 180) * item.distance - 16,
              Math.sin((item.angle * Math.PI) / 180) * item.distance - 16,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 2,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </motion.div>
  );
}
