"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: "🎯",
    title: "Detect Weakness",
    description: "Our AI analyzes your real games and pinpoints recurring mistake patterns — not just single blunders, but systemic weaknesses.",
    gradient: "from-rose to-amber",
    glow: "shadow-rose/20",
  },
  {
    icon: "🧠",
    title: "Train Smart",
    description: "Get daily, personalized puzzle sets targeting your exact weaknesses. No more random puzzles — every training minute counts.",
    gradient: "from-primary to-accent",
    glow: "shadow-primary/20",
  },
  {
    icon: "📈",
    title: "Improve Faster",
    description: "Track your improvement over time with detailed analytics. See which weaknesses you've eliminated and what to focus on next.",
    gradient: "from-violet to-emerald",
    glow: "shadow-violet/20",
  },
];

export default function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-10 sm:py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-violet mb-3 block">Why ChessMazes</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            A Smarter Way to <span className="gradient-text">Improve</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Stop wasting time on generic training. ChessMazes builds a complete picture of your chess weaknesses and fixes them systematically.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover:border-foreground/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/20 relative overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg ${item.glow} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed group-hover:text-foreground/75 transition-colors duration-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
