"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function MembershipCTA() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-[#020817] px-5 py-28 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-[#1688F5]/20 bg-[#061326]/70 px-7 py-16 text-center backdrop-blur-xl md:px-16 md:py-20"
        >

          <div className="absolute left-1/2 top-0 h-60 w-96 -translate-x-1/2 rounded-full bg-[#0875E1]/10 blur-[80px]" />

          <Sparkles
            size={20}
            className="relative mx-auto text-[#50BFFF]"
          />

          <h2 className="relative mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Build what's
            <span className="text-[#50BFFF]"> next.</span>
          </h2>

          <p className="relative mx-auto mt-5 max-w-xl text-sm leading-7 text-white/35">
            Learn with the community. Build with your peers.
            Find your place in MLSC × SU.
          </p>

          <button
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#0875E1] px-6 py-3.5 text-sm font-semibold transition hover:bg-[#1688F5]"
          >
            Become a Member

            <ArrowRight size={16} />
          </button>

        </motion.div>

      </div>
    </section>
  );
}