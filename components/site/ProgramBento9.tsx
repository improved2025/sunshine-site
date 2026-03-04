import Image from "next/image";

type Props = {
  photos: string[]; // expects 9
  alt: string;
};

export function ProgramBento9({ photos, alt }: Props) {
  const p = photos.slice(0, 9);

  return (
    <div className="grid grid-cols-12 gap-3">
      {/* Large landscape */}
      <div className="relative col-span-12 md:col-span-7 aspect-[16/10] overflow-hidden rounded-[20px] border border-black/5 bg-white/40">
        <Image
          src={p[0]}
          alt={`${alt} 1`}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
      </div>

      {/* Tall portrait */}
      <div className="relative col-span-6 md:col-span-5 aspect-[4/5] overflow-hidden rounded-[20px] border border-black/5 bg-white/40">
        <Image
          src={p[1]}
          alt={`${alt} 2`}
          fill
          unoptimized
          sizes="(max-width: 768px) 50vw, 40vw"
          className="object-cover"
        />
      </div>

      {/* Two mediums */}
      <div className="relative col-span-6 md:col-span-4 aspect-[4/3] overflow-hidden rounded-[20px] border border-black/5 bg-white/40">
        <Image
          src={p[2]}
          alt={`${alt} 3`}
          fill
          unoptimized
          sizes="(max-width: 768px) 50vw, 30vw"
          className="object-cover"
        />
      </div>

      <div className="relative col-span-6 md:col-span-4 aspect-[4/3] overflow-hidden rounded-[20px] border border-black/5 bg-white/40">
        <Image
          src={p[3]}
          alt={`${alt} 4`}
          fill
          unoptimized
          sizes="(max-width: 768px) 50vw, 30vw"
          className="object-cover"
        />
      </div>

      {/* Wide strip */}
      <div className="relative col-span-12 md:col-span-4 aspect-[16/10] overflow-hidden rounded-[20px] border border-black/5 bg-white/40">
        <Image
          src={p[4]}
          alt={`${alt} 5`}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-cover"
        />
      </div>

      {/* Bottom 4 squares */}
      <div className="relative col-span-3 aspect-square overflow-hidden rounded-[18px] border border-black/5 bg-white/40">
        <Image src={p[5]} alt={`${alt} 6`} fill unoptimized sizes="25vw" className="object-cover" />
      </div>
      <div className="relative col-span-3 aspect-square overflow-hidden rounded-[18px] border border-black/5 bg-white/40">
        <Image src={p[6]} alt={`${alt} 7`} fill unoptimized sizes="25vw" className="object-cover" />
      </div>
      <div className="relative col-span-3 aspect-square overflow-hidden rounded-[18px] border border-black/5 bg-white/40">
        <Image src={p[7]} alt={`${alt} 8`} fill unoptimized sizes="25vw" className="object-cover" />
      </div>
      <div className="relative col-span-3 aspect-square overflow-hidden rounded-[18px] border border-black/5 bg-white/40">
        <Image src={p[8]} alt={`${alt} 9`} fill unoptimized sizes="25vw" className="object-cover" />
      </div>
    </div>
  );
}