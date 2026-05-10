import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Join the Team",
  description: "Join us in building the future of chess training. We're looking for passionate developers and chess enthusiasts.",
  openGraph: {
    title: "Careers at ChessMazes — Build the Future of Chess",
    description: "Remote-first team of AI, game theory, and product experts. If you love chess and building great products, join us.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Careers at ChessMazes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at ChessMazes — Build the Future of Chess",
    description: "Remote-first team of AI, game theory, and product experts. Join us.",
    images: ["/og-image.jpg"],
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24">
      <section className="max-w-5xl mx-auto px-6 sm:px-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="text-xs font-medium text-foreground/70 tracking-wide uppercase">Careers</span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-8">Join the <span className="gradient-text">Future of Chess</span></h1>
        <p className="text-xl text-foreground/60 mb-16 leading-relaxed max-w-2xl">
          We&apos;re building a small, remote-first team of experts in AI, game theory, and product design. 
          If you love chess and want to build the ultimate improvement platform, we want to hear from you.
        </p>

        <div className="space-y-6 mb-20">
          <div className="glass-card p-10 text-center border-dashed border-foreground/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">No open positions right now</h3>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              We aren&apos;t actively hiring at this moment, but we&apos;re always looking for 
              exceptional talent. Send your portfolio to careers@chessmazes.com
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-12 pt-20 border-t border-foreground/5">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Remote First</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">Our team is distributed across the globe, working from where they are most productive.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Chess Enthusiasts</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">We provide premium memberships to all major chess platforms and support your improvement journey.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
