"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const pillars = [
  {
    title: "Free Medical Outreaches",
    desc: "Community-based medical missions delivering diagnosis, treatment, and prescriptions at no cost.",
    href: "/programs/medical-outreach",
  },
  {
    title: "Specialized Surgical Services",
    desc: "Free or subsidized surgeries in partnership with local healthcare providers.",
    href: "/programs/surgical-services",
  },
  {
    title: "Preventive Health Education",
    desc: "Training and education on diabetes, hypertension, stroke prevention, and patient care.",
    href: "/programs/preventive-health",
  },
];

export default function HomePage() {
  const heroImages = useMemo(
    () => [
      "/hero/hero-1.jpg",
      "/hero/hero-2.jpg",
      "/hero/hero-3.jpg",
      "/hero/hero-4.jpg",
      "/hero/hero-5.jpg",
    ],
    []
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % heroImages.length);
    }, 11000);

    return () => window.clearInterval(id);
  }, [heroImages.length]);

  return (
    <main className="min-h-screen bg-brand-ivory text-brand-ink">
      {/* HERO */}
      <section className="relative mx-auto max-w-[1240px] px-6 pt-0">
        <div className="relative overflow-hidden rounded-[28px] border border-brand-line bg-white/40">
          {/* Background: fading images */}
          <div className="absolute inset-0">
            {heroImages.map((src, i) => (
              <div
                key={src}
                className={[
                  "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
                  active === i ? "opacity-100" : "opacity-0",
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

            {/* Premium overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0F14]/65 via-[#2FA84F]/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-bl from-[#C9A24A]/35 via-transparent to-[#E53935]/15" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,74,.35),transparent_50%)]" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content */}
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
              <Button
                href="/donate"
                variant="primary"
                className="bg-black text-brand-ink hover:bg-white/95"
              >
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

      {/* THREE PROGRAMS */}
      <section className="mx-auto max-w-[1240px] px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-brand-ink/60">
              Programs
            </p>
            <h2 className="mt-3 font-heading text-3xl">
              Focused work. Clear priorities.
            </h2>
          </div>

          <Link
            href="/programs"
            className="text-sm font-semibold text-brand-ink/70 hover:text-brand-ink"
          >
            View all programs
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-[24px] border border-brand-line bg-white/55 p-8 hover:bg-white transition"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-brand-ink/60">
                Program
              </p>
              <h3 className="mt-3 font-heading text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm text-brand-ink/65">{p.desc}</p>
              <div className="mt-8 h-px bg-brand-line" />
              <p className="mt-4 text-sm font-semibold text-brand-ink/70">
                Find out more
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}