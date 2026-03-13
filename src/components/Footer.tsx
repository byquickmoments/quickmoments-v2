export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <circle cx="18" cy="18" r="7" fill="#E8392A" />
                  <circle cx="18" cy="18" r="3" fill="white" />
                  <rect x="6" y="6" width="24" height="24" rx="5" stroke="#111" strokeWidth="2.5" fill="none" />
                </svg>
              </div>
              <span className="text-white font-bold text-base tracking-tight">QuickMoments</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The modern production studio for brands that move fast. We capture, edit, and deliver premium content in real-time.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-1">
              {[
                {
                  href: "https://www.instagram.com/byquickmoments/",
                  icon: (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
                  ),
                },
                {
                  href: "https://x.com/byquickmoments",
                  icon: (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
                  ),
                },
                {
                  href: "mailto:hello@quickmoments.com",
                  icon: (
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
                  ),
                },
              ].map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/50 hover:bg-white/15 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <p className="text-white/90 font-semibold text-sm mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Work", href: "#work" },
                { label: "Services", href: "#services" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "https://wa.me/917075807622" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/45 text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <p className="text-white/90 font-semibold text-sm mb-5">Legal</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/45 text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/8">
          <p className="text-white/30 text-xs">
            © {year} Quick Moments. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
