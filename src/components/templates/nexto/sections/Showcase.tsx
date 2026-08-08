const works = [
  {
    title: "Bloom & Breeze Cafe — digital storefront.",
    tags: ["web app", "business"],
    bg: "url('/bloomandbreeze.png') center/cover no-repeat",
    link: "https://bloomandbrreezecafe.com",
    tall: true,
  },
  {
    title: "Meenakshi Boys Hostel — student living.",
    tags: ["website", "business"],
    bg: "url('/meenakshi.png') center/cover no-repeat",
  },
  {
    title: "Re Active— Physiotherapy clinic",
    tags: ["software", "dashboard"],
    bg: "url('/REACTIVE.PNG') center/cover no-repeat",
  },
];

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

export default function Showcase() {
  return (
    <section className="nexto-section" id="showcase">
      <div className="nexto-wrap">
        <div className="nexto-section-head">
          <div>
            <span className="nexto-eyebrow">portfolio</span>
            <h2 className="mt-[18px]">
              Recent projects we&apos;ve{" "}
              <em className="italic font-light">
                built
              </em>{" "}
              for our clients.
            </h2>
          </div>
          <a href="#" className="nexto-pill-light">
            View All Projects <ChevronArrow />
          </a>
        </div>

      <div className="nexto-marquee-container mt-10">
        <div className="nexto-marquee-track">
          {[...works, ...works, ...works, ...works].map((w, i) => (
            <a
              key={i}
              href={w.link || "#"}
              target={w.link ? "_blank" : "_self"}
              rel={w.link ? "noopener noreferrer" : ""}
              className="nexto-marquee-card group"
              style={{ background: w.bg }}
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h4 className="text-[20px] font-semibold tracking-[-0.5px]">
                      {w.title}
                    </h4>
                    <div className="flex gap-[6px] mt-2">
                      {w.tags.map((t) => (
                        <span
                          key={`${i}-${t}`}
                          className="text-[11.5px] font-medium px-3 py-[4px] rounded-[40px] backdrop-blur-md bg-white/[0.18]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className="nexto-icon w-[38px] h-[38px] rounded-full bg-white/20 text-white inline-flex items-center justify-center text-[20px] transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                  >
                    north_east
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
