export default function About() {
  return (
    <>
      {/* About / SEO Section */}
      <section className="py-12 md:py-20 px-4 sm:px-5 border-t border-white/8 w-full overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
            Instant Reel Makers in Hyderabad
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed">
            Quick Moments helps Hyderabad brands and creators shoot and publish short-form
            videos quickly. Whether it&apos;s a product launch, a brand event, or an Instagram
            content day, our team offers fast on-site production, transparent reel pricing,
            and direct WhatsApp booking support. We&apos;re the modern alternative to slow
            production studios — capture any moment and post it today.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-28 px-4 sm:px-5 w-full overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/20 rounded-full blur-[100px] -z-10" />

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
            Ready to start?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Book your Hyderabad session today and get your first reel delivered within 24 hours.
          </p>
          <a
            href="https://wa.me/917075807622"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#E8392A] hover:bg-[#c72d1e] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-xl shadow-red-900/40"
          >
            Book a Session
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
      </section>
    </>
  );
}
