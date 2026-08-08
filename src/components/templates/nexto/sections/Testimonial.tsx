export default function Testimonial() {
  return (
    <section className="nexto-section">
      <div className="nexto-wrap">
        <div
          className="bg-[var(--card-bg)] rounded-[24px] p-[54px] border border-[var(--card-border)] shadow-[var(--card-shadow)] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center relative overflow-hidden transition-colors duration-500"
        >
          <span className="nexto-icon nexto-gradient-text absolute top-6 right-9 text-[90px] opacity-70 leading-none">
            format_quote
          </span>

          <div>
            <blockquote className="text-[clamp(22px,2.4vw,30px)] font-medium tracking-[-0.6px] leading-[1.25] text-[var(--text-main)] transition-colors duration-500">
              They delivered a{" "}
              <span className="bg-[var(--eyebrow-bg)] px-2 py-0 rounded-[6px] font-semibold transition-colors duration-500">
                custom
              </span>{" "}
              website that completely transformed our online presence, without the{" "}
              <span className="bg-[var(--eyebrow-bg)] px-2 py-0 rounded-[6px] font-semibold transition-colors duration-500">
                bloated
              </span>{" "}
              agency prices.
            </blockquote>

            <div className="flex items-center gap-[14px] mt-7">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-[18px] bg-[linear-gradient(135deg,#F7B2FB,#786EF1_60%,#5588FB)]">
                JD
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[var(--text-main)] transition-colors duration-500">
                  Jane Doe
                </div>
                <div className="text-[12.5px] text-[var(--text-secondary)] transition-colors duration-500">
                  Founder · TechStartup
                </div>
              </div>
            </div>
          </div>

          {/* Side card */}
          <div className="bg-[var(--pill-light-bg)] rounded-[18px] p-6 flex flex-col gap-[14px] transition-colors duration-500">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[var(--text-secondary)] transition-colors duration-500">Project</span>
              <span className="text-[11px] font-semibold text-[#0d7f3a] bg-[#dff5e6] px-[10px] py-[3px] rounded-[40px]">
                Live
              </span>
            </div>
            <div className="text-[var(--text-main)] text-[36px] font-medium tracking-[-1.2px] transition-colors duration-500">
              TechStartup App
            </div>
            <div className="text-[12px] text-[var(--text-secondary)] transition-colors duration-500">
              Web Application · 6 weeks · Design, Frontend, Backend.
            </div>

            <div className="nexto-dashed my-[6px]" />

            <div className="flex items-center justify-between mt-1">
              <span className="text-[12px] text-[var(--text-secondary)] transition-colors duration-500">Conversion Rate</span>
              <span className="font-semibold text-[14px]">+45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-[var(--text-secondary)] transition-colors duration-500">Performance</span>
              <span className="font-semibold text-[14px]">98/100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
