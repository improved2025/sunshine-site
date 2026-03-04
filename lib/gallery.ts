export type GalleryItem = {
  src: string;
  program: string;
  label: string;
};

const PROGRAMS: { slug: string; label: string; prefix: string }[] = [
  { slug: "medical-outreach", label: "Medical Outreach", prefix: "m" },
  { slug: "preventive-health", label: "Preventive Health", prefix: "p" },
  { slug: "surgical-services", label: "Surgical Services", prefix: "s" },
  { slug: "vision-support", label: "Vision Support", prefix: "v" },
  { slug: "fitness-awareness", label: "Fitness Awareness", prefix: "f" },
  { slug: "partnerships", label: "Partnerships", prefix: "pa" },
];

export function getGalleryItems(perProgram = 9): GalleryItem[] {
  const items: GalleryItem[] = [];

  for (const pr of PROGRAMS) {
    for (let i = 1; i <= perProgram; i++) {
      const n = String(i).padStart(2, "0");
      items.push({
        src: `/media/${pr.slug}/photos/${pr.prefix}${n}.jpg`,
        program: pr.slug,
        label: pr.label,
      });
    }
  }

  return items;
}

export const PROGRAM_FILTERS = PROGRAMS.map(({ slug, label }) => ({
  slug,
  label,
}));