import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { events } from "@/data/events";
import Navbar from "@/components/Navbar";
import MLSCBackground from "@/components/MLSCBackground";

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({ params }) {
  const { slug } = await params;

  const event = events.find(
    (item) => item.slug === slug
  );

  if (!event) {
    notFound();
  }

  const formattedDate = new Date(
    event.date
  ).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">

      <MLSCBackground />
      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-36 md:px-8">

        {/* Back */}
        <Link
          href="/events"
          className="mb-10 inline-flex items-center gap-2 text-xs text-white/30 transition hover:text-white"
        >
          <ArrowLeft size={14} />
          All events
        </Link>

        {/* Hero */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">

          {/* Content */}
          <div>

            <div className="flex items-center gap-3">
              <span className="rounded-full border border-[#1688F5]/30 bg-[#0875E1]/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#50BFFF]">
                {event.category}
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                {event.status}
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              {event.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
              {event.description}
            </p>

            {/* Event information */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              <EventInfo
                icon={<CalendarDays size={16} />}
                label="Date"
                value={formattedDate}
              />

              <EventInfo
                icon={<Clock size={16} />}
                label="Time"
                value={event.time}
              />

              <EventInfo
                icon={<MapPin size={16} />}
                label="Location"
                value={event.location}
              />

            </div>

            {/* Register */}
            <a
              href={event.registrationLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#0875E1] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#1688F5]"
            >
              Register for Event

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

          {/* Poster */}
          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-[#0875E1]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#061326]">
              {event.image ? (
                <img
                  src={event.image}
                  alt={event.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center">
                  <span className="text-sm text-white/20">
                    MLSC Event
                  </span>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Event details */}
        <div className="mt-28 grid gap-12 border-t border-white/[0.07] pt-16 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#50BFFF]">
              About the event
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              What to expect
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/40">
              Meet fellow students, explore new ideas and
              gain practical experience through this MLSC
              community experience.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}

function EventInfo({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 text-[#50BFFF]">
        {icon}

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm text-white/70">
        {value}
      </p>
    </div>
  );
}