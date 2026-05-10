"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const academyFeatures = [
  { icon: "👥", title: "Student Tracking", desc: "Monitor every student's progress, weakness patterns, and training compliance in real time." },
  { icon: "📊", title: "Performance Reports", desc: "Automated weekly and monthly reports showing improvement trends and areas needing attention." },
  { icon: "🎮", title: "Training Control", desc: "Assign custom training plans, set difficulty levels, and manage curriculum for your academy." },
];

export default function Academy() {
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
    <section id="academy" className="relative py-10 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/[0.02] to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-amber mb-3 block">For Academies & Coaches</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Empower Your <span className="gradient-text-warm">Academy</span>
            </h2>
            <p className="text-foreground/40 text-lg mb-8 leading-relaxed">
              Give your students the most advanced training system available. Track their progress, manage training plans, and watch them improve systematically.
            </p>

            <div className="space-y-6 mb-8">
              {academyFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber/20 to-rose/20 flex items-center justify-center text-xl flex-shrink-0 border border-amber/10">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feat.title}</h4>
                    <p className="text-sm text-foreground/40 leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Notify form for coaches */}
            <div className="mt-10">
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-widest">Inquiry for Academies</h4>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald/5 border border-emerald/10 text-center max-w-md"
                >
                  <p className="text-emerald font-semibold mb-1">Inquiry Sent Successfully!</p>
                  <p className="text-foreground/40 text-xs">We&apos;ll get back to you shortly.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-[10px] text-foreground/30 uppercase tracking-widest hover:text-foreground transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New Academy Partnership Inquiry - ChessMazes" />
                  <input type="hidden" name="user_type" value="Academy" />
                  <input type="hidden" name="_captcha" value="false" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Coach/Academy Email"
                    className="flex-1 px-4 py-3 rounded-xl bg-foreground/[0.04] border border-foreground/[0.08] text-foreground text-sm placeholder-foreground/20 focus:outline-none focus:border-amber/40 focus:ring-1 focus:ring-amber/20 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary !from-amber !to-rose whitespace-nowrap disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending..." : "Partner with Us →"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="text-xs text-rose mt-2">Error sending message. Please try again.</p>
              )}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-6 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-amber/10 to-rose/10 rounded-full blur-3xl" />

              {/* Mock dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Academy Dashboard</h4>
                  <span className="text-xs text-amber bg-amber/10 px-2 py-1 rounded-full">In Development</span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Students", value: "48", trend: "+5" },
                    { label: "Avg. Accuracy", value: "72%", trend: "+8%" },
                    { label: "Active Today", value: "31", trend: "+12" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-foreground/[0.03] rounded-xl p-3 border border-foreground/5">
                      <div className="text-xs text-foreground/30 mb-1">{stat.label}</div>
                      <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-emerald">{stat.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Student list mock */}
                <div className="space-y-2">
                  {[
                    { name: "Arjun S.", rating: 1240, progress: 85 },
                    { name: "Priya M.", rating: 980, progress: 72 },
                    { name: "Rahul K.", rating: 1450, progress: 91 },
                  ].map((student) => (
                    <div key={student.name} className="flex items-center gap-3 p-3 bg-foreground/[0.02] rounded-xl border border-foreground/5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
                        {student.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground">{student.name}</div>
                        <div className="text-xs text-foreground/30">ELO {student.rating}</div>
                      </div>
                      <div className="w-20">
                        <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-foreground/40">{student.progress}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
