const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Earn More",
    desc: "Get paid premium rates for short, high-impact shoots. No editing required.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Shoot & Go",
    desc: "Focus on capturing the content. Upload the raw files and you're done.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Top Brands",
    desc: "Work with exciting clients and build your portfolio with big names.",
  },
];

export default function ForCreators() {
  return (
    <section id="for-creators" className="py-24 px-5 bg-zinc-950/50 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E8392A] font-semibold text-sm uppercase tracking-widest mb-3">For Creators</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Shoot content.<br />
            <span className="text-white/35">Get paid instantly.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            Join our Hyderabad creator network. We handle sales, editing, and client management while you focus on shooting.
          </p>
          <a
            href="https://wa.me/917075807622"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            Apply as Partner
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-white/8 bg-white/[0.04] p-7 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#E8392A]/15 flex items-center justify-center text-[#E8392A] mb-5 group-hover:bg-[#E8392A]/25 transition-all duration-300">
                {b.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center rounded-2xl border border-white/8 bg-white/[0.03] p-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to join the team?
          </h3>
          <p className="text-white/50 text-base mb-8 max-w-sm mx-auto">
            We are currently accepting partner applications only for Hyderabad.
          </p>
          <a
            href="https://wa.me/917075807622"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#E8392A] hover:bg-[#c72d1e] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-xl shadow-red-900/30"
          >
            Start Application
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
