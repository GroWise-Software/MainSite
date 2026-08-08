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

const avatars = [
  { initials: "RM", style: { background: "linear-gradient(135deg,#F7B2FB,#786EF1)" } },
  { initials: "JK", style: { background: "linear-gradient(135deg,#FFE9D6,#FF9A5E)" } },
  { initials: "AT", style: { background: "linear-gradient(135deg,#DDF3FF,#5588FB)" } },
  { initials: "+24", style: { background: "#ffffff", color: "#111", fontSize: 11 } },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center relative min-h-[calc(100vh-84px)] px-5 pt-10 pb-[60px]">
      <div className="max-w-[700px] w-full flex flex-col items-center">
        <p className="text-[15px] text-[var(--text-secondary)] font-normal mb-[14px] transition-colors duration-500">
          Custom websites without the unnecessary agency markup.
        </p>

        <div className="relative inline-block mb-[18px]">
          <span className="nexto-gradient-text nexto-icon nexto-float-cloud absolute">
            cloud
          </span>
          <span className="nexto-gradient-text nexto-icon nexto-float-star absolute">
            favorite
          </span>
          <h1 className="text-[clamp(34px,5vw,52px)] font-medium tracking-[-1.5px] leading-[1.08] text-[var(--text-main)] uppercase transition-colors duration-500">
            We build websites
            <br />
            that work.
          </h1>
        </div>

        <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7] max-w-[470px] mx-auto mb-7 transition-colors duration-500">
          Custom websites, full-stack applications and digital solutions built for{" "}
          <span className="inline-flex items-center bg-[var(--eyebrow-bg)] text-[12.5px] font-semibold px-3 py-[2px] rounded-[6px] text-[var(--text-main)] transition-colors duration-500">
            businesses
          </span>
          {" "}that want to stand out{" "}
          <span className="inline-flex items-center bg-[var(--eyebrow-bg)] text-[12.5px] font-semibold px-3 py-[2px] rounded-[6px] text-[var(--text-main)] transition-colors duration-500">
            online
          </span>
          .
        </p>

        <div className="flex items-center gap-[18px] flex-wrap justify-center mb-9">
          <a href="/contact" className="nexto-pill-dark lg">
            <span className="nexto-arrow-circ lg">
              <ChevronArrow />
            </span>
            Start a Project
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-[10px] text-[14px] font-medium text-[var(--text-main)] hover:opacity-70 transition-opacity"
          >
            <span className="nexto-icon w-[30px] h-[30px] rounded-full bg-[var(--pill-light-bg)] border border-[var(--card-border)] inline-flex items-center justify-center text-[18px] text-[var(--text-main)] shadow-[var(--pill-light-shadow)]">
              play_arrow
            </span>
            View Our Work
          </a>
        </div>

        <div className="inline-flex items-center gap-[14px] rounded-[40px] px-[18px] py-[6px] pl-[6px] bg-[var(--eyebrow-bg)] border border-[var(--card-border)] backdrop-blur-[8px] transition-colors duration-500">
          <div className="flex">
            {avatars.map((a, i) => (
              <span
                key={i}
                className={`w-7 h-7 rounded-full inline-flex items-center justify-center text-white text-[11px] font-bold border-2 border-[var(--bg-page)] transition-colors duration-500 ${i > 0 ? "-ml-2" : ""}`}
                style={a.style}
              >
                {a.initials}
              </span>
            ))}
          </div>
          <div className="flex flex-col leading-[1.3]">
            <strong className="text-[12.5px] font-semibold text-[var(--text-main)] transition-colors duration-500">
              120+ projects delivered
            </strong>
            <span className="text-[11.5px] text-[var(--text-secondary)] transition-colors duration-500">
              for growing businesses and forward-thinking brands.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
