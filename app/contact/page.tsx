"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ContactField({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="rounded-[22px] border border-brand-line bg-white/70 p-5 shadow-[0_10px_30px_rgba(11,15,20,.04)]">
      <div className="text-xs uppercase tracking-[0.14em] text-brand-ink/50">
        {label}
      </div>

      {href ? (
        <a
          href={href}
          className="mt-2 block text-lg font-semibold text-brand-ink hover:text-brand-ink/80 transition"
        >
          {value}
        </a>
      ) : (
        <div className="mt-2 text-lg font-semibold text-brand-ink">{value}</div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Form submission can be connected next.");
  }

  return (
    <main className="min-h-screen bg-brand-ivory text-brand-ink">
      <section className="mx-auto max-w-[1140px] px-6 pt-12 pb-16">
        {/* Hero strip */}
        <div className="relative overflow-hidden rounded-[30px] border border-brand-line">
          <div className="absolute inset-0">
            <Image
              src="/contact/contact-hero.jpg"
              alt="Contact Sunshine Medical Care Initiative"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1140px) 100vw, 1140px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/75 via-[#0B0F14]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,74,.25),transparent_45%)]" />
          </div>

          <div className="relative px-8 py-14 md:px-10 md:py-18">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Contact
            </p>

            <h1 className="mt-3 font-heading text-5xl md:text-6xl leading-[1.02] text-white">
              Let’s connect.
            </h1>

            <p className="mt-5 max-w-2xl text-white/80 leading-8">
              Whether you want to support the mission, ask a question, discuss a partnership,
              or learn more about our work, we’d love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0B0F14] hover:bg-white/95 transition"
              >
                Send a message
              </a>

              <a
                href="mailto:sunshinecare2020@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15 transition"
              >
                Email us
              </a>
            </div>
          </div>
        </div>

        {/* Contact info cards */}
        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <ContactField
            label="Email"
            value="sunshinecare2020@gmail.com"
            href="mailto:sunshinecare2020@gmail.com"
          />

          <ContactField
            label="Phone"
            value="(404) 916-6501"
            href="tel:4049166501"
          />

          <ContactField
            label="Address"
            value="105 Hickory Trail, Stockbridge, GA 30281"
          />
        </section>

        {/* Main section */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          {/* Contact form */}
          <div
            id="contact-form"
            className="rounded-[28px] border border-brand-line bg-white/65 p-8 shadow-[0_12px_30px_rgba(11,15,20,.05)]"
          >
            <div className="inline-flex rounded-full bg-brand-green/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/70">
              Send a Message
            </div>

            <h2 className="mt-5 font-heading text-3xl">
              We’re here to help.
            </h2>

            <p className="mt-3 text-sm leading-7 text-brand-ink/70">
              Send us a message and we’ll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-brand-ink/75">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-brand-line bg-white px-4 py-3 outline-none transition focus:border-brand-ink/25"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-brand-ink/75">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-brand-line bg-white px-4 py-3 outline-none transition focus:border-brand-ink/25"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-brand-ink/75">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={updateField}
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-brand-line bg-white px-4 py-3 outline-none transition focus:border-brand-ink/25"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-brand-ink/75">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows={6}
                  className="mt-2 w-full rounded-2xl border border-brand-line bg-white px-4 py-3 outline-none transition focus:border-brand-ink/25"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-brand-ink px-6 py-3 text-sm font-semibold text-brand-ivory shadow-[0_10px_24px_rgba(11,15,20,.14)] transition hover:shadow-[0_14px_32px_rgba(11,15,20,.18)]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Side panel */}
          <div className="space-y-6">
            <div className="rounded-[28px] border border-brand-line bg-white/65 p-8 shadow-[0_12px_30px_rgba(11,15,20,.05)]">
              <div className="inline-flex rounded-full bg-brand-gold/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink/70">
                Partnerships
              </div>

              <h2 className="mt-5 font-heading text-3xl">
                Interested in partnering?
              </h2>

              <p className="mt-3 text-sm leading-7 text-brand-ink/70">
                We welcome conversations with individuals, healthcare professionals,
                organizations, churches, and institutions that want to support or collaborate
                with Sunshine Medical Care Initiative.
              </p>
            </div>

            <div className="rounded-[28px] border border-brand-line bg-white/55 p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-ink/55">
                Quick Contact
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-sm font-semibold text-brand-ink">Email</div>
                  <a
                    href="mailto:sunshinecare2020@gmail.com"
                    className="mt-1 block text-brand-ink/72 hover:text-brand-ink transition"
                  >
                    sunshinecare2020@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-sm font-semibold text-brand-ink">Phone</div>
                  <a
                    href="tel:4049166501"
                    className="mt-1 block text-brand-ink/72 hover:text-brand-ink transition"
                  >
                    (404) 916-6501
                  </a>
                </div>

                <div>
                  <div className="text-sm font-semibold text-brand-ink">Location</div>
                  <div className="mt-1 text-brand-ink/72">
                    Stockbridge, Georgia
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-brand-line bg-white/50 p-6">
              <h3 className="text-xl font-semibold text-brand-ink">
                We’d love to hear from you
              </h3>

              <p className="mt-3 text-sm leading-7 text-brand-ink/70">
                Reach out with your questions, ideas, support requests, or partnership interest.
                Every connection helps strengthen the work.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}