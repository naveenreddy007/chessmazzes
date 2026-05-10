import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chessmazes.com"),
  title: "ChessMazes — AI Chess Improvement Coach | Fix Your Mistakes, Improve Daily",
  description:
    "ChessMazes is a structured chess improvement platform that analyzes real games, detects recurring weaknesses, assigns personalized training, and tracks improvement over time.",
  keywords: [
    "chess training",
    "chess improvement",
    "AI chess coach",
    "chess puzzles",
    "weakness detection",
    "chess analysis",
    "personalized chess training",
  ],
  openGraph: {
    title: "ChessMazes — Fix Your Chess Mistakes. Improve Every Day.",
    description:
      "Turn your real game mistakes into personalized training plans. AI-powered weakness detection and structured improvement.",
    type: "website",
    siteName: "ChessMazes",
    url: "https://chessmazes.com",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ChessMazes — AI Chess Improvement Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessMazes — AI Chess Improvement Coach",
    description:
      "Turn your real game mistakes into personalized training plans.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <FloatingBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
