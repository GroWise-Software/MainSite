import Image from "next/image";

import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-[9px]" aria-label="GroWise home">
      <Image 
        src="/logo.png" 
        alt="GroWise" 
        width={340} 
        height={85} 
        className="h-[40px] md:h-[75px] w-auto object-contain mix-blend-multiply dark:mix-blend-screen invert dark:invert-0 transition-all duration-500 md:scale-125 origin-left" 
      />
    </Link>
  );
}

const socials = [
  { label: "Twitter", icon: "alternate_email", url: "#" },
  { label: "Instagram", icon: "camera_alt", url: "https://www.instagram.com/growise.software?igsh=MTZibmliNzVncGdxZg%3D%3D" },
  { label: "LinkedIn", icon: "work", url: "#" },
];

export default function Footer() {
  return (
    <footer className="pt-[60px] pb-10 bg-[var(--bg-page)] transition-colors duration-500 relative">
      <div className="nexto-wrap">
        <div className="nexto-dashed mb-12" />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 pb-11"
        >
          <div>
            <Logo />
            <p className="text-[13.5px] text-[var(--text-secondary)] leading-[1.6] max-w-[300px] mt-[18px] transition-colors duration-500">
              A modern web development agency building custom websites and digital solutions.
            </p>
          </div>

          {[
            {
              title: "Agency",
              links: ["About Us", "Services", "Process", "Careers"],
            },
            {
              title: "Work",
              links: ["Portfolio", "Case Studies", "Tech Stack", "Open Source"],
            },
            {
              title: "Say hi",
              links: [
                "instagram: growise.software",
                "Samba Siva: 9390544183",
                "Chaitanya: +91 70322 55520",
                "Jahnavi: +91 93474 28871",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h5 className="text-[12px] font-semibold text-[var(--text-main)] uppercase tracking-[0.1em] mb-[14px] transition-colors duration-500">
                {col.title}
              </h5>
              {col.links.map((link) => (
                <a
                  key={link}
                  href={link.includes("instagram") ? "https://www.instagram.com/growise.software?igsh=MTZibmliNzVncGdxZg%3D%3D" : (link.includes("@") ? `mailto:${link}` : "#")}
                  target={link.includes("instagram") ? "_blank" : "_self"}
                  className="block text-[13.5px] text-[var(--text-main)] opacity-70 py-[5px] hover:opacity-100 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="nexto-dashed" />

        <div className="flex items-center justify-between pt-6 text-[12.5px] text-[var(--text-secondary)] gap-4 flex-wrap transition-colors duration-500">
          <span>© 2026 GroWise. — All rights reserved.</span>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target={s.url !== "#" ? "_blank" : "_self"}
                rel={s.url !== "#" ? "noopener noreferrer" : ""}
                aria-label={s.label}
                className="nexto-icon w-[34px] h-[34px] rounded-full bg-[var(--pill-light-bg)] border border-[var(--card-border)] inline-flex items-center justify-center text-[18px] text-[var(--text-main)] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[var(--card-shadow)]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
