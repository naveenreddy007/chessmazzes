"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "AI Game Analysis",
    desc: "Stockfish-powered engine dissects every move. Get accurate evaluations, best moves, and mistake categorization.",
    icon: "⚡",
    gradient: "from-amber to-rose",
  },
  {
    title: "Weakness Detection Engine",
    desc: "Cross-game pattern analysis identifies your recurring tactical and positional blind spots across hundreds of games.",
    icon: "🔬",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Personalized Puzzle Training",
    desc: "Every puzzle is selected to target your specific weaknesses. No random puzzles — pure targeted improvement.",
    icon: "🧩",
    gradient: "from-primary to-accent",
  },
  {
    title: "Daily Training Plans",
    desc: "Structured daily sessions that adapt as you improve. Your training evolves with you — automatically.",
    icon: "📅",
    gradient: "from-accent to-emerald",
  },
  {
    title: "Progress Dashboard",
    desc: "Visualize your improvement with detailed charts. Track weakness scores, accuracy trends, and training streaks.",
    icon: "📊",
    gradient: "from-secondary to-primary",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-16 lg:py-20">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Everything You Need to <span className="gradient-text">Level Up</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A complete chess improvement ecosystem powered by artificial intelligence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="glass-card p-7 h-full hover:border-foreground/15 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                {/* Hover glow */}
                <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${feat.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700`} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.gradient} flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {feat.icon}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed group-hover:text-foreground/75 transition-colors duration-300">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
