"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: (active: boolean) => (
      <svg
        className="w-[22px] h-[22px]"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={active ? 0 : 1.9}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2 7-7 7 7 2 2M5 10v10a1 1 0 001 1h3m8 0h3a1 1 0 001-1V10"
        />
      </svg>
    ),
  },
  {
    id: "work",
    label: "Reels",
    href: "/reels",
    icon: (active: boolean) => (
      <svg
        className="w-[22px] h-[22px]"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={active ? 0 : 1.9}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="7" y1="4" x2="7" y2="20" />
        <line x1="17" y1="4" x2="17" y2="20" />
      </svg>
    ),
  },
  {
    id: "book",
    label: "Book",
    href: "https://wa.me/917075807622",
    icon: (_active: boolean) => (
      <svg
        className="w-[22px] h-[22px] text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    isCenter: true,
  },
  {
    id: "services",
    label: "Services",
    href: "/#services",
    icon: (active: boolean) => (
      <svg
        className="w-[22px] h-[22px]"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={active ? 0 : 1.9}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "creators",
    label: "Creators",
    href: "/partners",
    icon: (active: boolean) => (
      <svg
        className="w-[22px] h-[22px]"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={active ? 0 : 1.9}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a6.5 6.5 0 0113 0" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname === "/reels") setActiveSection("work");
      else if (pathname === "/partners") setActiveSection("creators");
      else setActiveSection("home");
      return;
    }

    const sections = [
      "home",
      "services",
      "work",
      "pricing",
      "for-creators",
      "about",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 200) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-[60] pb-[env(safe-area-inset-bottom)]">
      <div className="bg-black/90 backdrop-blur-xl border-t border-white/10 px-2 py-2">
        <div className="flex items-center justify-between h-14 w-full max-w-md mx-auto">
          {navItems.map((item) => {
            const isExternal = item.href.startsWith("http");

            const isActive =
              item.id === "creators"
                ? pathname === "/partners"
                : item.id === "work"
                ? pathname === "/reels"
                : item.id === activeSection;

            if (item.isCenter) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center -mt-5"
                >
                  <div className="w-[52px] h-[52px] rounded-full bg-[#E8392A] flex items-center justify-center border-4 border-black shadow-lg">
                    {item.icon(false)}
                  </div>

                  <span className="text-white/60 text-[9px] font-semibold mt-1 uppercase">
                    {item.label}
                  </span>
                </a>
              );
            }

            const Tag = isExternal ? "a" : Link;
            const props = isExternal
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: item.href };

            return (
              <Tag
                key={item.id}
                {...(props as any)}
                className="flex flex-col items-center gap-1 py-1 px-2"
              >
                <span
                  className={`transition-all ${
                    isActive ? "text-white" : "text-white/40"
                  }`}
                >
                  {item.icon(isActive)}
                </span>

                <span
                  className={`text-[9px] font-semibold uppercase ${
                    isActive ? "text-white" : "text-white/40"
                  }`}
                >
                  {item.label}
                </span>
              </Tag>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
