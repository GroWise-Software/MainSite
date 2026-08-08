"use client";

import { useRef, useState, useEffect } from "react";

const services = [
  {
    icon: "code_blocks",
    title: "Enterprise Web Development",
    body: "Fast, scalable applications powered by React, Node.js, Java Spring Boot, and Python. We build robust architectures that grow with your business.",
    meta: "Custom Scope",
    accent: "nexto-tile-accent-pink",
  },
  {
    icon: "draw",
    title: "Graphic Design & Posters",
    body: "Eye-catching menus, digital posters, and bespoke graphics crafted to elevate your brand's visual identity across all platforms.",
    meta: "Visual Design",
    accent: "nexto-tile-accent-blue",
  },
  {
    icon: "campaign",
    title: "Social Media Management",
    body: "Strategic content planning, posting, and community management to grow your audience and drive meaningful engagement.",
    meta: "Marketing",
    accent: "nexto-tile-accent-pink",
  },
  {
    icon: "memory",
    title: "Intelligent AI Solutions",
    body: "Deploy autonomous agents, decision engines, and conversational AI chatbots that elevate user experiences and streamline complex workflows.",
    meta: "AI & ML",
    accent: "nexto-tile-accent-purple",
  },
  {
    icon: "auto_mode",
    title: "Strategic Automation",
    body: "Optimize operations with intelligent workflow automation and task orchestration designed to maximize efficiency and reduce operational overhead.",
    meta: "Process Optimization",
    accent: "nexto-tile-accent-blue",
  },
  {
    icon: "api",
    title: "Cloud & API Infrastructure",
    body: "Secure, versioned APIs and managed multi-cloud deployments that ensure seamless integrations and high-availability performance.",
    meta: "Scalable Systems",
    accent: "nexto-tile-accent-green",
  },
  {
    icon: "support_agent",
    title: "Continuous Lifecycle Support",
    body: "Proactive monitoring, performance tuning, and enterprise-grade reliability engineering to keep your mission-critical systems running flawlessly.",
    meta: "24/7 Reliability",
    accent: "nexto-tile-accent-pink",
  },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="nexto-section overflow-hidden" id="solutions">
      {/* Header */}
      <div className="nexto-wrap">
        <div className="nexto-section-head">
          <div>
            <span className="nexto-eyebrow">services</span>
            <h2 className="mt-[18px]">
              The digital solutions we{" "}
              <em className="italic font-light">build</em>{" "}
              for you.
            </h2>
          </div>
          <p className="nexto-section-lede">
            Modern web development without the agency bloat. Scroll to explore what we can build for you.
          </p>
        </div>
      </div>

      {/* Scroll track — bleeds past nexto-wrap padding */}
      <div
        ref={trackRef}
        onMouseDown={() => setGrabbing(true)}
        onMouseUp={() => setGrabbing(false)}
        onMouseLeave={() => setGrabbing(false)}
        className={`nexto-scroll-track ${grabbing ? "nexto-scroll-grabbing" : ""}`}
      >
        {/* Left pad to align with content */}
        <div className="nexto-scroll-pad" aria-hidden />

        {services.map((s, i) => (
          <div key={i} className={`nexto-scroll-tile nexto-card ${s.accent}`}>
            {/* Top accent area */}
            <div className="nexto-tile-top">
              <span className="nexto-icon nexto-gradient-text text-[38px] leading-none">
                {s.icon}
              </span>
              <span className="nexto-tile-num text-[12px] font-semibold text-[var(--text-secondary)] tabular-nums transition-colors duration-500">
                0{i + 1}
              </span>
            </div>

            {/* Content */}
            <div className="nexto-tile-body">
              <h3 className="text-[20px] font-semibold tracking-[-0.4px] text-[var(--text-main)] transition-colors duration-500">
                {s.title}
              </h3>
              <p className="text-[14px] text-[var(--text-secondary)] leading-[1.6] mt-2 transition-colors duration-500">{s.body}</p>
            </div>

            {/* Footer */}
            <div className="nexto-tile-footer">
              <span className="text-[12.5px] text-[var(--text-secondary)] font-medium transition-colors duration-500">{s.meta}</span>
              <span className="w-[30px] h-[30px] rounded-full bg-[var(--arrow-circ-bg)] text-[var(--arrow-circ-text)] inline-flex items-center justify-center transition-colors duration-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        ))}

        {/* Right pad */}
        <div className="nexto-scroll-pad" aria-hidden />
      </div>

      {/* Progress bar */}
      <div className="nexto-wrap mt-6">
        <div className="nexto-scroll-progress-track">
          <div
            className="nexto-scroll-progress-bar"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <p className="text-[11.5px] text-[var(--text-secondary)] mt-2 select-none transition-colors duration-500">
          Scroll to explore →
        </p>
      </div>
    </section>
  );
}
