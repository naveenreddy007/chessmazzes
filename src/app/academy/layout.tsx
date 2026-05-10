import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy Dashboard — Empower Your Chess School",
  description: "Give your chess academy a dedicated Organization Dashboard. Help your students improve faster with AI-powered weakness detection and centralized progress tracking.",
  openGraph: {
    title: "ChessMazes Academy — Organization Dashboard for Coaches",
    description: "Equip your chess school with a powerful Organization Dashboard. Track student progress, identify weaknesses instantly, and provide targeted AI training.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ChessMazes Academy Dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessMazes Academy — Organization Dashboard for Coaches",
    description: "Equip your chess school with a powerful Organization Dashboard to track student progress and provide targeted AI training.",
    images: ["/og-image.jpg"],
  },
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
