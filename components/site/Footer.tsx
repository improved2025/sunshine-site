import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16">
      {/* Color ribbon */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-gold via-brand-green to-[#E53935]" />

      <div className="bg-[#0E2A1A] text-white">
        <div className="mx-auto max-w-[1240px] px-6 py-14">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-heading text-2xl">Sunshine Medical Care Initiative</div>
              <p className="mt-4 text-white/75 max-w-md">
                Compassionate care begins with us. We mobilize professionals to expand healthcare access
                for underserved communities.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                <span className="h-2 w-2 rounded-full bg-brand-green" />
                <span className="h-2 w-2 rounded-full bg-[#E53935]" />
              </div>
            </div>

            <div className="md:col-span-7 grid gap-10 sm:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-white/60">Explore</div>
                <div className="mt-4 space-y-3 text-sm font-semibold">
                  <Link href="/about" className="block hover:text-white">About</Link>
                  <Link href="/programs" className="block hover:text-white">Programs</Link>
                  <Link href="/impact" className="block hover:text-white">Impact</Link>
                  <Link href="/gallery" className="block hover:text-white">Gallery</Link>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-white/60">Get involved</div>
                <div className="mt-4 space-y-3 text-sm font-semibold">
                  <Link href="/get-involved" className="block hover:text-white">Volunteer</Link>
                  <Link href="/partner" className="block hover:text-white">Partner</Link>
                  <Link href="/donate" className="block hover:text-white">Donate</Link>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-white/60">Contact</div>
                <div className="mt-4 space-y-3 text-sm text-white/75">
                  <div>Stockbridge, GA</div>
                  <div>
                    <Link href="mailto:sunshinecare2020@gmail.com" className="hover:text-white font-semibold">
                      sunshinecare2020@gmail.com
                    </Link>
                  </div>
                  <div>
                    <Link href="tel:4049166501" className="hover:text-white font-semibold">
                      (404) 916-6501
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 h-px bg-white/10" />

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/60">
            <div>© {year} Sunshine Medical Care Initiative. All rights reserved.</div>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
