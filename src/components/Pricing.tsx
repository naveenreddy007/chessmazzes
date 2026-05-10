"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/b17ad46eb4fe502f667cbbddf51c6f72", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="pricing" className="relative py-10 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-electric/[0.015] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-electric mb-3 block">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Start free and upgrade as you grow. All plans include core AI analysis features.
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-10 relative overflow-hidden text-center border-secondary/10">
            {/* Decorative glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-accent/8 to-emerald/5 rounded-full blur-3xl" />

            {/* Coming Soon badge */}
            <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-secondary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <span className="text-xs font-semibold text-amber tracking-wider uppercase">
                App Coming Soon
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 relative">
              We&apos;re Building Something <span className="gradient-text">Special</span>
            </h3>
            <p className="text-foreground/60 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
              Our AI chess coaching platform is under active development.
              Be the first to know when we launch — get early access and exclusive early-bird updates.
            </p>

            {/* Notify form */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4"
              >
                <div className="text-2xl mb-2">🎉</div>
                <p className="text-foreground font-semibold mb-1">You&apos;re on the list!</p>
                <p className="text-foreground/55 text-sm">We&apos;ll notify you as soon as we launch.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[10px] text-foreground/50 uppercase tracking-widest hover:text-foreground transition-colors"
                >
                  Join with another email
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Pricing Notification Signup - ChessMazes" />
                <input type="hidden" name="user_type" value="Player" />
                <input type="hidden" name="_captcha" value="false" />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-foreground/[0.04] border border-foreground/[0.08] text-foreground text-sm placeholder-foreground/20 focus:outline-none focus:border-secondary/40 focus:ring-1 focus:ring-secondary/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary whitespace-nowrap"
                >
                  {status === "loading" ? "Joining..." : "Notify Me →"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-xs text-rose mt-2 font-medium">Error signing up. Please try again.</p>
            )}

            <p className="text-[11px] text-foreground/15 mt-4">
              No spam. We&apos;ll only email you when pricing is finalized.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
