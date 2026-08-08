const stats = [
  { n: "120", sup: "+", label: "Custom websites and web applications delivered." },
  { n: "99", sup: "%", label: "Client satisfaction rate across all projects." },
  { n: "14", sup: " days", label: "Average time to deliver a custom landing page." },
  { n: "5", sup: " stars", label: "Consistent 5-star ratings from satisfied founders." },
];

export default function Numbers() {
  return (
    <section className="nexto-section pt-0">
      <div className="nexto-wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[22px] bg-[var(--card-bg)] overflow-hidden border border-[var(--card-border)] shadow-[var(--card-shadow)] transition-colors duration-500">
          {stats.map((s, i) => (
            <div key={i} className="relative p-[30px_26px]">
              {i > 0 && <div className="nexto-dashed-v" />}
              <div className="text-[var(--text-main)] leading-none text-[46px] font-medium tracking-[-2px] transition-colors duration-500">
                {s.n}
                <sup className="text-[22px] font-medium text-[var(--text-main)] align-super ml-[2px] tracking-[-1px] transition-colors duration-500">
                  {s.sup}
                </sup>
              </div>
              <div className="text-[13px] text-[var(--text-secondary)] mt-[10px] leading-[1.5] max-w-[200px] transition-colors duration-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
