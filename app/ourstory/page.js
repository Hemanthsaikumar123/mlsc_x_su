"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowDown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import MLSCBackground from "@/components/MLSCBackground";

import { story } from "@/data/story";

export default function OurStoryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">

      <MLSCBackground />

      <div className="relative z-10">

        {/* =========================================
            HEADER
        ========================================= */}

        <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 md:px-8 md:pt-44">

          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-xs text-white/30 transition hover:text-white"
          >
            <ArrowLeft size={14} />
            Back home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <div className="flex items-center gap-3">

              <Sparkles
                size={15}
                className="text-[#50BFFF]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#50BFFF]">
                Our Story
              </span>

            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-8xl">

              From an idea
              <br />

              <span className="bg-gradient-to-r from-white via-[#9DDEFF] to-[#1688F5] bg-clip-text text-transparent">
                to a community.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
              Every community has a beginning. This is the story
              of how MLSC × SU grows, evolves and continues to
              create opportunities for students.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/25"
          >
            <ArrowDown size={14} />
            Our journey through time
          </motion.div>

        </section>


        {/* =========================================
            TIMELINE
        ========================================= */}

        <section className="border-y border-white/[0.06]">

          <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32">

            <div className="relative">

              {/* Timeline line */}

              <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-[#1688F5]/40 via-[#1688F5]/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

              {story.map((item, index) => (
                <StoryItem
                  key={`${item.year}-${index}`}
                  item={item}
                  index={index}
                />
              ))}

            </div>

          </div>

        </section>


        {/* =========================================
            PRESENT
        ========================================= */}

        <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">

          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#50BFFF]">
                Today
              </p>
            </div>

            <div>

              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                The story is still
                <span className="text-[#50BFFF]">
                  {" "}being written.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/40">
                MLSC × SU isn't defined only by its past.
                Every workshop, project, event and student who
                joins the community becomes part of what comes next.
              </p>

              <Link
                href="/events"
                className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
              >
                Explore what's happening

                <ArrowUpRight
                  size={14}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </div>

        </section>


        {/* =========================================
            FUTURE
        ========================================= */}

        <section className="border-y border-white/[0.06] bg-[#030b19]/40">

          <div className="mx-auto max-w-5xl px-5 py-28 text-center md:px-8">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#50BFFF]">
              What's next?
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              The next chapter
              <br />
              belongs to <span className="text-[#50BFFF]">you.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35">
              Communities grow when new people bring new ideas.
              Maybe your contribution becomes part of the next
              chapter of MLSC × SU.
            </p>

            <Link
              href="/events"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0875E1] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#1688F5]"
            >
              Be Part of the Story

              <ArrowUpRight size={16} />
            </Link>
          </div>

        </section>

      </div>
    </main>
  );
}


/* =====================================================
   STORY ITEM
===================================================== */

function StoryItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative mb-20 last:mb-0 md:mb-28"
    >

      {/* Desktop layout */}

      <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] md:items-start">

        {/* Left */}

        <div className={isEven ? "pr-12 text-right" : ""}>

          {isEven && (
            <StoryContent item={item} />
          )}

        </div>


        {/* Center */}

        <div className="relative flex justify-center">

          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#1688F5]/30 bg-[#061326] shadow-[0_0_25px_rgba(8,117,225,0.15)]">

            <div className="h-2 w-2 rounded-full bg-[#50BFFF] shadow-[0_0_10px_#50BFFF]" />

          </div>

        </div>


        {/* Right */}

        <div className={!isEven ? "pl-12" : ""}>

          {!isEven && (
            <StoryContent item={item} />
          )}

        </div>

      </div>


      {/* Mobile */}

      <div className="relative pl-14 md:hidden">

        <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#1688F5]/30 bg-[#061326]">

          <div className="h-2 w-2 rounded-full bg-[#50BFFF]" />

        </div>

        <StoryContent item={item} />

      </div>

    </motion.article>
  );
}


/* =====================================================
   STORY CONTENT
===================================================== */

function StoryContent({ item }) {
  return (
    <div>

      <span className="text-4xl font-bold tracking-[-0.04em] text-[#1688F5]/70">
        {item.year}
      </span>

      <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#50BFFF]">
        {item.highlight}
      </p>

      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {item.title}
      </h2>

      <p className="mt-4 text-sm leading-7 text-white/35">
        {item.description}
      </p>

    </div>
  );
}