
export default function ProgramDetail({ params }: { params: { slug: string } }) {
  const title = params.slug.replace("-", " ").toUpperCase();

  return (
    <main className="min-h-screen bg-sunshine-offwhite text-sunshine-charcoal">
      

      <section className="mx-auto max-w-[900px] px-6 py-14">
        <div className="h-64 rounded-[22px] bg-sunshine-softgray mb-8" />

        <h1 className="text-4xl font-extrabold">{title}</h1>

        <p className="mt-4 text-sunshine-charcoal/70">
          Detailed program description will go here. This page will later include images,
          outcomes, how donations help, and a call to action.
        </p>

        <div className="mt-8 rounded-[18px] bg-white border border-black/5 p-6">
          <h3 className="font-extrabold text-lg">How You Can Help</h3>
          <p className="mt-2 text-sm text-sunshine-charcoal/70">
            Support this program through donations, volunteering, or partnership.
          </p>
        </div>
      </section>
    </main>
  );
}
