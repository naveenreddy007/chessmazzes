import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy — Empower Your Chess School",
  description: "Give your students access to the most advanced AI-powered chess training platform. Track progress, manage curriculum, and watch them improve.",
  openGraph: {
    title: "ChessMazes Academy — AI Training for Chess Schools",
    description: "Manage 5 or 500 students with powerful dashboards, AI-driven training, and detailed progress tracking. 98% satisfaction rate.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ChessMazes Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessMazes Academy — AI Training for Chess Schools",
    description: "Manage 5 or 500 students with powerful dashboards and AI-driven training.",
    images: ["/og-image.png"],
  },
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
