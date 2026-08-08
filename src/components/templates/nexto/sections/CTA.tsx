function ChevronArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="nexto-section" id="contact">
      <div className="nexto-wrap">
        <div
          className="relative bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[var(--card-shadow)] text-[var(--text-main)] rounded-[28px] p-[40px_24px] sm:p-[64px_56px] overflow-hidden isolate transition-colors duration-500"
        >
          <div className="nexto-glow-purple absolute rounded-full -z-10" />
          <div className="nexto-glow-pink absolute rounded-full -z-10" />

          <div
            className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-end"
          >
            <div>
              <span className="nexto-eyebrow transition-colors duration-500">
                let&apos;s build
              </span>
              <h2 className="mt-[18px] text-[clamp(34px,4vw,54px)] font-medium tracking-[-1.6px] leading-[1.05] transition-colors duration-500">
                Ready to build
                <br />
                something{" "}
                <em className="italic font-light nexto-gradient-text">
                  amazing?
                </em>
              </h2>
              <p className="text-[15px] leading-[1.6] mt-[18px] max-w-[380px] text-[var(--text-secondary)] transition-colors duration-500">
                Get a custom website or web application without the unnecessary agency markup. Tell us about your project, and we&apos;ll send back a clear proposal and timeline within 48 hours.
              </p>
            </div>

            <div className="flex flex-col gap-[14px] items-start">
              <a
                href="/contact"
                className="inline-flex items-center gap-[12px] bg-[var(--arrow-circ-bg)] text-[var(--arrow-circ-text)] text-[15px] font-medium rounded-[40px] py-[7px] pr-[22px] pl-[7px] transition-all hover:scale-[1.02] hover:shadow-lg duration-500"
              >
                <span
                  className="w-8 h-8 rounded-full bg-[var(--pill-light-bg)] text-[var(--pill-light-text)] inline-flex items-center justify-center transition-colors duration-500"
                >
                  <ChevronArrow />
                </span>
                Start your project
              </a>
              <a
                href="https://www.instagram.com/growise.software"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13.5px] opacity-70 hover:opacity-100 transition-opacity text-[var(--text-main)]"
              >
                or DM @growise.software
                <ChevronArrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
