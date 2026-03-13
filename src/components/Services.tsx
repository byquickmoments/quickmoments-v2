const services = [
  {
    num: "01",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Same-Day Delivery",
    desc: "We shoot and edit on-site. You get the final files before we leave the building.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Viral Optimization",
    desc: "Hooks, pacing, and audio selection optimized for current algorithm trends.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile-First Quality",
    desc: "Shot on cinema-grade gear, mastered for vertical phone screens.",
  },
  {
    num: "04",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Instant Revisions",
    desc: "Need a change? We make adjustments in real-time right next to you.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-28 px-4 sm:px-5 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#E8392A] font-semibold text-xs uppercase tracking-[0.2em] mb-3">What We Do</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-sm md:max-w-none">
              Why brands<br className="md:hidden" /> choose us
            </h2>
            <p className="text-white/45 text-sm md:text-base max-w-xs md:max-w-sm leading-relaxed">
              A production crew that moves as fast as social media demands.
            </p>
          </div>
        </div>

        {/* Mobile: vertical list / Desktop: 4-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 hover:border-white/[0.18] hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-white/[0.04] font-black text-5xl select-none group-hover:text-white/[0.07] transition-colors duration-300">
                {s.num}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/60 mb-5 group-hover:bg-[#E8392A]/20 group-hover:text-[#E8392A] transition-all duration-300">
                {s.icon}
              </div>

              <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
