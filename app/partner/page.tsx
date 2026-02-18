import { Button } from "@/components/ui/Button";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-sunshine-offwhite text-sunshine-charcoal">
      
      <section className="mx-auto max-w-[900px] px-6 py-14">
        <h1 className="text-4xl font-extrabold">Partner With Us</h1>

        <p className="mt-4 text-sunshine-charcoal/70">
          Sunshine Medical Care Initiative collaborates with hospitals, NGOs, corporations,
          and community organizations to expand access to quality healthcare worldwide.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            "Corporate Sponsorship",
            "Medical Supplies & Equipment",
            "Hospital & Clinic Partnerships",
            "Volunteer Medical Teams",
          ].map((x) => (
            <div key={x} className="rounded-[18px] bg-white border border-black/5 p-6">
              <h3 className="font-extrabold">{x}</h3>
              <p className="mt-2 text-sm text-sunshine-charcoal/70">
                Partner with us to deliver care where it is needed most.
              </p>
            </div>
          ))}
        </div>

        <form className="mt-10 rounded-[22px] bg-white border border-black/5 p-8 space-y-4">
          <h3 className="text-xl font-extrabold">Partnership Inquiry</h3>

          <input placeholder="Full Name" className="w-full rounded-xl border px-4 py-3" />
          <input placeholder="Organization" className="w-full rounded-xl border px-4 py-3" />
          <input placeholder="Email" className="w-full rounded-xl border px-4 py-3" />
          <textarea placeholder="How would you like to partner?" className="w-full rounded-xl border px-4 py-3 h-32" />

          <Button href="#" variant="primary">Submit Inquiry</Button>
        </form>
      </section>
    </main>
  );
}
