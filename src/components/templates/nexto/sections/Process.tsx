const steps = [
  {
    icon: "chat_bubble",
    title: "Discovery",
    body: "We discuss your goals, requirements, and figure out the exact scope of your custom website.",
    meta: "Day 1",
  },
  {
    icon: "draw",
    title: "Design",
    body: "We create a modern, responsive design tailored specifically to your brand identity.",
    meta: "Week 1",
  },
  {
    icon: "code",
    title: "Development",
    body: "We build your site with clean code, ensuring high performance and SEO optimization.",
    meta: "Weeks 2-3",
  },
  {
    icon: "rocket_launch",
    title: "Launch",
    body: "Thorough QA, final tweaks, and we deploy your custom digital solution to the world.",
    meta: "Week 4",
  },
];

export default function Process() {
  return (
    <section className="nexto-section pt-[60px]" id="process">
      <div className="nexto-wrap">
        <div className="nexto-section-head">
          <div>
            <span className="nexto-eyebrow">how we work</span>
            <h2 className="mt-[18px]">
              Four steps.{" "}
              <em className="italic font-light">No mystery.</em>
            </h2>
          </div>
          <p className="nexto-section-lede">
            A streamlined process to get your custom website live efficiently, without the usual agency runaround.
          </p>
        </div>

        {/* Timeline connector row */}
        <div className="nexto-process-timeline">
          {steps.map((s, i) => (
            <div key={i} className="nexto-process-step">
              {/* Number node */}
              <div className="nexto-process-node-row">
                <div className="nexto-process-node">
                  <span className="text-[12px] font-bold text-[var(--text-main)] tabular-nums transition-colors duration-500">0{i + 1}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="nexto-process-connector" aria-hidden>
                    <div className="nexto-process-connector-line" />
                    <div className="nexto-process-connector-arrow" />
                  </div>
                )}
              </div>

              {/* Card */}
              <div className="nexto-card nexto-process-card">
                <span className="nexto-icon nexto-gradient-text text-[34px] leading-none">
                  {s.icon}
                </span>
                <h4 className="text-[17px] font-semibold tracking-[-0.3px] text-[var(--text-main)] mt-3 transition-colors duration-500">
                  {s.title}
                </h4>
                <p className="text-[13px] text-[var(--text-secondary)] leading-[1.55] mt-2 transition-colors duration-500">{s.body}</p>
                <span className="nexto-process-meta">{s.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
