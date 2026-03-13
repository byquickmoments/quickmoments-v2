const plans = [
  {
    name: "Single Reel",
    price: "₹1,999",
    per: "per reel",
    features: ["1 Edited Reel", "On-Site Shoot", "24h Turnaround", "WhatsApp Delivery"],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "3 Reels Pack",
    price: "₹5,999",
    per: "save ₹997",
    features: ["3 Edited Reels", "Priority Delivery", "Raw Footage Included", "Content Direction"],
    highlighted: true,
    badge: "Most Popular",
    cta: "Get Started",
  },
  {
    name: "5 Reels Pack",
    price: "₹9,999",
    per: "save ₹995",
    features: ["5 Edited Reels", "Content Direction", "Fast Turnaround", "Raw Footage"],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Custom",
    price: "+₹1k",
    per: "per extra reel",
    features: ["6+ Reels", "Priority Crew", "Dedicated Support", "Custom SLA"],
    highlighted: false,
    cta: "Contact Us",
  },
];

function Check({ red }: { red?: boolean }) {
  return (
    <svg className={`w-3.5 h-3.5 flex-shrink-0 ${red ? "text-[#E8392A]" : "text-white/30"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#E8392A] font-semibold text-xs uppercase tracking-[0.2em] mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Transparent Pricing
          </h2>
          <p className="text-white/45 text-sm md:text-base">
            No hidden fees. No surprises. Just great reels.
          </p>
        </div>

        {/* Cards — 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-5 md:p-7 flex flex-col gap-5 transition-all duration-300 ${
                plan.highlighted
                  ? "border-[1.5px] border-[#E8392A] bg-[#E8392A]/[0.07] shadow-lg shadow-red-900/20"
                  : "border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.15] hover:bg-white/[0.06]"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-[#E8392A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-md tracking-wide uppercase">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Price */}
              <div>
                <p className="text-white/40 text-xs font-medium mb-1.5 uppercase tracking-wider">{plan.name}</p>
                <p className="text-white font-extrabold tracking-tight leading-none
                  text-2xl md:text-3xl">{plan.price}</p>
                <p className={`text-xs mt-1 font-medium ${plan.highlighted ? "text-[#E8392A]/80" : "text-white/30"}`}>{plan.per}</p>
              </div>

              {/* Divider */}
              <div className={`h-px ${plan.highlighted ? "bg-[#E8392A]/20" : "bg-white/[0.06]"}`} />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check red={plan.highlighted} />
                    <span className="text-white/60 text-xs md:text-sm leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/917075807622"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center text-xs md:text-sm font-semibold py-2.5 md:py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  plan.highlighted
                    ? "bg-[#E8392A] text-white hover:bg-[#c72d1e] shadow-md"
                    : "bg-white/[0.07] text-white/80 hover:bg-white/[0.13]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
