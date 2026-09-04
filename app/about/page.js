"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { domains } from "@/data/domains";

import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Target,
  Eye,
  Users,
  Lightbulb,
  Rocket,
  Code2,
  Globe2,
  Cloud,
  Cpu,
  Megaphone,
  Palette,
  BrainCircuit,
} from "lucide-react";



/* ========================================================= */
/* PAGE */
/* ========================================================= */

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white">

      {/* =================================================== */}
      {/* HERO */}
      {/* =================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-36 md:px-8 md:pt-44">

        <Link
          href="/"
          className="mb-14 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-[#59C4F7]"
        >
          <ArrowLeft size={14} strokeWidth={1.7} />
          Back home
        </Link>


        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="flex items-center gap-3">
            <BookOpen
              size={15}
              strokeWidth={1.7}
              className="text-[#59C4F7]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#59C4F7]">
              About MLSC × SU
            </span>
          </div>


          <h1 className="mt-7 max-w-5xl text-5xl font-bold leading-[0.91] tracking-[-0.065em] md:text-7xl lg:text-[92px]">
            More than a club.
            <br />

            <span className="text-[#59C4F7]">
              A community.
            </span>
          </h1>


          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">

            <p className="max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Microsoft Learn Student Community at Siddhartha
              University brings students together to learn
              technology, build meaningful projects and grow
              alongside one another.
            </p>


            <div className="hidden justify-end md:flex">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/75">
                Learn
                <span className="mx-2 text-[#59C4F7]">/</span>
                Build
                <span className="mx-2 text-[#59C4F7]">/</span>
                Connect
              </span>
            </div>

          </div>

        </motion.div>

      </section>


      {/* =================================================== */}
      {/* WHAT IS MLSC */}
      {/* =================================================== */}

      <section className="border-y border-white/[0.08]">

        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">

            {/* LABEL */}

            <div>

              <div className="flex items-center gap-4">
              <span className="text-[9px] font-black tracking-[0.25em] text-[#59C4F7]">
                01
              </span>

              <span className="h-px w-8 bg-[#59C4F7]/60" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/85">
                What is MLSC
              </span>
            </div>

              <div className="mt-12 hidden lg:block">
                <div className="h-px w-24 bg-[#59C4F7]/30" />
                <p className="mt-5 max-w-[180px] text-[10px] uppercase leading-5 tracking-[0.16em] text-white/75">
                  A student community built around learning by doing.
                </p>
              </div>

            </div>


            {/* CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <h2 className="max-w-4xl text-3xl font-bold leading-[1.05] tracking-[-0.045em] md:text-5xl">
                A place to learn,
                <br />
                <span className="text-[#59C4F7]">experiment and build..</span>

              </h2>


              <div className="mt-10 grid gap-4 ">

                <p className="max-w-3xl text-base leading-8 text-white/75">
                  MLSC × SU is a student-driven technology
                  community built around learning by doing.
                </p>

                <p className="max-w-3xl text-base leading-8 text-white/75">
                  We bring together students with different
                  interests and skill levels, creating an
                  environment where knowledge is shared and
                  ideas can turn into real experiences.
                </p>

                <p className="max-w-3xl text-base leading-8 text-white/75">
                  Whether you are writing your first program,
                  building a project, exploring AI or helping
                  organize a community event, there is a place
                  for you here.
                </p>

              </div>


              {/* MINI STATS */}

              <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/[0.08]">

                <MiniStat
                  number="01"
                  text="Community"
                />

                <MiniStat
                  number="08"
                  text="Domains"
                />

                <MiniStat
                  number="∞"
                  text="Possibilities"
                />

              </div>

            </motion.div>

          </div>

        </div>

      </section>


     {/* MISSION & VISION */}
<section className="border-y border-white/[0.08]">
  <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <div className="flex items-center gap-4">
        <span className="text-[9px] font-black tracking-[0.25em] text-[#59C4F7]">
          02
        </span>

        <span className="h-px w-8 bg-[#59C4F7]/60" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/85">
          What Drives Us
        </span>
      </div>

      <h2 className="mt-8 text-4xl font-bold leading-[0.95] tracking-[-0.055em] md:text-6xl">
        Built with purpose.
        <br />
        <span className="text-[#59C4F7]">Driven by community.</span>
      </h2>
    </motion.div>

    {/* MISSION / VISION */}
    <div className="mt-14 grid gap-4 md:grid-cols-2">

      <PurposeCard
        number="01"
        label="Mission"
        title="Empower students to learn, build and grow."
        description="We create opportunities for students to explore technology, develop practical skills and turn their curiosity into meaningful experiences."
      />

      <PurposeCard
        number="02"
        label="Vision"
        title="Build a community of confident technology leaders."
        description="We envision a connected student community where ideas are shared, skills are strengthened and every learner has the opportunity to create an impact."
      />

    </div>
  </div>
</section>

{/* DOMAINS */}
<section className="border-y border-white/[0.08]">
  <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4">
        <span className="text-[9px] font-black tracking-[0.25em] text-[#59C4F7]">
          03
        </span>

        <span className="h-px w-8 bg-[#59C4F7]/60" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/85">
          Our Domains
        </span>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.055em] md:text-6xl">
          Explore our
          <br />
          <span className="text-[#59C4F7]">domains.</span>
        </h2>
      </div>
    </motion.div>

    {/* DOMAIN CARDS */}
    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {domains.map((domain, index) => (
        <DomainCard
          key={domain.id}
          domain={domain}
          index={index}
        />
      ))}
    </div>

  </div>
</section>


{/* BEYOND LEARNING */}
<section className="border-y border-white/[0.08]">
  <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4">
        <span className="text-[9px] font-black tracking-[0.25em] text-[#59C4F7]">
          05
        </span>

        <span className="h-px w-8 bg-[#59C4F7]/60" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/85">
          Beyond Learning
        </span>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="text-4xl font-bold leading-[0.95] tracking-[-0.055em] md:text-6xl">
          Learn.
          <span className="text-[#59C4F7]"> Build.</span>
          <br />
          Connect.
        </h2>

        {/* <p className="max-w-lg text-sm leading-7 text-white/35 md:pb-1">
          From technical sessions to challenges and community experiences,
          MLSC × SU turns learning into something students can actively
          participate in.
        </p> */}
      </div>
    </motion.div>

    {/* CARDS */}
    <div className="mt-14 grid gap-4 md:grid-cols-3">

      <ActivityCard
        number="01"
        title="Technical Workshops"
        description="Hands-on sessions covering development, cloud, AI and emerging technologies."
        tag="Learn"
      />

      <ActivityCard
        number="02"
        title="Hackathons & Challenges"
        description="Competitive and project-based experiences that encourage students to build real solutions."
        tag="Build"
      />

      <ActivityCard
      number="03"
      title="Career & Industry"
      description="Industry interactions, career-focused sessions and opportunities that help students understand the technology ecosystem."
      tag="Connect"
    />

    </div>
  </div>
</section>


      {/* =================================================== */}
      {/* FINAL */}
      {/* =================================================== */}

      <section className="mx-auto max-w-5xl px-5 py-28 text-center md:px-8 md:py-32">

        <Rocket
          size={25}
          strokeWidth={1.5}
          className="mx-auto text-[#59C4F7]"
        />


        <h2 className="mt-7 text-4xl font-bold leading-[1] tracking-[-0.05em] md:text-6xl">
          Curiosity opens the door.
          <br />

          <span className="text-[#59C4F7]">
            Community moves you forward.
          </span>
        </h2>


        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75">
          Find something that interests you, meet people
          who share your curiosity and start building.
        </p>


        <Link
          href="/events"
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-3
            border
            border-[#59C4F7]/30
            bg-[#59C4F7]/[0.07]
            px-6
            py-3.5
            text-[10px]
            font-black
            uppercase
            tracking-[0.16em]
            text-[#59C4F7]
            transition-all
            duration-300
            hover:border-[#59C4F7]/60
            hover:bg-[#59C4F7]/[0.13]
          "
        >
          Explore Events

          <ArrowUpRight
            size={15}
            strokeWidth={1.7}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

      </section>

    </main>
  );
}


/* ========================================================= */
/* SECTION HEADING */
/* ========================================================= */

function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4">

      <span className="text-[9px] font-black tracking-[0.25em] text-[#59C4F7]">
        {number}
      </span>

      <span className="h-px w-8 bg-[#59C4F7]/60" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
        {title}
      </span>

    </div>
  );
}


/* ========================================================= */
/* WHAT IS MLSC MINI STAT */
/* ========================================================= */

function MiniStat({ number, text }) {
  return (
    <div className="border-r border-white/[0.08] px-4 py-4 last:border-r-0 md:px-5">

      <p className="text-lm font-bold text-[#59C4F7]">
        {number}
      </p>

      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/25">
        {text}
      </p>

    </div>
  );
}


/* ========================================================= */
/* MISSION / VISION */
/* ========================================================= */

function PurposeCard({
  number,
  label,
  title,
  description,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="
        group relative h-[300px] overflow-hidden
        border border-[#AEE5FF]
        bg-[#59C4F7]
        text-[#02050B]
        transition-colors duration-300
        hover:bg-[#64C9F8]
      "
    >
      {/* INNER BORDER */}
      <div className="pointer-events-none absolute inset-[5px] border border-black" />

      <div className="relative flex h-full flex-col p-7 md:p-8">

        {/* TOP */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-black tracking-[0.22em] text-black/40">
            {number}
          </span>

          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black/35">
            {label}
          </span>
        </div>

        {/* CONTENT */}
        <div className="mt-12">
          <h3 className="max-w-[500px] text-[30px] font-black leading-[0.95] tracking-[-0.045em]">
            {title}
          </h3>

          <p className="mt-4 max-w-[500px] text-[15px] font-medium leading-5 text-black/55">
            {description}
          </p>
        </div>


        {/* FOOTER */}
        <div className="mt-auto flex items-end justify-between pt-7">
          <div className="h-px w-12 bg-black/25" />

          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-black/35">
            MLSC × SU
          </span>
        </div>
        {/* BACKGROUND NUMBER */}
        {/* <span className="pointer-events-none absolute -bottom-6 -right-2 text-[100px] font-black leading-none tracking-[-0.1em] text-black/[0.07]">
          {number}
        </span> */}

      </div>
    </motion.article>
  );
}
function ActivityCard({ number, title, description, tag }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="
        group relative overflow-hidden
        border border-[#AEE5FF]
        bg-[#59C4F7]
        text-[#02050B]
        transition-colors duration-300
        hover:bg-[#64C9F8]
      "
    >
      {/* INNER BORDER */}
      <div className="pointer-events-none absolute inset-[5px] border border-black" />

      <div className="relative flex min-h-[265px] flex-col p-6 md:p-7">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-black tracking-[0.22em] text-black/45">
            {number}
          </span>

          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40">
            {tag}
          </span>
        </div>

        {/* CONTENT */}
        <div className="mt-12">
          <h3 className="max-w-[280px] text-[30px] font-black leading-[0.95] tracking-[-0.045em]">
            {title}
          </h3>

          <p className="mt-4 max-w-[300px] text-[15px] font-medium leading-5 text-black/55">
            {description}
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-auto flex items-end justify-between pt-7">
          <div className="h-px w-12 bg-black/25" />

          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-black/35">
            MLSC × SU
          </span>
        </div>

        {/* LARGE BACKGROUND NUMBER */}
        {/* <span className="pointer-events-none absolute -bottom-3 -right-3 text-[82px] font-black leading-none tracking-[-0.1em] text-black/[0.07]">
          {number}
        </span> */}
      </div>
    </motion.article>
  );
}

function DomainCard({ domain, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="
        group relative h-[265px] overflow-hidden
        border border-[#AEE5FF]
        bg-[#59C4F7]
        text-[#02050B]
        transition-colors duration-300
        hover:bg-[#64C9F8]
      "
    >
      {/* INNER BORDER */}
      <div className="pointer-events-none absolute inset-[5px] border border-black/[0.09]" />

      <div className="relative flex h-full flex-col p-6 md:p-7">

        {/* TOP */}
        <div className="flex shrink-0 items-center justify-between">
          <span className="text-[11px] font-black tracking-[0.22em] text-black/40">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black/35">
            Domain
          </span>
        </div>

        {/* CONTENT */}
        <div className="mt-10">
          <h3 className="max-w-[300px] text-[30px] font-black leading-[0.95] tracking-[-0.045em]">
            {domain.name}
          </h3>

          <p className="mt-4 max-w-[310px] text-[15px] font-medium leading-5 text-black/55">
            {domain.description}
          </p>
        </div>

        {/* FIXED FOOTER */}
        <div className="mt-auto flex h-[25px] shrink-0 items-end justify-between">
          <div className="h-px w-12 bg-black/25" />

          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-black/35">
            MLSC × SU
          </span>
        </div>

        {/* BACKGROUND NUMBER */}
        <span
          className="
            pointer-events-none absolute
            bottom-[-7px] right-[-2px]
            text-[76px] font-black
            leading-none tracking-[-0.1em]
            text-black/[0.07]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

      </div>
    </motion.article>
  );
}


/* ========================================================= */
/* IMPACT */
/* ========================================================= */

function Impact({ number, label }) {
  return (
    <div className="border-b border-black/[0.12] p-6 last:border-b-0 sm:p-7 md:border-b-0 md:border-r md:last:border-r-0">

      <p className="text-3xl font-black tracking-[-0.05em] md:text-4xl">
        {number}
      </p>

      <p className="mt-2 text-[8px] font-black uppercase tracking-[0.22em] text-black/45">
        {label}
      </p>

    </div>
  );



  
}