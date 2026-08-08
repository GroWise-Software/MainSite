"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShow(false);
        document.body.style.overflow = "";
      }, 700);
    }, 1800);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[var(--bg-page)] flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="animate-pulse scale-110">
        <Image 
          src="/logo.png" 
          alt="GroWise Loading" 
          width={800} 
          height={200} 
          priority
          className="h-[140px] md:h-[220px] w-auto object-contain mix-blend-multiply dark:mix-blend-screen invert dark:invert-0 scale-125" 
        />
      </div>
    </div>
  );
}
