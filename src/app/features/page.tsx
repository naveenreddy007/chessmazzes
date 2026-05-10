import type { Metadata } from "next";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Features — ChessMazes | AI-Powered Chess Training Tools",
  description:
    "Explore ChessMazes features: AI Game Analysis, Weakness Detection Engine, Personalized Puzzle Training, Daily Training Plans, and Progress Dashboard.",
};

export default function FeaturesPage() {
  return (
    <div>
      {/* Premium Hero */}
      <section className="relative min-h-[70vh] xl:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-20">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan/4 rounded-full blur-[100px] animate-pulse-glow" />
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
            Everything You Need to{" "}
            <span className="gradient-text">Level Up</span>
          </h1>
          <p className="text-xl text-foreground/40 max-w-2xl mx-auto leading-relaxed mb-10">
            A complete chess improvement ecosystem powered by artificial intelligence. 
            Every tool is designed to find, fix, and track your weaknesses.
          </p>

          {/* Stats bar */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {[
              { value: "5+", label: "AI Tools" },
              { value: "24/7", label: "Analysis" },
              { value: "100%", label: "Personalized" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-foreground/30 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <Features />

      {/* Extra detail sections */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-amber mb-3 block">Deep Analysis</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Stockfish-Powered <span className="gradient-text">Engine Analysis</span>
              </h2>
              <p className="text-foreground/40 leading-relaxed mb-6">
                Every game you play or upload is analyzed by one of the strongest chess engines in the world. 
                We don&apos;t just tell you the best move — we categorize your mistakes into tactical, 
                positional, and endgame errors so you know exactly what to work on.
              </p>
              <ul className="space-y-3">
                {["Move-by-move evaluation", "Mistake categorization (tactical, positional, endgame)", "Best move suggestions with explanations", "Accuracy percentage per game"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/50">
                    <span className="text-emerald">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-amber/10 to-rose/10 rounded-full blur-3xl" />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Game Analysis</span>
                  <span className="text-xs text-emerald bg-emerald/10 px-2 py-1 rounded-full">Completed</span>
                </div>
                <div className="bg-foreground/[0.03] rounded-xl p-4 border border-foreground/5">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-foreground/30">Accuracy</span>
                    <span className="text-sm font-bold text-emerald">78.4%</span>
                  </div>
                  <div className="h-2 bg-foreground/5 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald to-cyan" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Brilliant", value: "3", color: "text-cyan" },
                    { label: "Mistakes", value: "5", color: "text-amber" },
                    { label: "Blunders", value: "2", color: "text-rose" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-foreground/[0.03] rounded-lg p-3 border border-foreground/5 text-center">
                      <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-[10px] text-foreground/30">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-violet/10 to-blue-electric/10 rounded-full blur-3xl" />
              <div className="space-y-3">
                <div className="text-sm font-medium text-foreground mb-4">Weakness Map</div>
                {[
                  { name: "Knight Forks", severity: 85, color: "from-rose to-amber" },
                  { name: "Pawn Structure", severity: 62, color: "from-amber to-rose" },
                  { name: "Endgame Technique", severity: 45, color: "from-blue-electric to-cyan" },
                  { name: "Opening Theory", severity: 30, color: "from-emerald to-cyan" },
                ].map((weakness) => (
                  <div key={weakness.name} className="bg-foreground/[0.03] rounded-xl p-3 border border-foreground/5">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs text-foreground/50">{weakness.name}</span>
                      <span className="text-xs text-foreground/30">{weakness.severity}%</span>
                    </div>
                    <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${weakness.color}`} style={{ width: `${weakness.severity}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold tracking-widest uppercase text-violet mb-3 block">Pattern Detection</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Your Personal <span className="gradient-text">Weakness Map</span>
              </h2>
              <p className="text-foreground/40 leading-relaxed mb-6">
                ChessMazes doesn&apos;t just analyze one game — it looks across all your games to find 
                patterns. If you keep missing knight forks or struggling with rook endgames, 
                we&apos;ll know and build training around it.
              </p>
              <ul className="space-y-3">
                {["Cross-game pattern analysis", "Persistent weakness memory", "Severity scoring for each weakness", "Automatic re-evaluation as you improve"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/50">
                    <span className="text-emerald">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
