import Link from "next/link";
import { notFound } from "next/navigation";
import { ProgramBento9 } from "@/components/site/ProgramBento9";

type Props = { params: Promise<{ slug?: string }> };

const programs = [
  {
    slug: "medical-outreach",
    title: "Free Medical Outreaches",
    desc: "Community-based medical missions delivering diagnosis, treatment, and prescriptions at no cost.",
    bullets: [
      "Free consultations, screening, and basic treatment",
      "Medication support when available",
      "Community triage and referrals for complex cases",
    ],
  },
  {
    slug: "preventive-health",
    title: "Preventive Health Education",
    desc: "Training and education on diabetes, hypertension, stroke prevention, and patient care.",
    bullets: [
      "Health talks and prevention campaigns",
      "Screenings and risk education",
      "Community follow-up and care navigation",
    ],
  },
  {
    slug: "surgical-services",
    title: "Specialized Surgical Services",
    desc: "Free or subsidized surgeries in partnership with local healthcare providers.",
    bullets: [
      "Surgical screening and selection",
      "Partnership-based procedures and aftercare",
      "Post-op support and follow-up coordination",
    ],
  },
  {
    slug: "vision-support",
    title: "Vision Support",
    desc: "Distribution of reading glasses during outreach programs.",
    bullets: [
      "Basic vision screening",
      "Reading glasses distribution",
      "Referral pathways for advanced care",
    ],
  },
  {
    slug: "fitness-awareness",
    title: "Health & Fitness Awareness",
    desc: "Community wellness education focused on lifestyle improvement.",
    bullets: [
      "Lifestyle coaching and wellness talks",
      "Movement and fitness awareness initiatives",
      "Nutrition and healthy habit education",
    ],
  },
  {
    slug: "partnerships",
    title: "Strategic Partnerships",
    desc: "Collaboration with NGOs and institutions to reduce mortality and increase life expectancy.",
    bullets: [
      "Local and international collaborations",
      "Resource mobilization and shared impact delivery",
      "Sustainable models for community health",
    ],
  },
];

function photosFor(slug: string) {
  // Matches your real structure:
  // public/media/<slug>/photos/<prefix><nn>.jpg
  // Example: public/media/fitness-awareness/photos/f01.jpg
  const prefix: Record<string, string> = {
    "medical-outreach": "m",
    "preventive-health": "p",
    "surgical-services": "s",
    "vision-support": "v",
    "fitness-awareness": "f",
    "partnerships": "pa",
  };

  const p = prefix[slug] || "m";

  return Array.from({ length: 9 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/media/${slug}/photos/${p}${n}.jpg`;
  });
}

// Optional but recommended for static build
export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) return notFound();

  const program = programs.find((p) => p.slug === slug);
  if (!program) return notFound();

  return (
    <main className="min-h-screen bg-sunshine-offwhite text-sunshine-charcoal">
      {/* Top intro */}
      <section className="mx-auto max-w-[1240px] px-6 pt-12 pb-10">
        <Link
          href="/programs"
          className="text-sm font-semibold text-sunshine-charcoal/70 hover:text-sunshine-charcoal"
        >
          ← Back to Programs
        </Link>

        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-sunshine-charcoal/60">
          Program
        </p>

        <h1 className="mt-3 text-5xl leading-[1.05] font-extrabold">
          {program.title}
        </h1>

        <p className="mt-5 max-w-3xl text-sunshine-charcoal/70">
          {program.desc}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-sunshine-green text-white hover:opacity-95 transition"
          >
            Donate
          </Link>

          <Link
            href="/partner"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-black/10 bg-white/70 hover:bg-white transition"
          >
            Partner
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-black/10 bg-white/70 hover:bg-white transition"
          >
            Get involved
          </Link>
        </div>
      </section>

      {/* Photo grid + outcomes */}
      <section className="mx-auto max-w-[1240px] px-6 pb-16">
        <div className="rounded-[28px] border border-black/5 bg-white/45 p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <ProgramBento9 photos={photosFor(program.slug)} alt={program.title} />
            </div>

            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-sunshine-charcoal/60">
                What this program delivers
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                Practical care with measurable impact.
              </h2>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-sunshine-charcoal/75">
                {program.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sunshine-green shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 h-px bg-black/5" />

              <p className="mt-6 text-sm text-sunshine-charcoal/70">
                Want to support this work directly? Partner with us or fund the next outreach.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-sunshine-green text-white hover:opacity-95 transition"
                >
                  Fund this program
                </Link>
                <Link
                  href="/partner"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-black/10 bg-white/70 hover:bg-white transition"
                >
                  Become a partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}