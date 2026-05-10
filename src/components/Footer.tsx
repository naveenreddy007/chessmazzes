"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Academy", href: "/academy" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  { label: "Twitter", icon: "𝕏", href: "https://twitter.com" },
  { label: "Discord", icon: "💬", href: "https://discord.com" },
  { label: "YouTube", icon: "▶", href: "https://youtube.com" },
  { label: "Instagram", icon: "📷", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-foreground/5 z-10 bg-background/40 backdrop-blur-md">
      {/* Gradient top border overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 relative overflow-hidden rounded-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="ChessMazes Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Chess<span className="gradient-text">Mazes</span>
              </span>
            </Link>
            <p className="text-foreground/60 leading-relaxed max-w-xs mb-8 text-sm sm:text-base">
              The ultimate AI chess coaching platform. We analyze your real game mistakes and create a personalized path to mastery.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300"
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-foreground/50 hover:text-foreground hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / Status */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Status</h4>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/10 border border-amber/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                <span className="text-[10px] font-bold text-amber uppercase tracking-wider">Coming Soon</span>
              </div>
              <p className="text-xs text-foreground/50 leading-relaxed">
                App is currently in private beta. Join the waitlist for early access.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-medium text-foreground/40">
            © {new Date().getFullYear()} ChessMazes. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Built with</span>
              <span className="text-lg">♟</span>
            </div>
            <Link 
              href="/contact" 
              className="text-[10px] font-bold text-foreground/60 uppercase tracking-widest hover:text-foreground transition-colors"
            >
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
