import { notFound } from "next/navigation";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock,
  MapPin,
  Check,
  BookOpen,
} from "lucide-react";

import { events } from "@/data/events";

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({ params }) {
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="relative min-h-screen text-white">
      <div className="mx-auto max-w-7xl px-5 pb-28 pt-36 md:px-8 md:pt-40">

        {/* Back */}
        <Link
          href="/events"
          className="mb-12 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-[#59C4F7]"
        >
          <ArrowLeft size={14} strokeWidth={1.7} />
          All events
        </Link>

        {/* ================= HERO ================= */}
        <section className="grid gap-14 lg:grid-cols-[1.05fr_0.75fr] lg:items-start">

          {/* LEFT */}
          <div>
            {/* Category / Status */}
            <div className="flex items-center gap-3">
              <span className="border border-[#59C4F7]/30 bg-[#59C4F7]/[0.07] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#59C4F7]">
                {event.category || "Event"}
              </span>

              <span className="h-px w-6 bg-white/15" />

              <span
                className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
                  event.status === "Upcoming"
                    ? "text-[#59C4F7]"
                    : "text-white/25"
                }`}
              >
                {event.status}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] md:text-7xl">
              {event.title}
            </h1>

            {/* Description */}
            {event.description && (
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                {event.description}
              </p>
            )}

            {/* Basic Information */}
            <div className="mt-10 border-y border-white/[0.08]">
              <InfoRow
                icon={<CalendarDays size={16} strokeWidth={1.6} />}
                label="Date"
                value={formattedDate}
              />

              {event.time && (
                <InfoRow
                  icon={<Clock size={16} strokeWidth={1.6} />}
                  label="Time"
                  value={event.time}
                />
              )}

              {event.location && (
                <InfoRow
                  icon={<MapPin size={16} strokeWidth={1.6} />}
                  label="Location"
                  value={event.location}
                />
              )}
            </div>

            {/* Register */}
            {event.status === "Upcoming" && event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-3 bg-[#59C4F7] px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#02050B] transition-colors hover:bg-[#70CFFF]"
              >
                Register for Event

                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            )}
          </div>

          {/* RIGHT — POSTER */}
          <div className="lg:pt-3">
            <div className="overflow-hidden border border-white/[0.10] bg-[#071321]">
              {event.image ? (
                <img
                  src={event.image}
                  alt={event.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">
                    MLSC × SU
                  </span>
                </div>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">
              <span>MLSC × SU</span>
              <span>{event.category || "Event"}</span>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <div className="mt-28 border-t border-white/[0.08]">

          {/* ABOUT */}
          {event.about && (
            <ContentSection
              number="01"
              label="About the Event"
              title="Why this event?"
            >
              <p className="max-w-3xl text-base leading-8 text-white/75">
                {event.about}
              </p>
            </ContentSection>
          )}

          {/* ELIGIBILITY */}
          {event.eligibility?.length > 0 && (
            <ContentSection
              number="02"
              label="Eligibility"
              title="Who can participate?"
            >
              <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2">
                {event.eligibility.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border-b border-white/[0.07] pb-4"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#59C4F7]/30 text-[#59C4F7]">
                      <Check size={11} strokeWidth={2} />
                    </span>

                    <p className="text-sm leading-6 text-white/75">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </ContentSection>
          )}

          {/* LEARNINGS */}
          {event.learnings?.length > 0 && (
            <ContentSection
              number="03"
              label="What You'll Learn"
              title="Take something with you."
            >
              <div className="grid gap-4 md:grid-cols-2">
                {event.learnings.map((learning, index) => (
                  <div
                    key={index}
                    className="border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-[#59C4F7]/25"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-[10px] font-black tracking-[0.15em] text-[#59C4F7]">
                        0{index + 1}
                      </span>

                      <p className="text-sm leading-6 text-white/75">
                        {learning}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ContentSection>
          )}

          {/* WHAT TO EXPECT */}
          
        </div>

        {/* ================= FINAL CTA ================= */}
        {event.status === "Upcoming" && event.registrationLink && (
          <section className="mt-24 border border-[#59C4F7]/20 bg-[#59C4F7]/[0.05] p-8 md:p-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#59C4F7]">
                  Ready to join?
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] md:text-3xl">
                  Be part of the experience.
                </h2>
              </div>

              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 bg-[#59C4F7] px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#02050B] transition-colors hover:bg-[#70CFFF]"
              >
                Register Now
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}


/* ================= COMPONENTS ================= */

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-5 border-b border-white/[0.07] py-5 last:border-b-0">
      <div className="text-[#59C4F7]">{icon}</div>

      <span className="w-20 shrink-0 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">
        {label}
      </span>

      <span className="text-sm text-white/75">
        {value}
      </span>
    </div>
  );
}


function ContentSection({ number, label, title, children }) {
  return (
    <section className="grid gap-8 border-b border-white/[0.08] py-16 md:grid-cols-[180px_1fr] md:gap-16 md:py-20">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-black text-[#59C4F7]">
            {number}
          </span>

          <span className="h-px w-6 bg-[#59C4F7]/30" />
        </div>

        <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/85">
          {label}
        </p>
      </div>

      <div>
        <h2 className="mb-7 text-3xl font-bold tracking-[-0.04em] md:text-4xl">
          {title}
        </h2>

        {children}
      </div>
    </section>
  );
}