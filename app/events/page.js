"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Link from "next/link";

import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import MLSCBackground from "@/components/MLSCBackground";
import Navbar from "@/components/Navbar";
import ShinyText from "@/components/ShinyText";

const filters = [
  "All",
  "AI",
  "Web",
  "Cloud",
  "Hackathon",
  "Advanced Tech",
];

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = useMemo(() => {
    if (filter === "All") return events;

    return events.filter(
      (event) => event.category === filter
    );
  }, [filter]);

  const upcoming = filteredEvents.filter(
    (event) => event.status === "Upcoming"
  );

  const past = filteredEvents.filter(
    (event) => event.status === "Completed"
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">

      <MLSCBackground />
      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-36 md:px-8">

        {/* Back */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-xs text-white/30 transition hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#1688F5]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#50BFFF]">
              MLSC Events
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            Learn.
            <br />

            <ShinyText text="Experience." />
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            Workshops, hackathons, technical sessions and
            community experiences designed to help students
            learn by doing.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-12 flex gap-2 overflow-x-auto pb-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
                filter === item
                  ? "border-[#1688F5]/40 bg-[#0875E1]/15 text-[#50BFFF]"
                  : "border-white/[0.07] bg-white/[0.02] text-white/30 hover:text-white/70"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Upcoming */}
        <section className="mt-12">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#50BFFF] shadow-[0_0_12px_#50BFFF]" />

            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Upcoming Events
            </h2>
          </div>

          {upcoming.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </section>

        {/* Past */}
        {past.length > 0 && (
          <section className="mt-28">
            <div className="mb-7 flex items-center gap-3">
              <CalendarDays
                size={15}
                className="text-white/30"
              />

              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                Past Events
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {past.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                />
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-white/[0.08] px-6 py-20 text-center">
      <CalendarDays
        size={24}
        className="mx-auto text-white/20"
      />

      <p className="mt-4 text-sm text-white/30">
        No events available in this category yet.
      </p>
    </div>
  );
}