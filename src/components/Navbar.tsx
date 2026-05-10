"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Academy", href: "/academy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface/85 backdrop-blur-xl border-b border-foreground/5 shadow-lg shadow-foreground/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 relative overflow-hidden rounded-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="ChessMazes Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Chess<span className="gradient-text">Mazes</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 relative group ${
                    isActive ? "text-primary" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl border border-foreground/10 bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="text-sm group-hover:scale-110 transition-transform"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </motion.span>
            </button>
            <Link
              href="/pricing"
              className="btn-primary !px-5 !py-2.5 !text-sm"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-foreground/70"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-foreground/70"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-foreground/70"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl font-medium transition-colors block ${
                      pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 border-t border-foreground/10 flex flex-col gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-3 py-3 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground/80 font-medium transition-all"
                >
                  <span className="text-lg">{theme === "dark" ? "☀️" : "🌙"}</span>
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </button>
                <Link
                  href="/pricing"
                  className="btn-primary text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
