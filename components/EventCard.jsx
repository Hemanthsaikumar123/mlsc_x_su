"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";

export default function EventCard({ event }) {
  const date = new Date(event.date);

  const day = date.toLocaleDateString("en-IN", {
    day: "2-digit",
  });

  const month = date.toLocaleDateString("en-IN", {
    month: "short",
  });

  const year = date.toLocaleDateString("en-IN", {
    year: "numeric",
  });
    
  const cardContent = (
    <div
      className="
        group relative block
        overflow-hidden
        border border-[#AEE5FF]
        bg-[#59C4F7]
        text-[#02050B]
        transition-colors duration-300
        hover:bg-[#64C9F8]
      "
    >
      {/* Inner frame */}
        <div className="pointer-events-none absolute inset-[5px] border border-black" />

        <div className="relative grid min-h-[225px] md:grid-cols-[150px_1fr_240px]">

          {/* =====================================================
              DATE BLOCK
          ===================================================== */}
          <div
            className="
              relative
              flex
              flex-row
              items-center
              gap-5
              border-b
              border-black/[0.12]
              p-6
              md:flex-col
              md:items-start
              md:justify-center
              md:border-b-0
              md:border-r
              md:p-7
            "
          >
            <div>
              <div
                className="
                  text-[58px]
                  font-black
                  leading-[0.8]
                  tracking-[-0.07em]
                "
              >
                {day}
              </div>

              <div
                className="
                  mt-2
                  text-[12px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                "
              >
                {month}
              </div>
            </div>

            <div
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-black
                md:mt-3
              "
            >
              {year}
            </div>

            {/* Event index */}
            {/* <div
              className="
                ml-auto
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-black/30
                md:absolute
                md:bottom-7
                md:left-7
              "
            >
              EVENT
            </div> */}
          </div>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}
          <div className="flex flex-col justify-center p-6 md:p-8">

            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="h-[5px] w-[5px] rounded-full bg-[#02050B]" />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.28em]
                  text-black/65
                "
              >
                {event.category || "EVENT"}
              </span>
            </div>

            {/* Title */}
            <h3
              className="
                mt-4
                max-w-3xl
                text-[30px]
                font-black
                uppercase
                leading-[0.94]
                tracking-[-0.045em]
                md:text-[38px]
                lg:text-[42px]
              "
            >
              {event.title}
            </h3>

            {/* Description */}
            {event.description && (
              <p
                className="
                  mt-4
                  max-w-xl
                  text-[13px]
                  font-medium
                  leading-5
                  text-black/75
                "
              >
                {event.description}
              </p>
            )}

            {/* Tags */}
            {event.tags?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {event.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="
                      border
                      border-black/20
                      px-2.5
                      py-1
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-black/65
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* =====================================================
              EVENT INFO / ACTION
          ===================================================== */}
          <div
            className="
              flex
              flex-col
              justify-between
              border-t
              border-black/[0.12]
              p-6
              md:border-l
              md:border-t-0
              md:p-7
            "
          >
            {/* Status */}
            <div className="flex items-center justify-between">
              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-black
                "
              >
                {event.status === "Upcoming"
                  ? "Upcoming"
                  : "Completed"}
              </span>

              <span className="text-[9px] font-bold text-black">
                MLSC × SU
              </span>
            </div>

            {/* Information */}
            <div className="mt-7 space-y-3">

              {event.time && (
                <div className="flex items-start gap-3">
                  <Clock
                    size={14}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                  />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                    "
                  >
                    {event.time}
                  </span>
                </div>
              )}

              {event.location && (
                <div className="flex items-start gap-3">
                  <MapPin
                    size={14}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                  />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.08em]
                    "
                  >
                    {event.location}
                  </span>
                </div>
              )}
            </div>

            {/* Action */}
            <div className="mt-7 flex items-center justify-between">
              {event.status === "Upcoming" ? (
                <>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em]">
                    Explore Event
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center border border-black/20 transition-colors duration-300 group-hover:bg-[#02050B] group-hover:text-[#59C4F7]">
                    <ArrowUpRight size={17} strokeWidth={2} />
                  </span>
                </>
              ) : (
                <span className="text-[9px] font-black uppercase tracking-[0.18em] text-black">
                  Event Archive
                </span>
              )}
            </div>
          </div>
        </div>
      {/* ...your existing card content... */}
    </div>
);
  return event.status === "Upcoming" ? (
      <article className="px-1 py-3 md:px-3 md:py-4">
        <Link href={`/events/${event.slug}`}>
          {cardContent}
        </Link>
      </article>
    ) : (
      <article className="px-1 py-3 md:px-3 md:py-4">
        {cardContent}
      </article>
    );
}