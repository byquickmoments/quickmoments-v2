export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-5 overflow-hidden w-full max-w-full
      pt-10 pb-10 md:pt-24 md:pb-16">

      {/* Layered ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(600px,100vw)] h-[500px] bg-blue-950/25 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(400px,100vw)] h-[300px] bg-indigo-950/20 rounded-full blur-[100px]" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm text-white/75 text-xs font-medium px-4 py-2 rounded-full mb-8 shadow-inner">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8392A] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E8392A]" />
          </span>
          Serving Hyderabad businesses
        </div>

        {/* Headline */}
        <h1 className="font-extrabold leading-[1.04] tracking-tighter mb-5
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-white">Premium reels,</span>
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
          >
            delivered instantly.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/50 text-base md:text-lg font-normal max-w-xl leading-relaxed mb-9">
          We shoot, edit, and deliver high-converting short-form content across Hyderabad.
          No waiting weeks. Capture the moment — post it today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href="https://wa.me/917075807622"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E8392A] hover:bg-[#d02f21] text-white font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-red-900/40"
          >
            Book Now
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/partners"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/65 text-base font-medium px-7 py-3.5 rounded-xl border border-white/12 hover:border-white/25 hover:text-white/90 hover:bg-white/[0.04] transition-all duration-200"
          >
            Join as Partner
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10 pt-8 border-t border-white/[0.07] w-full justify-center">
          {[
            { value: "200+", label: "Reels Delivered" },
            { value: "48h", label: "Avg. Turnaround" },
            { value: "50+", label: "Brand Clients" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-white font-bold text-xl md:text-2xl tracking-tight">{value}</span>
              <span className="text-white/40 text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Preview card */}
      <div className="relative z-10 mt-12 w-full max-w-2xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.09] shadow-2xl shadow-black/70 bg-zinc-900/60 backdrop-blur-sm">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900/80 border-b border-white/[0.07]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-3 text-white/25 text-xs font-mono tracking-wider">quickmoments_final_v2.mp4</span>
          </div>

          {/* Preview visual */}
          <div className="relative h-48 md:h-72 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="glowCenter" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#e8f4fd" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#000" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="1200" height="400" fill="url(#glowCenter)" />
              <path d="M0 400 Q50 300 100 350 Q130 200 170 300 Q200 150 240 280 Q270 100 310 250 Q350 80 390 230 Q430 60 470 220 Q510 40 550 200 Q600 30 640 190 Q680 50 720 210 Q760 70 800 230 Q840 100 880 260 Q920 150 960 300 Q1000 200 1040 340 Q1080 250 1120 370 Q1160 300 1200 400 Z" fill="#0d0d0d" />
              <path d="M0 400 Q80 360 160 375 Q240 340 320 368 Q400 320 480 355 Q560 298 640 348 Q720 308 800 365 Q880 325 960 375 Q1040 345 1120 380 Q1160 365 1200 400 Z" fill="#080808" />
            </svg>

            {/* Floating badges */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/55 backdrop-blur-md border border-white/[0.1] rounded-full px-3.5 py-1.5 text-sm text-white/85 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Ready for Export
            </div>
            <div className="absolute top-4 left-4 bg-black/55 backdrop-blur-md border border-white/[0.1] rounded-full px-3 py-1 text-xs text-white/50 font-mono">
              00:30
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
              <div className="h-full bg-[#E8392A] w-[65%] rounded-full" />
            </div>
          </div>
        </div>
        {/* Card shadow blur */}
        <div className="absolute -inset-2 md:-inset-4 bg-red-900/10 rounded-3xl blur-2xl -z-10" />
      </div>
    </section>
  );
}
