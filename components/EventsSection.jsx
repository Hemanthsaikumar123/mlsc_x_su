"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import { events } from "@/data/events";
import EventCard from "./EventCard";

const filters = [
  "All",
  "AI",
  "Web",
  "Cloud",
  "Hackathon",
];

export default function EventsSection() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = useMemo(() => {
    if (filter === "All") {
      return events;
    }

    return events.filter(
      (event) => event.category === filter
    );
  }, [filter]);

  const upcomingEvents = filteredEvents.filter(
    (event) => event.status === "Upcoming"
  );

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#020817] py-28 md:py-36"
    >

      {/* Background */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(8,117,225,0.08), transparent 68%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-8 bg-[#1688F5]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#50BFFF]">
                What's happening
              </span>

            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              Learn together.
              <br />

              <span className="bg-gradient-to-r from-white via-[#9DDEFF] to-[#1688F5] bg-clip-text text-transparent">
                Build together.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
              Workshops, hackathons, tech talks and community
              experiences designed to help students turn curiosity
              into capability.
            </p>
          </motion.div>

          {/* View all */}
          <motion.a
            href="/events"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group flex w-fit items-center gap-2 text-sm font-medium text-white/50 transition hover:text-white"
          >
            View all events

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>

        </div>

        {/* Filters */}
        <div className="mt-12 flex gap-2 overflow-x-auto pb-2">

          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all ${
                filter === item
                  ? "border-[#1688F5]/40 bg-[#0875E1]/15 text-[#50BFFF]"
                  : "border-white/[0.07] bg-white/[0.02] text-white/30 hover:border-white/15 hover:text-white/60"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Events */}
        {upcomingEvents.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
              />
            ))}

          </div>
        ) : (
          <EmptyEvents />
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex items-center justify-center"
        >
          <div className="flex items-center gap-3 text-xs text-white/25">
            <CalendarDays size={15} />

            More events are coming soon.
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function EmptyEvents() {
  return (
    <div className="mt-10 rounded-3xl border border-dashed border-white/[0.08] py-20 text-center">
      <p className="text-sm text-white/30">
        No events found in this category.
      </p>
    </div>
  );
}