"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: (active: boolean) => (
      <svg className="w-[22px] h-[22px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.9} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "work",
    label: "Reels",
    href: "/reels",
    icon: (active: boolean) => (
      <svg className="w-[22px] h-[22px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.9} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    id: "book",
    label: "Book",
    href: "https://wa.me/917075807622",
    icon: (active: boolean) => (
      <svg className={`w-[22px] h-[22px] ${active ? "text-white" : "text-white"}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    isCenter: true,
  },
  {
    id: "services",
    label: "Services",
    href: "/#services",
    icon: (active: boolean) => (
      <svg className="w-[22px] h-[22px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.9} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "creators",
    label: "Creators",
    href: "/partners",
    icon: (active: boolean) => (
      <svg className="w-[22px] h-[22px]" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.9} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const routeActiveSection = useMemo(() => {
    if (pathname === "/reels") return "work";
    if (pathname === "/partners") return "creators";
    return "home";
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      { id: "work", label: "work" },
      { id: "services", label: "services" },
      { id: "pricing", label: "pricing" },
      { id: "for-creators", label: "creators" },
    ];

    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id, label }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveSection(label);
      }, { threshold: 0.35 });
      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      if (window.scrollY < 300) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const currentSection = pathname === "/" ? activeSection : routeActiveSection;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full">
      <div
        className="bg-black/90 backdrop-blur-2xl border-t border-white/[0.08] px-2 w-full"
        style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
      >
        <div className="grid grid-cols-5 items-end h-16 w-full max-w-md mx-auto gap-1">
          {navItems.map((item) => {
            const isExternal = item.href.startsWith("http");
            const isActive =
              item.id === "creators" ? pathname === "/partners" :
              item.id === "work" ? pathname === "/reels" :
              item.id === currentSection;

            if (item.isCenter) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center -mt-4 nav-tap"
                >
                  <div className="w-[50px] h-[50px] rounded-full bg-[#E8392A] flex items-center justify-center shadow-lg shadow-red-900/60 border-[3px] border-black hover:bg-[#d02f21] active:scale-95 transition-all duration-150">
                    {item.icon(false)}
                  </div>
                  <span className="text-white/60 text-[9px] font-semibold mt-0.5 tracking-wide uppercase leading-none">{item.label}</span>
                </a>
              );
            }

            if (isExternal) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative min-w-0 flex flex-col items-center justify-center gap-0.5 py-1 nav-tap"
                >
                  {isActive && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-white" />
                  )}
                  <span className={`transition-all duration-200 ${isActive ? "text-white scale-105" : "text-white/35"}`}>
                    {item.icon(isActive)}
                  </span>
                  <span className={`text-[9px] font-semibold tracking-wide uppercase transition-colors duration-200 leading-none ${isActive ? "text-white" : "text-white/35"}`}>
                    {item.label}
                  </span>
                </a>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                className="relative min-w-0 flex flex-col items-center justify-center gap-0.5 py-1 nav-tap"
              >
                {isActive && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-white" />
                )}
                <span className={`transition-all duration-200 ${isActive ? "text-white scale-105" : "text-white/35"}`}>
                  {item.icon(isActive)}
                </span>
                <span className={`text-[9px] font-semibold tracking-wide uppercase transition-colors duration-200 leading-none ${isActive ? "text-white" : "text-white/35"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
