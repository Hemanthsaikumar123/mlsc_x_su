// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// /**
//  * Sequence:
//  *  1. "form"    – four squares assemble into the real Windows-flag 2x2
//  *                 layout (red/green/blue/yellow) and hold briefly so it
//  *                 reads as the actual mark, not an abstraction of it
//  *  2. "dissolve"– the squares scatter outward and fade
//  *  3. "burst"   – a single flash marks the handoff
//  *  4. "reveal"  – the real MLSC × SU shield rises out of the flash
//  *  5. exit      – whole scene lifts away (handled by parent AnimatePresence)
//  */
// export default function IntroAnimation({ onComplete }) {
//   const [phase, setPhase] = useState("form");

//   useEffect(() => {
//     const t1 = setTimeout(() => setPhase("dissolve"), 1050);
//     const t2 = setTimeout(() => setPhase("burst"), 1500);
//     const t3 = setTimeout(() => setPhase("reveal"), 1800);
//     const t4 = setTimeout(() => onComplete(), 4400);

//     return () => {
//       clearTimeout(t1);
//       clearTimeout(t2);
//       clearTimeout(t3);
//       clearTimeout(t4);
//     };
//   }, [onComplete]);

//   // Real Windows-flag arrangement: red top-left, green top-right,
//   // blue bottom-left, yellow bottom-right, tight 2x2 grid.
//   const tiles = [
//     { id: "red", color: "#F25022", col: 0, row: 0 },
//     { id: "green", color: "#7FBA00", col: 1, row: 0 },
//     { id: "blue", color: "#00A4EF", col: 0, row: 1 },
//     { id: "yellow", color: "#FFB900", col: 1, row: 1 },
//   ];

//   const SIZE = 56; // px, tile size (mobile)
//   const SIZE_MD = 72; // px, tile size (desktop) — handled via CSS below
//   const GAP = 7;

//   const scatterFor = (col, row) => {
//     const dx = col === 0 ? -140 : 140;
//     const dy = row === 0 ? -140 : 140;
//     return { x: dx, y: dy };
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-[9999] overflow-hidden bg-[#020817]"
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
//     >
//       {/* Ambient MLSC atmosphere, present the whole time */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `
//             radial-gradient(circle at 50% 45%, rgba(8,117,225,0.18) 0%, rgba(8,117,225,0.05) 35%, transparent 65%),
//             radial-gradient(circle at 12% 15%, rgba(80,191,255,0.08), transparent 40%),
//             radial-gradient(circle at 88% 85%, rgba(8,117,225,0.06), transparent 40%),
//             #020817
//           `,
//         }}
//       />

//       <motion.div
//         className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
//         style={{
//           background: "radial-gradient(circle, rgba(8,117,225,0.14), transparent 65%)",
//           filter: "blur(50px)",
//         }}
//         animate={{ scale: [0.92, 1.06, 0.92], opacity: [0.5, 0.85, 0.5] }}
//         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* ---------------------------------------------------------
//           Stage 1 & 2 — the real Windows-flag layout, then dissolve
//       --------------------------------------------------------- */}
//       <AnimatePresence>
//         {(phase === "form" || phase === "dissolve") && (
//           <div
//             className="absolute left-1/2 top-1/2"
//             style={{
//               width: SIZE * 2 + GAP,
//               height: SIZE * 2 + GAP,
//               marginLeft: -(SIZE + GAP / 2),
//               marginTop: -(SIZE + GAP / 2),
//             }}
//           >
//             {tiles.map((tile, i) => {
//               const scatter = scatterFor(tile.col, tile.row);
//               return (
//                 <motion.span
//                   key={tile.id}
//                   className="absolute rounded-[4px] h-[56px] w-[56px] md:h-[72px] md:w-[72px]"
//                   style={{
//                     backgroundColor: tile.color,
//                     left: tile.col === 0 ? 0 : SIZE + GAP,
//                     top: tile.row === 0 ? 0 : SIZE + GAP,
//                     boxShadow: `0 0 24px 2px ${tile.color}55`,
//                   }}
//                   initial={{ opacity: 0, scale: 0.5 }}
//                   animate={
//                     phase === "form"
//                       ? { opacity: 1, scale: 1, x: 0, y: 0 }
//                       : { opacity: 0, scale: 0.7, x: scatter.x, y: scatter.y }
//                   }
//                   exit={{ opacity: 0 }}
//                   transition={
//                     phase === "form"
//                       ? { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }
//                       : { duration: 0.45, ease: [0.4, 0, 1, 1] }
//                   }
//                 />
//               );
//             })}
//           </div>
//         )}
//       </AnimatePresence>

//       {/* ---------------------------------------------------------
//           Stage 3 — flash burst / handoff
//       --------------------------------------------------------- */}
//       {(phase === "burst" || phase === "reveal") && (
//         <motion.div
//           className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
//           initial={{ opacity: 0, scale: 0.3 }}
//           animate={{ opacity: [0, 1, 0], scale: [0.3, 3.2, 4.5] }}
//           transition={{ duration: 0.75, ease: "easeOut" }}
//           style={{ filter: "blur(28px)" }}
//         />
//       )}

//       {(phase === "burst" || phase === "reveal") && (
//         <motion.div
//           className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#50BFFF]/60"
//           initial={{ width: 0, height: 0, opacity: 0.9 }}
//           animate={{ width: 520, height: 520, opacity: 0 }}
//           transition={{ duration: 1.1, ease: "easeOut" }}
//         />
//       )}

//       {/* ---------------------------------------------------------
//           Stage 4 — the real shield + wordmark
//       --------------------------------------------------------- */}
//       <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
//         <motion.div
//           className="relative"
//           initial={{ opacity: 0, scale: 0.4, y: 10 }}
//           animate={
//             phase === "reveal"
//               ? { opacity: 1, scale: 1, y: 0 }
//               : { opacity: 0, scale: 0.4, y: 10 }
//           }
//           transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div
//             className="absolute inset-0 -z-10 rounded-full"
//             style={{
//               background: "radial-gradient(circle, rgba(8,117,225,0.45), transparent 70%)",
//               filter: "blur(30px)",
//             }}
//           />
//           <img
//             src="/images/mlsc-su-logo.png"
//             alt="MLSC × SU"
//             className="h-28 w-auto drop-shadow-[0_0_35px_rgba(8,117,225,0.45)] md:h-36"
//           />
//         </motion.div>

//         <motion.h1
//           className="mt-6 text-4xl font-extrabold tracking-[0.14em] md:text-6xl"
//           initial={{ opacity: 0, y: 14 }}
//           animate={phase === "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
//           transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           style={{
//             fontFamily: "var(--font-display, inherit)",
//             backgroundImage:
//               "linear-gradient(120deg, #ffffff 10%, #d8f4ff 45%, #50BFFF 75%, #ffffff)",
//             WebkitBackgroundClip: "text",
//             backgroundClip: "text",
//             color: "transparent",
//           }}
//         >
//           MLSC <span className="text-white/30">×</span> SAHE
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-[11px] font-medium uppercase tracking-[0.5em] text-white/40 md:text-xs"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: phase === "reveal" ? 1 : 0 }}
//           transition={{ delay: 0.55, duration: 0.7 }}
//         >
//           Microsoft Learn Student Community
//         </motion.p>

//         <motion.p
//           className="mt-1 text-[10px] uppercase tracking-[0.4em] text-white/25"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: phase === "reveal" ? 1 : 0 }}
//           transition={{ delay: 0.7, duration: 0.7 }}
//         >
//           Siddhartha University
//         </motion.p>
//       </div>

//       {/* Skip */}
//       <button
//         onClick={onComplete}
//         className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.25em] text-white/25 transition duration-300 hover:text-white/80"
//       >
//         Skip
//       </button>
//     </motion.div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// /**
//  * Microsoft-themed cinematic intro:
//  *  1. "boot"    – terminal lines type in with blinking cursor
//  *  2. "windows" – 4 brand tiles slam in from corners (spring physics + shockwave)
//  *  3. "pulse"   – Windows flag surges with a glow bloom
//  *  4. "shatter" – tiles explode outward as chromatic streaks
//  *  5. "reveal"  – MLSC × SU shield rises with staggered wordmark
//  */

// // Windows 7-style curved flag panes — SVG paths in a 170×150 viewBox
// const WIN7_PANES = [
//   {
//     id: "red",
//     // top-left pane
//     path: "M82.2 67.3a53.9 53.9 0 0 0-31-11.3c-8.7-.1-19.1 2.4-32.2 7.8L35.2 7.4c33.1-13.7 49-6 63.3 3.7L82.2 67.3z",
//     grad: ["#FF6B45", "#F25022", "#B82808"],
//     gradDir: { x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
//     glow: "#F25022",
//     from: { x: -220, y: -180 },
//     streakDeg: "-135deg",
//   },
//   {
//     id: "green",
//     // top-right pane
//     path: "M170 20.7c-33 13.7-49 6-63.2-3.6L90.8 73.5c14.3 9.7 31.5 17.7 63.2 3.5l16.3-56.3z",
//     grad: ["#AEE82C", "#7FBA00", "#4E8200"],
//     gradDir: { x1: "100%", y1: "0%", x2: "0%", y2: "100%" },
//     glow: "#7FBA00",
//     from: { x: 220, y: -180 },
//     streakDeg: "-45deg",
//   },
//   {
//     id: "blue",
//     // bottom-left pane
//     path: "M63 134.2c-14.3-9.6-30-17.6-63-3.9l16.2-56.6c33-13.6 49-5.9 63.3 3.8L63 134.2z",
//     grad: ["#38D0FF", "#00A4EF", "#006BB8"],
//     gradDir: { x1: "0%", y1: "100%", x2: "100%", y2: "0%" },
//     glow: "#00A4EF",
//     from: { x: -220, y: 180 },
//     streakDeg: "135deg",
//   },
//   {
//     id: "yellow",
//     // bottom-right pane
//     path: "M88 83c14.4 9.6 30.3 17.3 63.3 3.6L135 142.8c-33 13.7-48.9 6-63.2-3.7L88.1 83z",
//     grad: ["#FFE047", "#FFB900", "#C77800"],
//     gradDir: { x1: "100%", y1: "100%", x2: "0%", y2: "0%" },
//     glow: "#FFB900",
//     from: { x: 220, y: 180 },
//     streakDeg: "45deg",
//   },
// ];

// const BOOT_LINES = [
//   { text: "> Initializing MLSC × SU...", delay: 0, speed: 38 },
//   { text: "> Loading Microsoft identity assets...", delay: 620, speed: 22 },
//   { text: "> Ambassador credentials verified ✓", delay: 1180, speed: 26 },
// ];

// function useTypewriter(text, startDelay, charSpeed) {
//   const [displayed, setDisplayed] = useState("");
//   const [done, setDone]           = useState(false);

//   useEffect(() => {
//     let i = 0;
//     let inner;
//     const outer = setTimeout(() => {
//       const tick = () => {
//         setDisplayed(text.slice(0, ++i));
//         if (i < text.length) inner = setTimeout(tick, charSpeed);
//         else setDone(true);
//       };
//       tick();
//     }, startDelay);
//     return () => { clearTimeout(outer); clearTimeout(inner); };
//   }, [text, startDelay, charSpeed]);

//   return { displayed, done };
// }

// function BootLine({ text, delay, speed }) {
//   const { displayed, done } = useTypewriter(text, delay, speed);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const t = setTimeout(() => setVisible(true), Math.max(0, delay - 60));
//     return () => clearTimeout(t);
//   }, [delay]);
//   if (!visible) return null;
//   return (
//     <div className="font-mono text-[13px] md:text-sm leading-relaxed text-[#50BFFF]">
//       {displayed}
//       {!done && (
//         <motion.span
//           className="inline-block w-[2px] h-[13px] bg-[#50BFFF] align-middle ml-[2px]"
//           animate={{ opacity: [1, 0] }}
//           transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
//         />
//       )}
//     </div>
//   );
// }

// export default function IntroAnimation({ onComplete }) {
//   const [phase, setPhase] = useState("boot");

//   useEffect(() => {
//     const t1 = setTimeout(() => setPhase("windows"), 1950);
//     const t2 = setTimeout(() => setPhase("pulse"),   2780);
//     const t3 = setTimeout(() => setPhase("shatter"), 3380);
//     const t4 = setTimeout(() => setPhase("reveal"),  3780);
//     const t5 = setTimeout(() => onComplete(),        6400);
//     return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
//   }, [onComplete]);

//   const isWindows = phase === "windows" || phase === "pulse";
//   const isShatter = phase === "shatter";
//   // const isReveal  = phase === "reveal";

//   return (
//     <motion.div
//       className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050d1a]"
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0, y: -20, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }}
//     >
//       {/* deep space atmosphere */}
//       <div
//         className="pointer-events-none absolute inset-0"
//         style={{
//           background: `
//             radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,120,212,0.13) 0%, transparent 65%),
//             radial-gradient(circle at 10% 10%, rgba(80,191,255,0.06), transparent 40%),
//             radial-gradient(circle at 90% 90%, rgba(8,117,225,0.07), transparent 40%)
//           `,
//         }}
//       />

//       {/* scanlines */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.022]"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
//         }}
//       />

//       {/* breathing center glow */}
//       <motion.div
//         className="pointer-events-none absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
//         style={{
//           background: "radial-gradient(circle, rgba(0,120,212,0.18), transparent 68%)",
//           filter: "blur(55px)",
//         }}
//         animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.45, 0.8, 0.45] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* ──────────────────────────────────────────────
//           PHASE 1  Terminal boot
//       ────────────────────────────────────────────── */}
//       <AnimatePresence>
//         {phase === "boot" && (
//           <motion.div
//             key="boot"
//             className="absolute left-1/2 top-1/2 w-[340px] md:w-[460px] -translate-x-1/2 -translate-y-1/2"
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
//             transition={{ duration: 0.35 }}
//           >
//             {/* terminal chrome bar */}
//             <div className="mb-3 flex items-center gap-2">
//               <span className="h-2.5 w-2.5 rounded-full bg-[#F25022]/70" />
//               <span className="h-2.5 w-2.5 rounded-full bg-[#FFB900]/70" />
//               <span className="h-2.5 w-2.5 rounded-full bg-[#7FBA00]/70" />
//               <span className="ml-3 text-[10px] font-mono uppercase tracking-widest text-white/20">
//                 mlsc-su \u2014 terminal
//               </span>
//             </div>
//             <div
//               className="rounded-xl border border-white/[0.06] bg-black/45 px-5 py-5 backdrop-blur-sm"
//               style={{
//                 boxShadow:
//                   "0 0 0 1px rgba(0,120,212,0.14), inset 0 1px 0 rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,0,0.55)",
//               }}
//             >
//               {BOOT_LINES.map((line, idx) => (
//                 <BootLine key={idx} text={line.text} delay={line.delay} speed={line.speed} />
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ──────────────────────────────────────────────
//           PHASE 2 + 3  Windows 7-style curved panes
//       ────────────────────────────────────────────── */}
//       <AnimatePresence>
//         {(isWindows || isShatter) && (
//           <svg
//             key="win7flag"
//             viewBox="0 0 170 150"
//             className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//             style={{ width: 190, height: 168, overflow: "visible" }}
//           >
//             <defs>
//               {WIN7_PANES.map((p) => (
//                 <linearGradient
//                   key={p.id}
//                   id={`wg-${p.id}`}
//                   x1={p.gradDir.x1} y1={p.gradDir.y1}
//                   x2={p.gradDir.x2} y2={p.gradDir.y2}
//                 >
//                   <stop offset="0%"   stopColor={p.grad[0]} />
//                   <stop offset="50%"  stopColor={p.grad[1]} />
//                   <stop offset="100%" stopColor={p.grad[2]} />
//                 </linearGradient>
//               ))}
//               {/* glass sheen highlight */}
//               <linearGradient id="gloss" x1="20%" y1="0%" x2="80%" y2="100%">
//                 <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
//                 <stop offset="45%" stopColor="#ffffff" stopOpacity="0.12" />
//                 <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
//               </linearGradient>
//             </defs>

//             {WIN7_PANES.map((p, i) => {
//               const scatter = { x: p.from.x * 1.7, y: p.from.y * 1.7 };
//               return (
//                 <motion.g
//                   key={p.id}
//                   style={{ filter: `drop-shadow(0 0 14px ${p.glow}99)` }}
//                   initial={{ x: p.from.x, y: p.from.y, opacity: 0, scale: 0.3, rotate: -12 }}
//                   animate={
//                     isShatter
//                       ? { x: scatter.x, y: scatter.y, opacity: 0, scale: 0.1, rotate: 28,
//                           transition: { duration: 0.38, ease: [0.4, 0, 1, 1] } }
//                       : {
//                           x: 0, y: 0, opacity: 1,
//                           scale: phase === "pulse" ? [1, 1.1, 1] : 1,
//                           rotate: 0,
//                           transition: {
//                             x:       { type: "spring", stiffness: 340, damping: 22, delay: i * 0.055 },
//                             y:       { type: "spring", stiffness: 340, damping: 22, delay: i * 0.055 },
//                             opacity: { duration: 0.18, delay: i * 0.055 },
//                             scale:   phase === "pulse" ? { duration: 0.7, ease: "easeInOut" } : { duration: 0.1 },
//                             rotate:  { type: "spring", stiffness: 340, damping: 22, delay: i * 0.055 },
//                           },
//                         }
//                   }
//                 >
//                   {/* base glass colour */}
//                   <path
//                     d={p.path}
//                     fill={`url(#wg-${p.id})`}
//                     stroke="rgba(255,255,255,0.4)"
//                     strokeWidth="1.2"
//                     strokeLinejoin="round"
//                   />
//                   {/* glass sheen */}
//                   <path d={p.path} fill="url(#gloss)" />
//                 </motion.g>
//               );
//             })}
//           </svg>
//         )}
//       </AnimatePresence>

//       {/* impact shockwave */}
//       <AnimatePresence>
//         {phase === "windows" && (
//           <motion.div
//             key="shockwave"
//             className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"
//             initial={{ width: 0, height: 0, opacity: 0.85 }}
//             animate={{ width: 500, height: 500, opacity: 0 }}
//             transition={{ duration: 1.0, delay: 0.26, ease: "easeOut" }}
//           />
//         )}
//       </AnimatePresence>

//       {/* pulse bloom */}
//       <AnimatePresence>
//         {phase === "pulse" && (
//           <motion.div
//             key="bloom"
//             className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(0,164,239,0.9), rgba(0,120,212,0.45) 50%, transparent)",
//               filter: "blur(22px)",
//             }}
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: [0, 1, 0.6, 0], scale: [0.5, 2.5, 3.2, 4.2] }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//           />
//         )}
//       </AnimatePresence>

//       {/* shatter flash + chromatic streaks */}
//       <AnimatePresence>
//         {isShatter && (
//           <>
//             <motion.div
//               key="flash"
//               className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
//               style={{ filter: "blur(30px)" }}
//               initial={{ opacity: 0, scale: 0.3 }}
//               animate={{ opacity: [0, 1, 0], scale: [0.3, 4.2, 6.5] }}
//               transition={{ duration: 0.52, ease: "easeOut" }}
//             />
//             {WIN7_PANES.map((p) => (
//               <motion.div
//                 key={`streak-${p.id}`}
//                 className="pointer-events-none absolute left-1/2 top-1/2 h-[3px] w-40 origin-left"
//                 style={{
//                   background: `linear-gradient(90deg, ${p.glow}, transparent)`,
//                   rotate: p.streakDeg,
//                   marginLeft: "-3px",
//                   marginTop:  "-1.5px",
//                   filter: `blur(3px) drop-shadow(0 0 6px ${p.glow})`,
//                 }}
//                 initial={{ scaleX: 0, opacity: 0.9 }}
//                 animate={{ scaleX: [0, 1, 1], opacity: [0.9, 0.9, 0] }}
//                 transition={{ duration: 0.48, ease: "easeOut" }}
//               />
//             ))}
//           </>
//         )}
//       </AnimatePresence>

//       {/* ──────────────────────────────────────────────
//           PHASE 5  MLSC × SU reveal
//       ────────────────────────────────────────────── */}
//       <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
//       <motion.div
//           className="relative"
//           initial={{ opacity: 0, scale: 0.4, y: 10 }}
//           animate={
//             phase === "reveal"
//               ? { opacity: 1, scale: 1, y: 0 }
//               : { opacity: 0, scale: 0.4, y: 10 }
//           }
//           transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <div
//             className="absolute inset-0 -z-10 rounded-full"
//             style={{
//               background: "radial-gradient(circle, rgba(8,117,225,0.45), transparent 70%)",
//               filter: "blur(30px)",
//             }}
//           />
//           <img
//             src="/images/mlsc-su-logo.png"
//             alt="MLSC × SU"
//             className="h-28 w-auto drop-shadow-[0_0_35px_rgba(8,117,225,0.45)] md:h-36"
//           />
//         </motion.div>

//         <motion.h1
//           className="mt-6 text-4xl font-extrabold tracking-[0.14em] md:text-6xl"
//           initial={{ opacity: 0, y: 14 }}
//           animate={phase === "reveal" ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
//           transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           style={{
//             fontFamily: "var(--font-display, inherit)",
//             backgroundImage:
//               "linear-gradient(120deg, #ffffff 10%, #d8f4ff 45%, #50BFFF 75%, #ffffff)",
//             WebkitBackgroundClip: "text",
//             backgroundClip: "text",
//             color: "transparent",
//           }}
//         >
//           MLSC <span className="text-white/30">×</span> SAHE
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-[11px] font-medium uppercase tracking-[0.5em] text-white/40 md:text-xs"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: phase === "reveal" ? 1 : 0 }}
//           transition={{ delay: 0.55, duration: 0.7 }}
//         >
//           Microsoft Learn Student Community
//         </motion.p>

//         <motion.p
//           className="mt-1 text-[10px] uppercase tracking-[0.4em] text-white/25"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: phase === "reveal" ? 1 : 0 }}
//           transition={{ delay: 0.7, duration: 0.7 }}
//         >
//           Siddhartha University
//         </motion.p>
//       </div>

//       {/* Skip */}
//       <button
//         onClick={onComplete}
//         className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.3em] text-white/20 transition-all duration-300 hover:text-white/70 hover:tracking-[0.4em]"
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
 * Microsoft-themed cinematic intro:
 *
 * 1. "windows" – 4 Microsoft brand panes slam in from corners
 * 2. "pulse"   – Microsoft flag surges with a glow bloom
 * 3. "shatter" – panes explode outward as chromatic streaks
 * 4. "reveal"  – MLSC × SU shield rises with staggered wordmark
 */

// Windows 7-style curved flag panes
const WIN7_PANES = [
  {
    id: "red",
    path: "M82.2 67.3a53.9 53.9 0 0 0-31-11.3c-8.7-.1-19.1 2.4-32.2 7.8L35.2 7.4c33.1-13.7 49-6 63.3 3.7L82.2 67.3z",
    grad: ["#FF6B45", "#F25022", "#B82808"],
    gradDir: {
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%",
    },
    glow: "#F25022",
    from: {
      x: -220,
      y: -180,
    },
    streakDeg: "-135deg",
  },

  {
    id: "green",
    path: "M170 20.7c-33 13.7-49 6-63.2-3.6L90.8 73.5c14.3 9.7 31.5 17.7 63.2 3.5l16.3-56.3z",
    grad: ["#AEE82C", "#7FBA00", "#4E8200"],
    gradDir: {
      x1: "100%",
      y1: "0%",
      x2: "0%",
      y2: "100%",
    },
    glow: "#7FBA00",
    from: {
      x: 220,
      y: -180,
    },
    streakDeg: "-45deg",
  },

  {
    id: "blue",
    path: "M63 134.2c-14.3-9.6-30-17.6-63-3.9l16.2-56.6c33-13.6 49-5.9 63.3 3.8L63 134.2z",
    grad: ["#38D0FF", "#00A4EF", "#006BB8"],
    gradDir: {
      x1: "0%",
      y1: "100%",
      x2: "100%",
      y2: "0%",
    },
    glow: "#00A4EF",
    from: {
      x: -220,
      y: 180,
    },
    streakDeg: "135deg",
  },

  {
    id: "yellow",
    path: "M88 83c14.4 9.6 30.3 17.3 63.3 3.6L135 142.8c-33 13.7-48.9 6-63.2-3.7L88.1 83z",
    grad: ["#FFE047", "#FFB900", "#C77800"],
    gradDir: {
      x1: "100%",
      y1: "100%",
      x2: "0%",
      y2: "0%",
    },
    glow: "#FFB900",
    from: {
      x: 220,
      y: 180,
    },
    streakDeg: "45deg",
  },
];

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState("windows");

  useEffect(() => {
    // Microsoft panes enter
    const t1 = setTimeout(() => {
      setPhase("pulse");
    }, 900);

    // Flag pulse
    const t2 = setTimeout(() => {
      setPhase("shatter");
    }, 1600);

    // Shatter -> MLSC reveal
    const t3 = setTimeout(() => {
      setPhase("reveal");
    }, 2050);

    // Finish intro
    const t4 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      [t1, t2, t3, t4].forEach(clearTimeout);
    };
  }, [onComplete]);

  const isWindows =
    phase === "windows" ||
    phase === "pulse";

  const isShatter =
    phase === "shatter";

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050d1a]
      "
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: {
          duration: 0.7,
          ease: [0.4, 0, 0.2, 1],
        },
      }}
    >

      {/* =========================================================
          DEEP SPACE ATMOSPHERE
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 50% 50%,
              rgba(0,120,212,0.13) 0%,
              transparent 65%
            ),

            radial-gradient(
              circle at 10% 10%,
              rgba(80,191,255,0.06),
              transparent 40%
            ),

            radial-gradient(
              circle at 90% 90%,
              rgba(8,117,225,0.07),
              transparent 40%
            )
          `,
        }}
      />

      {/* =========================================================
          SUBTLE SCANLINES
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.022]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
        }}
      />

      {/* =========================================================
          BREATHING CENTER GLOW
      ========================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[55vw]
          w-[55vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(0,120,212,0.18), transparent 68%)",
          filter: "blur(55px)",
        }}
        animate={{
          scale: [0.9, 1.08, 0.9],
          opacity: [0.45, 0.8, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          WINDOWS FLAG
      ========================================================= */}

      <AnimatePresence>
        {(isWindows || isShatter) && (
          <svg
            key="win7flag"
            viewBox="0 0 170 150"
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
            style={{
              width: 190,
              height: 168,
              overflow: "visible",
            }}
          >

            <defs>

              {/* Individual pane gradients */}

              {WIN7_PANES.map((p) => (
                <linearGradient
                  key={p.id}
                  id={`wg-${p.id}`}
                  x1={p.gradDir.x1}
                  y1={p.gradDir.y1}
                  x2={p.gradDir.x2}
                  y2={p.gradDir.y2}
                >
                  <stop
                    offset="0%"
                    stopColor={p.grad[0]}
                  />

                  <stop
                    offset="50%"
                    stopColor={p.grad[1]}
                  />

                  <stop
                    offset="100%"
                    stopColor={p.grad[2]}
                  />
                </linearGradient>
              ))}

              {/* Glass sheen */}

              <linearGradient
                id="gloss"
                x1="20%"
                y1="0%"
                x2="80%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#ffffff"
                  stopOpacity="0.55"
                />

                <stop
                  offset="45%"
                  stopColor="#ffffff"
                  stopOpacity="0.12"
                />

                <stop
                  offset="100%"
                  stopColor="#ffffff"
                  stopOpacity="0"
                />
              </linearGradient>

            </defs>

            {WIN7_PANES.map((p, i) => {
              const scatter = {
                x: p.from.x * 1.7,
                y: p.from.y * 1.7,
              };

              return (
                <motion.g
                  key={p.id}
                  style={{
                    filter: `drop-shadow(0 0 14px ${p.glow}99)`,
                  }}
                  initial={{
                    x: p.from.x,
                    y: p.from.y,
                    opacity: 0,
                    scale: 0.3,
                    rotate: -12,
                  }}
                  animate={
                    isShatter
                      ? {
                          x: scatter.x,
                          y: scatter.y,
                          opacity: 0,
                          scale: 0.1,
                          rotate: 28,

                          transition: {
                            duration: 0.38,
                            ease: [0.4, 0, 1, 1],
                          },
                        }
                      : {
                          x: 0,
                          y: 0,
                          opacity: 1,

                          scale:
                            phase === "pulse"
                              ? [1, 1.1, 1]
                              : 1,

                          rotate: 0,

                          transition: {
                            x: {
                              type: "spring",
                              stiffness: 340,
                              damping: 22,
                              delay: i * 0.055,
                            },

                            y: {
                              type: "spring",
                              stiffness: 340,
                              damping: 22,
                              delay: i * 0.055,
                            },

                            opacity: {
                              duration: 0.18,
                              delay: i * 0.055,
                            },

                            scale:
                              phase === "pulse"
                                ? {
                                    duration: 0.7,
                                    ease: "easeInOut",
                                  }
                                : {
                                    duration: 0.1,
                                  },

                            rotate: {
                              type: "spring",
                              stiffness: 340,
                              damping: 22,
                              delay: i * 0.055,
                            },
                          },
                        }
                  }
                >

                  {/* Pane */}

                  <path
                    d={p.path}
                    fill={`url(#wg-${p.id})`}
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />

                  {/* Glass sheen */}

                  <path
                    d={p.path}
                    fill="url(#gloss)"
                  />

                </motion.g>
              );
            })}

          </svg>
        )}
      </AnimatePresence>

      {/* =========================================================
          IMPACT SHOCKWAVE
      ========================================================= */}

      <AnimatePresence>
        {phase === "windows" && (
          <motion.div
            key="shockwave"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-white/25
            "
            initial={{
              width: 0,
              height: 0,
              opacity: 0.85,
            }}
            animate={{
              width: 500,
              height: 500,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.26,
              ease: "easeOut",
            }}
          />
        )}
      </AnimatePresence>

      {/* =========================================================
          PULSE BLOOM
      ========================================================= */}

      <AnimatePresence>
        {phase === "pulse" && (
          <motion.div
            key="bloom"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
            "
            style={{
              background:
                "radial-gradient(circle, rgba(0,164,239,0.9), rgba(0,120,212,0.45) 50%, transparent)",
              filter: "blur(22px)",
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 0.6, 0],
              scale: [0.5, 2.5, 3.2, 4.2],
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          />
        )}
      </AnimatePresence>

      {/* =========================================================
          SHATTER FLASH + CHROMATIC STREAKS
      ========================================================= */}

      <AnimatePresence>
        {isShatter && (
          <>
            {/* Flash */}

            <motion.div
              key="flash"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-20
                w-20
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white
              "
              style={{
                filter: "blur(30px)",
              }}
              initial={{
                opacity: 0,
                scale: 0.3,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.3, 4.2, 6.5],
              }}
              transition={{
                duration: 0.52,
                ease: "easeOut",
              }}
            />

            {/* Colored streaks */}

            {WIN7_PANES.map((p) => (
              <motion.div
                key={`streak-${p.id}`}
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[3px]
                  w-40
                  origin-left
                "
                style={{
                  background: `linear-gradient(90deg, ${p.glow}, transparent)`,

                  rotate: p.streakDeg,

                  marginLeft: "-3px",
                  marginTop: "-1.5px",

                  filter: `blur(3px) drop-shadow(0 0 6px ${p.glow})`,
                }}
                initial={{
                  scaleX: 0,
                  opacity: 0.9,
                }}
                animate={{
                  scaleX: [0, 1, 1],
                  opacity: [0.9, 0.9, 0],
                }}
                transition={{
                  duration: 0.48,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* =========================================================
          MLSC × SU REVEAL
      ========================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          text-center
        "
      >

        {/* Logo */}

        <motion.div
          className="relative"
          initial={{
            opacity: 0,
            scale: 0.4,
            y: 10,
          }}
          animate={
            phase === "reveal"
              ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  scale: 0.4,
                  y: 10,
                }
          }
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div
            className="
              absolute
              inset-0
              -z-10
              rounded-full
            "
            style={{
              background:
                "radial-gradient(circle, rgba(8,117,225,0.45), transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          <img
            src="/images/mlsc-su-logo.png"
            alt="MLSC × SU"
            className="
              h-28
              w-auto
              drop-shadow-[0_0_35px_rgba(8,117,225,0.45)]
              md:h-36
            "
          />

        </motion.div>


        {/* Main title */}

        <motion.h1
          className="
            mt-6
            text-4xl
            font-extrabold
            tracking-[0.14em]
            md:text-6xl
          "
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={
            phase === "reveal"
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 14,
                }
          }
          transition={{
            delay: 0.25,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            fontFamily:
              "var(--font-display, inherit)",

            backgroundImage:
              "linear-gradient(120deg, #ffffff 10%, #d8f4ff 45%, #50BFFF 75%, #ffffff)",

            WebkitBackgroundClip: "text",
            backgroundClip: "text",

            color: "transparent",
          }}
        >
          MLSC{" "}
          <span className="text-white/30">
            ×
          </span>{" "}
          SAHE
        </motion.h1>


        {/* Subtitle */}

        <motion.p
          className="
            mt-4
            text-[11px]
            font-medium
            uppercase
            tracking-[0.5em]
            text-white/40
            md:text-xs
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity:
              phase === "reveal"
                ? 1
                : 0,
          }}
          transition={{
            delay: 0.55,
            duration: 0.7,
          }}
        >
          Microsoft Learn Student Community
        </motion.p>


        {/* University */}

        <motion.p
          className="
            mt-1
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-white/25
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity:
              phase === "reveal"
                ? 1
                : 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
        >
          Siddhartha University
        </motion.p>

      </div>


      {/* =========================================================
          SKIP
      ========================================================= */}

      <button
        onClick={onComplete}
        className="
          absolute
          bottom-8
          right-8
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-white/20
          transition-all
          duration-300
          hover:text-white/70
          hover:tracking-[0.4em]
        "
      >
        Skip
      </button>

    </motion.div>
  );
}