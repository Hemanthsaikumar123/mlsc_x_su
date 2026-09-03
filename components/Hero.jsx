"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-40">

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#1688F5]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#50BFFF]">
                Microsoft Learn Student Community
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="max-w-4xl text-6xl font-bold leading-[0.92] tracking-[-0.055em] text-white md:text-8xl lg:text-[104px]"
            >
              Learn.
              <br />

              <span className="bg-gradient-to-r from-white via-[#9DDEFF] to-[#1688F5] bg-clip-text text-transparent">
                Build.
              </span>

              <br />

              Innovate.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-8 max-w-xl text-base leading-7 text-white/50 md:text-lg"
            >
              A student-led technology community at Siddhartha
              University, bringing curious minds together to learn,
              build real-world projects and create meaningful impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#events"
                className="group flex items-center gap-2 rounded-full bg-[#0875E1] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(8,117,225,0.2)] transition hover:bg-[#1688F5] hover:shadow-[0_0_40px_rgba(8,117,225,0.35)]"
              >
                Explore Events

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-14 flex max-w-lg border-t border-white/[0.08] pt-6"
            >
              <Stat number="500+" label="Students" />
              <Divider />
              <Stat number="25+" label="Events" />
              <Divider />
              <Stat number="10+" label="Projects" />
            </motion.div>
          </div>

          {/* RIGHT */}
          <LogoVisual />

        </div>
      </div>

      {/* Bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-white/25 md:flex"
      >
        <span className="h-8 w-px bg-gradient-to-b from-transparent via-[#1688F5] to-transparent" />
        Explore the community
      </motion.div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="min-w-[90px]">
      <div className="text-xl font-semibold text-white">
        {number}
      </div>

      <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-white/30">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-5 h-9 w-px bg-white/[0.08]" />
  );
}

function LogoVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.55,
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto h-[470px] w-full max-w-[480px]"
    >
      {/* Main aura */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(8,117,225,0.22), transparent 68%)",
          filter: "blur(35px)",
        }}
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1688F5]/10"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dashed ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Logo */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-[35px] bg-[#0875E1]/30 blur-3xl" />

          <img
            src="/images/mlsc-su-logo.png"
            alt="Microsoft Learn Student Ambassador - Siddhartha University"
            className="relative h-[290px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] md:h-[340px]"
          />
        </div>
      </motion.div>

      {/* Floating technology labels */}
      <TechTag
        text="AI / ML"
        icon="✦"
        className="left-0 top-16"
        delay={0}
      />

      <TechTag
        text="CLOUD"
        icon="◇"
        className="right-0 top-24"
        delay={1}
      />

      <TechTag
        text="WEB"
        icon="⌁"
        className="bottom-24 left-5"
        delay={2}
      />

      <TechTag
        text="OPEN SOURCE"
        icon="◈"
        className="bottom-12 right-0"
        delay={3}
      />

      {/* Small sparkles */}
      <Sparkle className="left-[20%] top-[35%]" delay={0} />
      <Sparkle className="right-[18%] top-[42%]" delay={1.5} />
      <Sparkle className="bottom-[25%] left-[35%]" delay={3} />
    </motion.div>
  );
}

function TechTag({ text, icon, className, delay }) {
  return (
    <motion.div
      className={`absolute z-20 flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#06152a]/80 px-3 py-2 text-[8px] font-semibold tracking-[0.18em] text-white/45 shadow-lg backdrop-blur-xl ${className}`}
      animate={{
        y: [-5, 5, -5],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="text-[#50BFFF]">{icon}</span>
      {text}
    </motion.div>
  );
}

function Sparkle({ className, delay }) {
  return (
    <motion.div
      className={`absolute h-1 w-1 rounded-full bg-[#50BFFF] shadow-[0_0_12px_#50BFFF] ${className}`}
      animate={{
        opacity: [0.15, 1, 0.15],
        scale: [0.7, 1.3, 0.7],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}