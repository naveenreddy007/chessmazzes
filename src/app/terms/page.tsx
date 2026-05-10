import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Usage Guidelines",
  description: "The official terms of service for using the ChessMazes platform and AI coaching services.",
  openGraph: {
    title: "ChessMazes Terms of Service",
    description: "Read our terms of service for using the ChessMazes AI chess coaching platform.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ChessMazes Terms of Service" }],
  },
};

export default function TermsPage() {
  const terms = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using ChessMazes, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
    },
    {
      title: "User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
    },
    {
      title: "Intellectual Property",
      content: "The ChessMazes platform, including its AI models, code, and design, is the property of ChessMazes and is protected by intellectual property laws.",
    },
    {
      title: "Prohibited Conduct",
      content: "Users are prohibited from using the service for any illegal purpose, or to interfere with or disrupt the service or servers.",
    },
    {
      title: "Termination",
      content: "We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever.",
    },
  ];

  return (
    <div className="min-h-[85vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24">
      <section className="max-w-4xl mx-auto px-6 sm:px-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Terms of <span className="gradient-text">Service</span></h1>
        <p className="text-foreground/60 mb-12 uppercase tracking-widest text-xs font-medium">Last Updated: April 29, 2026</p>
        
        <div className="space-y-12">
          {terms.map((term) => (
            <div key={term.title} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">{term.title}</h2>
              <p className="text-foreground/70 leading-relaxed">{term.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/5 text-sm text-foreground/50">
          If you have any questions about these Terms, please contact us at legal@chessmazes.com
        </div>
      </section>
    </div>
  );
}
