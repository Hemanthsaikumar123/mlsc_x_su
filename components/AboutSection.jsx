"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Eye,
  Users,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020817] py-28 md:py-36"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(8,117,225,0.08), transparent 68%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

        {/* ==============================================
            SECTION INTRO
        ============================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#1688F5]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#50BFFF]">
              About MLSC
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            More than a club.
            <br />

            <span className="bg-gradient-to-r from-white via-[#8DDFFF] to-[#1688F5] bg-clip-text text-transparent">
              A community of builders.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/45 md:text-lg">
            Microsoft Learn Student Community at Siddhartha University
            brings together students who are curious about technology,
            passionate about learning and excited to build what comes next.
          </p>

          <a
            href="#journey"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            Discover our journey

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        {/* ==============================================
            MISSION / VISION
        ============================================== */}

        <div className="mt-20 grid gap-5 md:grid-cols-2">

          <InfoCard
            icon={<Target size={21} />}
            eyebrow="Our Mission"
            title="Empower students to build."
            description="Create opportunities for students to learn emerging technologies, experiment with ideas, work on real-world projects and grow through collaboration."
            delay={0}
          />

          <InfoCard
            icon={<Eye size={21} />}
            eyebrow="Our Vision"
            title="Create the builders of tomorrow."
            description="Build a thriving student technology ecosystem where curiosity is encouraged, knowledge is shared and every student has the opportunity to create meaningful impact."
            delay={0.15}
          />

        </div>

        {/* ==============================================
            COMMUNITY NUMBERS
        ============================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-y border-white/[0.07] py-12"
        >
          <div className="mb-10 flex items-center gap-3">
            <Sparkles
              size={15}
              className="text-[#50BFFF]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
              Our Community
            </span>
          </div>

          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">

            <Stat
              number="500+"
              label="Students"
            />

            <Stat
              number="25+"
              label="Events"
            />

            <Stat
              number="10+"
              label="Projects"
            />

            <Stat
              number="4+"
              label="Tech Domains"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* ======================================================
   INFO CARD
====================================================== */

function InfoCard({
  icon,
  eyebrow,
  title,
  description,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#061326]/55 p-7 backdrop-blur-xl transition-colors duration-500 hover:border-[#1688F5]/30 md:p-9"
    >

      {/* Hover glow */}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#0875E1]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#1688F5]/20 bg-[#0875E1]/10 text-[#50BFFF]">
        {icon}
      </div>

      <div className="relative mt-8">

        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#50BFFF]/70">
          {eyebrow}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h3>

        <p className="mt-5 max-w-xl text-sm leading-7 text-white/40 md:text-base">
          {description}
        </p>

      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#0078D4] to-transparent transition-all duration-700 group-hover:w-full" />

    </motion.div>
  );
}


/* ======================================================
   STAT
====================================================== */

function Stat({ number, label }) {
  return (
    <div className="group">

      <div className="text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-[#50BFFF] md:text-4xl">
        {number}
      </div>

      <div className="mt-2 text-[9px] font-medium uppercase tracking-[0.25em] text-white/30">
        {label}
      </div>

    </div>
  );
}