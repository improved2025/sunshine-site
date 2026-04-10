"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navBase = "text-sm font-semibold transition-colors";
  const navColor = scrolled
    ? "text-brand-ink/70 hover:text-brand-ink"
    : "text-white/90 hover:text-white";

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="h-[2px] w-full bg-gradient-to-r from-brand-gold via-brand-green to-[#E53935]" />

        <div
          className={[
            "relative transition-all duration-300",
            scrolled
              ? "bg-brand-ivory/92 backdrop-blur border-b border-brand-line shadow-[0_10px_30px_rgba(11,15,20,.08)]"
              : "bg-[#1B1E22]/85 backdrop-blur border-b border-white/10",
          ].join(" ")}
        >
          {!scrolled && (
            <div className="pointer-events-none absolute inset-0 bg-black/25 backdrop-blur-[6px]" />
          )}

          <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 h-[78px] flex items-center justify-between gap-4">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <Image
                src="/logo.jpg"
                alt="Sunshine Medical Care Initiative"
                width={42}
                height={42}
                priority
                className={[
                  "rounded-full ring-1 transition shrink-0",
                  scrolled ? "ring-black/10" : "ring-white/25",
                ].join(" ")}
              />
              <div className="min-w-0">
                <div
                  className={[
                    "font-heading text-[16px] sm:text-[18px] leading-none transition-colors truncate",
                    scrolled ? "text-brand-ink" : "text-white",
                  ].join(" ")}
                >
                  Sunshine Medical Care Initiative
                </div>
                <div
                  className={[
                    "mt-1 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase transition-colors truncate",
                    scrolled ? "text-brand-ink/55" : "text-white/70",
                  ].join(" ")}
                >
                  Compassionate Care Begins With Us
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              <Link className={`${navBase} ${navColor}`} href="/about">
                About
              </Link>
              <Link className={`${navBase} ${navColor}`} href="/programs">
                Programs
              </Link>
              <Link className={`${navBase} ${navColor}`} href="/impact">
                Impact
              </Link>
              <Link className={`${navBase} ${navColor}`} href="/gallery">
                Gallery
              </Link>
              <Link className={`${navBase} ${navColor}`} href="/contact">
                Contact
              </Link>
            </nav>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/partner"
                className={[
                  "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition",
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

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className={[
                "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border transition shrink-0",
                scrolled
                  ? "border-brand-line bg-white/70 text-brand-ink"
                  : "border-white/20 bg-white/10 text-white",
              ].join(" ")}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={[
                    "absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition",
                    mobileOpen ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-current transition",
                    mobileOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-current transition",
                    mobileOpen ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <button
            aria-label="Close menu overlay"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/45 backdrop-blur-[4px]"
          />

          <div className="absolute inset-x-4 top-[92px] rounded-[28px] border border-white/15 bg-[#0B0F14]/95 text-white shadow-[0_30px_90px_rgba(0,0,0,.40)] overflow-hidden">
            <div className="h-[2px] w-full bg-gradient-to-r from-brand-gold via-brand-green to-[#E53935]" />

            <div className="p-6">
              <nav className="flex flex-col">
                {[
                  { href: "/about", label: "About" },
                  { href: "/programs", label: "Programs" },
                  { href: "/impact", label: "Impact" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-4 text-base font-semibold text-white/90 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span className="text-white/45">→</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/partner"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
                >
                  Partner
                </Link>

                <Link
                  href="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0B0F14] hover:bg-white/95 transition"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}