"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Users,
  ShieldCheck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import MLSCBackground from "@/components/MLSCBackground";
import ShinyText from "@/components/ShinyText";

import {
  leadership,
  domainLeads,
} from "@/data/team";

export default function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">

      <MLSCBackground />

      <Navbar />

      <div className="relative z-10">

        {/* =========================================
            HEADER
        ========================================= */}

        <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-44">

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

              <Users
                size={15}
                className="text-[#50BFFF]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#50BFFF]">
                MLSC × SU
              </span>

            </div>

            <h1 className="mt-7 text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-8xl">

              Meet the
              <br />

              <ShinyText text="team behind MLSC." />

            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
              The people who lead, coordinate and create the
              experiences that bring the MLSC × SU community
              together.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button className="rounded-full border border-[#1688F5]/40 bg-[#0875E1]/15 px-5 py-2 text-[11px] font-semibold tracking-wider text-[#50BFFF] transition">
                2025 - 2026
              </button>
              <button className="rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2 text-[11px] font-semibold tracking-wider text-white/30 transition hover:text-white/70 hover:bg-white/[0.05]">
                2024 - 2025
              </button>
            </div>

          </motion.div>

        </section>


        {/* =========================================
            FACULTY COORDINATOR
        ========================================= */}

        <section className="border-y border-white/[0.06]">

          <div className="mx-auto max-w-5xl px-5 py-20 md:px-8">

            <SectionHeading
              number="01"
              title="Faculty Coordinator"
            />

            <div className="mt-10 flex justify-center">

              <LeadershipCard
                person={leadership.facultyCoordinator}
                featured
              />

            </div>

          </div>

        </section>


        {/* =========================================
            CHAIR
        ========================================= */}

        <section>

          <div className="mx-auto max-w-5xl px-5 py-24 md:px-8">

            <SectionHeading
              number="02"
              title="Leadership"
            />

            {/* Chair */}
            <div className="mt-10 flex justify-center">

              <LeadershipCard
                person={leadership.chair}
                featured
              />

            </div>


            {/* Connecting line */}
            <div className="mx-auto h-14 w-px bg-gradient-to-b from-[#1688F5]/40 to-white/[0.05]" />


            {/* Vice Chairs */}
            <div className="grid gap-5 md:grid-cols-2">

              {leadership.viceChairs.map(
                (person, index) => (
                  <LeadershipCard
                    key={index}
                    person={person}
                  />
                )
              )}

            </div>

          </div>

        </section>


        {/* =========================================
            DOMAIN LEADERS
        ========================================= */}

        <section className="border-y border-white/[0.06] bg-[#030b19]/40">

          <div className="mx-auto max-w-7xl px-5 py-28 md:px-8">

            <SectionHeading
              number="03"
              title="Domain Leadership"
            />

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/35">
              Each domain is driven by student leaders who
              create learning experiences, projects and
              opportunities for the community.
            </p>


            <div className="mt-14 space-y-5">

              {domainLeads.map(
                (domain, index) => (
                  <DomainTeam
                    key={domain.id}
                    domain={domain}
                    index={index}
                  />
                )
              )}

            </div>

          </div>

        </section>




      </div>

    </main>
  );
}


/* =====================================================
   SECTION HEADING
===================================================== */

function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4">

      <span className="text-[9px] tracking-[0.25em] text-[#50BFFF]/60">
        {number}
      </span>

      <span className="h-px w-8 bg-[#1688F5]" />

      <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
        {title}
      </h2>

    </div>
  );
}


/* =====================================================
   LEADERSHIP CARD
===================================================== */

function LeadershipCard({ person, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#061326]/60 backdrop-blur-xl ${
        featured
          ? "w-full max-w-sm"
          : "w-full"
      }`}
    >

      <div
        className={`relative overflow-hidden bg-[#071a32] ${
          featured
            ? "aspect-[4/4.5]"
            : "aspect-[4/3]"
        }`}
      >

        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Users
              size={42}
              className="text-white/10"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#061326] via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5">

          <p className="text-[9px] uppercase tracking-[0.2em] text-[#50BFFF]">
            {person.role}
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            {person.name}
          </h3>

        </div>

      </div>

      <div className="flex items-center justify-between px-5 py-4">

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
          MLSC × SU
        </span>

        <ArrowUpRight
          size={15}
          className="text-white/20 transition group-hover:text-[#50BFFF]"
        />

      </div>

    </motion.article>
  );
}


/* =====================================================
   DOMAIN TEAM
===================================================== */

function DomainTeam({ domain, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.04,
      }}
      className="rounded-3xl border border-white/[0.07] bg-[#061326]/50 p-5 backdrop-blur-xl md:p-6"
    >

      {/* Domain heading */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>

          <p className="text-[9px] tracking-[0.25em] text-white/20">
            DOMAIN {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight">
            {domain.domain}
          </h3>

        </div>

        <span className="w-fit rounded-full border border-[#1688F5]/20 bg-[#0875E1]/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[#50BFFF]">
          Domain Team
        </span>

      </div>


      {/* People */}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">

        <PersonRow
          person={domain.lead}
          label="Lead"
        />

        <PersonRow
          person={domain.coLead}
          label="Co-Lead"
        />

      </div>

    </motion.div>
  );
}


/* =====================================================
   PERSON ROW
===================================================== */

function PersonRow({ person, label }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-3">

      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#071a32]">

        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Users
              size={20}
              className="text-white/10"
            />
          </div>
        )}

      </div>

      <div className="min-w-0">

        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#50BFFF]/60">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-white/75">
          {person.name}
        </p>

      </div>

    </div>
  );
}