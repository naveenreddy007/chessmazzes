"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const levels = [
  {
    level: "Beginner",
    rating: "< 800",
    modules: ["Basic Tactics", "Simple Checkmates", "Piece Development"],
    color: "from-emerald to-accent",
    ring: "ring-emerald/30",
  },
  {
    level: "Intermediate",
    rating: "800 – 1400",
    modules: ["Pattern Recognition", "Positional Play", "Endgame Basics"],
    color: "from-primary to-secondary",
    ring: "ring-primary/30",
  },
  {
    level: "Advanced",
    rating: "1400+",
    modules: ["Complex Combinations", "Strategic Planning", "Opening Preparation"],
    color: "from-secondary to-rose",
    ring: "ring-secondary/30",
  },
];

export default function LearningSystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-10 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-emerald mb-3 block">Learning Path</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Structured <span className="gradient-text">Progression</span>
          </h2>
          <p className="text-foreground/40 text-lg max-w-2xl mx-auto">
            No matter your level, ChessMazes adapts to challenge you with the right training.
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12 hidden md:block"
        >
          <div className="h-1 bg-foreground/5 rounded-full mx-auto max-w-2xl">
            <motion.div
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-emerald via-primary to-secondary"
            />
          </div>
          <div className="flex justify-between max-w-2xl mx-auto mt-3">
            {levels.map((l) => (
              <span key={l.level} className="text-xs text-foreground/30 font-medium">{l.level}</span>
            ))}
          </div>
        </motion.div>

        {/* Level cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {levels.map((level, i) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group"
            >
              <div className="glass-card p-7 h-full hover:border-foreground/15 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${level.color} rounded-full blur-3xl opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700`} />

                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {["♙", "♘", "♛"][i]}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{level.level}</h3>
                    <span className="text-xs text-foreground/30">{level.rating} ELO</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {level.modules.map((mod) => (
                    <li key={mod} className="flex items-center gap-2 text-sm text-foreground/50 group-hover:text-foreground/65 transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${level.color}`} />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
