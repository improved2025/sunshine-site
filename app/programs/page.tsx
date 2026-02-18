import Link from "next/link";

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
    title: "Specialized Surgical Services",
    desc: "Free or subsidized surgeries in partnership with local healthcare providers.",
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

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-sunshine-offwhite text-sunshine-charcoal">
      

      <section className="mx-auto max-w-[1240px] px-6 py-14">
        <h1 className="text-4xl font-extrabold">Our Programs</h1>
        <p className="mt-3 text-sunshine-charcoal/70 max-w-xl">
          Photo-driven healthcare initiatives designed to serve underserved communities locally and globally.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="group rounded-[22px] bg-white border border-black/5 overflow-hidden hover:shadow-sm transition"
            >
              <div className="h-48 bg-sunshine-softgray" />
              <div className="p-6">
                <h3 className="font-extrabold text-lg group-hover:text-sunshine-green transition">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-sunshine-charcoal/70">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
