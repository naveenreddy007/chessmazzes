"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function CoachingSection() {
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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-electric/5 rounded-full blur-[120px] animate-float" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Coaching info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-cyan mb-3 block">
              AI Coaching — Coming Soon
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              Your Personal{" "}
              <span className="gradient-text">AI Chess Coach</span>
            </h2>
            <p className="text-foreground/45 text-lg leading-relaxed mb-8">
              ChessMazes is building the most intelligent chess coaching system ever made. 
              It learns from your games, identifies your weaknesses, and creates a daily training 
              plan that adapts as you improve.
            </p>

            {/* Coaching features */}
            <div className="space-y-5 mb-8">
              {[
                {
                  icon: "🔍",
                  title: "Deep Game Analysis",
                  desc: "AI reviews every move across all your games to find recurring patterns.",
                },
                {
                  icon: "🎯",
                  title: "Weakness Detection",
                  desc: "Identifies specific tactical and positional blind spots unique to you.",
                },
                {
                  icon: "📋",
                  title: "Daily Training Plans",
                  desc: "Personalized puzzles & exercises targeting your exact weaknesses.",
                },
                {
                  icon: "📈",
                  title: "Progress Tracking",
                  desc: "Watch your weakness scores drop and rating climb over time.",
                },
              ].map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center text-lg flex-shrink-0 border border-foreground/[0.06] group-hover:border-foreground/10 transition-colors">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-0.5">{feat.title}</h4>
                    <p className="text-xs text-foreground/35 leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Interest form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-electric/10 to-violet/10 rounded-full blur-3xl" />

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">You&apos;re In!</h3>
                  <p className="text-foreground/40 text-sm max-w-xs mx-auto">
                    Thanks for your interest! We&apos;ll notify you as soon as ChessMazes coaching 
                    is ready. Get ready to level up your chess.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-violet hover:text-violet/80 transition-colors"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-foreground mb-1 relative">
                    Get Early Access
                  </h3>
                  <p className="text-sm text-foreground/35 mb-6">
                    Be the first to experience AI-powered chess coaching.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Early Access Interest - Coaching" />
                    <input type="hidden" name="_captcha" value="false" />
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-foreground/50 mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-foreground/[0.04] border border-foreground/[0.08] text-foreground text-sm placeholder-foreground/20 focus:outline-none focus:border-violet/40 focus:ring-1 focus:ring-violet/20 transition-all"
                        placeholder="Viswanathan Anand"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-foreground/50 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-foreground/[0.04] border border-foreground/[0.08] text-foreground text-sm placeholder-foreground/20 focus:outline-none focus:border-violet/40 focus:ring-1 focus:ring-violet/20 transition-all"
                        placeholder="you@email.com"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label htmlFor="role" className="block text-xs font-medium text-foreground/50 mb-1.5">
                        I am a...
                      </label>
                      <select
                        id="role"
                        name="user_type"
                        className="w-full px-4 py-3 rounded-xl bg-foreground/[0.04] border border-foreground/[0.08] text-foreground text-sm focus:outline-none focus:border-violet/40 focus:ring-1 focus:ring-violet/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="Player" className="bg-navy-card">Chess Player</option>
                        <option value="Academy" className="bg-navy-card">Chess Academy / Coach</option>
                        <option value="Other" className="bg-navy-card">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-foreground/50 mb-1.5">
                        What excites you most? <span className="text-foreground/20">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-foreground/[0.04] border border-foreground/[0.08] text-foreground text-sm placeholder-foreground/20 focus:outline-none focus:border-violet/40 focus:ring-1 focus:ring-violet/20 transition-all resize-none"
                        placeholder="I'd love personalized endgame training..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" />
                            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Join the Waitlist →"
                      )}
                    </button>
                    {status === "error" && (
                      <p className="text-xs text-rose text-center font-medium">Error. Please try again.</p>
                    )}

                    <p className="text-[11px] text-foreground/20 text-center">
                      No spam. We&apos;ll only email you when it&apos;s ready.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
