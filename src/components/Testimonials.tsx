"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Arjun Mehta",
    rating: "1450 → 1680",
    text: "Improved my game in just 2 weeks. The targeted puzzles are incredible — they hit exactly where I'm weakest.",
    stars: 5,
    color: "#3b82f6",
  },
  {
    name: "Sneha Patel",
    rating: "920 → 1200",
    text: "Best training app I've used. Unlike other apps, ChessMazes actually remembers my mistakes and makes me fix them.",
    stars: 5,
    color: "#8b5cf6",
  },
  {
    name: "Vikram Rao",
    rating: "1200 → 1450",
    text: "The weakness detection is like having a personal coach. My endgame went from terrible to solid in a month.",
    stars: 5,
    color: "#06b6d4",
  },
  {
    name: "Coach Deepak",
    rating: "Academy Partner",
    text: "I track 30+ students through ChessMazes. The academy dashboard saves me hours of manual analysis every week.",
    stars: 5,
    color: "#10b981",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-cyan mb-3 block">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Players <span className="gradient-text">Love It</span>
          </h2>
          <p className="text-foreground/40 text-lg max-w-2xl mx-auto">
            Join thousands of players who are improving faster with ChessMazes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:border-foreground/15 transition-all duration-300 hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-amber text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-foreground/50 leading-relaxed mb-5 group-hover:text-foreground/65 transition-colors">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-foreground"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-foreground/30">{t.rating}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
