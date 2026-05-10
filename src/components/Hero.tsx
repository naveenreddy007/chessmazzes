"use client";

import { motion } from "framer-motion";
import EngineBoard from "./EngineBoard";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-12">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse-glow" />

        {/* Chess pattern overlay */}
        <div className="absolute inset-0 chess-pattern opacity-30" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              <span className="text-xs font-medium text-foreground/70 tracking-wide uppercase">
                AI-Powered Chess Training
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Fix Your Chess{" "}
              <span className="gradient-text">Mistakes.</span>
              <br />
              Improve{" "}
              <span className="gradient-text">Every Day.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-foreground/50 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              ChessMazes turns your real game mistakes into personalized training
              and tracks your improvement over time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/pricing"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Join Waitlist
              </Link>
              <Link
                href="/how-it-works"
                className="btn-secondary w-full sm:w-auto text-center"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-foreground"
                    style={{ backgroundColor: color }}
                  >
                    {["A", "K", "R", "M"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-foreground/40">
                <span className="text-foreground/70 font-medium">2,000+</span> on the waitlist
              </div>
            </motion.div>
          </div>

          {/* Visual - Engine vs Engine Board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end"
          >
            <EngineBoard />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
