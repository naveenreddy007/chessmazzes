import type { Metadata } from "next";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Blog — ChessMazes | Insights & Strategy",
  description: "Read the latest insights on chess improvement, AI coaching, and training strategies.",
};

export default function BlogPage() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24">
      <section className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="text-xs font-medium text-foreground/70 tracking-wide uppercase">Insights</span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-12">Latest from <span className="gradient-text">ChessMazes</span></h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              title: "How AI is changing chess improvement",
              date: "April 25, 2026",
              category: "Technology",
              excerpt: "The traditional way of studying chess is being disrupted by personalized AI coaching models...",
            },
            {
              title: "5 common blunders in the Italian Game",
              date: "April 20, 2026",
              category: "Strategy",
              excerpt: "Analyzing thousands of games shows that club players keep making the same errors in early development...",
            },
          ].map((post) => (
            <div key={post.title} className="glass-card p-8 group hover:border-foreground/20 transition-all duration-300">
              <span className="text-[10px] font-bold text-blue-electric uppercase tracking-widest mb-4 block">{post.category}</span>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-glow transition-colors">{post.title}</h3>
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
              <div className="text-xs text-foreground/40">{post.date}</div>
            </div>
          ))}
        </div>

        <div className="text-center py-20 border-t border-foreground/5">
          <h2 className="text-2xl font-bold text-foreground mb-4">More articles coming soon</h2>
          <p className="text-foreground/60">Subscribe to our newsletter for the latest updates.</p>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
