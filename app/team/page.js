"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";

import { leadership, domainLeads } from "@/data/team";

export default function TeamPage() {
  return (
    <main className="relative min-h-screen text-white">

      {/* =========================================================
          PAGE INTRO
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-44">

        <Link
          href="/"
          className="
            mb-12 inline-flex items-center gap-2
            text-[10px] font-semibold uppercase tracking-[0.18em]
            text-white/85
            transition-colors duration-200
            hover:text-[#59C4F7]
          "
        >
          <ArrowLeft size={14} strokeWidth={1.7} />
          Back home
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">

            <Users
              size={15}
              strokeWidth={1.7}
              className="text-[#59C4F7]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#59C4F7]">
              MLSC × SU · Team
            </span>

          </div>

          <h1 className="text-5xl font-bold leading-[0.94] tracking-[-0.055em] md:text-7xl">
            People behind
            <br />
            <span className="text-[#59C4F7]">
              the community.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            A student-led team working together to create spaces
            where students can learn, build, experiment and grow.
          </p>

        </motion.header>

      </section>


      {/* =========================================================
          01 — FACULTY COORDINATOR
      ========================================================= */}

      <section className="border-y border-white/[0.08]">

        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">

          <SectionHeading
            number="01"
            title="Faculty Coordinator"
          />

          <div className="mt-10 flex justify-center">

            <FacultyCard
              person={leadership.facultyCoordinator}
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          02 — LEADERSHIP
      ========================================================= */}

      <section>

        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">

          <SectionHeading
            number="02"
            title="Leadership"
          />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75">
            The student leadership team responsible for coordinating
            the community and bringing different domains together.
          </p>


          {/* =====================================================
              CHAIRS
          ===================================================== */}

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            {leadership.chairs.map((person, index) => (
              <LeadershipCard
                key={person.id || index}
                person={person}
                featured
              />
            ))}

          </div>


          {/* CONNECTOR */}

          <div className="relative mx-auto h-12 w-px bg-white/[0.10]">

            <span
              className="
                absolute bottom-0 left-1/2
                h-2 w-2
                -translate-x-1/2
                bg-[#59C4F7]
              "
            />

          </div>


          {/* =====================================================
              VICE CHAIRS
          ===================================================== */}

          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">

            {leadership.viceChairs.map((person, index) => (
              <LeadershipCard
                key={person.id || index}
                person={person}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          03 — DOMAIN LEADERSHIP
      ========================================================= */}

      <section className="border-y border-white/[0.08]">

        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">

          <SectionHeading
            number="03"
            title="Domain Leadership"
          />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75">
            Seven domains. One community. Each domain is driven by
            student leaders who create experiences, projects and
            opportunities for the community.
          </p>


          {/* DOMAIN LIST */}

          <div className="mx-auto mt-12 max-w-[1080px] space-y-6">

            {domainLeads.map((domain, index) => (
              <DomainTeam
                key={domain.id || index}
                domain={domain}
                index={index}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CLOSING
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >

          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#59C4F7]">
            MLSC × SU
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-[0.98] tracking-[-0.045em] md:text-6xl">
            Different roles.
            <br />
            <span className="text-[#59C4F7]">
              One community.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/35 md:text-base">
            Every person contributes to making MLSC × SU a place
            where ideas become skills and skills become impact.
          </p>

        </motion.div>

      </section>

    </main>
  );
}


/* =============================================================
   SECTION HEADING
============================================================= */

function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-5">

      <span className="text-[10px] font-black tracking-[0.25em] text-[#59C4F7]/50">
        {number}
      </span>

      <span className="h-px w-8 bg-[#59C4F7]/40" />

      <h2 className="text-[11px] font-black uppercase tracking-[0.28em] text-white/85">
        {title}
      </h2>

    </div>
  );
}


/* =============================================================
   FACULTY CARD
============================================================= */

function FacultyCard({ person }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        group
        w-full
        max-w-[330px]
        overflow-hidden
        border
        border-[#59C4F7]/30
        bg-[#07111D]
      "
    >

      <div className="aspect-[4/4.3] overflow-hidden bg-[#0B1724]">

        <img
          src={person.image}
          alt={person.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.025]
          "
        />

      </div>

      <div className="p-5">

        <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#59C4F7]">
          {person.role}
        </span>

        <h3 className="mt-2 text-xl font-black tracking-[-0.035em] text-white">
          {person.name}
        </h3>

        {person.description && (
          <p className="mt-3 text-[11px] leading-5 text-white/75">
            {person.description}
          </p>
        )}

      </div>

    </motion.article>
  );
}


/* =============================================================
   LEADERSHIP CARD
============================================================= */

function LeadershipCard({ person, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={`
        group
        w-full
        overflow-hidden
        border
        border-white/[0.10]
        bg-[#07111D]
        transition-colors
        duration-300
        hover:border-[#59C4F7]/35
        ${featured ? "max-w-[280px]" : "max-w-[235px]"}
      `}
    >

      <div
        className={`
          overflow-hidden
          bg-[#0B1724]
          ${featured ? "aspect-[4/4.1]" : "aspect-[4/3.1]"}
        `}
      >

        <img
          src={person.image}
          alt={person.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.025]
          "
        />

      </div>

      <div className="p-4">

        <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#59C4F7]">
          {person.role}
        </span>

        <h3
          className={`
            mt-2
            font-bold
            tracking-[-0.025em]
            text-white/85
            ${featured ? "text-xl" : "text-base"}
          `}
        >
          {person.name}
        </h3>

      </div>

    </motion.article>
  );
}


/* =============================================================
   DOMAIN TEAM
============================================================= */

function DomainTeam({ domain, index }) {
  const people = [
    ...(domain.leads || []),
    ...(domain.coLeads || []),
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.025,
      }}
      className="overflow-hidden border border-white/[0.09] bg-[#050C16]"
    >
      {/* Domain Header */}
      <div className="border-b border-white/[0.08] px-5 py-5 md:px-6">
        <div className="flex items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[8px] font-black tracking-[0.2em] text-[#59C4F7]/45">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="h-px w-5 bg-[#59C4F7]/30" />

              <span className="text-[8px] font-black uppercase tracking-[0.22em] text-[#59C4F7]">
                Domain
              </span>
            </div>

            <h3 className="mt-2 text-xl font-black tracking-[-0.035em] text-white md:text-2xl">
              {domain.domain}
            </h3>

            {domain.description && (
              <p className="mt-2 max-w-xl text-[13px] leading-5 text-white/75">
                {domain.description}
              </p>
            )}
          </div>

          <span className="hidden text-[8px] font-bold uppercase tracking-[0.18em] text-white/12 md:block">
            MLSC × SU
          </span>
        </div>
      </div>

      {/* Domain Members */}
      <div className="flex flex-wrap bg-[#050C16]">
        {people.map((person, personIndex) => (
          <DomainPerson
            key={person.id || personIndex}
            person={person}
          />
        ))}
      </div>
    </motion.article>
  );
}


/* =============================================================
   DOMAIN PERSON
============================================================= */

function DomainPerson({ person }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
      className="
        group
        w-1/2
        border-r
        border-t
        border-white/[0.07]
        bg-[#050C16]
        p-3
        sm:w-1/3
        md:w-1/4
        md:p-4
      "
    >

      {/* IMAGE */}

      <div className="aspect-square overflow-hidden bg-[#07111D]">

        <img
          src={person.image}
          alt={person.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.025]
          "
        />

      </div>


      {/* INFO */}

      <div className="pt-3">

        <span
          className={`
            text-[7px]
            font-black
            uppercase
            tracking-[0.2em]
            ${
              person.role === "Lead"
                ? "text-[#59C4F7]"
                : "text-white/25"
            }
          `}
        >
          {person.role}
        </span>

        <h4 className="mt-1 truncate text-xs font-bold tracking-[-0.01em] text-white/75 md:text-sm">
          {person.name}
        </h4>

      </div>

    </motion.div>
  );
}