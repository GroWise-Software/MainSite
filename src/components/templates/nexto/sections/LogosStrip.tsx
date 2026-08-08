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
      <div className="nexto-wrap flex items-center justify-between gap-8 flex-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
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
