"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Users,
  ShieldCheck,
  ChevronDown
} from "lucide-react";

import Navbar from "@/components/Navbar";
import MLSCBackground from "@/components/MLSCBackground";
import ShinyText from "@/components/ShinyText";
import ProfileTooltip from "@/components/ProfileTooltip";

import { useState } from "react";
import {
  team2024,
  team2025
} from "@/data/team";

export default function TeamPage() {
  const [activeYear, setActiveYear] = useState("2025-2026");
  const activeTeamData = activeYear === "2025-2026" ? team2025 : team2024;
  
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020817] text-white">

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
              <div className="relative">
                <select
                  value={activeYear}
                  onChange={(e) => setActiveYear(e.target.value)}
                  className="appearance-none rounded-full border border-[#1688F5]/40 bg-[#0875E1]/15 py-2.5 pl-5 pr-10 text-[11px] font-semibold tracking-wider text-[#50BFFF] outline-none transition hover:bg-[#0875E1]/20 cursor-pointer"
                >
                  <option value="2025-2026" className="bg-[#061326] text-white">2025 - 2026</option>
                  <option value="2024-2025" className="bg-[#061326] text-white">2024 - 2025</option>
                </select>
                <ChevronDown 
                  size={14} 
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#50BFFF]"
                />
              </div>
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
                person={activeTeamData.leadership.facultyCoordinator}
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
              title="Chairs"
            />

            {/* Chairs */}
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              {activeTeamData.leadership.chairs.map((chair, index) => (
                <LeadershipCard
                  key={index}
                  person={chair}
                  featured
                />
              ))}
            </div>

          </div>

        </section>

        {/* =========================================
            VICE CHAIRS
        ========================================= */}

        <section className="border-t border-white/[0.06]">

          <div className="mx-auto max-w-5xl px-5 py-24 md:px-8">

            <SectionHeading
              number="03"
              title="Vice Chairs"
            />

            {/* Vice Chairs */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">

              {activeTeamData.leadership.viceChairs.map(
                (person, index) => (
                  <LeadershipCard
                    key={index}
                    person={person}
                    featured
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

          <div className="mx-auto max-w-5xl px-5 py-24 md:px-8">
            <SectionHeading
              number="04"
              title="Domains"
            />

            <div className="mt-16 flex flex-col gap-8 md:gap-12">
              {activeTeamData.domainLeads.map((domain) => (
                <DomainCard
                  key={domain.id}
                  domain={domain}
                />
              ))}
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
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover ${person.imagePosition || 'object-center'}`}
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
   DOMAIN CARD
===================================================== */

function DomainCard({ domain }) {
  return (
    <div className="group relative z-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition hover:z-50 hover:border-[#1688F5]/30 md:p-8">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1688F5]/0 via-transparent to-[#50BFFF]/0 opacity-0 transition duration-500 group-hover:from-[#1688F5]/10 group-hover:opacity-100" />

      <div className="relative z-10">
        <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
          {domain.domain}
        </h3>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {domain.lead && (
            <div className="flex gap-4">
              <ProfileTooltip person={domain.lead} domainName={domain.domain}>
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/5 ring-2 ring-white/10 md:h-16 md:w-16">
                  <Image
                    src={domain.lead.image}
                    alt={domain.lead.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover ${domain.lead.imagePosition || 'object-center'}`}
                  />
                </div>
              </ProfileTooltip>

              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-white md:text-base">
                  {domain.lead.name}
                </p>
                <p className="mt-1 text-xs text-[#50BFFF]">
                  {domain.lead.role}
                </p>
              </div>
            </div>
          )}

          {domain.coLeads && domain.coLeads.length > 0 && (
            <div className="flex flex-col gap-4">
              {domain.coLeads.map((coLead, idx) => (
                <div key={idx} className="flex gap-4">
                  <ProfileTooltip person={coLead} domainName={domain.domain}>
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/5 ring-2 ring-white/10 md:h-16 md:w-16">
                      <Image
                        src={coLead.image}
                        alt={coLead.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className={`object-cover ${coLead.imagePosition || 'object-center'}`}
                      />
                    </div>
                  </ProfileTooltip>

                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold text-white md:text-base">
                      {coLead.name}
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      {coLead.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
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
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
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