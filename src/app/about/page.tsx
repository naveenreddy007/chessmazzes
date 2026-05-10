import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — ChessMazes | Our Mission",
  description: "Learn about the mission behind ChessMazes: making high-level chess coaching accessible to everyone through AI.",
};

export default function AboutPage() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24">
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-electric/10 rounded-full blur-[120px] animate-float" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-xs font-medium text-white/70 tracking-wide uppercase">Our Story</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
            The Mission Behind <span className="gradient-text">ChessMazes</span>
          </h1>
          
          <div className="space-y-6 text-lg text-white/60 leading-relaxed">
            <p>
              ChessMazes was born out of a simple frustration: private chess coaching is expensive, 
              and traditional chess apps are too generic. Most players get stuck at a plateau because 
              they don&apos;t know *why* they keep making the same mistakes.
            </p>
            <p>
              We built an AI-first platform that acts like a persistent human coach. It remembers your 
              past games, identifies systemic weaknesses in your play, and creates a training plan 
              designed specifically to fix *your* blind spots.
            </p>
            <p>
              Our goal is to democratize elite chess training. Whether you&apos;re a beginner learning 
              the ropes or a club player pushing for a title, ChessMazes provides the structured 
              improvement path you need.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/5">
            {[
              { label: "Founded", value: "2024" },
              { label: "Community", value: "2,000+" },
              { label: "AI Analyzed Games", value: "1M+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/30 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
