import { notFound } from "next/navigation";

type Props = { params: { slug?: string } };

const programs = [
  {
    slug: "medical-outreaches",
    title: "Medical Outreaches",
    desc: "Free care delivered where access is limited.",
  },
  {
    slug: "surgical-services",
    title: "Surgical Services",
    desc: "Life-changing interventions through local partners.",
  },
  {
    slug: "prevention-education",
    title: "Prevention & Education",
    desc: "Community health education that saves lives.",
  },
];

// Optional but recommended for static build
export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default function ProgramPage({ params }: Props) {
  const slug = params?.slug;
  if (!slug) return notFound();

  const program = programs.find((p) => p.slug === slug);
  if (!program) return notFound();

  return (
    <main className="min-h-screen bg-brand-ivory text-brand-ink">
      <section className="mx-auto max-w-[1000px] px-6 py-14">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-ink/60">
          Program
        </p>

        <h1 className="mt-3 font-heading text-5xl leading-[1.05]">
          {program.title}
        </h1>

        <p className="mt-5 text-brand-ink/70">{program.desc}</p>
      </section>
    </main>
  );
}
