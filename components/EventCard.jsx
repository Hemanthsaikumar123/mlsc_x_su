"use client";

import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EventCard({ event, index }) {
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#061326]/55 backdrop-blur-xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-[#071a32]">

        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-white/20">
              MLSC Event
            </span>
          </div>
        )}

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061326] via-transparent to-transparent" />

        {/* Category */}
        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
          {event.category}
        </div>

        {/* Status */}
        <div className="absolute right-5 top-5 rounded-full bg-[#0875E1]/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white">
          {event.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold tracking-tight text-white">
          {event.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/35">
          {event.description}
        </p>

        {/* Details */}
        <div className="mt-6 space-y-2.5">

          <div className="flex items-center gap-2.5 text-xs text-white/35">
            <CalendarDays
              size={14}
              className="text-[#50BFFF]"
            />

            {formattedDate} · {event.time}
          </div>

          <div className="flex items-center gap-2.5 text-xs text-white/35">
            <MapPin
              size={14}
              className="text-[#50BFFF]"
            />

            {event.location}
          </div>

        </div>

        {/* CTA */}
        <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">

        <Link
        href={`/events/${event.slug}`}
        className="flex items-center justify-between border-t border-white/[0.06] pt-5"
        >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 transition-colors group-hover:text-[#50BFFF]">
            View Event
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all group-hover:border-[#1688F5]/40 group-hover:bg-[#0875E1]/10 group-hover:text-[#50BFFF]">
            <ArrowUpRight size={15} />
        </div>
        </Link>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all group-hover:border-[#1688F5]/40 group-hover:bg-[#0875E1]/10 group-hover:text-[#50BFFF]">
            <ArrowUpRight size={15} />
          </div>

        </div>

      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0078D4] to-[#50BFFF] transition-all duration-700 group-hover:w-full" />

    </motion.article>
  );
}