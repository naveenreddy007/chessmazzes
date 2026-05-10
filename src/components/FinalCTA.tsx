"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function FinalCTA() {
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
    <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/8 to-accent/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute inset-0 chess-pattern opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-white/70 tracking-wide uppercase">Early Access</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Start Your Chess{" "}
            <br />
            <span className="gradient-text">Improvement Journey</span>
          </h2>

          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            We&apos;re building the ultimate AI chess coaching platform.
            Join the waitlist and be the first to experience the future of chess training.
          </p>

          <div className="max-w-md mx-auto">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 glass-card"
              >
                <div className="text-4xl mb-4">♟</div>
                <h3 className="text-2xl font-bold text-white mb-2">Checkmate!</h3>
                <p className="text-white/40 mb-6">You&apos;re officially on the list. We&apos;ll notify you at launch.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs text-white/30 uppercase tracking-widest hover:text-white transition-colors"
                >
                  Register Another Email
                </button>
              </motion.div>
            ) : (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <form
                  onSubmit={handleSubmit}
                  className="relative flex flex-col sm:flex-row gap-3 bg-surface p-2 rounded-2xl border border-white/10 shadow-2xl"
                >
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New Waitlist Signup - ChessMazes" />
                  <input type="hidden" name="user_type" value="Player" />
                  <input type="hidden" name="_captcha" value="false" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl bg-transparent text-white placeholder-white/20 focus:outline-none transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary whitespace-nowrap !py-4"
                  >
                    {status === "loading" ? "Joining..." : "Join Waitlist →"}
                  </button>
                </form>
                {status === "error" && (
                  <p className="text-xs text-rose mt-4 font-medium italic">
                    Oops! There was an error. Please try again.
                  </p>
                )}
              </div>
            )}
          </div>

          <p className="mt-8 text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium">
            Join 500+ chess players already on the list
          </p>
        </motion.div>
      </div>
    </section>
  );
}
