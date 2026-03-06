"use client";

import { useState } from "react";

type BoardMember = {
  name: string;
  role: string;
  bio: string;
};

type Section = {
  title: string;
  eyebrow?: string;
  content: React.ReactNode;
};

const boardMembers: BoardMember[] = [
  {
    name: "Freeborn Ukpede",
    role: "Chairman",
    bio: "Freeborn Ukpede serves as Chairman of Sunshine Medical Care Initiative, helping guide the organization’s vision, governance, and strategic direction. His leadership supports the mission of expanding healthcare access and strengthening the impact of the organization’s outreach work.",
  },
  {
    name: "Godwin Oshegbo",
    role: "Secretary",
    bio: "Godwin Oshegbo serves as Secretary of Sunshine Medical Care Initiative, supporting organizational structure, accountability, and communication. His role helps ensure that the work of the organization remains coordinated, documented, and mission-focused.",
  },
  {
    name: "Patricia Barrett",
    role: "Treasurer",
    bio: "Patricia Barrett serves as Treasurer of Sunshine Medical Care Initiative, helping steward the organization’s financial integrity and operational trust. Her leadership contributes to transparency, responsible oversight, and sustainable impact.",
  },
  {
    name: "Ovie Fred Okotie",
    role: "COO",
    bio: "Ovie Fred Okotie serves as COO of Sunshine Medical Care Initiative, helping oversee operations and implementation. His role supports the practical execution of programs, partnerships, and outreach efforts that advance the organization’s mission.",
  },
  {
    name: "Dr. Jeff Traub, MD",
    role: "Board Member",
    bio: "Dr. Jeff Traub, MD, serves on the Board of Sunshine Medical Care Initiative, contributing medical insight and leadership to the organization’s healthcare mission. His involvement strengthens the initiative’s commitment to quality care and meaningful community impact.",
  },
];

function LeadershipSection() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  return (
    <>
      <div className="space-y-6">
        <p className="max-w-3xl text-sm leading-8 text-brand-ink/72">
          Our work is guided by a committed board and leadership team dedicated to accountability,
          transparency, and measurable impact.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {boardMembers.map((member, idx) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setSelectedMember(member)}
              className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-[#11161D] px-5 py-5 text-left shadow-[0_14px_36px_rgba(11,15,20,.10)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(11,15,20,.16)]"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-gold via-brand-green to-[#E53935]" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />

              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.16em] text-white/55">
                  {String(idx + 1).padStart(2, "0")} • {member.role}
                </div>

                <div className="mt-2 font-heading text-2xl leading-tight text-white">
                  {member.name}
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/78 group-hover:text-white">
                  View bio
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 z-[90]">
          <button
            aria-label="Close biography"
            onClick={() => setSelectedMember(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-[8px]"
          />

          <div className="relative mx-auto max-w-[820px] px-6 pt-10">
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#0B0F14]/95 text-white shadow-[0_30px_90px_rgba(0,0,0,.45)]">
              <div className="h-[2px] w-full bg-gradient-to-r from-brand-gold via-brand-green to-[#E53935]" />

              <div className="p-6 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                      Leadership Bio
                    </p>
                    <h3 className="mt-2 font-heading text-3xl md:text-4xl leading-tight">
                      {selectedMember.name}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/70">
                      {selectedMember.role}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedMember(null)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/15 transition"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-6 md:p-7">
                  <p className="text-sm leading-8 text-white/82">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedMember(null)}
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-[#0B0F14] hover:bg-white/95 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

            <div className="h-10" />
          </div>
        </div>
      )}
    </>
  );
}

const sections: Section[] = [
  {
    title: "History",
    eyebrow: "Foundation",
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
    eyebrow: "What drives us",
    content: (
      <p>
        Provide access to quality healthcare for underprivileged and underserved communities through
        volunteer professionals and compassionate service.
      </p>
    ),
  },
  {
    title: "Vision",
    eyebrow: "Where we are going",
    content: (
      <p>
        A world where communities everywhere can access essential healthcare services, education,
        and support regardless of income or location.
      </p>
    ),
  },
  {
    title: "Purpose",
    eyebrow: "Why we exist",
    content: (
      <p>
        To mobilize resources, people, and partnerships that deliver practical care, prevent
        disease, and restore dignity through compassionate medical service.
      </p>
    ),
  },
  {
    title: "Leadership / Team",
    eyebrow: "Board & governance",
    content: <LeadershipSection />,
  },
];

function AccordionItem({
  title,
  eyebrow,
  open,
  onToggle,
  children,
}: {
  title: string;
  eyebrow?: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-brand-line bg-white/70 shadow-[0_10px_30px_rgba(11,15,20,.04)] transition hover:shadow-[0_16px_40px_rgba(11,15,20,.07)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-gold/80 via-brand-green/70 to-[#E53935]/60" />

      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-6 md:px-7 md:py-7 flex items-center justify-between gap-6 text-left hover:bg-white/80 transition"
        aria-expanded={open}
      >
        <div className="min-w-0">
          {eyebrow ? (
            <p className="text-[11px] uppercase tracking-[0.16em] text-brand-ink/52">
              {eyebrow}
            </p>
          ) : null}

          <span className="mt-1 block font-heading text-2xl md:text-[2rem] leading-tight text-brand-ink">
            {title}
          </span>
        </div>

        <span
          className={[
            "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition",
            open
              ? "border-brand-ink/15 bg-white rotate-180 shadow-[0_8px_20px_rgba(11,15,20,.06)]"
              : "border-brand-line bg-white/50",
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
          <div className="px-6 pb-7 pt-0 md:px-7 text-[15px] leading-8 text-brand-ink/74">
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
      <section className="mx-auto max-w-[1080px] px-6 pt-12 pb-16">
        <div className="rounded-[30px] border border-brand-line bg-white/55 p-8 md:p-10 shadow-[0_16px_40px_rgba(11,15,20,.04)]">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-ink/55">
            About
          </p>

          <h1 className="mt-3 font-heading text-5xl md:text-6xl leading-[1.02]">
            Who we are, and why this work matters.
          </h1>

          <p className="mt-5 max-w-2xl text-brand-ink/70 leading-8">
            Clear purpose. Strong leadership. Practical care that reaches people who need it most.
            Sunshine Medical Care Initiative exists to bring dignity, access, and compassionate
            healthcare support to underserved communities.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {sections.map((s, idx) => (
            <AccordionItem
              key={s.title}
              title={s.title}
              eyebrow={s.eyebrow}
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