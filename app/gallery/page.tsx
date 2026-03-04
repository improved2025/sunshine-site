"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getGalleryItems, PROGRAM_FILTERS } from "@/lib/gallery";

export default function GalleryPage() {
  const items = useMemo(() => getGalleryItems(9), []);
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((it) => it.program === filter);
  }, [filter, items]);

  return (
    <main className="min-h-screen bg-sunshine-offwhite text-sunshine-charcoal">
      <section className="mx-auto max-w-[1240px] px-6 pt-12 pb-10">
        <p className="text-xs uppercase tracking-[0.18em] text-sunshine-charcoal/60">
          Gallery
        </p>

        <h1 className="mt-3 text-5xl leading-[1.05] font-extrabold">
          Outreach moments. Real people. Real impact.
        </h1>

        <p className="mt-5 text-sunshine-charcoal/70 max-w-2xl">
          This gallery automatically pulls photos from your media folders by program.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              filter === "all"
                ? "bg-sunshine-green text-white"
                : "border border-black/10 bg-white/70 hover:bg-white",
            ].join(" ")}
          >
            All
          </button>

          {PROGRAM_FILTERS.map((p) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setFilter(p.slug)}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                filter === p.slug
                  ? "bg-sunshine-green text-white"
                  : "border border-black/10 bg-white/70 hover:bg-white",
              ].join(" ")}
            >
              {p.label}
            </button>
          ))}

          <div className="ml-auto hidden md:block text-sm text-sunshine-charcoal/60">
            Tip: click any photo to view the program.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 pb-16">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((it) => (
            <Link
              key={it.src}
              href={`/programs/${it.program}`}
              className="group relative overflow-hidden rounded-[18px] border border-black/5 bg-white/40"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={it.src}
                  alt={`${it.label} photo`}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="rounded-xl bg-black/45 backdrop-blur px-3 py-2">
                  <div className="text-xs uppercase tracking-[0.14em] text-white/80">
                    {it.label}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    View program →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}