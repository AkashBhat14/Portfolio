"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo } from "@/app/lib/data";
import { useInView } from "@/app/hooks/useInView";
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

export function Contact() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New message from ${formState.name} via Portfolio`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Formspree error:", errorData);
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      {/* Matrix Rain Background Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <MatrixRain />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div className="mb-16 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-display text-[#ccd6f6] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="text-[#64ffda] font-mono text-xl mr-2">05.</span>
            Secure Channel
          </motion.h2>
          <motion.p
            className="text-[#8892b0] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Have a security challenge or opportunity? Let&apos;s connect.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">
                  Let&apos;s Build Secure Systems Together
                </h3>
                <p className="text-[#8892b0] leading-relaxed mb-6">
                  I&apos;m currently open to new opportunities in cybersecurity and AI automation.
                  Whether you have a question about my work, a project idea, or just want to say hi,
                  I&apos;ll do my best to get back to you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-[#112240]/50 border border-[#233554] rounded-lg hover:border-[#64ffda] transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-[#64ffda]/10 rounded-lg group-hover:bg-[#64ffda]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#64ffda]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Email</p>
                    <p className="text-[#ccd6f6]">{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-[#112240]/50 border border-[#233554] rounded-lg"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#64ffda]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Location</p>
                    <p className="text-[#ccd6f6]">{personalInfo.location}</p>
                  </div>
                </motion.div>

                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 bg-[#112240]/50 border border-[#233554] rounded-lg hover:border-[#64ffda] transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-[#64ffda]/10 rounded-lg group-hover:bg-[#64ffda]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#64ffda]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Phone</p>
                    <p className="text-[#ccd6f6]">{personalInfo.phone}</p>
                  </div>
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#233554] rounded-lg text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#233554] rounded-lg text-[#8892b0] hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#112240]/50 border border-[#233554] rounded-xl p-6 md:p-8">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#233554]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                </div>
                <span className="ml-4 text-sm text-[#8892b0] font-mono">
                  contact_form.exe
                </span>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-[#64ffda] mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                    Message Encrypted & Sent!
                  </h3>
                  <p className="text-[#8892b0]">
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-[#64ffda] font-mono mb-2">
                      <span className="text-[#8892b0]">$</span> name =
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-3 text-[#ccd6f6] font-mono focus:border-[#64ffda] focus:outline-none transition-colors"
                      placeholder="Enter your name..."
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-[#64ffda] font-mono mb-2">
                      <span className="text-[#8892b0]">$</span> email =
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-3 text-[#ccd6f6] font-mono focus:border-[#64ffda] focus:outline-none transition-colors"
                      placeholder="Enter your email..."
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-[#64ffda] font-mono mb-2">
                      <span className="text-[#8892b0]">$</span> message =
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      rows={5}
                      className="w-full bg-[#0a192f] border border-[#233554] rounded px-4 py-3 text-[#ccd6f6] font-mono focus:border-[#64ffda] focus:outline-none transition-colors resize-none"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      className="bg-[#ff6b6b]/10 border border-[#ff6b6b] rounded px-4 py-3 text-[#ff6b6b] text-sm font-mono"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="text-lg mr-2">⚠</span>
                      {error}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] px-6 py-4 rounded font-mono hover:bg-[#64ffda]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-[#64ffda] border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Encrypting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>transmit_message()</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Matrix Rain Effect Component
function MatrixRain() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#64ffda] font-mono text-xs opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: -20,
          }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {["0", "1", "▹", "□", "{", "}", "$", "#"][Math.floor(Math.random() * 8)]}
        </motion.div>
      ))}
    </div>
  );
}
