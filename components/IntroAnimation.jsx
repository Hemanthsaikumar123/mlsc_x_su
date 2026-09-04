"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Sequence:
 *  1. "form"    – four squares assemble into the real Windows-flag 2x2
 *                 layout (red/green/blue/yellow) and hold briefly so it
 *                 reads as the actual mark, not an abstraction of it
 *  2. "dissolve"– the squares scatter outward and fade
 *  3. "burst"   – a single flash marks the handoff
 *  4. "reveal"  – the real MLSC × SU shield rises out of the flash
 *  5. exit      – whole scene lifts away (handled by parent AnimatePresence)
 */
export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState("form");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("dissolve"), 1050);
    const t2 = setTimeout(() => setPhase("burst"), 1500);
    const t3 = setTimeout(() => setPhase("reveal"), 1800);
    const t4 = setTimeout(() => onComplete(), 4400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  // Real Windows-flag arrangement: red top-left, green top-right,
  // blue bottom-left, yellow bottom-right, tight 2x2 grid.
  const tiles = [
    { id: "red", color: "#F25022", col: 0, row: 0 },
    { id: "green", color: "#7FBA00", col: 1, row: 0 },
    { id: "blue", color: "#00A4EF", col: 0, row: 1 },
    { id: "yellow", color: "#FFB900", col: 1, row: 1 },
  ];

  const SIZE = 56; // px, tile size (mobile)
  const SIZE_MD = 72; // px, tile size (desktop) — handled via CSS below
  const GAP = 7;

  const scatterFor = (col, row) => {
    const dx = col === 0 ? -140 : 140;
    const dy = row === 0 ? -140 : 140;
    return { x: dx, y: dy };
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#020817]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      {/* Ambient MLSC atmosphere, present the whole time */}
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

      <motion.div
        className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(8,117,225,0.14), transparent 65%)",
          filter: "blur(50px)",
        }}
        animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ---------------------------------------------------------
          Stage 1 & 2 — the real Windows-flag layout, then dissolve
      --------------------------------------------------------- */}
      <AnimatePresence>
        {(phase === "form" || phase === "dissolve") && (
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              width: SIZE * 2 + GAP,
              height: SIZE * 2 + GAP,
              marginLeft: -(SIZE + GAP / 2),
              marginTop: -(SIZE + GAP / 2),
            }}
          >
            {tiles.map((tile, i) => {
              const scatter = scatterFor(tile.col, tile.row);
              return (
                <motion.span
                  key={tile.id}
                  className="absolute rounded-[4px] h-[56px] w-[56px] md:h-[72px] md:w-[72px]"
                  style={{
                    backgroundColor: tile.color,
                    left: tile.col === 0 ? 0 : SIZE + GAP,
                    top: tile.row === 0 ? 0 : SIZE + GAP,
                    boxShadow: `0 0 24px 2px ${tile.color}55`,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    phase === "form"
                      ? { opacity: 1, scale: 1, x: 0, y: 0 }
                      : { opacity: 0, scale: 0.7, x: scatter.x, y: scatter.y }
                  }
                  exit={{ opacity: 0 }}
                  transition={
                    phase === "form"
                      ? { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
                      : { duration: 0.45, ease: [0.4, 0, 1, 1] }
                  }
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------
          Stage 3 — flash burst / handoff
      --------------------------------------------------------- */}
      {(phase === "burst" || phase === "reveal") && (
        <motion.div
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: [0, 1, 0], scale: [0.3, 3.2, 4.5] }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          style={{ filter: "blur(28px)" }}
        />
      )}

      {(phase === "burst" || phase === "reveal") && (
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#50BFFF]/60"
          initial={{ width: 0, height: 0, opacity: 0.9 }}
          animate={{ width: 520, height: 520, opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      )}

      {/* ---------------------------------------------------------
          Stage 4 — the real shield + wordmark
      --------------------------------------------------------- */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.4, y: 10 }}
          animate={
            phase === "reveal"
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.4, y: 10 }
          }
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 -z-10 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(8,117,225,0.45), transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <img
            src="/images/mlsc-su-logo.png"
            alt="MLSC × SU"
            className="h-28 w-auto drop-shadow-[0_0_35px_rgba(8,117,225,0.45)] md:h-36"
          />
        </motion.div>

        <motion.h1
          className="mt-6 text-4xl font-extrabold tracking-[0.14em] md:text-6xl"
          initial={{ opacity: 0, y: 14 }}
          animate={phase === "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display, inherit)",
            backgroundImage:
              "linear-gradient(120deg, #ffffff 10%, #d8f4ff 45%, #50BFFF 75%, #ffffff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          MLSC <span className="text-white/30">×</span> SU
        </motion.h1>

        <motion.p
          className="mt-4 text-[11px] font-medium uppercase tracking-[0.5em] text-white/40 md:text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "reveal" ? 1 : 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          Microsoft Learn Student Community
        </motion.p>

        <motion.p
          className="mt-1 text-[10px] uppercase tracking-[0.4em] text-white/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "reveal" ? 1 : 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Siddhartha University
        </motion.p>
      </div>

      {/* Skip */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.25em] text-white/25 transition duration-300 hover:text-white/80"
      >
        Skip
      </button>
    </motion.div>
  );
}