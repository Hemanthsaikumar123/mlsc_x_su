"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Sequence:
 *  1. "spark"   – four Microsoft-brand embers drift in and collide at center  (0 → 1.4s)
 *  2. "burst"   – a softer blue-tinted flash marks the handoff               (1.4 → 1.8s)
 *  3. "reveal"  – shield rises, wordmark letters stagger in, particles fade   (1.8 → 5.5s)
 *  4. exit      – whole scene lifts away (handled by parent via AnimatePresence)
 */
export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState("spark");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("burst"), 1400);
    const t2 = setTimeout(() => setPhase("reveal"), 1800);
    const t3 = setTimeout(() => onComplete(), 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const embers = [
    { id: "red", color: "#F25022", from: { x: -160, y: -110 } },
    { id: "green", color: "#7FBA00", from: { x: 160, y: -110 } },
    { id: "blue", color: "#00A4EF", from: { x: -160, y: 110 } },
    { id: "yellow", color: "#FFB900", from: { x: 160, y: 110 } },
  ];

  // Generate scatter particles once so they stay stable across renders
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const distance = 80 + (i % 3) * 40;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 2 + (i % 3),
        color: embers[i % 4].color,
        delay: i * 0.03,
      };
    });
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#020817]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      style={{ willChange: "opacity" }}
    >
      {/* ---------------------------------------------------------
          Ambient MLSC atmosphere (kept alive the whole sequence)
      --------------------------------------------------------- */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 45%, rgba(8,117,225,0.18) 0%, rgba(8,117,225,0.05) 35%, transparent 65%),
            radial-gradient(circle at 12% 15%, rgba(80,191,255,0.08), transparent 40%),
            radial-gradient(circle at 88% 85%, rgba(8,117,225,0.06), transparent 40%),
            #020817
          `,
        }}
      />

      {/* Grid — fades in after spark phase to avoid visual noise during ember flight */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "spark" ? 0 : 0.12 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(circle at center, black, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 72%)",
        }}
      />

      {/* Breathing center glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(8,117,225,0.14), transparent 65%)",
          filter: "blur(50px)",
          willChange: "transform, opacity",
        }}
        animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ---------------------------------------------------------
          Stage 1 — Microsoft-brand embers converge
          Bigger (20×20 / 26×26 md), with rotation during flight
      --------------------------------------------------------- */}
      <AnimatePresence>
        {phase === "spark" && (
          <div className="absolute left-1/2 top-1/2 h-0 w-0">
            {embers.map((ember, i) => (
              <motion.span
                key={ember.id}
                className="absolute h-[20px] w-[20px] rounded-[3px] md:h-[26px] md:w-[26px]"
                style={{
                  backgroundColor: ember.color,
                  boxShadow: `0 0 20px 6px ${ember.color}88, 0 0 50px 12px ${ember.color}44`,
                  willChange: "transform, opacity",
                }}
                initial={{
                  x: ember.from.x,
                  y: ember.from.y,
                  opacity: 0,
                  scale: 0.3,
                  rotate: -45,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: [0, 1, 1],
                  scale: [0.3, 1.1, 0.2],
                  rotate: [- 45, 0, 15],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1.3,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------
          Stage 2 — softer blue-tinted flash burst
      --------------------------------------------------------- */}
      {(phase === "burst" || phase === "reveal") && (
        <>
          {/* Main flash — softer, blue-tinted */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: [0, 0.7, 0], scale: [0.2, 2.8, 4] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            style={{
              background: "radial-gradient(circle, white 0%, rgba(80,191,255,0.6) 50%, transparent 100%)",
              filter: "blur(30px)",
              willChange: "transform, opacity",
            }}
          />

          {/* Expanding ring — MLSC blue */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#50BFFF]/40"
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 560, height: 560, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ willChange: "width, height, opacity" }}
          />

          {/* Second ring, delayed */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0875E1]/25"
            initial={{ width: 0, height: 0, opacity: 0.6 }}
            animate={{ width: 400, height: 400, opacity: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            style={{ willChange: "width, height, opacity" }}
          />
        </>
      )}

      {/* ---------------------------------------------------------
          Particle scatter — tiny fragments fly outward from burst
      --------------------------------------------------------- */}
      <AnimatePresence>
        {(phase === "burst" || phase === "reveal") && (
          <div className="absolute left-1/2 top-1/2 h-0 w-0">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  boxShadow: `0 0 6px ${p.color}66`,
                  willChange: "transform, opacity",
                }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: p.x,
                  y: p.y,
                  opacity: [0, 0.9, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: 1.2,
                  delay: p.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------
          Stage 3 — the real shield + wordmark with character stagger
      --------------------------------------------------------- */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        {/* Logo with ambient pulse */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.4, y: 10 }}
          animate={
            phase === "reveal"
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.4, y: 10 }
          }
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          {/* Ambient breathing glow behind logo */}
          <motion.div
            className="absolute -inset-8 -z-10 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(8,117,225,0.5), transparent 70%)",
              filter: "blur(35px)",
            }}
            animate={
              phase === "reveal"
                ? { scale: [0.8, 1.15, 0.9, 1.05], opacity: [0.3, 0.7, 0.5, 0.6] }
                : { scale: 0.8, opacity: 0 }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <img
            src="/images/mlsc-su-logo.png"
            alt="MLSC × SU"
            className="h-28 w-auto drop-shadow-[0_0_35px_rgba(8,117,225,0.45)] md:h-36"
          />
        </motion.div>

        {/* Character-by-character staggered "MLSC × SU" */}
        <motion.div
          className="mt-6 flex items-baseline gap-0 text-4xl font-extrabold tracking-[0.14em] md:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "reveal" ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          style={{ fontFamily: "var(--font-display, inherit)" }}
        >
          <StaggeredText
            text="MLSC"
            show={phase === "reveal"}
            delay={0.25}
            gradient="linear-gradient(120deg, #ffffff 10%, #d8f4ff 45%, #50BFFF 75%, #ffffff)"
          />
          <motion.span
            className="mx-3 text-white/30 md:mx-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              phase === "reveal"
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0 }
            }
            transition={{ delay: 0.55, duration: 0.4, ease: "easeOut" }}
          >
            ×
          </motion.span>
          <StaggeredText
            text="SU"
            show={phase === "reveal"}
            delay={0.6}
            gradient="linear-gradient(90deg, #50E6FF, #0078D4)"
          />
        </motion.div>

        {/* Subtitle — staggered fade */}
        <motion.p
          className="mt-4 text-[11px] font-medium uppercase tracking-[0.5em] text-white/40 md:text-xs"
          initial={{ opacity: 0, y: 8 }}
          animate={
            phase === "reveal"
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 8 }
          }
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Microsoft Learn Student Community
        </motion.p>

        <motion.p
          className="mt-1 text-[10px] uppercase tracking-[0.4em] text-white/25"
          initial={{ opacity: 0, y: 6 }}
          animate={
            phase === "reveal"
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 6 }
          }
          transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Siddhartha University
        </motion.p>
      </div>

      {/* ---------------------------------------------------------
          Loading line — synced to total animation time
      --------------------------------------------------------- */}
      <div className="absolute bottom-12 left-1/2 h-[2px] w-40 -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full w-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #0875E1, #50BFFF, #0875E1)",
            backgroundSize: "200% 100%",
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 5.2, ease: "linear" }}
        />
      </div>

      {/* Skip */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.25em] text-white/25 transition duration-300 hover:text-white/80 hover:tracking-[0.35em]"
      >
        Skip
      </button>
    </motion.div>
  );
}

/**
 * Renders each character of `text` with individual staggered animation.
 * Characters fade in from below with slight scale, creating a premium reveal.
 */
function StaggeredText({ text, show, delay = 0, gradient }) {
  const chars = text.split("");

  return (
    <span className="inline-flex">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18, scale: 0.85 }}
          animate={
            show
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 18, scale: 0.85 }
          }
          transition={{
            delay: delay + i * 0.06,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            backgroundImage: gradient,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            willChange: "transform, opacity",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}