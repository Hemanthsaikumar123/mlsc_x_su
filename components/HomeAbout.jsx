"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="relative bg-[#020817] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="grid gap-12 md:grid-cols-[0.65fr_1.35fr] md:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#50BFFF]">
              About MLSC × SU
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              A student community
              <br />
              built around{" "}
              <span className="text-[#50BFFF]">
                technology.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
              MLSC × SU brings students together to explore
              technology, learn from one another, build real
              projects and create meaningful experiences.
            </p>

            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition hover:text-white"
            >
              Discover MLSC

              <ArrowUpRight
                size={14}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 border-y border-white/[0.07] py-8 md:grid-cols-4">

          <Stat number="500+" label="Students" />
          <Stat number="25+" label="Events" />
          <Stat number="7" label="Domains" />
          <Stat number="∞" label="Possibilities" />

        </div>

      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="border-white/[0.07] py-3 md:border-r md:px-8 first:md:pl-0 last:md:border-r-0">
      <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {number}
      </p>

      <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/25">
        {label}
      </p>
    </div>
  );
}