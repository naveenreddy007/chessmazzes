import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ChessMazes | Your Data Security",
  description: "Learn how ChessMazes handles and protects your chess game data and personal information.",
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "Data We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, upload PGN files for analysis, or communicate with us. This includes your username, email address, and chess game history.",
    },
    {
      title: "How We Use Your Data",
      content: "The primary purpose of data collection is to provide you with personalized AI coaching. We use your game history to build your Weakness Map, generate targeted puzzles, and track your improvement trends over time.",
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your information. Your game analysis data is stored securely and is only used to provide you with coaching insights.",
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information at any time. You can also request a copy of your game analysis data through your account settings.",
    },
  ];

  return (
    <div className="min-h-[85vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24">
      <section className="max-w-4xl mx-auto px-6 sm:px-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Privacy <span className="gradient-text">Policy</span></h1>
        <p className="text-white/40 mb-12 uppercase tracking-widest text-xs font-medium">Last Updated: April 29, 2026</p>
        
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              <p className="text-white/50 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-sm text-white/30">
          For any privacy-related questions, please contact us at privacy@chessmazes.com
        </div>
      </section>
    </div>
  );
}
