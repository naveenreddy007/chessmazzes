"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const chessMazes = [
  "Puzzles targeting YOUR weaknesses",
  "Cross-game pattern analysis",
  "Persistent weakness memory",
  "Personalized daily correction",
  "Detailed improvement analytics",
];

export default function Differentiation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-10 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent" />

      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Comparison</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Why <span className="gradient-text">ChessMazes</span>?
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Traditional tools give you engine analysis. We give you a path to improvement.
          </p>
        </motion.div>

        {/* ChessMazes Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative gradient-border">
            <div className="glass-card p-8 h-full bg-gradient-to-br from-surface-light to-primary/5 relative z-10">
              <div className="absolute top-6 right-6">
                <span className="text-xs font-semibold text-white bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full">Recommended</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6 gradient-text">ChessMazes</h3>
              <ul className="space-y-4">
                {chessMazes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 text-emerald text-lg">✓</span>
                    <span className="text-foreground/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
