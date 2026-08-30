// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function IntroAnimation({ onComplete }) {
//   const [phase, setPhase] = useState("forming");

//   useEffect(() => {
//     // 0s - 1.6s  : Logo forms
//     // 1.6s - 3.2s: Logo stays together
//     // 3.2s - 4.7s: Tiles fly to corners
//     // 4.7s - 6.0s: MLSC × SU appears

//     const moveTimer = setTimeout(() => {
//       setPhase("moving");
//     }, 3000);

//     const titleTimer = setTimeout(() => {
//       setPhase("title");
//     }, 4500);

//     const completeTimer = setTimeout(() => {
//       onComplete();
//     }, 6800);

//     return () => {
//       clearTimeout(moveTimer);
//       clearTimeout(titleTimer);
//       clearTimeout(completeTimer);
//     };
//   }, [onComplete]);

//   const squares = [
//     {
//       id: "red",
//       color: "#F25022",
//       glow: "rgba(242,80,34,0.55)",
//       final: {
//         x: "-43vw",
//         y: "-37vh",
//       },
//     },
//     {
//       id: "green",
//       color: "#7FBA00",
//       glow: "rgba(127,186,0,0.45)",
//       final: {
//         x: "43vw",
//         y: "-37vh",
//       },
//     },
//     {
//       id: "blue",
//       color: "#00A4EF",
//       glow: "rgba(0,164,239,0.55)",
//       final: {
//         x: "-43vw",
//         y: "37vh",
//       },
//     },
//     {
//       id: "yellow",
//       color: "#FFB900",
//       glow: "rgba(255,185,0,0.45)",
//       final: {
//         x: "43vw",
//         y: "37vh",
//       },
//     },
//   ];

//   return (
//     <motion.div
//       className="fixed inset-0 z-[9999] overflow-hidden bg-[#020617]"
//       initial={{ opacity: 1 }}
//       animate={{
//         opacity: phase === "title" ? 1 : 1,
//       }}
//     >
//       {/* =====================================================
//           MLSC BACKGROUND
//       ===================================================== */}

//       {/* Deep blue radial atmosphere */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `
//             radial-gradient(
//               circle at 50% 50%,
//               rgba(0,120,212,0.14) 0%,
//               rgba(0,120,212,0.06) 22%,
//               transparent 55%
//             ),
//             radial-gradient(
//               circle at 15% 20%,
//               rgba(0,164,239,0.08),
//               transparent 35%
//             ),
//             radial-gradient(
//               circle at 85% 80%,
//               rgba(127,186,0,0.05),
//               transparent 35%
//             ),
//             #020617
//           `,
//         }}
//       />

//       {/* Subtle technical grid */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.14]"
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               rgba(255,255,255,0.07) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(255,255,255,0.07) 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: "55px 55px",
//           maskImage:
//             "radial-gradient(circle at center, black, transparent 75%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at center, black, transparent 75%)",
//         }}
//       />

//       {/* Floating blue atmosphere */}
//       <motion.div
//         className="absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(0,120,212,0.13), transparent 65%)",
//           filter: "blur(40px)",
//         }}
//         animate={{
//           scale: [0.9, 1.08, 0.9],
//           opacity: [0.5, 0.8, 0.5],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Corner glows */}
//       <div
//         className="absolute left-0 top-0 h-[35vh] w-[35vw] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(0,164,239,0.08), transparent 70%)",
//           filter: "blur(50px)",
//         }}
//       />

//       <div
//         className="absolute bottom-0 right-0 h-[35vh] w-[35vw] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(0,120,212,0.08), transparent 70%)",
//           filter: "blur(50px)",
//         }}
//       />

//       {/* =====================================================
//           MICROSOFT-STYLE 2 × 2 LOGO
//       ===================================================== */}

//       <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2">
//         {squares.map((square, index) => (
//           <motion.div
//             key={square.id}
//             className="absolute h-[56px] w-[56px] md:h-[64px] md:w-[64px]"
//             style={{
//               backgroundColor: square.color,
//               boxShadow: `
//                 0 0 18px ${square.glow},
//                 0 0 45px ${square.glow}
//               `,
//             }}
//             initial={{
//               x: index % 2 === 0 ? -68 : 4,
//               y: index < 2 ? -68 : 4,
//               opacity: 0,
//               scale: 0.7,
//             }}
//             animate={
//               phase === "forming"
//                 ? {
//                     x: index % 2 === 0 ? -68 : 4,
//                     y: index < 2 ? -68 : 4,
//                     opacity: 1,
//                     scale: 1,
//                   }
//                 : phase === "moving" || phase === "title"
//                   ? {
//                       x: square.final.x,
//                       y: square.final.y,
//                       opacity: phase === "title" ? 0.15 : 0.8,
//                       scale: 0.72,
//                     }
//                   : {}
//             }
//             transition={
//               phase === "forming"
//                 ? {
//                     duration: 0.9,
//                     delay: index * 0.12,
//                     ease: [0.22, 1, 0.36, 1],
//                   }
//                 : {
//                     duration: 1.5,
//                     delay: index * 0.08,
//                     ease: [0.76, 0, 0.24, 1],
//                   }
//             }
//           />
//         ))}
//       </div>

//       {/* =====================================================
//           CENTRAL LIGHT
//       ===================================================== */}

//       <motion.div
//         className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
//         initial={{
//           opacity: 0,
//           scale: 0,
//         }}
//         animate={{
//           opacity:
//             phase === "forming"
//               ? [0, 0.12, 0.2, 0.12]
//               : phase === "moving"
//                 ? [0.2, 0.5, 0]
//                 : 0,
//           scale:
//             phase === "forming"
//               ? [0.7, 1, 1.15, 1]
//               : [1, 2.5, 0],
//         }}
//         transition={{
//           duration: phase === "forming" ? 2.2 : 0.8,
//           ease: "easeOut",
//         }}
//         style={{
//           filter: "blur(45px)",
//         }}
//       />

//       {/* =====================================================
//           MLSC × SU
//       ===================================================== */}

//       <motion.div
//         className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
//         initial={{
//           opacity: 0,
//           scale: 0.85,
//           y: 20,
//         }}
//         animate={{
//           opacity: phase === "title" ? 1 : 0,
//           scale: phase === "title" ? 1 : 0.85,
//           y: phase === "title" ? 0 : 20,
//         }}
//         transition={{
//           duration: 0.9,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         {/* MLSC */}
//         <motion.h1
//           className="text-[64px] font-extrabold leading-none tracking-[0.18em] md:text-[100px]"
//           initial={{ letterSpacing: "0.5em" }}
//           animate={{
//             letterSpacing: phase === "title" ? "0.18em" : "0.5em",
//           }}
//           transition={{
//             duration: 0.8,
//             ease: "easeOut",
//           }}
//           style={{
//             fontFamily:
//               "'Segoe UI', Inter, system-ui, sans-serif",
//             background:
//               "linear-gradient(120deg, #ffffff 10%, #d8f4ff 45%, #50bfff 75%, #ffffff)",
//             WebkitBackgroundClip: "text",
//             backgroundClip: "text",
//             color: "transparent",
//             filter:
//               "drop-shadow(0 0 25px rgba(0,164,239,0.3))",
//           }}
//         >
//           MLSC
//         </motion.h1>

//         {/* × */}
//         <motion.div
//           className="my-4 text-xl font-light tracking-[0.4em] text-white/40"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{
//             opacity: phase === "title" ? 1 : 0,
//             scale: phase === "title" ? 1 : 0,
//           }}
//           transition={{
//             delay: 0.25,
//             duration: 0.5,
//           }}
//         >
//           ×
//         </motion.div>

//         {/* SU */}
//         <motion.div
//           className="text-3xl font-semibold tracking-[0.45em] md:text-5xl"
//           initial={{
//             opacity: 0,
//             y: 15,
//           }}
//           animate={{
//             opacity: phase === "title" ? 1 : 0,
//             y: phase === "title" ? 0 : 15,
//           }}
//           transition={{
//             delay: 0.35,
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           style={{
//             background:
//               "linear-gradient(90deg, #50E6FF, #0078D4)",
//             WebkitBackgroundClip: "text",
//             backgroundClip: "text",
//             color: "transparent",
//           }}
//         >
//           SU
//         </motion.div>

//         {/* Subtitle */}
//         <motion.p
//           className="mt-7 text-[10px] uppercase tracking-[0.45em] text-white/35 md:text-xs"
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: phase === "title" ? 1 : 0,
//           }}
//           transition={{
//             delay: 0.6,
//             duration: 0.7,
//           }}
//         >
//           Microsoft Learn Student Community
//         </motion.p>
//       </motion.div>

//       {/* =====================================================
//           SMALL CORNER BRAND ELEMENTS
//       ===================================================== */}

//       <motion.div
//         className="absolute left-8 top-8 text-[10px] uppercase tracking-[0.35em] text-white/20 md:left-12 md:top-10"
//         animate={{
//           opacity: phase === "title" ? 1 : 0,
//         }}
//         transition={{ duration: 1 }}
//       >
//         MLSC
//       </motion.div>

//       <motion.div
//         className="absolute bottom-8 left-8 text-[9px] uppercase tracking-[0.3em] text-white/20 md:left-12"
//         animate={{
//           opacity: phase === "title" ? 1 : 0,
//         }}
//         transition={{ duration: 1 }}
//       >
//         Learn · Build · Innovate
//       </motion.div>

//       {/* =====================================================
//           LOADING LINE
//       ===================================================== */}

//       <div className="absolute bottom-12 left-1/2 h-[1px] w-44 -translate-x-1/2 overflow-hidden bg-white/10">
//         <motion.div
//           className="h-full w-full"
//           style={{
//             background:
//               "linear-gradient(90deg, #F25022, #7FBA00, #00A4EF, #FFB900)",
//           }}
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{
//             duration: 4.8,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       {/* =====================================================
//           SKIP
//       ===================================================== */}

//       <button
//         onClick={onComplete}
//         className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.25em] text-white/25 transition duration-300 hover:text-white/80"
//       >
//         Skip
//       </button>
//     </motion.div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Sequence:
 *  1. "spark"   – four Microsoft-brand embers drift in and collide at center
 *  2. "burst"   – a single flash of light marks the handoff
 *  3. "reveal"  – the real MLSC × SU shield rises out of the flash, wordmark follows
 *  4. exit      – whole scene lifts away (handled by parent via AnimatePresence)
 */
export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState("spark");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("burst"), 950);
    const t2 = setTimeout(() => setPhase("reveal"), 1250);
    const t3 = setTimeout(() => onComplete(), 4100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const embers = [
    { id: "red", color: "#F25022", from: { x: -120, y: -80 } },
    { id: "green", color: "#7FBA00", from: { x: 120, y: -80 } },
    { id: "blue", color: "#00A4EF", from: { x: -120, y: 80 } },
    { id: "yellow", color: "#FFB900", from: { x: 120, y: 80 } },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#020817]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
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

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
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
          Stage 1 — Microsoft-brand embers converge (brief homage)
      --------------------------------------------------------- */}
      <AnimatePresence>
        {phase === "spark" && (
          <div className="absolute left-1/2 top-1/2 h-0 w-0">
            {embers.map((ember, i) => (
              <motion.span
                key={ember.id}
                className="absolute h-[14px] w-[14px] rounded-[3px] md:h-[18px] md:w-[18px]"
                style={{
                  backgroundColor: ember.color,
                  boxShadow: `0 0 16px 4px ${ember.color}88`,
                }}
                initial={{ x: ember.from.x, y: ember.from.y, opacity: 0, scale: 0.4 }}
                animate={{ x: 0, y: 0, opacity: [0, 1, 1], scale: [0.4, 1, 0.3] }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------
          Stage 2 — flash burst / handoff
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

      {/* Expanding ring, MLSC blue */}
      {(phase === "burst" || phase === "reveal") && (
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#50BFFF]/60"
          initial={{ width: 0, height: 0, opacity: 0.9 }}
          animate={{ width: 520, height: 520, opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      )}

      {/* ---------------------------------------------------------
          Stage 3 — the real shield + wordmark
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
          animate={
            phase === "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
          }
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

      {/* ---------------------------------------------------------
          Loading line
      --------------------------------------------------------- */}
      <div className="absolute bottom-12 left-1/2 h-[2px] w-40 -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full w-full rounded-full"
          style={{ background: "linear-gradient(90deg, #0875E1, #50BFFF)" }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 3.6, ease: "easeInOut" }}
        />
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