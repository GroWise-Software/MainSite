"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi GroWise,\n\nName: ${name}\nMobile: ${mobile}\n\nProject Details:\n${message}`;
    const url = `https://wa.me/919347428871?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="nexto-section" style={{ minHeight: "calc(100vh - 300px)", display: "flex", alignItems: "center" }}>
      <div className="nexto-wrap w-full max-w-[700px] mx-auto">
        <div className="nexto-card p-[24px] sm:p-[40px] md:p-[60px] relative overflow-hidden isolate shadow-[var(--card-shadow)] bg-[var(--card-bg)] border-[var(--card-border)] border transition-colors duration-500">
          <div className="nexto-glow-purple absolute rounded-full -z-10 opacity-30" style={{ inset: "-10% -10% auto auto" }} />
          <div className="nexto-glow-pink absolute rounded-full -z-10 opacity-20" style={{ inset: "auto auto -10% -10%" }} />
          
          <div className="mb-10 text-center">
            <span className="nexto-eyebrow text-[var(--text-main)] bg-[var(--eyebrow-bg)] transition-colors duration-500">let's talk</span>
            <h2 className="mt-[18px] text-[clamp(28px,3.5vw,42px)] font-medium tracking-[-1.2px] leading-[1.1] text-[var(--text-main)] transition-colors duration-500">
              Ready to start your project?
            </h2>
            <p className="text-[15px] text-[var(--text-secondary)] mt-4 max-w-[440px] mx-auto leading-[1.6] transition-colors duration-500">
              Let us know what you're looking to build. We'll get back to you within 24 hours with the next steps, timelines, and transparent pricing.
            </p>
          </div>

          <form className="flex flex-col gap-[22px]" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
              <div>
                <label htmlFor="name" className="block text-[13.5px] font-semibold text-[var(--text-main)] mb-2 transition-colors duration-500">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[var(--pill-light-bg)] text-[var(--text-main)] border border-[var(--card-border)] rounded-[14px] px-4 py-[14px] text-[15px] outline-none focus:border-[#786ef1] focus:ring-1 focus:ring-[#786ef1]/30 transition-colors duration-500 placeholder:text-[var(--text-secondary)]" 
                  placeholder="Your full name" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="mobile" className="block text-[13.5px] font-semibold text-[var(--text-main)] mb-2 transition-colors duration-500">Mobile</label>
                <input 
                  type="tel" 
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full bg-[var(--pill-light-bg)] text-[var(--text-main)] border border-[var(--card-border)] rounded-[14px] px-4 py-[14px] text-[15px] outline-none focus:border-[#786ef1] focus:ring-1 focus:ring-[#786ef1]/30 transition-colors duration-500 placeholder:text-[var(--text-secondary)]" 
                  placeholder="Your mobile number" 
                  required 
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[13.5px] font-semibold text-[var(--text-main)] mb-2 transition-colors duration-500">Message</label>
              <textarea 
                id="message" 
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[var(--pill-light-bg)] text-[var(--text-main)] border border-[var(--card-border)] rounded-[14px] px-4 py-[14px] text-[15px] outline-none focus:border-[#786ef1] focus:ring-1 focus:ring-[#786ef1]/30 transition-colors duration-500 resize-none placeholder:text-[var(--text-secondary)]" 
                placeholder="What do you want to build exactly?" 
                required 
              ></textarea>
            </div>

            <div className="mt-4">
              <button type="submit" className="nexto-pill-light lg w-full justify-center text-[16px] py-[12px] rounded-[40px] shadow-[0_6px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.1)]">
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
