"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe2,
  Cloud,
  Cpu,
  Megaphone,
  Palette,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const domains = [
  {
    number: "01",
    title: "Competitive Programming",
    description: "Algorithms · Problem Solving",
    icon: Code2,
  },
  {
    number: "02",
    title: "Web Development",
    description: "Frontend · Backend · Full Stack",
    icon: Globe2,
  },
  {
    number: "03",
    title: "Cloud",
    description: "Cloud · DevOps · Deployment",
    icon: Cloud,
  },
  {
    number: "04",
    title: "Advanced Tech",
    description: "Emerging Technologies · Innovation",
    icon: Cpu,
  },
  {
    number: "05",
    title: "Marketing",
    description: "Community · Outreach · Growth",
    icon: Megaphone,
  },
  {
    number: "06",
    title: "Digital Creation",
    description: "Design · Content · Media",
    icon: Palette,
  },
  {
    number: "07",
    title: "Artificial Intelligence",
    description: "AI · Machine Learning · GenAI",
    icon: BrainCircuit,
  },
];

export default function DomainSection() {
  return (
    <section
      id="domains"
      className="relative bg-[#020817] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#1688F5]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#50BFFF]">
              Explore MLSC
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            Find your space.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/40">
            Explore different domains, discover what interests you,
            and learn alongside people who share your curiosity.
          </p>
        </motion.div>

        {/* Domains */}
        <div className="mt-14 border-t border-white/[0.08]">
          {domains.map((domain, index) => (
            <DomainRow
              key={domain.number}
              domain={domain}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function DomainRow({ domain, index }) {
  const Icon = domain.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
      }}
      className="group relative border-b border-white/[0.08]"
    >
      <div className="flex min-h-[105px] items-center gap-5 py-6 md:min-h-[120px] md:gap-8">

        {/* Number */}
        <span className="w-7 shrink-0 text-[10px] font-medium tracking-[0.15em] text-white/20">
          {domain.number}
        </span>

        {/* Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 transition-colors duration-300 group-hover:border-[#1688F5]/40 group-hover:text-[#50BFFF]">
          <Icon size={18} strokeWidth={1.5} />
        </div>

        {/* Name */}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#8DDEFF] md:text-2xl">
            {domain.title}
          </h3>

          <p className="mt-1.5 text-xs text-white/30 md:text-sm">
            {domain.description}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white/25 transition-all duration-300 group-hover:border-[#1688F5]/40 group-hover:bg-[#0875E1]/10 group-hover:text-[#50BFFF]">
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>

      </div>

      {/* Small hover accent */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-[#1688F5]"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.35 }}
      />

    </motion.div>
  );
}