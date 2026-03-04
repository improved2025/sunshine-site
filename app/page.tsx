"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

type Program = {
  title: string;
  desc: string;
  href: string; // /programs/<slug>
  slug: string; // <slug>
  label: string; // short label
  prefix: string; // m, p, s, v, f, pa (for photos)
  accent: string; // tailwind classes
  bullets: string[];
};

function photosFor(slug: string, prefix: string, count = 6) {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/media/${slug}/photos/${prefix}${n}.jpg`;
  });
}

const programs: Program[] = [
  {
    title: "Free Medical Outreaches",
    label: "Medical",
    desc: "Community-based medical missions delivering diagnosis, treatment, and prescriptions at no cost.",
    href: "/programs/medical-outreach",
    slug: "medical-outreach",
    prefix: "m",
    accent: "from-[#2FA84F]/22 via-white/0 to-[#C9A24A]/18",
    bullets: ["Consultations & screening", "Treatment & medications (when available)", "Referrals for complex cases"],
  },
  {
    title: "Specialized Surgical Services",
    label: "Surgery",
    desc: "Free or subsidized surgeries delivered through local partners and vetted providers.",
    href: "/programs/surgical-services",
    slug: "surgical-services",
    prefix: "s",
    accent: "from-[#C9A24A]/22 via-white/0 to-[#E53935]/14",
    bullets: ["Screening & selection", "Partnership-based procedures", "Aftercare & follow-up support"],
  },
  {
    title: "Preventive Health Education",
    label: "Prevention",
    desc: "Training and education on diabetes, hypertension, stroke prevention, and patient care.",
    href: "/programs/preventive-health",
    slug: "preventive-health",
    prefix: "p",
    accent: "from-[#0B0F14]/18 via-white/0 to-[#2FA84F]/18",
    bullets: ["Education campaigns", "Screenings & risk awareness", "Community follow-up navigation"],
  },
];

export default function HomePage() {
  // Hero rotating images (your existing)
  const heroImages = useMemo(
    () => ["/hero/hero-1.jpg", "/hero/hero-2.jpg", "/hero/hero-3.jpg", "/hero/hero-4.jpg", "/hero/hero-5.jpg"],
    []
  );

  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroImages.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, [heroImages.length]);

  // Modal
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Program | null>(null);

  function openModal(p: Program) {
    setSelected(p);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    // slight delay so the close animation feels clean (optional)
    window.setTimeout(() => setSelected(null), 120);
  }

  // Escape key to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <main className="min-h-screen bg-brand-ivory text-brand-ink">
      {/* HERO (wrapped, premium) */}
      <section className="relative mx-auto max-w-[1240px] px-6 pt-0">
        <div className="relative overflow-hidden rounded-[28px] border border-brand-line bg-white/40">
          <div className="absolute inset-0">
            {heroImages.map((src, i) => (
              <div
                key={src}
                className={[
                  "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
                  activeHero === i ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                <Image
                  src={src}
                  alt="Sunshine Medical Care Initiative"
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="(max-width: 1240px) 100vw, 1240px"
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F14]/65 via-[#2FA84F]/22 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-bl from-[#C9A24A]/35 via-transparent to-[#E53935]/14" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,74,.34),transparent_52%)]" />
            <div className="absolute inset-0 bg-black/18" />
          </div>

          <div className="relative px-8 pt-28 pb-16 md:px-14 md:pt-40 md:pb-24">
            <p className="text-xs uppercase tracking-[0.18em] text-white/80">
              Sunshine Medical Care Initiative
            </p>

            <h1 className="mt-4 font-heading text-5xl md:text-6xl leading-[1.05] text-white">
              Compassionate care. Real outcomes.
            </h1>

            <p className="mt-5 max-w-xl text-white/80 text-base md:text-lg">
              We mobilize professionals to expand healthcare access for underserved communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/donate" variant="primary" className="bg-black text-brand-ink hover:bg-white/95">
                Donate
              </Button>

              <Button
                href="/partner"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-brand-ink"
              >
                Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM TILES (NOT flyer) */}
      <section className="mx-auto max-w-[1240px] px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-ink/60">Programs</p>
            <h2 className="mt-3 font-heading text-3xl">Three highlights. Deep work behind each.</h2>
            <p className="mt-3 max-w-2xl text-sm text-brand-ink/65">
              Tap a tile for a quick view, or open the full program page.
            </p>
          </div>

          <Link href="/programs" className="text-sm font-semibold text-brand-ink/70 hover:text-brand-ink">
            View all programs
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((p, idx) => {
            const cover = `/media/${p.slug}/photos/${p.prefix}01.jpg`;

            return (
              <div
                key={p.slug}
                className="group relative overflow-hidden rounded-[26px] border border-brand-line bg-white/55 shadow-[0_14px_40px_rgba(11,15,20,.06)] transition
                           hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(11,15,20,.10)]"
              >
                {/* Top image */}
                <div className="relative h-[210px]">
                  <Image
                    src={cover}
                    alt={p.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Color wash */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Premium sheen */}
                  <div className="absolute -left-24 top-0 h-full w-24 rotate-12 bg-white/10 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />

                  {/* Label */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1.5 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-white/80" />
                    <span className="text-xs font-semibold tracking-[0.12em] uppercase text-white/90">
                      Highlight {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title over image */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="text-lg font-extrabold text-white leading-snug">{p.title}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-sm leading-7 text-brand-ink/70">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      href={p.href}
                      className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-brand-ink text-brand-ivory
                                 shadow-[0_10px_24px_rgba(11,15,20,.14)] hover:shadow-[0_14px_32px_rgba(11,15,20,.18)] transition"
                    >
                      Full details
                    </Link>

                    <button
                      type="button"
                      onClick={() => openModal(p)}
                      className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold border border-black/10 bg-white/70 hover:bg-white transition"
                    >
                      Quick view
                    </button>
                  </div>

                  <div className="mt-6 h-px bg-brand-line" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-brand-ink/55">
                      {p.label}
                    </span>
                    <span className="text-sm font-semibold text-brand-ink/65 group-hover:text-brand-ink transition">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* POPUP MODAL */}
      {open && selected && (
        <div className="fixed inset-0 z-[90]">
          {/* Backdrop */}
          <button
            aria-label="Close modal"
            onClick={closeModal}
            className="absolute inset-0 bg-black/55 backdrop-blur-[6px]"
          />

          {/* Modal */}
          <div className="relative mx-auto max-w-[980px] px-6 pt-10">
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#0B0F14]/88 text-white shadow-[0_30px_90px_rgba(0,0,0,.40)]">
              {/* top ribbon */}
              <div className="h-[2px] w-full bg-gradient-to-r from-brand-gold via-brand-green to-[#E53935]" />

              <div className="p-6 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/70">Quick View</p>
                    <h3 className="mt-2 font-heading text-3xl md:text-4xl leading-tight">
                      {selected.title}
                    </h3>
                    <p className="mt-3 text-white/75 max-w-2xl">{selected.desc}</p>
                  </div>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/15 transition"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                {/* Photo strip */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {photosFor(selected.slug, selected.prefix, 3).map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-white/10 bg-white/5"
                    >
                      <Image
                        src={src}
                        alt={selected.title}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Bullets */}
                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {selected.bullets.map((b) => (
                    <div
                      key={b}
                      className="rounded-[18px] border border-white/12 bg-white/8 px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-brand-gold shrink-0" />
                        <div className="text-sm text-white/80 leading-7">{b}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href={selected.href}
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-[#0B0F14] hover:bg-white/95 transition"
                  >
                    Open full program
                  </Link>

                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-brand-gold text-[#0B0F14] hover:opacity-95 transition"
                  >
                    Fund this work
                  </Link>

                  <Link
                    href="/partner"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-white/20 bg-white/10 hover:bg-white/15 transition"
                  >
                    Become a partner
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-10" />
          </div>
        </div>
      )}
    </main>
  );
}