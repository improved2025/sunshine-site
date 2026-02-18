"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBase = "text-sm font-semibold transition-colors";
  const navColor = scrolled
    ? "text-brand-ink/70 hover:text-brand-ink"
    : "text-white/90 hover:text-white";

  return (
    <header className="sticky top-0 z-50">
      {/* Premium ribbon */}
      <div className="h-[2px] w-full bg-gradient-to-r from-brand-gold via-brand-green to-[#E53935]" />

      <div
        className={[
          "relative transition-all duration-300",
          scrolled
            ? "bg-brand-ivory/92 backdrop-blur border-b border-brand-line shadow-[0_10px_30px_rgba(11,15,20,.08)]"
            : "bg-[#1B1E22]/85 backdrop-blur border-b border-white/10",
        ].join(" ")}
      >
        {/* KEY FIX: readable glass layer when transparent */}
        {!scrolled && (
          <div className="pointer-events-none absolute inset-0 bg-black/25 backdrop-blur-[6px]" />
        )}

        <div className="relative mx-auto max-w-[1240px] px-6 h-[78px] flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <Image
              src="/logo.jpg"
              alt="Sunshine Medical Care Initiative"
              width={42}
              height={42}
              priority
              className={[
                "rounded-full ring-1 transition",
                scrolled ? "ring-black/10" : "ring-white/25",
              ].join(" ")}
            />
            <div className="min-w-0">
              <div
                className={[
                  "font-heading text-[18px] leading-none transition-colors",
                  scrolled ? "text-brand-ink" : "text-white",
                ].join(" ")}
              >
                Sunshine Medical Care Initiative
              </div>
              <div
                className={[
                  "mt-1 text-[11px] tracking-[0.16em] uppercase transition-colors",
                  scrolled ? "text-brand-ink/55" : "text-white/70",
                ].join(" ")}
              >
                Compassionate Care Begins With Us
              </div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link className={`${navBase} ${navColor}`} href="/about">About</Link>
            <Link className={`${navBase} ${navColor}`} href="/programs">Programs</Link>
            <Link className={`${navBase} ${navColor}`} href="/impact">Impact</Link>
            <Link className={`${navBase} ${navColor}`} href="/gallery">Gallery</Link>
            <Link className={`${navBase} ${navColor}`} href="/get-involved">Get Involved</Link>
            <Link className={`${navBase} ${navColor}`} href="/contact">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/partner"
              className={[
                "hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition",
                scrolled
                  ? "border border-brand-line text-brand-ink/80 hover:text-brand-ink hover:border-brand-ink"
                  : "border border-white/40 text-white/90 hover:border-white/75 hover:text-white",
              ].join(" ")}
            >
              Partner
            </Link>

            <Link
              href="/donate"
              className={[
                "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition",
                scrolled
                  ? "bg-brand-ink text-brand-ivory shadow-[0_10px_24px_rgba(11,15,20,.14)] hover:shadow-[0_14px_32px_rgba(11,15,20,.18)]"
                  : "bg-white text-brand-ink shadow-[0_10px_24px_rgba(0,0,0,.18)] hover:bg-white/95",
              ].join(" ")}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
