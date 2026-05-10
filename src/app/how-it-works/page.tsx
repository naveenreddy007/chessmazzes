import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import Differentiation from "@/components/Differentiation";
import LearningSystem from "@/components/LearningSystem";

export const metadata: Metadata = {
  title: "How It Works — Your Path to Improvement",
  description:
    "Learn how ChessMazes transforms your real chess game mistakes into personalized daily training through AI analysis and weakness detection.",
  openGraph: {
    title: "How ChessMazes Works — 5-Step Improvement Loop",
    description: "Upload games → AI analyzes → Detects weakness patterns → Assigns daily training → Tracks improvement. A proven system.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "How ChessMazes Works" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How ChessMazes Works — 5-Step Improvement Loop",
    description: "Upload games → AI analyzes → Detects weakness patterns → Assigns daily training → Tracks improvement.",
    images: ["/og-image.jpg"],
  },
};

export default function HowItWorksPage() {
  return (
    <div>
      {/* Premium Hero */}
      <section className="relative min-h-[70vh] xl:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-20">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan/8 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute inset-0 chess-pattern opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_75%)]" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 text-center py-10 sm:py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-xs font-medium text-foreground/70 tracking-wide uppercase">
              App Coming Soon
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            From Mistakes to{" "}
            <span className="gradient-text">Mastery</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed mb-10">
            ChessMazes uses a proven 5-step loop to systematically eliminate your chess weaknesses 
            and build lasting improvement.
          </p>

          {/* Visual process steps */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {["Upload", "Analyze", "Detect", "Train", "Improve"].map((step, i) => (
              <div key={step} className="flex items-center gap-3 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10 flex items-center justify-center text-xs font-bold text-foreground/60">
                    {i + 1}
                  </div>
                  <span className="text-[10px] text-foreground/50 mt-1.5">{step}</span>
                </div>
                {i < 4 && (
                  <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-violet/40 to-cyan/40 -mt-3" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <HowItWorks />
      <Differentiation />
      <LearningSystem />

      {/* The improvement loop */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            The <span className="gradient-text">Improvement Loop</span>
          </h2>
          <p className="text-foreground/60 text-lg mb-12 max-w-2xl mx-auto">
            Unlike other platforms that give you random puzzles, ChessMazes creates a continuous feedback loop 
            that adapts to your progress every single day.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "Analyze", icon: "🔍", desc: "AI reviews your games and finds mistake patterns across multiple sessions." },
              { step: "Target", icon: "🎯", desc: "Weaknesses are mapped and prioritized. Training is generated specifically for you." },
              { step: "Improve", icon: "📈", desc: "As you train, your weakness scores drop. The system adapts and finds new areas." },
            ].map((item, i) => (
              <div key={item.step} className="glass-card p-6 relative overflow-hidden group hover:border-foreground/15 transition-all duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-xs font-mono text-violet/50 mb-2">STEP {i + 1}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.step}</h3>
                <p className="text-sm text-foreground/60 group-hover:text-foreground/75 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
