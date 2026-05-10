import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description: "Have questions about ChessMazes? Reach out to our team for support, partnerships, or academy inquiries.",
  openGraph: {
    title: "Contact ChessMazes — Let's Talk About Your Chess Journey",
    description: "Whether you're a player looking to improve or an academy seeking AI integration, we're here to help.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact ChessMazes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ChessMazes — Let's Talk About Your Chess Journey",
    description: "Whether you're a player or an academy, we're here to help.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
