import Link from "next/link";
import { ProgramBento9 } from "@/components/site/ProgramBento9";

const programs = [
  {
    slug: "medical-outreach",
    title: "Free Medical Outreaches",
    desc: "Community-based medical missions delivering diagnosis, treatment, and prescriptions at no cost.",
  },
  {
    slug: "preventive-health",
    title: "Preventive Health Education",
    desc: "Training and education on diabetes, hypertension, stroke prevention, and patient care.",
  },
  {
    slug: "surgical-services",
    title: "Free or subsidized surgeries in partnership with local healthcare providers.",
    desc: "Specialized Surgical Services",
  },
  {
    slug: "vision-support",
    title: "Vision Support",
    desc: "Distribution of reading glasses during outreach programs.",
  },
  {
    slug: "fitness-awareness",
    title: "Health & Fitness Awareness",
    desc: "Community wellness education focused on lifestyle improvement.",
  },
  {
    slug: "partnerships",
    title: "Strategic Partnerships",
    desc: "Collaboration with NGOs and institutions to reduce mortality and increase life expectancy.",
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

  const p = prefix[slug];
  if (!p) return [];

  return Array.from({ length: 9 }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `/media/${slug}/photos/${p}${n}.jpg`;
  });
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-sunshine-offwhite text-sunshine-charcoal">
      {/* Page intro */}
      <section className="mx-auto max-w-[1240px] px-6 pt-12 pb-10">
        <p className="text-xs uppercase tracking-[0.18em] text-sunshine-charcoal/60">
          Programs
        </p>
        <h1 className="mt-3 text-5xl leading-[1.05] font-extrabold">
          Six core areas. One mission.
        </h1>
        <p className="mt-5 text-sunshine-charcoal/70 max-w-2xl">
          Photo-driven healthcare initiatives designed to serve underserved communities locally and globally.
          Each program is built for practical care, prevention, and lasting impact.
        </p>
      </section>

      {/* Editorial sections */}
      <section className="mx-auto max-w-[1240px] px-6 pb-16 space-y-14">
        {programs.map((p, idx) => {
          const reversed = idx % 2 === 1;

          return (
            <div
              key={p.slug}
              className="rounded-[28px] border border-black/5 bg-white/45 p-6 md:p-10"
            >
              <div
                className={`grid items-start gap-10 md:grid-cols-12 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div className="md:col-span-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-sunshine-charcoal/60">
                    Core Area {String(idx + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                    {p.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-sunshine-charcoal/75">
                    {p.desc}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={`/programs/${p.slug}`}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-sunshine-green text-white hover:opacity-95 transition"
                    >
                      Learn more
                    </Link>

                    <Link
                      href="/gallery"
                      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-black/10 bg-white/70 hover:bg-white transition"
                    >
                      View photos
                    </Link>
                  </div>
                </div>

                {/* Photo bento */}
                <div className="md:col-span-8">
                  <ProgramBento9 photos={photosFor(p.slug)} alt={p.title} />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}