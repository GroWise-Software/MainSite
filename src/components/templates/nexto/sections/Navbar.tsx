"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Services", href: "/#solutions" },
    { label: "Work", href: "/#showcase" },
    { label: "About", href: "/#about" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-[70] backdrop-saturate-[180%] backdrop-blur-[10px] bg-[var(--nav-glass)] transition-colors duration-500">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-4 md:py-6 flex items-center justify-between relative">
          {/* Dashed bottom border */}
          <div className="nexto-dashed absolute left-10 right-10 bottom-0" />

          {/* Logo container that reserves width but not height */}
          <div className="relative w-[340px] hidden md:block">
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Logo />
            </div>
          </div>
          
          {/* Mobile logo (keeps flex flow for mobile drawer) */}
          <div className="md:hidden">
            <Logo />
          </div>

          <ul className="hidden md:flex items-center gap-9 list-none">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[14px] font-medium text-[var(--text-main)] opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-main)] hover:bg-[var(--card-bg)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <span className="material-symbols-rounded text-[18px]">light_mode</span>
                ) : (
                  <span className="material-symbols-rounded text-[18px]">dark_mode</span>
                )}
              </button>
            )}

            <Link
              href="/contact"
              className="nexto-pill-dark hidden md:inline-flex"
              aria-label="Start a project"
            >
              <span className="nexto-arrow-circ">
                <ChevronArrow />
              </span>
              Start a project
            </Link>
          </div>

          {/* Hamburger */}
          <div className="flex md:hidden items-center gap-4 relative z-[61]">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-main)]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <span className="material-symbols-rounded text-[18px]">light_mode</span>
                ) : (
                  <span className="material-symbols-rounded text-[18px]">dark_mode</span>
                )}
              </button>
            )}
            
            <button
              className="flex flex-col gap-[6px] w-6 h-6 justify-center items-center cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={`block w-6 h-[2px] bg-[var(--text-main)] rounded-sm transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-[var(--text-main)] rounded-sm transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-[var(--text-main)] rounded-sm transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div
        className={`fixed inset-0 bg-[var(--bg-page)] z-[60] flex flex-col px-8 pt-[90px] pb-10 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-[38px] font-black tracking-[-1.5px] text-[var(--text-main)] py-6 border-b border-dashed border-[var(--dashed-color)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="nexto-pill-dark lg mt-6 self-start"
          onClick={() => setMenuOpen(false)}
        >
          <span className="nexto-arrow-circ lg">
            <ChevronArrow />
          </span>
          Start a project
        </Link>
      </div>
    </>
  );
}
