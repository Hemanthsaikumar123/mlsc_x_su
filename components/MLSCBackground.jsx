// "use client";

// import { motion } from "framer-motion";

// export default function MLSCBackground() {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">

//       {/* Base */}
//       <div className="absolute inset-0 bg-[#020817]" />

//       {/* Main MLSC blue atmosphere */}
//       <motion.div
//         className="absolute left-1/2 top-[35%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(8,117,225,0.16), rgba(8,117,225,0.04) 45%, transparent 70%)",
//           filter: "blur(20px)",
//         }}
//         animate={{
//           scale: [0.9, 1.08, 0.9],
//           opacity: [0.65, 1, 0.65],
//         }}
//         transition={{
//           duration: 9,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Top blue glow */}
//       <div
//         className="absolute -top-60 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full"
//         style={{
//           background:
//             "radial-gradient(ellipse, rgba(0,120,212,0.11), transparent 65%)",
//           filter: "blur(60px)",
//         }}
//       />

//       {/* Left glow */}
//       <motion.div
//         className="absolute -left-48 top-[35%] h-[500px] w-[500px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(0,164,239,0.07), transparent 65%)",
//           filter: "blur(60px)",
//         }}
//         animate={{
//           y: [-30, 30, -30],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Right glow */}
//       <motion.div
//         className="absolute -right-48 bottom-[10%] h-[500px] w-[500px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(8,117,225,0.08), transparent 65%)",
//           filter: "blur(60px)",
//         }}
//         animate={{
//           y: [30, -30, 30],
//         }}
//         transition={{
//           duration: 11,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Technical grid */}
//       <div
//         className="absolute inset-0 opacity-[0.085]"
//         style={{
//           backgroundImage: `
//             linear-gradient(
//               rgba(120,190,255,0.12) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               90deg,
//               rgba(120,190,255,0.12) 1px,
//               transparent 1px
//             )
//           `,
//           backgroundSize: "70px 70px",
//           maskImage:
//             "radial-gradient(circle at center, black 0%, transparent 75%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at center, black 0%, transparent 75%)",
//         }}
//       />

//       {/* Network */}
//       <Network />

//       {/* Edge vignette */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(circle at center, transparent 35%, rgba(2,8,23,0.65) 100%)",
//         }}
//       />

//     </div>
//   );
// }

// function Network() {
//   return (
//     <svg
//       className="absolute inset-0 h-full w-full opacity-30"
//       viewBox="0 0 1440 900"
//       preserveAspectRatio="none"
//     >
//       <defs>
//         <linearGradient id="networkLine">
//           <stop offset="0%" stopColor="#0875E1" stopOpacity="0" />
//           <stop offset="50%" stopColor="#50BFFF" stopOpacity="0.45" />
//           <stop offset="100%" stopColor="#0875E1" stopOpacity="0" />
//         </linearGradient>
//       </defs>

//       <motion.path
//         d="M0 230 C250 180 330 340 570 280 S950 100 1440 250"
//         fill="none"
//         stroke="url(#networkLine)"
//         strokeWidth="1"
//         strokeDasharray="4 12"
//         animate={{
//           strokeDashoffset: [0, -120],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <motion.path
//         d="M0 680 C280 580 430 760 720 620 S1120 500 1440 650"
//         fill="none"
//         stroke="url(#networkLine)"
//         strokeWidth="1"
//         strokeDasharray="4 14"
//         animate={{
//           strokeDashoffset: [0, 120],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />

//       <circle cx="570" cy="280" r="3" fill="#50BFFF" opacity="0.5" />
//       <circle cx="950" cy="100" r="2" fill="#50BFFF" opacity="0.4" />
//       <circle cx="720" cy="620" r="3" fill="#0875E1" opacity="0.5" />
//       <circle cx="1120" cy="500" r="2" fill="#50BFFF" opacity="0.4" />
//     </svg>
//   );
// }



// Second one 

// "use client";

// import { motion } from "framer-motion";

// /**
//  * Rebuilt for performance. The previous version animated an SVG path's `d`
//  * attribute (forces layout every frame) and stacked feGaussianBlur +
//  * mix-blend-mode (forces a full recomposite of everything beneath it on
//  * every frame). Neither is cheap. This version only ever animates
//  * transform/opacity — the two properties the compositor can run on the GPU
//  * without touching layout or paint — and every filter/blur is static.
//  *
//  * The signature is the repeating "MLSC" wordmark itself: a large, faint,
//  * rotated text pattern. It's on-brand (it's literally your name), reads as
//  * modern/current, and costs almost nothing since it's painted once and never
//  * touched again.
//  */
// export default function MLSCBackground() {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#04070f]">
//       {/* Static base gradient — no animation, painted once */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(160deg, #061225 0%, #04070f 45%, #04070f 100%)",
//         }}
//       />

//       {/* Signature: repeating MLSC wordmark texture */}
//       <Wordmark />

//       {/* One soft glow — blur is static (baked in), only transform/opacity
//           animate, so the compositor just slides a cached layer around */}
//       <motion.div
//         className="absolute left-1/2 top-[30%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0875E1]/20 blur-[110px] will-change-transform"
//         animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.85, 0.55] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#22C7F5]/10 blur-[100px] will-change-transform"
//         animate={{ x: [0, -30, 0], opacity: [0.4, 0.65, 0.4] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Thin static accent line, no animation */}
//       <div
//         className="absolute left-0 right-0 top-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(80,191,255,0.35), transparent)",
//         }}
//       />

//       {/* Vignette, static */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 85% 60% at 50% 15%, transparent 40%, rgba(4,7,15,0.75) 100%)",
//         }}
//       />
//     </div>
//   );
// }

// function Wordmark() {
//   return (
//     <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden>
//       <defs>
//         <pattern
//           id="mlsc-wordmark"
//           width="260"
//           height="150"
//           patternUnits="userSpaceOnUse"
//           patternTransform="rotate(-10)"
//         >
//           <text
//             x="0"
//             y="60"
//             fontSize="46"
//             fontWeight="700"
//             letterSpacing="2"
//             fill="#8FD3FF"
//             style={{ fontFamily: "var(--font-display, sans-serif)" }}
//           >
//             MLSC
//           </text>
//           <text
//             x="130"
//             y="135"
//             fontSize="46"
//             fontWeight="700"
//             letterSpacing="2"
//             fill="#8FD3FF"
//             style={{ fontFamily: "var(--font-display, sans-serif)" }}
//           >
//             MLSC
//           </text>
//         </pattern>
//       </defs>
//       <rect width="100%" height="100%" fill="url(#mlsc-wordmark)" />
//     </svg>
//   );
// }



// "use client";

// import { motion } from "framer-motion";

// /**
//  * Third pass. The rotated/tiled "MLSC" repeat read as an old wallpaper
//  * texture. This version keeps the MLSC text — it's still the whole
//  * point — but treats it as one confident, oversized piece of outline
//  * typography anchored to the bottom edge, the way a lot of current
//  * studio/portfolio sites treat a wordmark: big, cropped, quiet, not
//  * repeated. Dot-grid replaces the line-grid for a slightly more current
//  * texture. Everything is static except the two glows, which only ever
//  * animate transform/opacity so this stays cheap.
//  */
// export default function MLSCBackground() {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#04070f]">
//       {/* Static base wash */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(160deg, #061225 0%, #04070f 45%, #04070f 100%)",
//         }}
//       />

//       {/* Dot-grid texture, faded toward the edges via a static mask */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(124,196,255,0.35) 1px, transparent 1px)",
//           backgroundSize: "34px 34px",
//           maskImage:
//             "radial-gradient(ellipse 70% 55% at 50% 25%, black 0%, transparent 80%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 70% 55% at 50% 25%, black 0%, transparent 80%)",
//           opacity: 0.5,
//         }}
//       />

//       {/* Signature: one big outlined wordmark, cropped at the bottom edge */}
//       <Wordmark />

//       {/* Two soft glows — blur baked in as a static class, only
//           transform/opacity animate so the compositor handles them cheaply */}
//       <motion.div
//         className="absolute left-1/2 top-[22%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0875E1]/18 blur-[110px] will-change-transform"
//         animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[10%] h-[420px] w-[420px] rounded-full bg-[#22C7F5]/12 blur-[100px] will-change-transform"
//         animate={{ x: [0, -25, 0], opacity: [0.4, 0.65, 0.4] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Thin static accent line */}
//       <div
//         className="absolute left-0 right-0 top-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(80,191,255,0.35), transparent)",
//         }}
//       />

//       {/* Vignette, static */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 85% 60% at 50% 15%, transparent 40%, rgba(4,7,15,0.75) 100%)",
//         }}
//       />
//     </div>
//   );
// }

// function Wordmark() {
//   return (
//     <svg
//       className="absolute -bottom-[6%] left-1/2 h-[46%] w-[110%] -translate-x-1/2 opacity-70 md:h-[52%] md:w-[85%]"
//       viewBox="0 0 1000 340"
//       preserveAspectRatio="xMidYMax meet"
//       aria-hidden
//     >
//       <defs>
//         <linearGradient id="mlsc-wordmark-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#0875E1" stopOpacity="0.5" />
//           <stop offset="55%" stopColor="#22C7F5" stopOpacity="0.4" />
//           <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0.3" />
//         </linearGradient>
//       </defs>
//       <text
//         x="50%"
//         y="300"
//         textAnchor="middle"
//         fontSize="300"
//         fontWeight="800"
//         letterSpacing="-6"
//         fill="none"
//         stroke="url(#mlsc-wordmark-stroke)"
//         strokeWidth="2"
//         style={{ fontFamily: "var(--font-display, sans-serif)" }}
//       >
//         MLSC
//       </text>
//     </svg>
//   );
// }




// "use client";

// import { motion } from "framer-motion";

// /**
//  * VARIANT 1 — "Quiet Centerpiece"
//  * A large, centered "MLSC" in a soft gradient fill, kept faint enough to sit
//  * behind your content without competing with it. Dot-grid texture, one calm
//  * glow. The most understated of the three — good if you want the background
//  * to just breathe rather than announce itself.
//  */
// export default function MLSCBackground() {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#04070f]">
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(160deg, #061225 0%, #04070f 45%, #04070f 100%)",
//         }}
//       />

//       {/* Dot-grid, faded at the edges */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "radial-gradient(rgba(124,196,255,0.35) 1px, transparent 1px)",
//           backgroundSize: "34px 34px",
//           maskImage:
//             "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 80%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 80%)",
//           opacity: 0.5,
//         }}
//       />

//       {/* Large centered wordmark, gradient fill, low opacity so it reads as
//           texture rather than a headline competing with your content */}
//       <svg
//         className="absolute left-1/2 top-[42%] w-[130%] -translate-x-1/2 -translate-y-1/2 md:w-[70%]"
//         viewBox="0 0 1000 300"
//         preserveAspectRatio="xMidYMid meet"
//         aria-hidden
//       >
//         <defs>
//           <linearGradient id="mlsc-v1-fill" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#0875E1" stopOpacity="0.14" />
//             <stop offset="50%" stopColor="#22C7F5" stopOpacity="0.1" />
//             <stop offset="100%" stopColor="#7C5CFC" stopOpacity="0.08" />
//           </linearGradient>
//         </defs>
//         <text
//           x="50%"
//           y="220"
//           textAnchor="middle"
//           fontSize="260"
//           fontWeight="800"
//           letterSpacing="-6"
//           fill="url(#mlsc-v1-fill)"
//           style={{ fontFamily: "var(--font-display, sans-serif)" }}
//         >
//           MLSC
//         </text>
//       </svg>

//       {/* One calm glow, transform/opacity only */}
//       <motion.div
//         className="absolute left-1/2 top-[38%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0875E1]/16 blur-[110px] will-change-transform"
//         animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }}
//         transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div
//         className="absolute left-0 right-0 top-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(80,191,255,0.35), transparent)",
//         }}
//       />

//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 85% 60% at 50% 15%, transparent 40%, rgba(4,7,15,0.75) 100%)",
//         }}
//       />
//     </div>
//   );
// }



// "use client";

// import { motion } from "framer-motion";

// /**
//  * A quiet network of nodes and connecting lines — standing in for "a
//  * community of builders" rather than a giant translucent logotype.
//  * One orchestrated glow pulse, everything else static so it never
//  * competes with foreground content.
//  */
// const NODES = [
//   { x: 12, y: 18 }, { x: 24, y: 9 }, { x: 34, y: 24 },
//   { x: 8, y: 46 }, { x: 20, y: 58 }, { x: 6, y: 74 },
//   { x: 88, y: 14 }, { x: 76, y: 22 }, { x: 92, y: 34 },
//   { x: 80, y: 52 }, { x: 94, y: 66 }, { x: 84, y: 82 },
//   { x: 50, y: 6 }, { x: 60, y: 92 }, { x: 40, y: 88 },
// ];

// const EDGES = [
//   [0, 1], [1, 2], [0, 3], [3, 4], [4, 5],
//   [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
//   [1, 12], [2, 12], [7, 12], [13, 14], [9, 13],
// ];

// export default function MLSCBackground() {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#05070c]">
//       {/* base wash */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(165deg, #081327 0%, #05070c 48%, #05070c 100%)",
//         }}
//       />

//       {/* node network */}
//       <svg
//         className="absolute inset-0 h-full w-full opacity-[0.55]"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="none"
//         aria-hidden
//       >
//         <defs>
//           <linearGradient id="mlsc-edge" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#3E7BFA" stopOpacity="0.35" />
//             <stop offset="100%" stopColor="#49D6E8" stopOpacity="0.12" />
//           </linearGradient>
//         </defs>

//         {EDGES.map(([a, b], i) => (
//           <line
//             key={i}
//             x1={NODES[a].x}
//             y1={NODES[a].y}
//             x2={NODES[b].x}
//             y2={NODES[b].y}
//             stroke="url(#mlsc-edge)"
//             strokeWidth="0.15"
//             vectorEffect="non-scaling-stroke"
//           />
//         ))}

//         {NODES.map((n, i) => (
//           <circle
//             key={i}
//             cx={n.x}
//             cy={n.y}
//             r={i % 4 === 0 ? 0.55 : 0.32}
//             fill={i % 4 === 0 ? "#49D6E8" : "#3E7BFA"}
//             fillOpacity={i % 4 === 0 ? 0.7 : 0.4}
//           />
//         ))}
//       </svg>

//       {/* signature duotone glow — blue to amber, the one recurring accent */}
//       <motion.div
//         className="absolute left-[28%] top-[30%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E7BFA]/18 blur-[120px] will-change-transform"
//         animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <div className="absolute right-[18%] top-[55%] h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[#FFB86B]/8 blur-[130px]" />

//       {/* faint top hairline */}
//       <div
//         className="absolute left-0 right-0 top-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(73,214,232,0.3), transparent)",
//         }}
//       />

//       {/* vignette so foreground text always stays readable */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 85% 60% at 50% 15%, transparent 40%, rgba(5,7,12,0.8) 100%)",
//         }}
//       />
//     </div>
//   );
// }


"use client";

export default function MLSCBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#02050A]">

      {/* =========================================================
          BASE — DEEP BLUE → BLACK
      ========================================================= */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 65% at 50% -10%,
              #0B2A4D 0%,
              #081B32 32%,
              #040C17 65%,
              #02050A 100%
            )
          `,
        }}
      />

      {/* =========================================================
          VISIBLE TECH GRID
      ========================================================= */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(79, 166, 230, 0.085) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(79, 166, 230, 0.085) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
        }}
      />

      {/* =========================================================
          DOT GRID
      ========================================================= */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(105, 196, 255, 0.55) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 30%, black 0%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 30%, black 0%, transparent 88%)",
        }}
      />

      {/* =========================================================
          TECHNICAL CONNECTION NETWORK
      ========================================================= */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="mlsc-blue-line"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#55BFFF" stopOpacity="0" />
            <stop offset="25%" stopColor="#55BFFF" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#55BFFF" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#55BFFF" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="mlsc-diagonal"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#55BFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#55BFFF" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#55BFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main horizontal / diagonal structures */}

        <path
          d="M-80 180 L220 70 L470 190 L730 75 L1020 210 L1260 100 L1520 190"
          fill="none"
          stroke="url(#mlsc-blue-line)"
          strokeWidth="1.2"
        />

        <path
          d="M-100 390 L180 270 L430 380 L690 245 L930 350 L1190 230 L1530 350"
          fill="none"
          stroke="url(#mlsc-diagonal)"
          strokeWidth="1"
        />

        <path
          d="M-100 650 L210 520 L460 640 L720 500 L990 610 L1220 480 L1530 590"
          fill="none"
          stroke="url(#mlsc-diagonal)"
          strokeWidth="1"
        />

        {/* Vertical technical connections */}

        <path
          d="M220 70 L220 270"
          fill="none"
          stroke="#55BFFF"
          strokeOpacity="0.16"
          strokeWidth="1"
        />

        <path
          d="M470 190 L470 380"
          fill="none"
          stroke="#55BFFF"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <path
          d="M730 75 L730 245"
          fill="none"
          stroke="#55BFFF"
          strokeOpacity="0.16"
          strokeWidth="1"
        />

        <path
          d="M1020 210 L1020 350"
          fill="none"
          stroke="#55BFFF"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <path
          d="M1260 100 L1260 230"
          fill="none"
          stroke="#55BFFF"
          strokeOpacity="0.14"
          strokeWidth="1"
        />

        {/* Nodes */}

        <circle
          cx="220"
          cy="70"
          r="3"
          fill="#65CCFF"
          fillOpacity="0.75"
        />

        <circle
          cx="470"
          cy="190"
          r="2.5"
          fill="#65CCFF"
          fillOpacity="0.65"
        />

        <circle
          cx="730"
          cy="75"
          r="3"
          fill="#65CCFF"
          fillOpacity="0.75"
        />

        <circle
          cx="1020"
          cy="210"
          r="2.5"
          fill="#65CCFF"
          fillOpacity="0.6"
        />

        <circle
          cx="1260"
          cy="100"
          r="3"
          fill="#65CCFF"
          fillOpacity="0.65"
        />

        <circle
          cx="430"
          cy="380"
          r="2"
          fill="#55BFFF"
          fillOpacity="0.5"
        />

        <circle
          cx="930"
          cy="350"
          r="2"
          fill="#55BFFF"
          fillOpacity="0.45"
        />

        <circle
          cx="720"
          cy="500"
          r="2.5"
          fill="#55BFFF"
          fillOpacity="0.45"
        />
      </svg>

      {/* =========================================================
          SOFT BLUE ATMOSPHERE
      ========================================================= */}
      <div
        className="
          absolute
          left-1/2
          top-[-180px]
          h-[520px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          blur-[110px]
        "
        style={{
          background:
            "radial-gradient(ellipse, rgba(35, 117, 190, 0.18), transparent 68%)",
        }}
      />

      {/* =========================================================
          SUBTLE SIDE DEPTH
      ========================================================= */}
      <div
        className="
          absolute
          -left-[180px]
          top-[25%]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[130px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(42, 125, 200, 0.08), transparent 68%)",
        }}
      />

      <div
        className="
          absolute
          -right-[180px]
          top-[42%]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[130px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(42, 125, 200, 0.07), transparent 68%)",
        }}
      />

      {/* =========================================================
          TOP EDGE
      ========================================================= */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(92, 201, 255, 0.55), transparent)",
        }}
      />

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 45%, rgba(2, 5, 10, 0.65) 100%)",
        }}
      />

      {/* =========================================================
          SIDE VIGNETTE
      ========================================================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 20%, transparent 35%, rgba(2, 5, 10, 0.58) 100%)",
        }}
      />
    </div>
  );
}