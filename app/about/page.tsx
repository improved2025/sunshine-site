"use client";

import { useState } from "react";

type Section = {
  title: string;
  content: React.ReactNode;
};

const sections: Section[] = [
  {
    title: "History",
    content: (
      <p>
        Sunshine Medical Care Initiative was formed to expand access to quality healthcare for
        underserved communities through volunteer-led outreach, education, and life-changing
        interventions.
      </p>
    ),
  },
  {
    title: "Mission",
    content: (
      <p>
        Provide access to quality healthcare for underprivileged and underserved communities through
        volunteer professionals and compassionate service.
      </p>
    ),
  },
  {
    title: "Vision",
    content: (
      <p>
        A world where communities everywhere can access essential healthcare services, education,
        and support regardless of income or location.
      </p>
    ),
  },
  {
    title: "Purpose",
    content: (
      <p>
        To mobilize resources, people, and partnerships that deliver practical care, prevent
        disease, and restore dignity through compassionate medical service.
      </p>
    ),
  },
  {
    title: "Leadership / Team",
    content: (
      <div className="space-y-4">
        <p>
          Our work is guided by a committed board and leadership team dedicated to accountability,
          transparency, and measurable impact.
        </p>

        {/* Board list placeholder (we’ll replace with extracted names) */}
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Board Chair — Name",
            "Vice Chair — Name",
            "Secretary — Name",
            "Treasurer — Name",
            "Board Member — Name",
            "Board Member — Name",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[18px] border border-brand-line bg-white/55 px-4 py-3"
            >
              <div className="text-sm font-semibold text-brand-ink">{item}</div>
            </div>
          ))}
        </div>

        <p className="text-xs text-brand-ink/55">
          Send the finalized board roster when ready and I’ll format it properly.
        </p>
      </div>
    ),
  },
];

function AccordionItem({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[22px] border border-brand-line bg-white/55 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-6 text-left hover:bg-white/70 transition"
        aria-expanded={open}
      >
        <span className="font-heading text-2xl text-brand-ink">{title}</span>

        <span
          className={[
            "inline-flex h-10 w-10 items-center justify-center rounded-full border transition",
            open
              ? "border-brand-ink/20 bg-white rotate-180"
              : "border-brand-line bg-white/40",
          ].join(" ")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className={open ? "opacity-90" : "opacity-70"}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={[
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-1 text-sm leading-7 text-brand-ink/70">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <main className="min-h-screen bg-brand-ivory text-brand-ink">
      <section className="mx-auto max-w-[1000px] px-6 pt-12 pb-16">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-ink/60">
          About
        </p>

        <h1 className="mt-3 font-heading text-5xl leading-[1.05]">
          Who we are, and why this work matters.
        </h1>

        <p className="mt-5 text-brand-ink/70 max-w-2xl">
          Clear purpose. Strong leadership. Practical care that reaches people who need it most.
        </p>

        <div className="mt-10 space-y-4">
          {sections.map((s, idx) => (
            <AccordionItem
              key={s.title}
              title={s.title}
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              {s.content}
            </AccordionItem>
          ))}
        </div>
      </section>
    </main>
  );
}
