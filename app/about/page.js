"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
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

import Navbar from "@/components/Navbar";
import MLSCBackground from "@/components/MLSCBackground";
import ShinyText from "@/components/ShinyText";
import CountUp from "@/components/CountUp";

const domains = [
  {
    icon: Code2,
    title: "Competitive Programming",
    text: "Develop strong problem-solving skills through algorithms, data structures and coding challenges.",
  },
  {
    icon: Globe2,
    title: "Web Development",
    text: "Design and build modern web experiences while learning the technologies behind the web.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    text: "Explore cloud computing, deployment, infrastructure and the systems powering modern applications.",
  },
  {
    icon: Cpu,
    title: "Advanced Tech",
    text: "Explore emerging technologies and experiment with ideas that push beyond the conventional.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    text: "Build communication, outreach and community-building skills that turn ideas into impact.",
  },
  {
    icon: Palette,
    title: "Digital Creation",
    text: "Create through design, content, media and visual storytelling.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Discover AI, machine learning and generative AI through practical exploration.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <MLSCBackground />
      <Navbar />

      <div className="relative z-10">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-5 pb-28 pt-36 md:px-8 md:pt-44">
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
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#50BFFF]">
              About MLSC × SU
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-8xl">
              More than a club.
              <br />

              <ShinyText text="A community." />
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
              Microsoft Learn Student Community at Siddhartha
              University brings students together to learn technology,
              build meaningful projects and grow alongside one another.
            </p>
          </motion.div>
        </section>

        {/* WHAT IS MLSC */}
        <section className="border-y border-white/[0.06]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <SectionLabel text="01 / What is MLSC?" />
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                A place to learn,
                <br />
                experiment and build.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-white/40">
                <p>
                  MLSC × SU is a student-driven technology
                  community built around learning by doing.
                </p>

                <p>
                  We bring together students with different
                  interests and skill levels, creating an
                  environment where knowledge is shared and
                  ideas can turn into real experiences.
                </p>

                <p>
                  Whether you are writing your first program,
                  building a project, exploring AI or helping
                  organize a community event, there is a place
                  for you here.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* MISSION VISION */}
        <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
          <SectionLabel text="02 / Mission & Vision" />

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <StatementCard
              icon={<Target size={22} />}
              label="Our Mission"
              title="Empower students to build."
              text="Create opportunities for students to learn emerging technologies, collaborate with peers and gain practical experience through real-world projects and experiences."
            />

            <StatementCard
              icon={<Eye size={22} />}
              label="Our Vision"
              title="Create the builders of tomorrow."
              text="Build a thriving student technology ecosystem where curiosity is encouraged, knowledge is shared and students are empowered to create meaningful impact."
            />

          </div>
        </section>

        {/* DOMAINS */}
        <section className="border-y border-white/[0.06] bg-[#030b19]/50">
          <div className="mx-auto max-w-7xl px-5 py-28 md:px-8">

            <SectionLabel text="03 / What We Explore" />

            <div className="mt-8 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Seven domains.
                <br />

                <span className="text-white/35">
                  Countless ways to grow.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {domains.map((domain, index) => {
                const Icon = domain.icon;

                return (
                  <motion.div
                    key={domain.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                    }}
                    className="group rounded-3xl border border-white/[0.07] bg-[#061326]/50 p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#1688F5]/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1688F5]/20 bg-[#0875E1]/10 text-[#50BFFF]">
                      <Icon size={19} />
                    </div>

                    <h3 className="mt-8 text-lg font-semibold">
                      {domain.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      {domain.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* HOW WE LEARN */}
        <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">

          <SectionLabel text="04 / How We Learn" />

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <LearningCard
              number="01"
              icon={<Lightbulb size={20} />}
              title="Discover"
              text="Explore technologies, ideas and opportunities that spark your curiosity."
            />

            <LearningCard
              number="02"
              icon={<Code2 size={20} />}
              title="Build"
              text="Turn what you learn into projects, experiments and practical experiences."
            />

            <LearningCard
              number="03"
              icon={<Users size={20} />}
              title="Collaborate"
              text="Learn with peers, share knowledge and grow through the community."
            />

          </div>
        </section>

        {/* IMPACT */}
        <section className="border-y border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">

            <SectionLabel text="05 / Community Impact" />

            <div className="mt-12 grid grid-cols-2 gap-y-12 md:grid-cols-4">

              <Impact number={500} suffix="+" label="Students" />
              <Impact number={25} suffix="+" label="Events" />
              <Impact number={10} suffix="+" label="Projects" />
              <Impact number={7} suffix="" label="Domains" />

            </div>
          </div>
        </section>



      </div>
    </main>
  );
}

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-[#1688F5]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#50BFFF]">
        {text}
      </span>
    </div>
  );
}

function StatementCard({ icon, label, title, text }) {
  return (
    <div className="rounded-3xl border border-white/[0.07] bg-[#061326]/50 p-8 backdrop-blur-xl md:p-10">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1688F5]/20 bg-[#0875E1]/10 text-[#50BFFF]">
        {icon}
      </div>

      <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#50BFFF]/70">
        {label}
      </p>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h3>

      <p className="mt-5 text-sm leading-7 text-white/35">
        {text}
      </p>
    </div>
  );
}

function LearningCard({ number, icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7">
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-[0.25em] text-white/20">
          {number}
        </span>

        <div className="text-[#50BFFF]">
          {icon}
        </div>
      </div>

      <h3 className="mt-12 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/35">
        {text}
      </p>
    </div>
  );
}

function Impact({ number, suffix = "", label }) {
  return (
    <div>
      <div className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        <CountUp to={number} duration={2} />{suffix}
      </div>

      <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/25">
        {label}
      </p>
    </div>
  );
}