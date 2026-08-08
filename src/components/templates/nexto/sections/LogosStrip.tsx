const logos = [
  { name: "Startups", icon: "rocket_launch" },
  { name: "Agencies", icon: "design_services" },
  { name: "E-Commerce", icon: "storefront" },
  { name: "SaaS", icon: "cloud" },
  { name: "Creators", icon: "palette" },
  { name: "Local Biz", icon: "store" },
];

export default function LogosStrip() {
  return (
    <div className="py-[34px] bg-[var(--card-bg)]/50 border-y border-dashed border-[var(--dashed-color)] backdrop-blur-[6px] transition-colors duration-500 overflow-hidden">
      
      {/* Mobile: auto-scroll marquee */}
      <div className="block md:hidden relative">
        <div className="logos-strip-track">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="font-bold text-[16px] tracking-[-0.3px] opacity-55 inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
            >
              <span className="nexto-icon text-[20px]">{l.icon}</span>
              {l.name}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: static row */}
      <div className="nexto-wrap hidden md:flex items-center justify-between gap-8 flex-nowrap">
        <span className="text-[12px] text-[var(--text-secondary)] tracking-[0.04em] uppercase transition-colors duration-500 whitespace-nowrap flex-shrink-0">
          Trusted by growing businesses
        </span>
        {logos.map((l) => (
          <span
            key={l.name}
            className="font-bold text-[18px] tracking-[-0.3px] opacity-55 inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
          >
            <span className="nexto-icon text-[22px]">{l.icon}</span>
            {l.name}
          </span>
        ))}
      </div>

    </div>
  );
}
