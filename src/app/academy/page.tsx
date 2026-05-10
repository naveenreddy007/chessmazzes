"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Academy from "@/components/Academy";
import FinalCTA from "@/components/FinalCTA";

export default function AcademyPage() {
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
    <div>
      {/* Premium Hero */}
      <section className="relative min-h-[70vh] xl:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber/8 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose/6 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/4 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute inset-0 chess-pattern opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_75%)]" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 text-center py-10 sm:py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-xs font-medium text-white/70 tracking-wide uppercase">
              App Coming Soon
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Empower Your{" "}
            <span className="gradient-text">Academy</span>
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-10">
            Give your students access to the most advanced AI-powered chess training platform. 
            Track their progress, manage curriculum, and watch them improve.
          </p>

          {/* Academy stats */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {[
              { value: "50+", label: "Academies" },
              { value: "2,000+", label: "Students" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-white/30 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <Academy />

      {/* Academy-specific features */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Why Academies Choose <span className="gradient-text">ChessMazes</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🏫", title: "Scalable", desc: "Manage 5 or 500 students with the same powerful dashboard." },
              { icon: "📱", title: "Mobile Ready", desc: "Students can train on any device, anywhere, anytime." },
              { icon: "🔐", title: "Secure", desc: "Student data is encrypted and compliant with privacy standards." },
              { icon: "💬", title: "Support", desc: "Dedicated account manager for academy partners." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 group hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/40 group-hover:text-white/55 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Enrollment Inquiry */}
      <section className="py-10 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[120px]" />
        
        <div className="max-w-4xl mx-auto px-6 sm:px-12 relative">
          <div className="glass-card p-10 sm:p-12 border-amber/10 bg-gradient-to-br from-navy-card to-amber/[0.02]">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Request Academy Access</h2>
              <p className="text-white/40 text-sm">Fill out the details below and our partnership team will reach out with a custom onboarding plan.</p>
            </div>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-6">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-3">Application Received!</h3>
                <p className="text-white/40 mb-8 max-w-sm mx-auto">
                  Thank you for your interest in ChessMazes. Our partnership team will contact you within 48 hours to discuss your academy&apos;s needs.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-amber font-bold text-sm hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="Detailed Academy Access Request" />
                <input type="hidden" name="form_type" value="Full Academy Application" />
                <input type="hidden" name="user_type" value="Academy" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Academy Name</label>
                    <input name="academy_name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber/50 transition-colors" placeholder="Grandmaster Academy" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Estimated Students</label>
                    <div className="relative">
                      <select name="student_count" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white/70 focus:outline-none focus:border-amber/50 transition-colors appearance-none cursor-pointer">
                        <option value="1-20" className="bg-navy-card text-white">1-20 students</option>
                        <option value="21-50" className="bg-navy-card text-white">21-50 students</option>
                        <option value="51-200" className="bg-navy-card text-white">51-200 students</option>
                        <option value="200+" className="bg-navy-card text-white">200+ students</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">↓</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Head Coach Email</label>
                  <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber/50 transition-colors" placeholder="coach@academy.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Additional Notes</label>
                  <textarea name="notes" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-amber/50 transition-colors resize-none" placeholder="Tell us about your training goals..." />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-amber to-rose hover:shadow-xl hover:shadow-rose/25 transition-all duration-300 hover:-translate-y-1 disabled:opacity-50"
                >
                  {status === "loading" ? "Submitting Application..." : "Submit Academy Inquiry →"}
                </button>
                {status === "error" && (
                  <p className="text-xs text-rose text-center">Error. Please check your connection and try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
