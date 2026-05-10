"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Play or Upload Game", desc: "Play on your favorite platform or import your PGN files directly.", icon: "♟" },
  { num: "02", title: "AI Analyzes Your Moves", desc: "Stockfish-powered engine reviews every move for inaccuracies and blunders.", icon: "🔍" },
  { num: "03", title: "Detects Weakness Patterns", desc: "Cross-game analysis identifies your recurring tactical and positional blind spots.", icon: "🎯" },
  { num: "04", title: "Assigns Daily Training", desc: "Get a personalized puzzle set each day, targeting your specific weaknesses.", icon: "📋" },
  { num: "05", title: "Tracks Your Improvement", desc: "Watch your weakness scores drop and your rating climb with detailed analytics.", icon: "📈" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative py-10 sm:py-16 lg:py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3 block">The Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How <span className="gradient-text">ChessMazes</span> Works
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            From your real games to measurable improvement — in five simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/30 to-accent/30 hidden sm:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex items-start gap-6 sm:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number dot */}
                <div className="hidden sm:flex absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background z-10" />

                {/* Content card */}
                <div className={`sm:ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="glass-card p-6 hover:border-foreground/15 transition-all duration-300 hover:-translate-y-0.5 group">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-2xl">{step.icon}</span>
                      <div>
                        <span className="text-xs font-mono text-secondary/70 block">STEP {step.num}</span>
                        <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-foreground/60 text-sm leading-relaxed group-hover:text-foreground/75 transition-colors">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
