import Image from "next/image";
import Link from "next/link";

type ImpactStory = {
  title: string;
  desc: string;
  slug: string;
  prefix: string;
};

const stories: ImpactStory[] = [
  {
    title: "Free Medical Outreaches",
    desc: "Delivering diagnosis, treatment, prescriptions, and compassionate care directly to underserved communities.",
    slug: "medical-outreach",
    prefix: "m",
  },
  {
    title: "Preventive Health Education",
    desc: "Equipping communities with practical education on diabetes, hypertension, stroke prevention, and patient care.",
    slug: "preventive-health",
    prefix: "p",
  },
  {
    title: "Specialized Surgical Services",
    desc: "Supporting access to surgical interventions through trusted partnerships and practical care pathways.",
    slug: "surgical-services",
    prefix: "s",
  },
  {
    title: "Vision Support",
    desc: "Improving daily life and access through basic vision screening and reading-glass support.",
    slug: "vision-support",
    prefix: "v",
  },
];

function photo(slug: string, prefix: string, n: number) {
  const num = String(n).padStart(2, "0");
  return `/media/${slug}/photos/${prefix}${num}.jpg`;
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-brand-ivory text-brand-ink">
      {/* Hero */}
      <section className="mx-auto max-w-[1140px] px-6 pt-12 pb-10">
        <div className="relative overflow-hidden rounded-[30px] border border-brand-line">
          <div className="absolute inset-0">
            <Image
              src={photo("medical-outreach", "m", 1)}
              alt="Sunshine Medical Care Initiative impact"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1140px) 100vw, 1140px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/78 via-[#0B0F14]/48 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,74,.22),transparent_45%)]" />
          </div>

          <div className="relative px-8 py-14 md:px-10 md:py-18">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Impact
            </p>

            <h1 className="mt-3 max-w-3xl font-heading text-5xl md:text-6xl leading-[1.02] text-white">
              Real outreach. Real care. Real outcomes.
            </h1>

            <p className="mt-5 max-w-2xl text-white/80 leading-8">
              Sunshine Medical Care Initiative serves communities through practical healthcare access,
              education, support, and partnership-driven interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Impact principles */}
      <section className="mx-auto max-w-[1140px] px-6 py-4">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[24px] border border-brand-line bg-white/70 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-brand-ink/55">
              Access
            </p>
            <h2 className="mt-3 font-heading text-2xl">Care where it is needed most.</h2>
            <p className="mt-3 text-sm leading-7 text-brand-ink/70">
              Our programs are designed to bring practical care closer to underserved communities.
            </p>
          </div>

          <div className="rounded-[24px] border border-brand-line bg-white/70 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-brand-ink/55">
              Education
            </p>
            <h2 className="mt-3 font-heading text-2xl">Prevention through knowledge.</h2>
            <p className="mt-3 text-sm leading-7 text-brand-ink/70">
              We invest in community education that supports healthier decisions and stronger outcomes.
            </p>
          </div>

          <div className="rounded-[24px] border border-brand-line bg-white/70 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-brand-ink/55">
              Partnership
            </p>
            <h2 className="mt-3 font-heading text-2xl">Sustained impact through collaboration.</h2>
            <p className="mt-3 text-sm leading-7 text-brand-ink/70">
              We work with professionals, institutions, and supporters to extend the reach of our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Story blocks */}
      <section className="mx-auto max-w-[1140px] px-6 py-12 space-y-10">
        {stories.map((story, idx) => {
          const reverse = idx % 2 === 1;

          return (
            <div
              key={story.slug}
              className="rounded-[28px] border border-brand-line bg-white/60 p-6 md:p-8"
            >
              <div className={`grid items-center gap-8 md:grid-cols-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="md:col-span-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-brand-ink/55">
                    Impact Area {String(idx + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mt-3 font-heading text-4xl leading-tight">
                    {story.title}
                  </h2>

                  <p className="mt-4 text-sm leading-8 text-brand-ink/72">
                    {story.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/programs/${story.slug}`}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-sunshine-charcoal text-navy hover:opacity-95 transition"
                    >
                      View program
                    </Link>

                    <Link
                      href="/donate"
                      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold border border-brand-line bg-white hover:bg-white/90 transition"
                    >
                      Support this work
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-7">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="relative col-span-12 sm:col-span-7 aspect-[16/10] overflow-hidden rounded-[20px] border border-black/5">
                      <Image
                        src={photo(story.slug, story.prefix, 1)}
                        alt={story.title}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>

                    <div className="relative col-span-12 sm:col-span-5 aspect-[4/5] overflow-hidden rounded-[20px] border border-black/5">
                      <Image
                        src={photo(story.slug, story.prefix, 2)}
                        alt={story.title}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>

                    <div className="relative col-span-4 aspect-square overflow-hidden rounded-[18px] border border-black/5">
                      <Image
                        src={photo(story.slug, story.prefix, 3)}
                        alt={story.title}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="33vw"
                      />
                    </div>

                    <div className="relative col-span-4 aspect-square overflow-hidden rounded-[18px] border border-black/5">
                      <Image
                        src={photo(story.slug, story.prefix, 4)}
                        alt={story.title}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="33vw"
                      />
                    </div>

                    <div className="relative col-span-4 aspect-square overflow-hidden rounded-[18px] border border-black/5">
                      <Image
                        src={photo(story.slug, story.prefix, 5)}
                        alt={story.title}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="33vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}