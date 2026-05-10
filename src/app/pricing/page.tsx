import type { Metadata } from "next";
import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials"; // TODO: Uncomment when app is live
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing — Plans for Every Player",
  description:
    "Choose the ChessMazes plan that fits your chess improvement goals. Free, Basic, Standard, Pro, and Elite plans available.",
  openGraph: {
    title: "ChessMazes Pricing — AI Chess Coaching for Every Budget",
    description: "From free to elite — find the perfect plan for your chess improvement journey. Cancel anytime, early-bird discounts available.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ChessMazes Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessMazes Pricing — AI Chess Coaching for Every Budget",
    description: "From free to elite — find the perfect plan for your chess improvement journey.",
    images: ["/og-image.jpg"],
  },
};

export default function PricingPage() {
  return (
    <div>
      {/* Premium Hero */}
      <section className="relative min-h-[70vh] xl:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-20">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px] animate-pulse-glow" />
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
            Pricing{" "}
            <span className="gradient-text">Coming Soon</span>
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed mb-10">
            We&apos;re finalizing our plans to bring you the best value in AI chess coaching. 
            Join the waitlist to get notified and receive exclusive early-bird pricing.
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
            {[
              { icon: "🛡️", text: "Cancel Anytime" },
              { icon: "⚡", text: "Early Bird Discount" },
              { icon: "💰", text: "Free Tier Included" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-foreground/60">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <Pricing />
      {/* <Testimonials /> */}{/* TODO: Uncomment when app is live */}
      <FinalCTA />
    </div>
  );
}
