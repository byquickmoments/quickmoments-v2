"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Hidden on mobile — bottom nav handles navigation there
    <header
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-2xl border-b border-white/8 shadow-xl shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
              <circle cx="18" cy="18" r="7" fill="#E8392A" />
              <circle cx="18" cy="18" r="3" fill="white" />
              <rect x="6" y="6" width="24" height="24" rx="5" stroke="#111" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <span className="text-white font-bold text-[1rem] tracking-tight">QuickMoments</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-7">
          {[
            { label: "Work", href: "#work" },
            { label: "Services", href: "#services" },
            { label: "Pricing", href: "#pricing" },
            { label: "For Creators", href: "/partners" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white/55 text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/917075807622"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
