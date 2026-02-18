
const images = Array.from({ length: 12 }).map((_, i) => `/placeholder-${i}.jpg`);

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-sunshine-offwhite text-sunshine-charcoal">
      

      <section className="mx-auto max-w-[1240px] px-6 py-14">
        <h1 className="text-4xl font-extrabold">Gallery</h1>
        <p className="mt-3 text-sunshine-charcoal/70 max-w-xl">
          Moments from our medical outreaches, surgeries, education programs, and community engagement.
        </p>

        <div className="mt-10 columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          {images.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-[22px] overflow-hidden bg-sunshine-softgray"
            >
              <div className="h-64 bg-sunshine-softgray" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
