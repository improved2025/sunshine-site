"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-brand-line bg-brand-ivory/70 px-5 py-4 flex items-center justify-between gap-4">
      <div>
        <div className="text-xs uppercase tracking-[0.14em] text-brand-ink/50">
          {label}
        </div>
        <div className="mt-1 text-lg font-semibold text-brand-ink break-all">
          {value}
        </div>
      </div>

      <button
        onClick={copy}
        className="shrink-0 rounded-full border border-brand-line bg-white px-4 py-2 text-xs font-semibold hover:border-brand-ink transition"
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
    </div>
  );
}

function AmountCard({
  amount,
  label,
}: {
  amount: string;
  label: string;
}) {
  return (
    <div className="group rounded-[22px] border border-brand-line bg-white/65 p-5 shadow-[0_10px_30px_rgba(11,15,20,.04)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_40px_rgba(11,15,20,.08)]">
      <div className="text-3xl font-heading text-brand-ink">{amount}</div>
      <div className="mt-2 text-sm leading-7 text-brand-ink/68">{label}</div>
    </div>
  );
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-brand-ivory text-brand-ink">
      <section className="mx-auto max-w-[1140px] px-6 pt-12 pb-16">
        {/* Hero strip */}
        <div className="relative overflow-hidden rounded-[30px] border border-brand-line">
          <div className="absolute inset-0">
            <Image
              src="/donate/donate-hero.jpg"
              alt="Support Sunshine Medical Care Initiative"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1140px) 100vw, 1140px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/75 via-[#0B0F14]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,74,.25),transparent_45%)]" />
          </div>

          <div className="relative px-8 py-14 md:px-10 md:py-18">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Donate
            </p>

            <h1 className="mt-3 max-w-3xl font-heading text-5xl md:text-6xl leading-[1.02] text-white">
              Give care. Restore dignity. Save lives.
            </h1>

            <p className="mt-5 max-w-2xl text-white/80 leading-8">
              Your generosity helps Sunshine Medical Care Initiative expand healthcare access,
              support medical outreaches, provide education, and serve underserved communities
              with compassion and practical care.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#ways-to-give"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0B0F14] hover:bg-white/95 transition"
              >
                Give now
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                Ask a question
              </Link>
            </div>
          </div>
        </div>

        {/* Giving amounts */}
        <section className="mt-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-ink/55">
                Giving Impact
              </p>
              <h2 className="mt-2 font-heading text-3xl">
                Every gift moves the mission forward.
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <AmountCard amount="$50" label="Supports basic outreach supplies and patient care essentials." />
            <AmountCard amount="$100" label="Helps extend screenings, medications, and follow-up support." />
            <AmountCard amount="$250" label="Strengthens a local outreach effort with broader medical support." />
            <AmountCard amount="$500" label="Helps fund deeper intervention, logistics, and program execution." />
            <AmountCard amount="Custom" label="Give at any level that reflects your heart and capacity to help." />
          </div>
        </section>

        {/* Donation methods */}
        <section id="ways-to-give" className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-brand-line bg-white/65 p-8 shadow-[0_12px_30px_rgba(11,15,20,.05)]">
            <div className="inline-flex rounded-full bg-brand-gold/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/70">
              Zelle
            </div>

            <h2 className="mt-5 font-heading text-3xl">
              Donate by Zelle
            </h2>

            <p className="mt-3 text-sm leading-7 text-brand-ink/70">
              Send your donation through Zelle using either of the email addresses below.
            </p>

            <div className="mt-6 space-y-4">
              <CopyField label="Zelle Email" value="Helpsmci@gmail.com" />
              <CopyField label="Alternate Zelle Email" value="Sunshinecare2020@gmail.com" />
            </div>
          </div>

          <div className="rounded-[28px] border border-brand-line bg-white/65 p-8 shadow-[0_12px_30px_rgba(11,15,20,.05)]">
            <div className="inline-flex rounded-full bg-brand-green/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/70">
              Bank Transfer
            </div>

            <h2 className="mt-5 font-heading text-3xl">
              Donate by Bank Transfer
            </h2>

            <p className="mt-3 text-sm leading-7 text-brand-ink/70">
              You can also support Sunshine Medical Care Initiative through our Wells Fargo account.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-brand-line bg-brand-ivory/70 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.14em] text-brand-ink/50">
                  Bank
                </div>
                <div className="mt-1 text-lg font-semibold text-brand-ink">
                  Wells Fargo Bank
                </div>
              </div>

              <CopyField label="Routing Number" value="061000227" />
              <CopyField label="Account Number" value="9175943639" />
            </div>
          </div>
        </section>

        {/* Why give */}
        <section className="mt-12 rounded-[28px] border border-brand-line bg-white/55 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-ink/55">
            Why Your Giving Matters
          </p>

          <h2 className="mt-3 font-heading text-3xl">
            Your support becomes real care for real people.
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-[22px] border border-brand-line bg-white/70 p-5">
              <div className="text-lg font-semibold text-brand-ink">Medical Outreaches</div>
              <p className="mt-2 text-sm leading-7 text-brand-ink/70">
                Help extend diagnosis, treatment, prescriptions, and practical outreach support.
              </p>
            </div>

            <div className="rounded-[22px] border border-brand-line bg-white/70 p-5">
              <div className="text-lg font-semibold text-brand-ink">Health Education</div>
              <p className="mt-2 text-sm leading-7 text-brand-ink/70">
                Support prevention, awareness, and community education that saves lives.
              </p>
            </div>

            <div className="rounded-[22px] border border-brand-line bg-white/70 p-5">
              <div className="text-lg font-semibold text-brand-ink">Program Delivery</div>
              <p className="mt-2 text-sm leading-7 text-brand-ink/70">
                Strengthen the logistics, partnerships, and implementation needed for impact.
              </p>
            </div>
          </div>
        </section>

        {/* Closing note */}
        <section className="mt-10 rounded-[24px] border border-brand-line bg-white/50 p-6">
          <h3 className="text-xl font-semibold text-brand-ink">
            Thank you for your generosity
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-ink/70">
            Every contribution helps Sunshine Medical Care Initiative continue delivering
            compassionate care, health education, and practical support to communities in need.
          </p>

          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-5 py-2.5 text-sm font-semibold text-brand-ink hover:border-brand-ink transition"
            >
              Contact us for donation questions
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}